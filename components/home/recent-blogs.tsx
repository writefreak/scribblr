"use client";

import React, { useRef, useState, useEffect } from "react";
import { Wrapper } from "../ui/wrapper";
import BlogCards from "./blog-cards";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RecentBlogs = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setAtStart(scrollLeft === 0);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.querySelector<HTMLElement>("[data-card]");
    if (!card) return;

    const cardWidth = card.offsetWidth + 16;

    container.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="pt-15">
      <Wrapper>
        <div className="space-y-6">
          <h2 className="font-semibold font-space-grotesk md:text-3xl text-2xl">
            Recent Stories
          </h2>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {trendingStories.map((t, i) => (
              <div
                key={i}
                data-card
                className="shrink-0 w-full sm:w-[48%] lg:w-[28%]"
              >
                <BlogCards
                  id={t.title}
                  title={t.title}
                  desc={t.description}
                  image={t.image}
                  likes={t.likes}
                  category={t.category}
                />
              </div>
            ))}
          </div>

          <div className="flex gap-3 justify-end">
            <Button
              onClick={() => scroll("left")}
              disabled={atStart}
              className="h-10 w-10 border bg-[#377389] rounded-full disabled:opacity-40"
            >
              <ChevronLeft />
            </Button>

            <Button
              onClick={() => scroll("right")}
              disabled={atEnd}
              className="h-10 w-10 border bg-[#377389] rounded-full disabled:opacity-40"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default RecentBlogs;

const trendingStories = [
  {
    title: "University Students Protest Sudden Tuition Increase",
    category: "Education",
    image: "/home/img1.jpg",
    description:
      "Students across several campuses staged protests after a sudden hike in tuition fees, calling for transparency and dialogue.",
    likes: "3.2k",
  },
  {
    title: "New Mobile App Helps Small Businesses Track Daily Sales",
    category: "Business",
    image: "/home/img2.jpg",
    description:
      "A newly launched mobile app is helping small business owners easily monitor daily sales and manage cash flow.",
    likes: "2.1k",
  },
  {
    title: "Local Startup Raises Funding to Expand Across West Africa",
    category: "Technology",
    image: "/home/img4.jpg",
    description:
      "The startup secured fresh funding to grow its team and expand operations into multiple West African markets.",
    likes: "4.5k",
  },
  {
    title: "Social Media Users React to Sudden Platform Feature Changes",
    category: "Technology",
    image: "/home/img5.jpg",
    description:
      "Users took to social media to share mixed reactions after unexpected updates changed key platform features.",
    likes: "1.8k",
  },
  {
    title: "Independent Artist Breaks Streaming Records Overnight",
    category: "Entertainment",
    image: "/home/img3.jpg",
    description:
      "An independent artist shocked fans after a surprise release broke major streaming records within hours.",
    likes: "6.9k",
  },
];
