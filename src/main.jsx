import App from "@/App";
import Login from "@/components/Login";
import NotFound from "@/helpers/NotFound";
import { ThemeProvider } from "@/helpers/ThemeProvider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthPage from "./pages/AuthPage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      { path: "login", element: <Login /> },
      { path: "signup", element: <div>Signup</div> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
