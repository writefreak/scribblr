"use client";
import React, { useState } from "react";
import {
  Pencil,
  Trash2,
  Calendar,
  Tag,
  Eye,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import SearchBar from "@/components/ui/search";

// --- MOCK DATA ---
const RECENT_POSTS = [
  {
    id: 1,
    title: "University Students Protest Sudden Tuition Increase",
    category: "Education",
    date: "Feb 24, 2026",
    status: "Published",
    views: "1.2k",
  },
  {
    id: 2,
    title: "New Mobile App Helps Small Businesses Track Sales",
    category: "Business",
    date: "Feb 20, 2026",
    status: "Published",
    views: "850",
  },
  {
    id: 3,
    title: "Local Startup Raises Funding to Expand Across Africa",
    category: "Technology",
    date: "Feb 18, 2026",
    status: "Draft",
    views: "0",
  },
  {
    id: 4,
    title: "Social Media Users React to Platform Changes",
    category: "Technology",
    date: "Feb 15, 2026",
    status: "Published",
    views: "2.4k",
  },
  {
    id: 5,
    title: "AI Integration in Modern Healthcare Systems",
    category: "Healthcare",
    date: "Feb 12, 2026",
    status: "Published",
    views: "3.1k",
  },
  {
    id: 6,
    title: "The Future of Remote Work in Post-Pandemic Era",
    category: "Business",
    date: "Feb 10, 2026",
    status: "Draft",
    views: "120",
  },
  {
    id: 7,
    title: "New Renewable Energy Projects Launching in West Africa",
    category: "Technology",
    date: "Feb 08, 2026",
    status: "Published",
    views: "940",
  },
  {
    id: 8,
    title: "Global Market Trends: What to Expect in Q2",
    category: "Business",
    date: "Feb 05, 2026",
    status: "Published",
    views: "1.5k",
  },
];

export default function RecentBlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayLimit, setDisplayLimit] = useState(6);
  const router = useRouter();

  // 1. Filter logic
  const filteredPosts = RECENT_POSTS.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // 2. Pagination/Limit logic
  const visiblePosts = filteredPosts.slice(0, displayLimit);
  const isExpanded = displayLimit >= filteredPosts.length;
  const hasMore = filteredPosts.length > 6;

  const toggleDisplay = () => {
    if (isExpanded) {
      setDisplayLimit(6);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setDisplayLimit(filteredPosts.length);
    }
  };

  return (
    <div className="w-full space-y-6 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-7">
        <div>
          <h2 className="md:text-2xl text-xl font-bold tracking-tight font-space-grotesk">
            Recent Blogs
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm font-montserrat">
            Manage and track the performance of your latest stories.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <SearchBar
            onSearch={(term) => {
              setSearchTerm(term);
              setDisplayLimit(6); // Reset limit on search to avoid empty views
            }}
          />
          <Button
            onClick={() => router.push("/admin/blogs/new-blog")}
            className="bg-[#377389] hover:bg-[#2c5d6f] text-white shrink-0 shadow-sm"
          >
            Add New
            <Plus strokeWidth={1.5} className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visiblePosts.map((post) => (
          <div
            key={post.id}
            className="group flex flex-col justify-between p-5 border rounded-xl not-dark:bg-white  shadow-sm hover:shadow-md hover:border-[#377389]/40 transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-4">
                <span
                  className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    post.status === "Published"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                  }`}
                >
                  {post.status}
                </span>
                <span className="text-[11px] font-medium text-gray-400 flex items-center gap-1 font-montserrat">
                  <Eye strokeWidth={1.5} className="w-3.5 h-3.5" /> {post.views}
                </span>
              </div>

              <h3 className="font-bold font-space-grotesk text-sm md:text-base text-zinc-900 dark:text-zinc-100 line-clamp-2 leading-snug group-hover:text-[#377389] transition-colors">
                {post.title}
              </h3>

              <div className="flex items-center gap-3 font-montserrat text-[11px] text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Calendar strokeWidth={1.5} className="w-3.5 h-3.5" />{" "}
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5 capitalize">
                  <Tag className="w-3.5 h-3.5" strokeWidth={1.5} />{" "}
                  {post.category}
                </span>
              </div>
            </div>

            {/* --- ACTION FOOTER --- */}
            <div className="flex items-center justify-end gap-2 mt-6 pt-4 border-t border-gray-100 dark:border-zinc-900">
              <button
                title="Preview"
                className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full text-zinc-500 transition-colors border border-transparent hover:border-zinc-200"
              >
                <ExternalLink strokeWidth={1.5} className="w-4 h-4" />
              </button>
              <button
                title="Edit"
                className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full text-zinc-500 transition-colors border border-transparent hover:border-zinc-200"
              >
                <Pencil strokeWidth={1.5} className="w-4 h-4" />
              </button>
              <button
                title="Delete"
                className="p-2 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-full text-red-600 transition-colors border border-transparent hover:border-red-100"
              >
                <Trash2 strokeWidth={1.5} className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {/* --- EMPTY STATE --- */}
        {filteredPosts.length === 0 && (
          <div className="col-span-full py-24 text-center border-2 border-dashed rounded-2xl bg-gray-50/50 dark:bg-zinc-900/20">
            <p className="text-gray-500 font-montserrat italic">
              No blogs found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>

      {/* --- SEE MORE / LESS TOGGLE --- */}
      {hasMore && filteredPosts.length > 0 && (
        <div className="flex justify-center pt-8">
          <Button
            variant="outline"
            onClick={toggleDisplay}
            className="group flex items-center gap-2 px-13 py-3 border border-[#377389] text-[#377389] hover:bg-[#377389] hover:text-white transition-all duration-300 rounded-full font-montserrat font-bold text-sm shadow-md active:scale-95"
          >
            {isExpanded ? (
              <>
                Show Less{" "}
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                See More{" "}
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
