import React from "react";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  size?: "md" | "lg" | "sm";
  color?: string;
  type?: "p" | "span";
  weight?: "normal" | "semibold" | "bold";
  className?: string;
}

const Text = ({
  children,
  size = "lg",
  color = "text-neutral-50",
  type = "p",
  weight = "normal",
  className,
}: Props) => {
  const pickSize = {
    lg: "text-base",
    md: "text-[14px]",
    sm: "text-[12px]",
  };

  const fontWeight = `font-${weight}`;

  return type === "span" ? (
    <span className={clsx(color, pickSize[size], fontWeight, className)}>
      {children}
    </span>
  ) : (
    <p className={clsx(color, pickSize[size], fontWeight, className)}>
      {children}
    </p>
  );
};

export default Text;
