"use client";

import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface NavMenuProp {
  className?: string;
}
function NavMenu({ className }: NavMenuProp) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className={twMerge("", className)}
    >
      {!isOpen ? <Menu /> : <X />}
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-14 right-0 bg-zinc-900 rounded-lg p-4 w-48 z-50`}
      >
        <ul className="flex flex-col gap-4">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#chat">Chat</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavMenu;
