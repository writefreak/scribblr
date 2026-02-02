"use client";
import { usePathname } from "next/navigation";
// import { Button } from "../ui/button";
// import Image from "./image";
// import { Wrapper } from "./wrapper";
import { cn } from "@/lib/utils";
// import { BurgerMenu } from "./burger-menu";
// import { ModeToggle } from "../theme/toggle";
import Link from "next/link";
import { Wrapper } from "../ui/wrapper";
import { Button } from "../ui/button";
import { Search, Sun } from "lucide-react";
import { BurgerMenu } from "./burger-menu";
// import { IntroPlayback } from "../home/intro-playback";

type Props = {
  className?: string;
};

export function Header({ className }: Props) {
  const path = usePathname();
  const navigations = [
    { title: "Home", url: "/" },
    { title: "Blogs", url: "/blogs" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Reviews", url: "/reviews" },
  ];
  return (
    <header
      className={cn(
        " text-white z-10",
        className,
        path === "/" && " absolute inset-x-0 top-0 left-0",
      )}
    >
      <Wrapper>
        <div>
          <div className=" w-full flex justify-between py-3 font-inter items-center">
            <h2 className="font-bold text-xl md:text-2xl  font-space-grotesk">
              Scribblr.
            </h2>
            {/*  */}

            <div className=" space-x-2 bg-white/20 backdrop-blur-md p-1 rounded-full not-md:hidden">
              {navigations.map((nav) => (
                <Link href={nav.url} key={nav.title}>
                  <Button
                    variant={"ghost"}
                    className={cn(
                      "cursor-pointer rounded-full font-space-grotesk",
                      nav.url === path && "bg-[#377389]",
                    )}
                  >
                    {nav.title}
                  </Button>
                </Link>
              ))}
            </div>
            <div className=" flex items-center gap-2">
              <div className="bg-[#377389] h-10 w-10 flex justify-center items-center rounded-full">
                <Search />
              </div>
              <div className="bg-[#377389] h-10 w-10 flex justify-center items-center rounded-full">
                <Sun />
              </div>
              <div className=" md:hidden">
                <BurgerMenu />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
