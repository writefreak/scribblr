import Blog from "@/components/blogs/blog";
import BlogHead from "@/components/blogs/blog-head";
import EachBlog from "@/components/blogs/blog-head";
import React from "react";

const page = () => {
  return (
    <div>
      <BlogHead />
      <div className="grid">
        <Blog />
      </div>
    </div>
  );
};

export default page;
