"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export const BackMenu = () => {
    const handleClick = () => {
        window.location.href = "http://localhost:3000";
      };

      return(
        <Button variant="outline" size="icon" onClick={handleClick}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      )
}