import React from "react";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  size?: "medium" | "large";
  color?: string;
}

const Title = ({
  children,
  size = "medium",
  color = "text-neutral-50",
}: Props) => {
  return (
    <h1
      className={clsx(
        "font-semibold leading-[120%]",
        size === "large"
          ? "text-[60px] tracking-[0.3px]"
          : "text-[54px] tracking-[0.27px]",
        color
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
