"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import BlogSearch from "../shared/blog-search";

export function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full mx-auto"
      >
        <CarouselContent>
          {trendingStories.map((story, i) => (
            <CarouselItem
              key={i}
              className="relative flex h-115 md:h-screen items-center"
            >
              {/* background image */}
              <img
                src={story.image}
                alt={story.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/90  to-transparent" />

              {/* overlay content */}
              <div className="relative z-20 flex flex-col gap-6 p-4 md:px-14">
                <motion.h1
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-2xl font-space-grotesk md:text-6xl font-bold text-white w-72 md:w-187.5"
                >
                  {story.title}
                </motion.h1>
                <div className="flex flex-col pt-5 md:gap-4">
                  <div className="flex items-center gap-2 font-space-grotesk">
                    {story.category && (
                      <Badge className="text-sm tracking-wide text-white bg-white/20 border-gray-500 border backdrop-blur-xl px-4 py-2 flex items-center">
                        {story.category}
                      </Badge>
                    )}
                    <div>
                      <Button className="rounded-full bg-white/20 border-gray-500 border backdrop-blur-xl px-4 flex items-center justify-between">
                        Read More
                        <div className="">
                          <ArrowUpRight />
                        </div>
                      </Button>
                    </div>
                  </div>
                  <React.Suspense fallback={<div>Loading search...</div>}>
                    <BlogSearch />
                  </React.Suspense>
                </div>
              </div>
            </CarouselItem>
          ))}
          <div>
            {/* <CarouselPrevious className="left-8" /> */}
            {/* <CarouselNext className="right-8" /> */}
          </div>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

const trendingStories = [
  {
    title: "University Students Protest Sudden Tuition Increase",
    category: "Education",
    image: "/home/img1.jpg",
  },
  {
    title: "New Mobile App Helps Small Businesses Track Daily Sales",
    category: "Business",
    image: "/home/img2.jpg",
  },
  {
    title: "Local Startup Raises Funding to Expand Across West Africa",
    category: "Technology",

    image: "/home/img4.jpg",
  },
  {
    title: "Social Media Users React to Sudden Platform Feature Changes",
    category: "Technology",
    image: "/home/img5.jpg",
  },

  {
    title: "Independent Artist Breaks Streaming Records Overnight",
    category: "Entertainment",
    image: "/home/img3.jpg",
  },
];
