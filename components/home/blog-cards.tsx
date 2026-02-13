"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Heart } from "lucide-react";
import Link from "next/link";

interface Props {
  id?: string | any;
  category: string;
  title: string;
  desc: string;
  likes: string;
  image: string;
}

/* ... imports and props stay the same ... */

const BlogCards = ({ category, title, desc, likes, image, id }: Props) => {
  const [liked, setLiked] = useState(false);

  return (
    <Link href={`/each-blog/${id}`} className="block">
      <Card className="relative overflow-hidden rounded-2xl shadow-md h-80 group">
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Content Container - Pinned to bottom */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="bg-black/40 backdrop-blur-sm p-5 text-white">
            <div className="flex items-center justify-between mb-4">
              <Badge className="text-xs font-space-grotesk tracking-wide text-white bg-[#377389] px-4">
                {category}
              </Badge>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setLiked(!liked);
                }}
                className="flex items-center gap-1 z-10"
              >
                <Heart
                  height={20}
                  width={20}
                  strokeWidth={1}
                  className={
                    liked ? "fill-red-500 stroke-red-500" : "stroke-white"
                  }
                />
                <span className="text-xs">{likes}</span>
              </button>
            </div>

            <div className="space-y-2 pb-2">
              <h2 className="font-space-grotesk md:text-[17px] font-bold line-clamp-2">
                {title}
              </h2>
              <p className="text-gray-200 text-xs line-clamp-2 font-montserrat">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};
export default BlogCards;
