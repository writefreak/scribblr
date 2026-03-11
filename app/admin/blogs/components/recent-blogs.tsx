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
import { ConfirmDialog } from "@/components/ui/dialog";
// IMPORT THE COMPONENT HERE

const INITIAL_POSTS = [
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
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayLimit, setDisplayLimit] = useState(6);

  // MODAL STATE
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<{
    id: number;
    title: string;
  } | null>(null);

  const router = useRouter();

  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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

  // HANDLERS
  const openDeleteModal = (post: any) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedPost) {
      setPosts(posts.filter((p) => p.id !== selectedPost.id));
      setIsModalOpen(false);
      setSelectedPost(null);
    }
  };

  return (
    <div className="w-full space-y-6 pb-20">
      {/* 2. USE THE IMPORTED COMPONENT */}
      <ConfirmDialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Blog Post?"
        message={`Are you sure you want to delete "${selectedPost?.title}"? This cannot be undone.`}
        type="danger"
      />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-7">
        <div>
          <h2 className="md:text-2xl text-xl font-bold tracking-tight font-space-grotesk">
            Recent Blogs
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm font-montserrat">
            Manage and track your latest stories.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <SearchBar
            onSearch={(term) => {
              setSearchTerm(term);
              setDisplayLimit(6);
            }}
          />
          <Button
            onClick={() => router.push("/admin/blogs/new-blog")}
            className="bg-[#377389] hover:bg-[#2c5d6f] text-white"
          >
            Add New <Plus strokeWidth={1.5} className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visiblePosts.map((post) => (
          <div
            key={post.id}
            className="group flex flex-col justify-between p-5 border rounded-xl not-dark:bg-white  shadow-sm hover:border-[#377389]/40 transition-all"
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
                <span className="text-[11px] text-gray-400 flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> {post.views}
                </span>
              </div>
              <h3 className="font-bold font-space-grotesk text-sm md:text-base line-clamp-2">
                {post.title}
              </h3>
              <div className="flex items-center gap-3 text-[11px] text-gray-500 font-montserrat">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" /> {post.category}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 mt-6 pt-4 border-t dark:border-zinc-900">
              <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full text-zinc-500">
                <ExternalLink className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full text-zinc-500">
                <Pencil className="w-4 h-4" />
              </button>

              {/* 3. TRIGGER THE MODAL */}
              <button
                onClick={() => openDeleteModal(post)}
                className="p-2 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-full text-red-600"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center pt-8">
          <Button
            variant="outline"
            onClick={toggleDisplay}
            className="rounded-full border-[#377389] text-[#377389] px-10"
          >
            {isExpanded ? "Show Less" : "See More"}
          </Button>
        </div>
      )}
    </div>
  );
}
