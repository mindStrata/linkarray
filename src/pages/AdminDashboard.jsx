import AdminDashboardHeader from "@/components/dashboard/AdminDashboardHeader";
import { Outlet } from "react-router-dom";

export default function AdminDashboardPage() {
  return (
    <>
      <AdminDashboardHeader />
      <div className="container mx-auto px-4 py-2">
        <Outlet />
      </div>
    </>
  );
}
