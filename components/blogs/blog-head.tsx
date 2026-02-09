"use client";
import React from "react";
import { Wrapper } from "../ui/wrapper";
import BlogSearch from "../shared/blog-search";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import CategoryWrapper from "./category-wrapper";

const BlogHead = () => {
  return (
    <div className="relative z-0 md:h-100 h-80">
      {/* Image as background */}
      <img
        src="/home/img4.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Soft black overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-10% to-black/50" />

      {/* Text on top */}
      <Wrapper>
        <div className="relative z-10">
          <div className=" flex flex-col gap-6 md:gap-8 pt-32 h-full">
            <h2 className="font-space-grotesk w-73.5 md:w-187.5 text-3xl md:text-6xl font-bold  text-white">
              Local Startup Raises Funding to Expand Across West Africa
            </h2>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogHead;
