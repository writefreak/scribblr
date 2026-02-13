import About from "@/components/about/about";
import AboutText from "@/components/about/about-text";
import ImgDesc from "@/components/about/img-desc";
import React from "react";

const page = () => {
  return (
    <div>
      <About />
      <div className="md:pb-16">
        <AboutText />
      </div>
    </div>
  );
};

export default page;
