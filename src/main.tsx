import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { ClickToComponent } from "click-to-react-component";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TransitionPage } from "./pages/TransitionPage";
import "./styles.css";

const rootRoute = createRootRoute({ component: () => <Outlet /> });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: TransitionPage,
});

const routeTree = rootRoute.addChildren([indexRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element #root not found");

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* Dev only: Option/Alt-click any element to open its source in VS Code. */}
    {import.meta.env.DEV && <ClickToComponent editor="vscode" />}
  </StrictMode>,
);
