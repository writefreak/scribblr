import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Description from "./description";

interface Props {
  className?: string;
}
const ImgDesc = ({ className }: Props) => {
  return (
    <div className={cn("sm:p-6 sm:px-9", className)}>
      <img src="/blog/img7.jpg" alt="" className="rounded-xl " />
      <Description className="hidden sm:block" />
    </div>
  );
};

export default ImgDesc;
