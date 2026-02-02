import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Video from "../ui/video";

const Hero = () => {
  return (
    <div className="relative md:h-screen w-full pt-10 md:pt-20 md:mt-0">
      <div className="absolute top-0 left-0 z-0 w-full">
        <img
          src="/These hand typed notes are special because they….jpeg"
          className="md:hidden brightness-50 h-150 object-cover"
          alt=""
        />
        <Video className="hidden md:flex" />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      </div>
      <div className="relative p-4 pt-32 md:pt-12 md:px-14 flex flex-col gap-6 md:gap-10">
        <h1 className="md:text-5xl text-3xl text-white text-left pt-5 md:pt-0 leading-snug">
          Crafting Exceptional Brand Stories <br className="hidden md:flex" />
          With Lasting Impact
        </h1>

        <div className="md:w-full ">
          <div className="relative">
            <div className="flex flex-col gap-9 md:gap-16">
              <p className="text-[15px] text-gray-200 md:w-md">
                At Writefreak Studios, we amplify the voices of startups through
                emotionally resonant storytelling—capturing your dreams, values,
                and challenges in a way that reflects your identity, sets you
                apart, and builds authentic, lasting connections with your
                audience.
              </p>

              <div>
                <Button className="relative group overflow-hidden shadow-none rounded-full text-sm bg-white/10 backdrop-blur-md text-white border border-white hover:bg-transparent hover:border-0 hover:text-white">
                  <div className="absolute bg-[#377389] top-0 left-0 w-0 h-full transition-all duration-1000 ease-out group-hover:w-full hover:text-white z-0"></div>
                  <div className="relative z-10 flex gap-2 items-center">
                    Start a Project
                    <ChevronRight className="group" />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
