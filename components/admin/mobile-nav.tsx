"use client";

import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  IconBellRinging,
  IconCategory,
  IconChartBar,
  IconDashboard,
  IconMenuDeep,
  IconMessage,
  IconSettings,
} from "@tabler/icons-react";

interface Props {
  className?: string;
}

const MobileNav = ({ className }: Props) => {
  const pathname = usePathname();

  const navItems = [
    { title: "Dashboard", href: "/admin/dashboard", icon: IconDashboard },
    {
      title: "Blogs",
      href: "/admin/blogs",
      icon: Newspaper,
      subItems: [
        { title: "All Blogs", href: "/admin/blogs" },
        { title: "Add Blogs", href: "/admin/blogs/new-blog" },
      ],
    },
    { title: "Comments", href: "/admin/comments", icon: IconMessage },
    { title: "Categories", href: "/admin/categories", icon: IconCategory },
    { title: "Analytics", href: "/admin/analytics", icon: IconChartBar },
    {
      title: "Notifications",
      href: "/admin/notifications",
      icon: IconBellRinging,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: IconSettings,
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div className={cn("", className)}>
      <Sheet>
        <SheetTrigger className="" asChild>
          <IconMenuDeep />
        </SheetTrigger>
        <SheetContent className=" p-2">
          <SheetTitle>
            <div className="space-y-5 text-sm pt-10 font-space-grotesk">
              <p className="text-sm hidden md:block">Main Menu</p>

              {/* Home Brand Link */}
              <Link
                href={"/"}
                className={cn(
                  "flex font-space-grotesk p-3 hover:bg-[#030712]/20 gap-4 items-center rounded-md",
                  isActive("/")
                    ? "bg-[#377389]/80 not-dark:text-white"
                    : "dark:bg-[#377389]/20",
                )}
              >
                The Scribblr
              </Link>

              {navItems.map((item) => {
                const Icon = item.icon;
                const isItemActive = item.subItems
                  ? pathname.startsWith(item.href)
                  : isActive(item.href);

                // Accordion logic for Blogs
                if (item.title === "Blogs") {
                  return (
                    <Accordion
                      key={item.title}
                      type="single"
                      collapsible
                      className="w-full border-none"
                    >
                      <AccordionItem value="blogs" className="border-none">
                        <AccordionTrigger className="flex hover:bg-[#030712]/20 items-center rounded-md p-1.5 gap-4 hover:no-underline font-normal py-0">
                          <div className="flex items-center gap-4">
                            <Icon
                              width={18}
                              className="not-dark:text-[#030712]"
                            />
                            <p className="font-semibold">{item.title}</p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-0">
                          <div className="flex flex-col gap-2 pl-9">
                            {item.subItems?.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={cn(
                                  "p-1.5 rounded-md hover:bg-[#030712]/10",
                                  isActive(sub.href)
                                    ? "font-bold text-[#377389]"
                                    : "",
                                )}
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                }

                // Standard Link logic
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-md p-1.5 gap-4 hover:bg-[#030712]/20",
                      isItemActive ? "bg-[#377389]/80 text-white" : "",
                    )}
                  >
                    <Icon
                      width={18}
                      className={cn(
                        isItemActive ? "text-white" : "not-dark:text-[#030712]",
                      )}
                    />
                    <p>{item.title}</p>
                  </Link>
                );
              })}
            </div>
          </SheetTitle>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
