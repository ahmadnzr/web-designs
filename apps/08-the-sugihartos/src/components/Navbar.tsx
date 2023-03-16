import React from "react";
import { PageType } from "../App";

import logo from "../assets/icon/logo.png";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<PageType>>;
}

const Navbar = ({ setPage }: Props) => {
  return (
    <nav className="w-full flex justify-between items-center">
      <div className="pr-[56px]">
        <img src={logo} alt="" onClick={() => setPage("home")} />
      </div>
      <div className="flex-1 flex gap-[48px] font-medium text-[16px] leading-[19px]">
        <span onClick={() => setPage("overview")}>Overview</span>
        <span onClick={() => setPage("skills")}>Skills</span>
        <span onClick={() => setPage("projects")}>Project</span>
        <span onClick={() => setPage("contacts")}>Contact</span>
      </div>
      <button className="bg-[#2BA386] py-[9px] px-[32px] rounded-[6px]">
        <span className="text-title font-semibold text-[16px] leading-[28px ]">
          Punya Project?
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
