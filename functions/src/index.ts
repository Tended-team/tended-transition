import { defineSecret, defineString } from "firebase-functions/params";
import { logger } from "firebase-functions/v2";
import { onRequest } from "firebase-functions/v2/https";
import nodemailer from "nodemailer";

/**
 * Where "Ask anything" questions from the Team Hub are delivered.
 *
 * Configure before deploy:
 *   - SMTP_URL secret:  firebase functions:secrets:set SMTP_URL
 *       value e.g. smtps://user:app-password@smtp.gmail.com:465
 *   - MAIL_TO / MAIL_FROM: set in .env or via functions config (defaults below).
 */
const SMTP_URL = defineSecret("SMTP_URL");
const MAIL_TO = defineString("MAIL_TO", { default: "jo@tended.team" });
const MAIL_FROM = defineString("MAIL_FROM", {
  default: "ApexCare Team Hub <no-reply@tended.team>",
});

const MAX_QUESTION_LENGTH = 5000;

type AskPayload = {
  question?: unknown;
  mode?: unknown;
  from?: unknown;
  website?: unknown; // honeypot — real users leave this empty
};

export const submitQuestion = onRequest(
  { secrets: [SMTP_URL], region: "us-central1", cors: true, maxInstances: 5 },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).json({ ok: false, error: "Method not allowed" });
      return;
    }

    const body = (req.body ?? {}) as AskPayload;

    // Honeypot: bots fill hidden fields. Pretend success, send nothing.
    if (typeof body.website === "string" && body.website.trim() !== "") {
      res.status(200).json({ ok: true });
      return;
    }

    const question = typeof body.question === "string" ? body.question.trim() : "";
    if (!question) {
      res.status(400).json({ ok: false, error: "A question is required." });
      return;
    }
    if (question.length > MAX_QUESTION_LENGTH) {
      res.status(400).json({ ok: false, error: "Question is too long." });
      return;
    }

    const anonymous = body.mode !== "follow";
    const from =
      !anonymous && typeof body.from === "string" && body.from.trim() ? body.from.trim() : "";

    const lines = [
      `Mode: ${anonymous ? "Anonymous" : "Wants a personal follow-up"}`,
      from ? `From: ${from}` : "From: (anonymous)",
      "",
      question,
    ];

    try {
      const transporter = nodemailer.createTransport(SMTP_URL.value());
      await transporter.sendMail({
        from: MAIL_FROM.value(),
        to: MAIL_TO.value(),
        replyTo: from || undefined,
        subject: `Team Hub question (${anonymous ? "anonymous" : "follow-up"})`,
        text: lines.join("\n"),
      });
      res.status(200).json({ ok: true });
    } catch (err) {
      logger.error("Failed to send Team Hub question", err);
      res.status(502).json({ ok: false, error: "Could not send the question." });
    }
  },
);
