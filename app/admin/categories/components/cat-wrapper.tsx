"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Edit,
  GraduationCap,
  Newspaper,
  Plus,
  Star,
  Telescope,
  Trash2,
  X, // Added for the close button
} from "lucide-react";
import CatInput from "./cat-input";

export function CatWrapper() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-7">
      <div>
        <h2 className="md:text-2xl text-xl font-bold tracking-tight font-space-grotesk flex items-center gap-3">
          Categories
        </h2>
        <p className="text-muted-foreground text-xs md:text-sm font-montserrat">
          View and add new blog categories
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
        {cat.map((c, index) => {
          const Icon = c.icon;
          const isActive = activeIndex === index;

          return (
            <Card
              key={index}
              onClick={() => handleCardClick(index)}
              className={`p-4 cursor-pointer dark:bg-transparent transition-all duration-300 ease-in-out overflow-hidden relative h-28 ${
                isActive
                  ? "ring-2 ring-blue-600/30 shadow-md md:h-44"
                  : "hover:bg-gray-50/5"
              }`}
            >
              <div
                className={`flex flex-col gap-5 text-lg font-raleway text-white transition-opacity duration-300 ${
                  isActive
                    ? "max-md:opacity-0 max-md:pointer-events-none"
                    : "opacity-100"
                }`}
              >
                <div className="h-7 w-7 bg-blue-600/30 rounded-full flex items-center justify-center">
                  <Icon
                    className="not-dark:text-blue-600 text-blue-400"
                    size={16}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-[15px] font-space-grotesk not-dark:text-gray-600 not-dark:font-medium">
                  {c.title}
                </div>
              </div>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none md:grid-rows-[0fr]"
                } ${
                  isActive
                    ? "max-md:absolute max-md:inset-0 max-md:flex max-md:items-center max-md:justify-center max-md:p-4"
                    : ""
                }`}
              >
                <div className="flex flex-col md:flex-row gap-3 w-full md:pt-3">
                  <Button className="bg-blue-800 font-space-grotesk text-white h-9 md:h-8 flex-1">
                    <Edit size={16} className="" />
                    <span className="text-xs md:text-sm">Edit</span>
                  </Button>

                  <Button className="bg-red-700 text-white font-space-grotesk h-9 md:h-8 flex-1">
                    <Trash2 size={16} className="" />
                    <span className="text-xs md:text-sm">Delete</span>
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* --- ADD CATEGORY TRIGGER --- */}
      <Card
        onClick={() => setIsAddOpen(true)}
        className="flex dark:bg-transparent items-center justify-center gap-3 p-4 cursor-pointer hover:bg-gray-50/5 transition-colors border-dashed border-2 border-zinc-200 dark:border-zinc-800"
      >
        <div className="h-7 w-7 bg-blue-600/30 rounded-full flex items-center justify-center">
          <Plus
            className="not-dark:text-blue-600 text-blue-400"
            size={16}
            strokeWidth={1.5}
          />
        </div>
        <span className="font-space-grotesk">Add Category</span>
      </Card>

      {/* --- ADD CATEGORY OVERLAY --- */}
      {isAddOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setIsAddOpen(false)}
          />
          <div className="relative bg-white dark:bg-zinc-950 w-full max-w-sm rounded-[32px] p-8 shadow-2xl border border-zinc-100 dark:border-zinc-800 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsAddOpen(false)}
              className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-600"
            >
              <X className="w-5 h-5" />
            </button>
            <CatInput />
          </div>
        </div>
      )}
    </div>
  );
}

const cat = [
  { title: "Tech News", icon: Newspaper },
  { title: "Tech Tutorials", icon: GraduationCap },
  { title: "Tech Insights", icon: Telescope },
  { title: "Product Reviews", icon: Star },
];
