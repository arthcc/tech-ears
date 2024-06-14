"use client";

import { Input } from "@/components/ui/input";
export const TextInput = () => {  
  return (
    <Input
    type="text"
    placeholder="Type here"
    className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none"
  />
  )
}

