import BlogHero from "@/components/blogs/blog-hero";
import CategoryWrapper from "@/components/blogs/category-wrapper";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-10 md:pb-16">
      <BlogHero />
      <CategoryWrapper />
    </div>
  );
};

export default page;
