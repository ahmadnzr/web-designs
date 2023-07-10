import React from "react";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
  weight?: "normal" | "semibold" | "bold";
}

const Heading = ({
  children,
  type = "h2",
  color = "text-neutral-50",
  weight = "normal",
}: Props) => {
  const largeStyle = `leading-[130%] font-${weight}`;
  const smallStyle = `leading-[140%] font-${weight}`;

  switch (type) {
    case "h1":
      return (
        <h1
          className={clsx(color, largeStyle, "text-[48px] tracking-[0.24px]")}
        >
          {children}
        </h1>
      );
    case "h3":
      return (
        <h3
          className={clsx(color, largeStyle, "text-[31px] tracking-[0.195px]")}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={clsx(color, smallStyle, "text-[25px] tracking-[0.124px]")}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={clsx(color, smallStyle, "text-[20px] tracking-[0.1px]")}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={clsx(color, smallStyle, "text-[16px] tracking-[0.08px]")}
        >
          {children}
        </h6>
      );
    default:
      return (
        <h2
          className={clsx(color, largeStyle, "text-[39px] tracking-[0.195px]")}
        >
          {children}
        </h2>
      );
  }
};

export default Heading;
