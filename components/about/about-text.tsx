import { cn } from "@/lib/utils";
import React from "react";
import { Mail, Star } from "lucide-react";
import Description from "./description";
import ImgDesc from "./img-desc";
import { Wrapper } from "../ui/wrapper";
import Link from "next/link";

interface Props {
  className?: string;
}
const AboutText = ({ className }: Props) => {
  return (
    <div className={cn("", className)}>
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-17 md:gap-20">
          <div className="md:space-y-11 space-y-9">
            <div className="space-y-3">
              <h3 className="text-3xl pb-2 sm:text-5xl font-space-grotesk">
                About Us
              </h3>
              <p className="font-montserrat font-light">
                The Writrr is a platform for insightful, engaging, and inspiring
                content designed to spark curiosity and ignite ideas. We explore
                a wide range of topics, from creative storytelling and personal
                growth to the latest trends in technology and innovation.
              </p>
            </div>
            {/* <ImgDesc className="sm:hidden p-0" /> */}
            <div className="space-y-3">
              <h3 className="text-3xl pb-2 sm:text-5xl font-space-grotesk">
                Our Mission
              </h3>
              <p className="font-montserrat text-sm md:text-base font-light">
                We aim to create content that resonates deeply with our readers,
                sparking inspiration and offering valuable insights. By
                exploring diverse topics and technological trends, we strive to
                connect with your passions and encourage meaningful
                conversations.
              </p>
            </div>

            {/* <div>
            <Description className="sm:hidden" />
          </div> */}
          </div>
          <div>
            {/* <img src="/img8.jpg" alt="" className="rounded-md" /> */}

            <div>
              <Link href={"/#blogs"} className="space-y-10">
                <h3 className=" font-space-grotesk text-3xl pt-7 md:pt-0 sm:text-5xl  hover:underline hover:decoration-2">
                  Dive into our articles and share your thoughts—your voice
                  matters here
                </h3>

                <p className="font-montserrat font-light hidden sm:block">
                  Every story we tell and every idea we explore is crafted with
                  you in mind. Your perspectives enrich the conversation,
                  turning this space into more than just a blog—it's a community
                  where ideas thrive Let your thoughts shape the narrative. and
                  voices resonate.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutText;
