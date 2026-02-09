import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

const Video = ({ className }: Props) => {
  return (
    <div className={cn("", className)}>
      <video
        className="md:w-full brightness-50 object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
