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
import OverView from "./components/admin/Overview";
import UsersData from "./components/admin/Users";
import "./index.css";
import AdminDashboardPage from "./pages/AdminDashboard";
import AuthPage from "./pages/AuthPage";
import UserDetails from "./components/admin/UserDetails";

// All Routings
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/pricing", element: <div>Pricing</div> },
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
      {
        path: "user",
        element: <UsersData />,
      },
      { path: "user/:userid", element: <UserDetails /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="linkarray-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
