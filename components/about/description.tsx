import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const Description = ({ className }: Props) => {
  return (
    <div className={cn("", className)}>
      <div>
        <Link href={"/#blogs"}>
          <h3 className=" font-raleway text-3xl sm:text-5xl pt-14 sm:py-9 hover:underline hover:decoration-2">
            Dive into our articles and share your thoughts—your voice matters
            here
          </h3>
        </Link>

        <p className="font-inter font-light hidden sm:block">
          Every story we tell and every idea we explore is crafted with you in
          mind.
        </p>
        <p className="font-inter font-light pt-5">
          Your perspectives enrich the conversation, turning this space into
          more than just a blog—it's a community where ideas thrive and voices
          resonate.
        </p>
        <p className="font-inter font-light hidden sm:block">
          Let your thoughts shape the narrative.
        </p>

        <h3 className="font-raleway text-lg sm:text-3xl pt-10 sm:pt-8">
          Leave us a message with your thoughts or questions—we'd love to hear
          from you!
        </h3>

        <a href="#">
          <div className="flex items-center gap-2 pt-5">
            <Mail width={14} />
            <p className="font-inter font-light hover:underline hover:decoration-2">
              hellowritrr@gmail.com
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Description;
