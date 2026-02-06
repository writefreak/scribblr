import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  className?: string;
  search?: string;
}

const BlogSearch = ({ className, search }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function searchHandler(text: any) {
    const params = new URLSearchParams(searchParams);
    params.set("search", text.target.value);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div
      className={cn(
        " md:w-125 w-[360px] pt-2 md:pt-0 md:pb-5 space-y-3 ",
        className,
      )}
    >
      <div className="md:pb-2">
        <form
          action=""
          className="bg-white/20 text-white backdrop-blur-xl flex rounded-full items-center px-2 border border-gray-500"
        >
          <input
            value={search}
            onChange={searchHandler}
            type="text"
            placeholder="Search blogs.."
            className="outline-none font-space-grotesk w-full p-3 bg-transparent"
          />

          <Button className="h-10 bg-[#377389] text-white hover:bg-transparent hover:border w-10 rounded-full">
            <Search />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BlogSearch;
