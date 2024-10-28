import logo from "@/assets/Logo-Dark.svg";
import { ModeToggle } from "@/helpers/ToggleTheme";
import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="text-zinc-400 bg-zinc-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src={logo} alt="linkarray logo" className="w-8 h-8" />
            <span className="ml-3 text-xl">LinkArray</span>
          </a>
          <p className="text-sm text-zinc-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-zinc-800 sm:py-2 sm:mt-0 mt-4">
            © 2024 LinkArray —
            <a
              href="https://github.com/mindstrata"
              className="text-zinc-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mindStrata
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start items-center gap-x-2">
            <a className="text-zinc-400">
              <Github />
            </a>
            <a className="ml-3 text-zinc-400">
              <Twitter />
            </a>
            <ModeToggle />
          </span>
        </div>
      </footer>
    </>
  );
}
