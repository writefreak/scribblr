"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Heart } from "lucide-react";
import Link from "next/link";

interface Props {
  category: string;
  title: string;
  desc: string;
  likes: string;
  image: string;
}

const BlogCards = ({ category, title, desc, likes, image }: Props) => {
  const [liked, setLiked] = useState(false);

  return (
    <Link href={"#"}>
      <Card className="p-0 rounded-4xl">
        <div className="h-72 md:h-56">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover rounded-t-4xl"
          />
        </div>

        <div className="flex flex-col gap-4 px-5">
          <div className="flex items-center justify-between">
            <Badge className="text-xs font-space-grotesk tracking-wide text-white bg-[#377389] px-4">
              {category}
            </Badge>

            <button
              onClick={(e) => {
                e.preventDefault(); // stop Link navigation
                setLiked(!liked);
              }}
              className="flex items-center gap-1"
            >
              <Heart
                height={20}
                width={20}
                className={
                  liked ? "fill-red-500 stroke-red-500" : "stroke-gray-600"
                }
              />
              <span className="text-xs">{likes}</span>
            </button>
          </div>

          <div className="space-y-4 pb-6">
            <h2 className="font-space-grotesk text-xl font-bold w-72 line-clamp-2">
              {title}
            </h2>
            <p className="text-gray-600 text-xs line-clamp-3 font-montserrat">
              {desc}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCards;
