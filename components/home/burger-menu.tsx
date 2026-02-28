import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  BriefcaseBusiness,
  CircleHelp,
  House,
  LibraryBig,
  Menu,
  Phone,
  Star,
} from "lucide-react";
import Link from "next/link";
// import { Link } from "react-scroll";
// import UserProfile from "./ui/userProfile";
// import { ThemeControl } from "./theme-control";
// import { MobileTheme } from "./mobileTheme";

interface props {
  className?: string;
}
const navigations = [
  { title: "Home", url: "/" },
  { title: "Blogs", url: "/blogs" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
  { title: "Reviews", url: "/reviews" },
];
export function BurgerMenu({ className }: props) {
  return (
    <Sheet>
      <SheetTrigger asChild className={cn("", className)}>
        <Button className="bg-transparent hover:bg-transparent">
          <Menu height={30} width={30} className="md:hidden  text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="pt-8 dark:bg-black/60 backdrop-blur-xl"
      >
        <SheetTitle></SheetTitle>

        <div className="p-4 flex flex-col gap-6">
          <div className="pb-1"></div>
          {links.map((l) => (
            <div
              key={l.id}
              className={`flex items-center gap-2 pb-4 border-b last:border-0`}
            >
              <div>{l.icon}</div>
              <Link key={l.id} href={l.url} className="text-sm font-semibold">
                {l.desc}
              </Link>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
const links = [
  {
    id: 1,
    desc: "Home",
    icon: <House className="h-5 text-[#377389] w-5" />,
    url: "/",
  },
  {
    id: 2,
    desc: "Blogs",
    url: "/blogs",
    icon: <LibraryBig className="h-5 text-[#377389] w-5" />,
  },
  {
    id: 3,
    desc: "Contact",
    url: "/contact",
    icon: <Phone className="h-5 text-[#377389] w-5" />,
  },
  {
    id: 5,
    desc: "About",
    url: "/about",
    icon: <BriefcaseBusiness className="h-5 text-[#377389] w-5" />,
  },
  {
    id: 4,
    desc: "Reviews",
    url: "/reviews",
    icon: <Star className="h-5 text-[#377389] w-5 " />,
  },
];
