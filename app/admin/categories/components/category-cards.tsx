import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  IconBookUpload,
  IconCategoryPlus,
  IconMessage,
  IconNews,
  IconNotesOff,
  IconTrendingDown,
  IconTrendingUp,
} from "@tabler/icons-react";
import React from "react";

const CategoryCards = () => {
  return (
    <div className="pt-0">
      <div className="grid grid-cols-2 gap-4">
        {analytics.map((a, index) => {
          // Check if it is the last item
          const isLast = index === analytics.length - 1;
          const Icon = a.icon1;

          const badgeBgClass = a.isUp ? "bg-green-500/20" : "bg-red-500/20";

          return (
            <Card
              key={index}
              className={`px-4 py-2 ${isLast ? "md:grid hidden" : ""}`}
            >
              <div>
                <div className="h-7 w-7 bg-blue-600/30 rounded-full flex items-center justify-center">
                  <Icon
                    className="not-dark:text-blue-600 text-blue-400"
                    size={16}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-col pt-4">
                    <span className="text-[10px] font-montserrat not-dark:text-gray-600 not-dark:font-medium">
                      {a.title}
                    </span>
                    <span className="font-space-grotesk font-semibold">
                      {a.value}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryCards;

const analytics = [
  {
    icon1: IconBookUpload,
    title: "Tech News",
    value: 300,

    isUp: true, // This will trigger red and TrendingDown
  },
  {
    icon1: IconMessage,
    title: "Tech Tutorials",
    value: 100,

    isUp: false, // This will trigger red and TrendingDown
  },
  {
    icon1: IconNotesOff,
    title: "Reviews & Comparisons",
    value: 30,

    isUp: true, // This will trigger red and TrendingDown
  },
  {
    icon1: IconCategoryPlus,
    title: "Tech Insights",
    value: 4,

    isUp: true, // This will trigger red and TrendingDown
  },
];
