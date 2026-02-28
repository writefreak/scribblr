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
} from "lucide-react";

export function CatWrapper() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
              // Mobile: Fixed h-28 | Desktop: h-28 expanding to h-44
              className={`p-4 cursor-pointer transition-all duration-300 ease-in-out overflow-hidden relative h-28 ${
                isActive
                  ? "ring-2 ring-blue-600/30 shadow-md md:h-44"
                  : "hover:bg-gray-50/5"
              }`}
            >
              {/* --- INFO LAYER --- */}
              {/* On mobile: Disappears when active. On desktop: Always visible. */}
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

              {/* --- BUTTONS LAYER --- */}
              {/* On mobile: Centers vertically/horizontally when active. On desktop: Slides in below. */}
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

      <Card className="flex items-center justify-center gap-3 p-4 ">
        <div className="h-7 w-7 bg-blue-600/30 rounded-full flex items-center justify-center">
          <Plus
            className="not-dark:text-blue-600 text-blue-400"
            size={16}
            strokeWidth={1.5}
          />
        </div>
        <span className="font-space-grotesk">Add Category</span>
      </Card>
    </div>
  );
}

const cat = [
  { title: "Tech News", icon: Newspaper },
  { title: "Tech Tutorials", icon: GraduationCap },
  { title: "Tech Insights", icon: Telescope },
  { title: "Product Reviews", icon: Star },
];
