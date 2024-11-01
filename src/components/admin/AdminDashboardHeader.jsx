import { userData } from "@/assets/data/user.js";
import DarkLogo from "@/assets/Logo-Dark.svg";
import logo from "@/assets/Logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/helpers/ThemeProvider";
import clsx from "clsx";
import {
  CreditCardIcon,
  File,
  LogOutIcon,
  Menu,
  Settings,
  Slash,
  User,
  Users,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Badge } from "../ui/badge";

// Require the user data to demostrate the details
const user = userData.find((user) => {
  return user.email === "hello@mindstrata.com";
});

const navs = [
  {
    id: 1,
    name: "Overview",
    url: "/dashboard/overview",
  },
  {
    id: 2,
    name: "User",
    url: "/dashboard/user",
  },
  {
    id: 3,
    name: "Team",
    url: "/dashboard/team",
  },
  {
    id: 5,
    name: "API",
    url: "/dashboard/api",
  },
  {
    id: 7,
    name: "Settings",
    url: "/dashboard/settings",
  },
];

export default function AdminDashboardHeader() {
  const currentPath = useLocation();
  const { theme } = useTheme();
  const baseURL = import.meta.env.VITE_SERVER_URL;

  return (
    <>
      <div className="sticky w-full top-0 z-50 bg-white dark:bg-zinc-950 bg-opacity-20 backdrop-blur-lg overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center justify-center gap-x-1">
            <Link to={"/"} className="flex items-center gap-x-1">
              <img
                src={theme === "light" ? logo : DarkLogo}
                alt="logo"
                className="w-6 h-6"
              />
              <Slash color="#3d3d3d" />
              <p className="font-semibold">{`@${user.username}`}</p>
            </Link>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-50 dark:hover:bg-blue-950">
              Admin
            </Badge>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-x-10">
            <DesktopNavMenu />
          </div>
          {/* show dropdown menu for tablet and mobile devices */}
          <div className="block lg:hidden">
            <MobileNavMenu />
          </div>
        </div>
        <div className="sticky top-0 border-b px-5">
          <NavLinks />
        </div>
      </div>
    </>
  );
}

function DesktopNavMenu() {
  /** @environment_variable Base URL of the server */
  const baseURL = import.meta.env.VITE_SERVER_URL;
  return (
    <>
      <div>
        <ul className="flex items-center justify-center gap-x-3 text-sm">
          <Link to={"/pricing"}>
            <li className="cursor-pointer">Pricing</li>
          </Link>
          <Link to={`${baseURL}/docs`} target="_blank">
            <li className="cursor-pointer">Docs</li>
          </Link>
        </ul>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-8 w-8 rounded-full">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg cursor-pointer">
                CN
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex justify-between items-center">
              <span>{user.email}</span>
              <span>
                <Avatar className="h-4 w-4 rounded-full">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
              </span>
            </DropdownMenuItem>
            <Link to={"/profile"}>
              <DropdownMenuItem className="flex items-center justify-between">
                <span>Profile</span>
                <User />
              </DropdownMenuItem>
            </Link>
            <Link to={"/profile/settings"}>
              <DropdownMenuItem className="flex items-center justify-between">
                <span>Account Settings</span>
                <Settings />
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="hover:bg-none">
              <Button className="w-full hover:bg-none flex items-center justify-between">
                <span>Logout</span>
                <LogOutIcon />
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

function MobileNavMenu() {
  /** @environment_variable Base URL of the server */
  const baseURL = import.meta.env.VITE_SERVER_URL;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-64 rounded-lg"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex justify-between items-center">
          <span>{user.email}</span>
          <span>
            <Avatar className="h-4 w-4 rounded-full">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
          </span>
        </DropdownMenuItem>
        <Link to={"/profile"}>
          <DropdownMenuItem className="flex items-center justify-between">
            <span>Profile</span>
            <User />
          </DropdownMenuItem>
        </Link>
        <Link to={"/profile/settings"}>
          <DropdownMenuItem className="flex items-center justify-between">
            <span>Account Settings</span>
            <Settings />
          </DropdownMenuItem>
        </Link>
        <Link to={"/pricing"}>
          <DropdownMenuItem className="flex items-center justify-between">
            <span>Pricing</span>
            <CreditCardIcon />
          </DropdownMenuItem>
        </Link>
        <Link to={`${baseURL}/docs`} target="_blank">
          <DropdownMenuItem className="flex items-center justify-between">
            <span>Docs</span>
            <File />
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="flex justify-between items-center"></DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-none">
          <Button className="w-full hover:bg-none flex items-center justify-between">
            <span>Logout</span>
            <LogOutIcon />
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function NavLinks() {
  const currentPath = useLocation();
  return (
    <div className="flex overflow-x-auto no-scrollbar">
      <ul className="flex items-center">
        {navs.map((i) => (
          <Link
            to={i.url}
            key={i.id}
            className={clsx("border-b-2", {
              "border-white dark:border-zinc-950":
                currentPath.pathname.startsWith(i.url) !== i.url,
              "border-blue-600 dark:border-blue-500":
                currentPath.pathname.startsWith(i.url) === i.url,
            })}
          >
            <li
              className={clsx({
                "px-[12px] py-[4px] relative overflow-hidden hover:bg-secondary dark:hover:bg-zinc-800 transition duration-300 cursor-pointer hover:rounded-sm text-sm flex items-center gap-x-1": true,
              })}
            >
              {i.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
