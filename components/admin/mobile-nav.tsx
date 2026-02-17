import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Home, Menu, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BellRing,
  LayoutDashboard,
  LogOut,
  Newspaper,
  User,
} from "lucide-react";
import Link from "next/link";
import {
  IconBellRinging,
  IconCategory,
  IconChartBar,
  IconDashboard,
  IconMenuDeep,
  IconMessage,
} from "@tabler/icons-react";
interface Props {
  className?: string;
}

const MobileNav = ({ className }: Props) => {
  return (
    <div className={cn("", className)}>
      <Sheet>
        <SheetTrigger className="" asChild>
          <IconMenuDeep />
        </SheetTrigger>
        <SheetContent className="bg-white p-2">
          <SheetTitle>
            {/* <MainMenu /> */}
            <div className="space-y-5 text-sm pt-10 font-space-grotesk">
              <p className="text-sm hidden md:block">Main Menu</p>
              <Link
                href={"/"}
                className="flex font-space-grotesk bg-[#377389]/20 p-3 hover:bg-[#030712]/20 gap-4 items-center  rounded-md"
              >
                The Scribblr
              </Link>
              <Link
                href={"/admin/dashboard"}
                className="flex  hover:bg-[#030712]/20 gap-4 items-center bg-white/10 p-1.5 rounded-md"
              >
                <IconDashboard width={18} className="text-[#030712]" />
                <p className="text-sm">Dashboard</p>
              </Link>
              <Link
                href={"/admin/blogs"}
                className="flex hover:bg-[#030712]/20 items-center rounded-md p-1.5 gap-4 "
              >
                <Newspaper className="text-[#030712]" width={18} />
                <p>Blogs</p>
              </Link>
              <Link
                href={"/admin/comments"}
                className="flex items-center rounded-md p-1.5 gap-4 hover:bg-[#030712]/20 "
              >
                <IconMessage className="text-[#030712]" width={18} />
                <p>Comments</p>
              </Link>

              <Link
                href={"/admin/categories"}
                className="flex items-center rounded-md p-1.5 gap-4 hover:bg-[#030712]/20"
              >
                <IconCategory className="text-[#030712] " width={18} />
                <p>Categories</p>
              </Link>
              <Link
                href={"/admin/analytics"}
                className="flex items-center rounded-md p-1.5 gap-4 hover:bg-[#030712]/20"
              >
                <IconChartBar className="text-[#030712] " width={18} />
                <p>Analytics</p>
              </Link>
              <Link
                href={"/admin/notifications"}
                className="flex items-center rounded-md p-1.5 gap-4 hover:bg-[#030712]/20"
              >
                <IconBellRinging className="text-[#030712] " width={18} />
                <p>Notifications</p>
              </Link>
            </div>
          </SheetTitle>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
