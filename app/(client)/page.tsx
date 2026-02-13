import EditorWrapper from "@/components/home/editor-wrapper";
import EditorsPick from "@/components/home/editors-pick";
import CallToAction from "@/components/home/editors-pick";
import ExploreCat from "@/components/home/explore-cat";
import { Header } from "@/components/home/header";
import Hero from "@/components/home/hero";
import { HeroCarousel } from "@/components/home/hero-carousel";
import RecentBlogs from "@/components/home/recent-blogs";
import TrendingStories from "@/components/home/trending-stories";
import Transition from "@/components/shared/transition";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col pb-10">
      {/* <Header /> */}

      <Transition />

      <div className="flex flex-col gap-10 md:p-0">
        {/* <Hero /> */}
        <HeroCarousel />
      </div>
      <RecentBlogs />
      <ExploreCat />
      <EditorsPick />
      <EditorWrapper />
      <TrendingStories />
      {/* <Review /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default page;
