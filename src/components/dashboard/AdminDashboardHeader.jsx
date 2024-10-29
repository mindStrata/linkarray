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
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Badge } from "../ui/badge";

const user = {
  name: "Mind Strata",
  email: "hello@mindstrata.com",
  avatar: "https://tailwindcss.com/img/erin-lindford.jpg",
};

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
  console.log(currentPath.pathname);

  const { theme } = useTheme();

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
              <p className="font-semibold">{user.name}</p>
            </Link>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-50 dark:hover:bg-blue-950">
              Admin
            </Badge>
          </div>

          <div className=" hidden lg:flex lg:items-center lg:justify-center lg:gap-x-10">
            <div>
              <ul className="flex items-center justify-center gap-x-3 text-sm">
                <li className="cursor-pointer">Pricing</li>
                <li className="cursor-pointer">Docs</li>
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
                        <AvatarFallback className="rounded-lg">
                          CN
                        </AvatarFallback>
                      </Avatar>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between">
                    <span>Profile</span>
                    <User />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between">
                    <span>Account Settings</span>
                    <Settings />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-none">
                    <Button className="w-full hover:bg-none flex items-center justify-between">
                      <span>Logout</span>
                      <LogOutIcon />
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          {/* show dropdown menu for tablet and mobile devices */}
          <div className="block lg:hidden">
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
                <DropdownMenuItem className="flex items-center justify-between">
                  <span>Profile</span>
                  <User />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-between">
                  <span>Account Settings</span>
                  <Settings />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-between">
                  <span>Pricings</span>
                  <CreditCardIcon />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-between">
                  <span>Docs</span>
                  <File />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex justify-between items-center"></DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-none">
                  <Button className="w-full hover:bg-none flex items-center justify-between">
                    <span>Logout</span>
                    <LogOutIcon />
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="sticky top-0 border-b px-5">
          <div className="flex overflow-x-auto no-scrollbar">
            <ul className="flex items-center">
              {navs.map((i) => (
                <Link
                  to={i.url}
                  key={i.id}
                  className={clsx("border-b-2", {
                    "border-white dark:border-zinc-950":
                      currentPath.pathname !== i.url,
                    "border-blue-600 dark:border-blue-500":
                      currentPath.pathname === i.url,
                  })}
                >
                  <li
                    className={clsx({
                      "px-[12px] py-[4px] relative overflow-hidden hover:bg-secondary dark:hover:bg-zinc-800 transition duration-300 cursor-pointer hover:rounded-sm": true,
                      // "bg-secondary dark:bg-zinc-900 rounded-sm":
                      //   currentPath.pathname === i.url,
                    })}
                  >
                    <span className="relative z-10 text-sm font-medium">
                      {i.name}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
