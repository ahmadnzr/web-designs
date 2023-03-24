import React from "react";

import SKILL from "../../assets/text/Skills.png";
import NULIS from "../../assets/skills/nulis.png";
import TERMINAL from "../../assets/skills/terminal.png";
import WEB from "../../assets/skills/web.png";

type Skills = {
  id: number;
  image: string;
  title: string;
  desc: string;
};

const skills: Skills[] = [
  {
    id: 1,
    image: TERMINAL,
    title: "Biasa Pake Terminal",
    desc: "Udah terbiasa sih pake terimnal kek gini, karena lebih cepet kerjanya ketimbang pake GUI-GUI begitu.",
  },
  {
    id: 2,
    image: WEB,
    title: "Web Development",
    desc: "Bikin web itu gampang, tinggal ketik-ketik kode doang dah jadi lah web. Apalagi sekarang bisa pake Wix hehe.",
  },
  {
    id: 3,
    image: NULIS,
    title: "Nulis Artikel",
    desc: "Biasa nulis artikel di web sendiri, ya walaupun masih berantakan yang penting nulis sih, daripada nggak sama sekali.",
  },
  {
    id: 4,
    image: WEB,
    title: "Web Development",
    desc: "Bikin web itu gampang, tinggal ketik-ketik kode doang dah jadi lah web. Apalagi sekarang bisa pake Wix hehe.",
  },
  {
    id: 5,
    image: NULIS,
    title: "Nulis Artikel",
    desc: "Biasa nulis artikel di web sendiri, ya walaupun masih berantakan yang penting nulis sih, daripada nggak sama sekali.",
  },
  {
    id: 6,
    image: TERMINAL,
    title: "Landing Page UI Design",
    desc: "Udah terbiasa sih pake terimnal kek gini, karena lebih cepet kerjanya ketimbang pake GUI-GUI begitu.",
  },
];

const Skills = () => {
  return (
    <div className="">
      <div className="relative h-[121px]">
        <div className="absolute z-0 -left-14">
          <img src={SKILL} alt="" />
        </div>
        <h1 className="absolute z-10 top-4 font-bold text-[40px] leading-[54px] text-title">
          Skills
        </h1>
      </div>
      <p className="w-[415px] text-[18px] leading-[30px]">
        Beberapa skill yang saya punya, sebenernya banyak skill saya, tapi males
        masukin.
      </p>
      <div className="mt-[38px] grid grid-cols-3 gap-[30px]">
        {skills.map((skill) => (
          <div key={skill.id} className="">
            <img src={skill.image} />
            <h3 className="mt-[24px] font-semibold text-[20px] leading-[24px] text-title text-center">
              {skill.title}
            </h3>
            <p className="mt-[16px] w-[320px] text-[16px] leading-[26px] text-center">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
