"use client";

import React, { useRef } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Wrapper } from "../ui/wrapper";
import { AddReview } from "../reviews/add-review";

const Comment = () => {
  // Use a ref to target the scrollable container
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 320; // Card width + gap
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div>
        <div className="flex justify-start px-5 md:px-0 pt-5">
          <AddReview text="" title="Leave a Comment" />
        </div>
      </div>
      <h2 className="font-bold text-2xl md:text-3xl font-space-grotesk pt-15">
        Comments
      </h2>

      <div className="pt-5">
        <div
          ref={scrollRef}
          className="flex gap-4 w-full scrollbar-hide overflow-x-auto snap-x snap-mandatory scroll-smooth"
        >
          {reviews.map((t, index) => (
            <Card
              data-aos="zoom-in"
              key={index}
              className="p-5 py-9 md:py-8 rounded-md shrink-0 w-70 md:w-75 snap-start"
            >
              <div className="flex flex-col h-full justify-between">
                <p className="font-inter text-[12.6px] font-montserrat text-gray-300 not-dark:text-black/80">
                  {t.desc}
                </p>

                <div className="not-dark:text-black flex flex-col gap-2 pt-5 md:pt-5">
                  <h3 className=" font-space-grotesk text-sm font-semibold">
                    {t.name}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="pt-6">
          <div className="flex justify-end items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

const reviews = [
  {
    name: "Alex Rivera",
    desc: "Finally, a breakdown that doesn't skip the technical hurdles. This saved me hours of debugging.",
  },
  {
    name: "Sarah Chen",
    desc: "The explanation of the local state management was exactly what I needed. Crystal clear.",
  },
  {
    name: "Marcus Thorne",
    desc: "I've been looking for a workaround for this specific Next.js issue for weeks. You're a lifesaver.",
  },
  {
    name: "Jordan P.",
    desc: "Straight to the point. No fluff, just code that actually works.",
  },
  {
    name: "Elena Rodriguez",
    desc: "The section on PostgreSQL optimization was a game changer for my current project.",
  },
  {
    name: "David Wu",
    desc: "Love the minimalist approach here. It's rare to find content this focused.",
  },
  {
    name: "Riley Smith",
    desc: "I had some doubts about the Prisma implementation, but this cleared everything up.",
  },
  {
    name: "Tasha G.",
    desc: "Great read! Could you do a follow-up on handling massive data migrations?",
  },
  {
    name: "Kevin V.",
    desc: "Cleanest implementation of this stack I've seen yet. Cheers for sharing.",
  },
  {
    name: "Maya Patel",
    desc: "I appreciate that you didn't suggest a thousand paid SaaS tools. Keeping it local is the way.",
  },
  {
    name: "Liam O'Connor",
    desc: "The logic here is solid. Implemented it this morning and it's running perfectly.",
  },
  {
    name: "Sophia Kim",
    desc: "This blog is becoming my go-to for React best practices.",
  },
  {
    name: "James Miller",
    desc: "Detailed, concise, and technically accurate. High-quality content right here.",
  },
  {
    name: "Amara Okafor",
    desc: "The workaround you mentioned for the API latency worked like a charm.",
  },
  {
    name: "Chris B.",
    desc: "Excellent guide. The step-by-step approach made it very easy to follow.",
  },
  {
    name: "Nico Santoro",
    desc: "Bookmarking this. That Prisma schema setup is exactly what I was trying to draft.",
  },
  {
    name: "Leila J.",
    desc: "Refreshing to see a dev blog that actually values the reader's time.",
  },
  {
    name: "Victor H.",
    desc: "Solid architecture. It’s hard to find people doing custom UI/DB setups properly these days.",
  },
  {
    name: "Zoe Adams",
    desc: "The bit about the JSONB columns in Postgres was a total lightbulb moment for me.",
  },
  {
    name: "Ben Thompson",
    desc: "Simple, effective, and free. This is how web development should be.",
  },
  {
    name: "Priya Das",
    desc: "I was struggling with the server-side rendering logic until I read this. Thank you!",
  },
];

const icon = Star;
