import React from "react";

function NavBar() {
  return (
    <div className=" flex justify-between mt-8 border-1 rounded-xl h-14 items-center p-2 bg-zinc-950 ">
      <div>Tanvir_dev</div>
      <div className="flex gap-2">
        <div>skills</div>
        <div>Experience</div>
        <div>Projects</div>
        <div>Chat</div>
      </div>
      <div>contact me</div>
    </div>
  );
}

export default NavBar;
