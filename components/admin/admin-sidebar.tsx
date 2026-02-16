"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { NavSecondary } from "@/components/admin/nav-secondary";
import { NavMain } from "@/components/admin/nav-main";
import { data } from "@/constants";

export function AdminSidebar({
  user,
  pendings,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  user: any | null;
  pendings: any;
}) {
  return (
    <Sidebar collapsible="icon" className=" bg-card  top-0" {...props}>
      <div className=" bg-card flex-1 max-h-dvh h-screen overflow-y-auto flex flex-col">
        <SidebarHeader className=" bg-card border-b border-border pb-4 mb-4 md:mb-10">
          <Link href={"/"} className="flex items-center gap-2">
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className=" aspect-square items-center justify-center rounded-lg">
                <img
                  src="/logo.png"
                  alt=""
                  className="h-12 md:h-14  object-contain"
                />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="text-lg truncate font-bold">The Scribblr</span>
              </div>
            </SidebarMenuButton>
          </Link>
        </SidebarHeader>
        <SidebarContent className=" bg-card flex-1 overflow-y-auto gap-6 md:gap-8">
          <NavMain items={data.navMain} />
          <NavSecondary items={data.navSecondary} />
        </SidebarContent>
        <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
