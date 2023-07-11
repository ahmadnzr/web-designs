import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  rightIcon?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}
const Button = ({
  children,
  type = "primary",
  size = "md",
  icon,
  rightIcon = false,
  isLoading = false,
  disabled = false,
}: Props) => {
  const buttonType = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
  };

  const buttonSize = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };

  return (
    <button className={clsx("btn", buttonType[type], buttonSize[size])}>
      {icon && !rightIcon && <span className="h-[20px] w-[20px]">{icon}</span>}
      {children}
      {icon && rightIcon && <span className="h-[20px] w-[20px]">{icon}</span>}
    </button>
  );
};

export default Button;
