import { Outlet } from "react-router-dom";
import logo from "@/assets/Logo.svg";
import darkLogo from "@/assets/Logo-Dark.svg";
import Footer from "@/components/Footer";
import { useTheme } from "@/helpers/ThemeProvider";

export default function CommonPage() {
  const { theme } = useTheme();

  return (
    <>
      <div>
        <div className="fixed top-3 left-4">
          <img
            src={`${theme === "light" ? logo : darkLogo}`}
            alt="linkarray logo"
            className="w-10 h-10"
          />
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
