import React from "react";
import { Input } from "@app/_components/ui/input";

export const TextInput = ({
  type = "text",
  placeholder = "Type here",
  className = "",
  onChange,
  ...props
}) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      className={`w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none ${className}`}
      onChange={onChange}
      {...props}
    />
  );
};
