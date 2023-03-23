import React from "react";

import Bullet from "../../components/Bullet";

import PROJECT from "../../assets/text/Projects.png";
import LD1 from "../../assets/projects/landing1.png";
import LD2 from "../../assets/projects/landing2.png";
import LD3 from "../../assets/projects/landing3.png";
import LD4 from "../../assets/projects/landing4.png";
import LOGIN from "../../assets/projects/login.png";
import mobile from "../../assets/projects/mobile1.png";

type Projects = {
  id: number;
  image: string;
  title: string;
  subTitle: string;
};

const projects: Projects[] = [
  {
    id: 1,
    image: LOGIN,
    title: "Login UI Design",
    subTitle: "UI DESIGN",
  },
  {
    id: 2,
    image: LD1,
    title: "Landing Page",
    subTitle: "Web Development",
  },
  {
    id: 3,
    image: LD2,
    title: "Landing Page",
    subTitle: "Web Development",
  },
  {
    id: 4,
    image: LD3,
    title: "Landing Page UI Design",
    subTitle: "UI Design",
  },
  {
    id: 5,
    image: mobile,
    title: "Mobile App",
    subTitle: "Mobile Web Development",
  },
  {
    id: 6,
    image: LD4,
    title: "Landing Page UI Design",
    subTitle: "Web Development",
  },
];

const Project = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <div className="relative h-[121px]">
          <div className="absolute z-0 -left-14">
            <img src={PROJECT} alt="" />
          </div>
          <h1 className="absolute z-10 top-4 font-bold text-[40px] leading-[54px] text-title">
            Projects
          </h1>
        </div>
        <p className="w-[415px] text-[18px] leading-[30px]">
          Di halaman ini kamu akan menemukan proyek-proyek yang pernah saya
          buat.
        </p>
        <div className="mt-[44px] flex flex-col gap-4">
          <div className="flex items-center gap-[20px]">
            <Bullet />
            <span className="text-title">Semua Kategori</span>
          </div>
          <div className="flex items-center gap-[20px]">
            <Bullet />
            <span>UI Design</span>
          </div>
          <div className="flex items-center gap-[20px]">
            <Bullet />
            <span>Web Development</span>
          </div>
          <div className="flex items-center gap-[20px]">
            <Bullet />
            <span>Mobile Development</span>
          </div>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-[20px]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="px-[16px] py-[18px] bg-white/5 text-center rounded-md max-h-[293px]"
          >
            <img src={project.image} />
            <h3 className="mt-[30px] font-semibold text-[18px] leading-[22px] text-title">
              {project.title}
            </h3>
            <span className="block mt-[16px] uppercase font-semibold text-[12px] leading-[15px] tracking-[0.05em]">
              {project.subTitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
