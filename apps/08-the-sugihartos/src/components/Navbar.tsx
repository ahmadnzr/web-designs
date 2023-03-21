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
        <img
          src={logo}
          alt=""
          onClick={() => setPage("home")}
          className="cursor-pointer"
        />
      </div>
      <div className="flex-1 flex gap-[48px] font-medium text-[16px] leading-[19px]">
        <span onClick={() => setPage("overview")} className="cursor-pointer">
          Overview
        </span>
        <span onClick={() => setPage("skills")} className="cursor-pointer">
          Skills
        </span>
        <span onClick={() => setPage("projects")} className="cursor-pointer">
          Project
        </span>
        <span onClick={() => setPage("contacts")} className="cursor-pointer">
          Contact
        </span>
      </div>
      <button className="bg-[#2BA386] py-[9px] px-[32px] rounded-[6px] leading-[28px]">
        <span className="text-title font-semibold text-[16px]">
          Punya Project?
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
