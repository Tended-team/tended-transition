import { AssuranceStrip } from "../components/AssuranceStrip";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { AskAnything } from "../components/sections/AskAnything";
import { Enemy } from "../components/sections/Enemy";
import { Faq } from "../components/sections/Faq";
import { First100Days } from "../components/sections/First100Days";
import { Message } from "../components/sections/Message";
import { ThreeNames } from "../components/sections/ThreeNames";
import { WhatsChanging } from "../components/sections/WhatsChanging";
import { WhosWho } from "../components/sections/WhosWho";
import { Topbar } from "../components/Topbar";

export function TransitionPage() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <Hero />
        <AssuranceStrip />
        <Message />
        <Enemy />
        <WhatsChanging />
        <ThreeNames />
        <WhosWho />
        <Faq />
        <First100Days />
        <AskAnything />
      </main>
      <Footer />
    </>
  );
}
