"use state";
import React, { useState } from "react";
import HtmlText from "../ui/html-text";
import { Separator } from "../ui/separator";
import { Heart } from "lucide-react";

const Blog = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="">
      <div>
        <div className="p-6 md:p-0 space-y-5">
          <div className=""></div>
          <div className="">
            <div className="md:pt-6 space-y-3">
              <div className="space-y-3">
                <h3 className="font-space-grotesk md:w-full md:text-xl">
                  Technology
                </h3>
                <div className=" bg-[#377389] w-16 rounded-full text-center p-[0.5]"></div>
                <div>
                  <HtmlText
                    text={text}
                    className="font-montserrat text-[13px] md:text-sm  font-light py-7 "
                  />
                </div>

                <Separator />
                <div className="flex items-center justify-between">
                  <div className="font-montserrat text-xs md:text-sm text-gray-300 not-dark:text-gray-500">
                    February 06, 2026
                  </div>
                  <div className="font-montserrat text-sm text-gray-300 not-dark:text-gray-500">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setLiked(!liked);
                      }}
                      className="flex items-center gap-1 z-10"
                    >
                      <Heart
                        height={20}
                        width={20}
                        className={
                          liked
                            ? "fill-red-500 stroke-red-500"
                            : "dark:stroke-white"
                        }
                        strokeWidth={1}
                      />
                      <span className="text-xs">1.2k likes</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

const text = `
                  The startup secured fresh funding to grow its team and expand
                  operations into multiple West African markets. What started as
                  a small, ambitious idea is now shaping up to be one of the
                  region’s most closely watched growth stories in the technology
                  space. Over the past few years, West Africa has quietly become
                  a hotspot for innovation. With a young population, increasing
                  internet access, and a growing appetite for digital solutions,
                  startups are finding fertile ground to build products that
                  solve real, everyday problems. This latest funding round is
                  another clear signal that investors are paying close
                  attention. ### From local idea to regional ambition The
                  startup, founded by a group of young entrepreneurs, initially
                  focused on solving a localized problem using technology. Their
                  early goal was simple: build a product that works well in
                  their immediate environment. That focus paid off. Strong user
                  adoption, steady revenue growth, and positive word-of-mouth
                  quickly set them apart from competitors. As demand grew beyond
                  their initial market, it became clear that staying local would
                  limit their potential. Businesses and users in neighboring
                  countries were facing similar challenges, and the startup’s
                  solution was proving adaptable across borders. Expansion was
                  no longer a “someday” plan. It became the next logical step.
                  ### What the funding means The newly raised funds will be used
                  in three major areas: First, **team expansion**. Scaling
                  across countries requires more than just ambition. The startup
                  plans to hire engineers, product designers, customer support
                  staff, and regional operations managers. Building a strong
                  internal team is critical to maintaining product quality as
                  the user base grows. Second, **market entry and operations**.
                  Expanding into multiple West African countries means
                  navigating different regulations, payment systems, and user
                  behaviors. Part of the funding will go into setting up local
                  partnerships, adapting the product for each market, and
                  ensuring compliance with local laws. Third, **product
                  improvement**. Growth brings feedback, and feedback drives
                  better products. The startup intends to invest heavily in
                  improving platform performance, adding new features, and
                  strengthening security to handle a much larger user base. ###
                  Investor confidence in West African tech This funding round
                  reflects a broader trend. Investors are increasingly confident
                  in West African startups, especially those that show clear
                  traction and a realistic expansion strategy. Rather than
                  chasing hype, many investors are now looking for companies
                  with solid fundamentals, clear use cases, and teams that
                  understand the region deeply.  `;
