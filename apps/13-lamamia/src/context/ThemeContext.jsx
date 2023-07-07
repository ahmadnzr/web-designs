"use client";

import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div
        className={`theme ${mode}`}
        style={{ height: "100%", width: "100%" }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
