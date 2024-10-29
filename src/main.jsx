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
import OverView from "./components/dashboard/Overview";
import "./index.css";
import AdminDashboardPage from "./pages/AdminDashboard";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";

// All Routings
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
  {
    path: "/dashboard",
    element: <AdminDashboardPage />,
    children: [
      {
        index: true,
        element: <Navigate to="overview" replace />,
      },
      { path: "overview", element: <OverView /> },
      { path: "user", element: <div>User</div> },
    ],
  },
  {
    path: "/:username",
    element: <ProfilePage />,
  },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="linkarray-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
