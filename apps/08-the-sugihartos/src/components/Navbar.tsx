import React from "react";
import { PageType } from "../App";

import logo from "../assets/icon/logo.png";

interface Props {
  page: PageType;
  setPage: React.Dispatch<React.SetStateAction<PageType>>;
}

type menuType = {
  id: number;
  page: PageType;
  title: string;
};

const menus: menuType[] = [
  {
    id: 0,
    page: "overview",
    title: "Overview",
  },
  {
    id: 1,
    page: "skills",
    title: "Skills",
  },
  {
    id: 2,
    page: "projects",
    title: "Projects",
  },
  {
    id: 3,
    page: "contacts",
    title: "Contacts",
  },
];

const Navbar = ({ setPage, page }: Props) => {
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
        {menus.map((menu) => (
          <span
            key={menu.id}
            onClick={() => setPage(menu.page)}
            className={`cursor-pointer ${
              page === menu.page && "text-title font-bold"
            } }`}
          >
            {menu.title}
          </span>
        ))}
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
