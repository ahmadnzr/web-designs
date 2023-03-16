import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="w-[1440px] max-w-[1440px] mx-auto text-primary">
      <div className="w-[1024px] max-w-[1024px] mx-auto py-[57px]">
        {children}
      </div>
    </div>
  );
};

export default Container;
