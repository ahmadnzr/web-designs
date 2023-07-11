import React from "react";

interface Props {}

const TextInput = () => {
  return (
    <input
      type="text"
      placeholder="Type here"
      className="input w-full max-w-xs"
    />
  );
};

export default TextInput;
