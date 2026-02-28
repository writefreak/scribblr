"use client";

import { type Icon } from "@tabler/icons-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}) {
  const path = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-3">
        <SidebarMenu>
          {items.map((item) => {
            const isActive = path === item.url;
            const isAddBlogActive = path === "/admin/blogs/new-blog";
            const isRecentBlogsActive = path === "/admin/blogs";
            // BLOGS = ACCORDION
            if (item.title === "Blogs") {
              return (
                <SidebarMenuItem key={item.title}>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="blogs">
                      <AccordionTrigger className="px-2 h-12 rounded-md hover:bg-muted">
                        <div className="flex items-center gap-3">
                          {item.icon && (
                            <item.icon style={{ height: 22, width: 22 }} />
                          )}
                          <span className="text-base">Blogs</span>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="flex flex-col gap-1 pt-2 font-space-grotesk">
                        <Link href="/admin/blogs/new-blog">
                          <SidebarMenuButton
                            className={cn(
                              "h-9",
                              isAddBlogActive && "bg-[#377389]/80",
                            )}
                          >
                            Add Blog
                          </SidebarMenuButton>
                        </Link>

                        <Link href="/admin/blogs">
                          <SidebarMenuButton
                            className={cn(
                              "h-9",
                              isRecentBlogsActive && "bg-[#377389]/80",
                            )}
                          >
                            Recent Blogs
                          </SidebarMenuButton>
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </SidebarMenuItem>
              );
            }

            // NORMAL ITEMS
            return (
              <SidebarMenuItem key={item.title}>
                <Link href={item.url}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={cn("h-11", isActive && "bg-[#377389]/80")}
                  >
                    {item.icon && (
                      <item.icon style={{ height: 22, width: 22 }} />
                    )}
                    <span className="text-base font-space-grotesk">
                      {item.title}
                    </span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
