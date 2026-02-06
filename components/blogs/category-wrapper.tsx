"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import BlogCards from "../home/blog-cards";
import { Wrapper } from "../ui/wrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { div } from "framer-motion/client";

const CategoryWrapper = () => {
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setAtStart(scrollLeft <= 0);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  useEffect(() => {
    if (!isMobile) return;
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll);
    checkScroll();

    return () => el.removeEventListener("scroll", checkScroll);
  }, [isMobile]);

  // Mobile button scroll

  // 1. State to track the active category (default to first one)
  const [activeTab, setActiveTab] = useState("Technology");

  const stories = isMobile
    ? blogPosts
    : [...blogPosts, ...blogPosts, ...blogPosts];

  // 2. Filter posts based on the activeTab
  const filteredPosts = blogPosts.filter((post) => post.category === activeTab);

  return (
    <div className="space-y-8 flex flex-col items-center">
      {/* Category Buttons */}
      <div className="flex gap-2 md:w-full flex-wrap justify-center items-center">
        {categories.map((c) => (
          <Button
            key={c.title}
            onClick={() => setActiveTab(c.title)}
            className={`md:text-sm font-space-grotesk text-xs rounded-full tracking-wide px-3 md:px-4 py-2 border transition-all ${
              activeTab === c.title
                ? "bg-white text-black not-dark:text-white not-dark:bg-[#377389] not-dark:border-0 border-white" // Active Style
                : "bg-white/20 text-white not-dark:bg-gray-300 not-dark:hover:bg-[#377389] not-dark:border-0  not-dark:hover:text-white   not-dark:text-black   border-gray-500 backdrop-blur-xl hover:bg-white/30" // Inactive Style
            }`}
          >
            {c.title}
          </Button>
        ))}
      </div>

      {/* 3. Blog Grid Display */}
      <Wrapper>
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className=" flex  md:overflow-x-hidden overflow-x-auto scrollbar-hide pb-5 md:grid-cols-3 gap-3 md:gap-4 md:items-center md:justify-center"
        >
          {filteredPosts.map((post, index) => (
            <div
              data-card
              key={index}
              className="shrink-0 w-[80%] lg:w-[30%] md:w-[30%]"
            >
              <BlogCards
                image={post.image}
                title={post.title}
                desc={post.description}
                category={post.category}
                likes={post.likes}
              />
            </div>
          ))}
        </div>
        {isMobile && (
          <div className="flex relative z-50 gap-3 justify-end">
            <Button
              onClick={() => scroll("left")}
              disabled={atStart}
              className="h-10 w-10 border bg-[#377389] rounded-full disabled:opacity-40"
            >
              <ChevronLeft color="white" />
            </Button>

            <Button
              onClick={() => scroll("right")}
              disabled={atEnd}
              className="h-10 w-10 border bg-[#377389] rounded-full disabled:opacity-40"
            >
              <ChevronRight color="white" />
            </Button>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default CategoryWrapper;

// --- MOCK DATA ---

const categories = [
  { title: "Technology" },
  { title: "Business" },
  { title: "Entertainment" },
  { title: "Healthcare" },
];

const blogPosts = [
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
