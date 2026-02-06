import React from "react";
import Link from "next/link";
import { Wrapper } from "../ui/wrapper";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="bg-[#377389] dark:bg-[#171717]">
          <Wrapper>
            <div className="md:pb-10">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <Link href={"/"} className="flex items-center"></Link>

                <div className="grid grid-cols-3 md:flex flex-row gap-6 pb-10 md:pb-0 md:gap-20 py-6 md:py-10">
                  <div className="space-y-2">
                    <h3 className="md:text-lg font-space-grotesk font-bold text-white">
                      Quick Links
                    </h3>
                    <div className="flex flex-col gap-2">
                      {links.map((l, index) => (
                        <Link key={index} href={l.link}>
                          <p className="md:text-sm  text-xs hover:underline font-montserrat text-gray-200">
                            {l.slug}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="md:text-lg font-space-grotesk font-bold text-white">
                      Social Media
                    </h3>
                    <div className="flex flex-col gap-2">
                      {socials.map((l, index) => (
                        <Link key={index} href={l.link}>
                          <p className="md:text-sm hover:underline text-xs font-montserrat text-gray-200">
                            {l.slug}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="md:text-lg font-space-grotesk font-bold text-white">
                      Legals
                    </h3>
                    <div className="flex flex-col gap-2">
                      {legals.map((l, index) => (
                        <Link key={index} href={l.link}>
                          <p className="md:text-sm hover:underline text-xs font-montserrat text-gray-200">
                            {l.slug}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const links = [
  {
    slug: "Home",
    link: "#",
  },
  {
    slug: "Blogs",
    link: "#",
  },
  {
    slug: "About",
    link: "#",
  },
  {
    slug: "Contact",
    link: "#",
  },
];
const legals = [
  {
    slug: "Privacy policy",
    link: "#",
  },
  {
    slug: "Terms & Conditions",
    link: "#",
  },
];

const socials = [
  {
    slug: "Whatsapp",
    link: "https://wa.link/bgcqtb",
  },
  {
    slug: "Instagram",
    link: "https://www.instagram.com/esquaresax?utm_source=qr&igsh=MTQzd3o3YnpwY3Bz",
  },
  {
    slug: "Tiktok",
    link: "https://www.tiktok.com/@youngenterprise204?_r=1&_t=ZS-92sgM6SVJTw",
  },
];
