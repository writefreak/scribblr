"use client";
import React from "react";
import { Card } from "../ui/card";
import { Wrapper } from "../ui/wrapper";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ExploreCat = () => {
  return (
    <div>
      <Wrapper className="">
        <p className="font-bold text-2xl md:text-3xl font-space-grotesk pt-15">
          Explore By Popular Categories
        </p>
        <div className="hidden md:grid md:grid-cols-4 gap-5 pt-5">
          {category.map((c) => (
            <Card key={c.id} className="p-0">
              <div className="grid grid-cols-2 gap-5">
                <img
                  src={c.img}
                  alt=""
                  className="rounded-l-xl h-full object-cover"
                />
                <div className="flex flex-col justify-center gap-2 md:gap-3">
                  <h2 className="font-space-grotesk font-semibold text-sm md:text-base">
                    {c.title}
                  </h2>
                  <p className="line-clamp-2 sm:line-clamp-none font-montserrat text-xs text-gray-500">
                    {c.slug}
                  </p>
                  <div className="">
                    <Button className="rounded-full hidden md:flex items-center gap-2 h-7 font-space-grotesk bg-[#377389]">
                      Explore
                      <ArrowUpRight />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Link
          href={"#"}
          className="md:hidden flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pt-5"
        >
          <div className="md:hidden overflow-x-auto scroll-smooth scrollbar-hide pb-5">
            <div className="flex gap-4">
              {category.map((c) => (
                <div key={c.id}>
                  <Card className="p-0 min-w-[250px] flex-shrink-0">
                    <div className="grid grid-cols-2 gap-3 h-30">
                      <img
                        src={c.img}
                        alt=""
                        className="rounded-l-xl h-full object-cover"
                      />
                      <div className="flex flex-col justify-center gap-1 pr-2">
                        <h2 className="font-space-grotesk font-semibold text-sm">
                          {c.title}
                        </h2>
                        <p className="line-clamp-2 font-montserrat text-xs text-gray-500">
                          {c.slug}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Link>
      </Wrapper>
    </div>
  );
};

{
  /* <div className="grid grid-cols-2">
  <img src={c.img} alt="" />
  <div>
    <p>{c.title}</p>
    <p>{c.slug}</p>
  </div>
</div>; */
}

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
