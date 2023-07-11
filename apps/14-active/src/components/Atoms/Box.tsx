import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Box = ({ children, className = "" }: Props) => {
  return (
    <div
      className={clsx(
        "bg-neutral-10 p-8 rounded-3xl flex flex-col justify-between gap-10 shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
