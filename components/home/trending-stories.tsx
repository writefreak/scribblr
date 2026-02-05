"use client";

import React, { useRef, useState, useEffect } from "react";
import { Card } from "../ui/card";
import { Wrapper } from "../ui/wrapper";
import { Button } from "../ui/button";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const TrendingStories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <Wrapper>
      <h2 className="font-bold text-2xl md:text-3xl font-space-grotesk pt-15">
        Trending Stories
      </h2>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-2 md:gap-5 pt-5 overflow-x-auto scrollbar-hide flex-nowrap"
      >
        <div className="shrink-0">
          <div className="relative md:h-56 overflow-hidden rounded-xl md:rounded-2xl p-0">
            <div className="flex flex-col justify-center w-72 h-full p-4 py-7 space-y-3">
              <p className="text-xs md:text-[12.5px] dark:font-light font-montserrat mt-1">
                Explore stories that are capturing the most attention from our
                readers right now. Carefully curated based on engagement,
                relevance, and impact, this section highlights the articles
                people are talking about, reading, and sharing the most.
              </p>
            </div>
          </div>
        </div>

        {category.map((c) => (
          <Card
            key={c.id}
            className="relative w-56 md:w-60 md:h-56 shrink-0 overflow-hidden rounded-xl md:rounded-2xl p-0 shadow-md border border-gray-600"
          >
            <img
              src={c.img}
              alt={c.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/60 backdrop-blur-[1px]" />

            <div className="relative z-10 flex flex-col justify-center h-full p-4 py-7 text-white space-y-3">
              <h2 className="font-space-grotesk font-semibold text-lg md:text-xl">
                {c.title}
              </h2>
              <p className="text-xs font-montserrat dark:font-light text-gray-200 line-clamp-3 mt-1">
                {c.slug}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Navigation + Explore */}
      <div className="mt-4 flex items-center justify-between">
        <Button className="rounded-full md:h-9 dark:bg-[#377389] text-white bg-[#377389] border backdrop-blur-xl flex items-center gap-2 text-sm">
          <span className="text-xs md:text-sm font-space-grotesk">
            Explore more stories
          </span>
          <ArrowUpRight size={16} />
        </Button>
        <div className="flex gap-2">
          <Button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="rounded-full h-9 w-9 p-0 bg-[#377389] disabled:opacity-40 text-white"
          >
            <ChevronLeft size={18} />
          </Button>

          <Button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="rounded-full h-9 w-9 p-0 bg-[#377389] disabled:opacity-40  text-white"
          >
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default TrendingStories;

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
