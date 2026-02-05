"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Wrapper } from "../ui/wrapper";
import EditorStrip from "./editor-strip";
import { desc } from "framer-motion/client";

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
    image: "/home/img5.jpg",
    link: "/news/digital-policy",
    desc: `The government unveils a new digital policy aimed at 
    supporting startups, focusing on innovation funding, data protection, 
    and easing regulatory barriers.`,
  },
  {
    title: "Tech Community Divided Over Latest AI Regulations",
    image: "/home/img5.jpg",
    link: "/news/ai-regulations",
    desc: `Developers, companies, and researchers clash over 
    newly introduced AI regulations, weighing ethical safeguards
    against potential limits on innovation.`,
  },
  {
    title: "Major Tech Firms Report Slower Growth Amid Global Uncertainty",
    image: "/home/img5.jpg",
    link: "/news/tech-growth-slowdown",
    desc: `Leading technology companies reveal slower revenue 
    growth as economic uncertainty, rising costs, and market
    saturation impact global performance.`,
  },
  {
    title: "Cybersecurity Experts Warn of Increase in Phishing Attacks",
    image: "/home/img5.jpg",
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

// duplicate first slide

function EditorsPick() {
  const extendedNews = [...breakingNews, breakingNews[0]];
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const safeIndex = index >= extendedNews.length ? 0 : index;

  useEffect(() => {
    // Turn transition on after mount
    setIsTransitioning(true);
  }, []);

  useEffect(() => {
    let mounted = true;

    const interval = setInterval(() => {
      if (!mounted) return;
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const handleTransitionEnd = () => {
    // If we reached the clone (the extra first item)
    if (index === breakingNews.length) {
      setIsTransitioning(false); // Disable transition for the jump
      setIndex(0); // Teleport back to the real first item
    }
  };

  return (
    <div className="flex justify-center">
      <Wrapper>
        <div className="pb-3">
          <h2 className="font-bold text-2xl md:text-3xl font-space-grotesk pt-15">
            Editor's Pick
          </h2>
        </div>
        <Card className="w-full bg-[#377389] overflow-hidden p-0 md:hidden">
          <div
            className="flex"
            style={{
              // Toggle transition based on state
              transition: isTransitioning
                ? "transform 600ms ease-in-out"
                : "none",
              transform: `translateX(-${safeIndex * 100}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedNews.map((news, i) => (
              <div key={i} className="min-w-full flex items-center gap-4">
                <img
                  src={news.image}
                  alt="breaking news"
                  className="w-20 h-20 md:w-50 md:h-50 object-cover rounded-md shrink-0"
                />

                <div className="flex flex-col gap-2">
                  <h3 className="text-white font-space-grotesk text-sm md:text-lg font-medium leading-snug">
                    {news.title}
                  </h3>

                  <Link href={news.link}>
                    <Button className="h-7 w-fit px-3 text-xs font-space-grotesk bg-transparent border border-[#377389]/40 text-white hover:bg-[#377389]/40 transition">
                      Read more
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Wrapper>
    </div>
  );
}
export default EditorsPick;
