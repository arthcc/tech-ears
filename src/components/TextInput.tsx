import React from "react";
import { Input } from "./ui/input";
import Textarea from "@mui/joy/Textarea";

export const TextInput = ({ type = "text", className = "", onChange, ...props }) => {
  return (
    <Textarea
      className={`w-full max-w-2xl mx-auto bg-white ${className}`}
      placeholder="Your phrase is typed here..."
      color="neutral"
      minRows={5}
      maxRows={5}
      size="lg"
      variant="soft"
      onChange={onChange}
      {...props}
    />
  );
};
