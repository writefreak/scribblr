"use client";

import React from "react";
import { Card } from "../ui/card";
import { Wrapper } from "../ui/wrapper";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

const ExploreCat = () => {
  return (
    <Wrapper>
      <h2 className="font-bold text-2xl md:text-3xl font-space-grotesk pt-15">
        Explore By Popular Categories
      </h2>

      {/* Desktop grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 pt-5">
        {category.map((c) => (
          <Card
            key={c.id}
            className="relative md:h-56 overflow-hidden rounded-xl md:rounded-2xl p-0 shadow-md border border-gray-600"
          >
            {/* Background image */}
            <img
              src={c.img}
              alt={c.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/50 backdrop-blur-[1px]" />

            {/* Text content */}
            <div className="relative z-10 flex flex-col justify-center h-full p-4 py-7 text-white space-y-3">
              <div className="">
                <h2 className="font-space-grotesk font-semibold text-lg md:text-xl">
                  {c.title}
                </h2>
                <p className="text-xs text-gray-200 md:text-sm line-clamp-3 md:line-clamp mt-1">
                  {c.slug}
                </p>
              </div>
              <Button className="mt-3 rounded-full md:h-9 w-24 md:w-28 bg-[#377389]/50 border-gray-600 border backdrop-blur-xl md:flex items-center justify-center gap-2 text-sm">
                <span className="text-xs md:text-base"> Explore</span>
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Mobile carousel / scroll */}
      {/* <div className="md:hidden overflow-x-auto flex gap-4 pt-5 scrollbar-hide">
        {category.map((c) => (
          <Card
            key={c.id}
            className="relative min-w-[250px] h-48 overflow-hidden rounded-xl p-0 flex-shrink-0"
          >
            <img
              src={c.img}
              alt={c.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex flex-col justify-center h-full p-3 text-white">
              <h2 className="font-space-grotesk font-semibold text-sm">
                {c.title}
              </h2>
              <p className="text-xs line-clamp-2 mt-1">{c.slug}</p>
            </div>
          </Card>
        ))}
      </div> */}
    </Wrapper>
  );
};

export default ExploreCat;

const category = [
  {
    id: 1,
    img: `/home/img2.jpg`,
    title: "Tech News & Updates",
    slug: "Browse our vast library of stories relating to the world of technology to gain ideas and insights",
  },
  {
    id: 2,
    img: `/home/img4.jpg`,
    title: "Business & Finance",
    slug: "Stories, insights, and practical takes on business, investing, and how ideas turn into real ventures.",
  },
  {
    id: 3,
    img: `/home/img3.jpg`,
    title: "Entertainment",
    slug: "Thoughts, reviews, and commentary on films, music, trends, and pop culture moments.",
  },
  {
    id: 4,
    img: `/home/img6.jpg`,
    title: "Healthcare",
    slug: "Explore healthcare trends, medical innovation, and the challenges shaping modern care.",
  },
];
