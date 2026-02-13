"use client";
import Blog from "@/components/blogs/blog";
import BlogHead from "@/components/blogs/blog-head";
import EachBlog from "@/components/blogs/blog-head";
import Comment from "@/components/blogs/comment";
import RelatedStories from "@/components/blogs/related-stories";
import { Wrapper } from "@/components/ui/wrapper";
import React from "react";

const page = () => {
  return (
    <div className="pb-16">
      <BlogHead />
      <Wrapper>
        <div className="">
          <Blog />
          <Comment />
        </div>
        <RelatedStories />
      </Wrapper>
    </div>
  );
};

export default page;
