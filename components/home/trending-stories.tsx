"use client";

import React, { useRef, useState, useEffect } from "react";
import { Card } from "../ui/card";
import { Wrapper } from "../ui/wrapper";
import { Button } from "../ui/button";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  id?: string | any;
}

const TrendingStories = ({ id }: Props) => {
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

  const router = useRouter();

  return (
    <Wrapper className="md:pb-10">
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
            <div className="flex flex-col items-center justify-center w-72 h-full p-4 py-7 space-y-3">
              <p className="text-[11px] md:text-[12px] dark:font-light font-montserrat pt-1">
                Explore stories that are capturing the most attention from our
                readers right now. Carefully curated based on engagement,
                relevance, and impact, this section highlights the articles
                people are talking about, reading, and sharing the most.
              </p>
            </div>
          </div>
        </div>

        {breakingNews.map((c, index) => (
          <Link href={`/each-blog/${id}`} key={index}>
            <Card className="relative w-56 md:w-60 h-52 md:h-56 shrink-0 overflow-hidden rounded-xl md:rounded-2xl p-0 shadow-md border not-dark:border-gray-600">
              <img
                src={c.image}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/60 backdrop-blur-[1px]" />

              <div className="relative z-10 flex flex-col justify-center h-full p-4 py-7 text-white space-y-3">
                <h2 className="font-space-grotesk font-semibold text-lg md:text-xl">
                  {c.title}
                </h2>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Navigation + Explore */}
      <div className="pt-4 flex items-center justify-between">
        <Button
          onClick={() => router.push("/blogs")}
          className="rounded-full md:h-9 dark:bg-[#377389] text-white bg-[#377389] border backdrop-blur-xl flex items-center gap-2 text-sm"
        >
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

const breakingNews = [
  {
    title: "Social Media Users React to Sudden Platform Feature Changes",
    image: "/home/img5.jpg",
    link: "/news/social-media-updates",
    desc: `Users across major platforms share mixed reactions as 
    unexpected feature updates roll out, sparking debates on usability,
    privacy, and platform direction.`,
  },
  {
    title: "Government Announces New Digital Policy for Startups",
    image: "/home/img1.jpg",
    link: "/news/digital-policy",
    desc: `The government unveils a new digital policy aimed at 
    supporting startups, focusing on innovation funding, data protection, 
    and easing regulatory barriers.`,
  },
  {
    title: "Tech Community Divided Over Latest AI Regulations",
    image: "/home/img2.jpg",
    link: "/news/ai-regulations",
    desc: `Developers, companies, and researchers clash over 
    newly introduced AI regulations, weighing ethical safeguards
    against potential limits on innovation.`,
  },
  {
    title: "Major Tech Firms Report Slower Growth Amid Global Uncertainty",
    image: "/home/img3.jpg",
    link: "/news/tech-growth-slowdown",
    desc: `Leading technology companies reveal slower revenue 
    growth as economic uncertainty, rising costs, and market
    saturation impact global performance.`,
  },
  {
    title: "Cybersecurity Experts Warn of Increase in Phishing Attacks",
    image: "/home/img4.jpg",
    link: "/news/phishing-alert",
    desc: `Security analysts raise concerns over a 
    sharp rise in phishing attempts, urging users and businesses
    to strengthen digital safety practices.`,
  },
  {
    title: "New Smartphone Launch Sparks Debate Over Innovation",
    image: "/home/img5.jpg",
    link: "/news/smartphone-launch",
    desc: `The latest smartphone release draws mixed reactions, 
    with consumers questioning whether recent upgrades truly push innovation forward.`,
  },
];
