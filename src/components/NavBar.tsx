import React from "react";
import NavMenu from "./UI/NavMenu";

function NavBar() {
  return (
    <header className=" sticky  top-0 w-full  flex justify-between mt-2 rounded-xl h-14 items-center p-2 bg-zinc-900 z-100 px-4 mx-4 xl:my-6 ">
      <div>
        <a href="#hero">Tanvir_dev </a>
      </div>
      <nav className="">
        <ul className=" hidden xl:flex gap-4  ">
          <li className="">
            <a href="#skills">skills</a>
          </li>
          <li className="">
            <a href="#experience">Experience</a>
          </li>
          <li className="">
            <a href="#projects">Projects</a>
          </li>
          <li className="">
            <a href="#chat">Chat</a>
          </li>
        </ul>
      </nav>
      <a
        href="#contact-me"
        className="hidden xl:flex bg-white text-black p-1 rounded-lg"
      >
        contact me
      </a>

      <div className="xl:hidden z-40">
        <NavMenu />
      </div>
    </header>
  );
}

export default NavBar;
