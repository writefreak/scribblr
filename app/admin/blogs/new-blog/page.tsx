// app/page.jsx (or pages/index.jsx)
"use client"; // This is necessary for App Router projects

import QuillEditor from "@/components/ui/quill";
import React, { useState } from "react";
import AddBlog from "../components/add-blog";

const page = () => {
  return (
    <div>
      <AddBlog />
    </div>
  );
};

export default page;
