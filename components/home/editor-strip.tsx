import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface Props {
  image: string;
  title: string;
  desc: string;
  link?: string;
}

const EditorStrip = ({ image, title, desc, link }: Props) => {
  return (
    <div>
      <Card className="overflow-hidden p-0 hover:bg-[#377389]/5 shadow-none">
        <div className="flex">
          <div className="min-w-full flex items-center gap-4">
            <img
              src={image}
              alt="breaking news"
              className=" h-24 w-24 object-cover rounded-l-md shrink-0"
            />

            <div className="flex flex-col gap-2">
              <div className="space-y-1">
                <h3 className="font-space-grotesk line-clamp-1 text-xs md:text-base font-medium leading-snug">
                  {title}
                </h3>

                <p className="font-montserrat line-clamp-2 text-[11px] md:w-96 dark:text-gray-300 text-gray-600">
                  {desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EditorStrip;
