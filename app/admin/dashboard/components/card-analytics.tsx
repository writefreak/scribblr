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

const CardAnalytics = () => {
  return (
    <div className="pt-0">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {analytics.map((a, index) => {
          // Check if it is the last item
          const isLast = index === analytics.length - 1;
          const Icon = a.icon1;
          // 1. Determine which icon to show based on trend
          const TrendIcon = a.isUp ? IconTrendingUp : IconTrendingDown;

          // 2. Define conditional classes
          const trendColorClass = a.isUp
            ? "text-green-500 not-dark:text-green-700"
            : "text-red-500 not-dark:text-red-700";

          const badgeBgClass = a.isUp ? "bg-green-500/20" : "bg-red-500/20";

          return (
            <Card
              key={index}
              className={`px-4 py-4 dark:bg-transparent ${isLast ? "md:grid hidden" : ""}`}
            >
              <div>
                <div className="h-7 w-7 bg-blue-600/30 rounded-full flex items-center justify-center">
                  <Icon
                    className="not-dark:text-blue-600 text-blue-400"
                    size={16}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col pt-4">
                    <span className="text-[10px] font-montserrat not-dark:text-gray-600 not-dark:font-medium">
                      {a.title}
                    </span>
                    <span className="font-space-grotesk font-semibold">
                      {a.value}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-montserrat">
                      {a.duration}
                    </span>
                    {/* 3. Apply the conditional background */}
                    <Badge
                      className={`${badgeBgClass} border-none shadow-none flex gap-1 items-center px-1.5 py-0.5`}
                    >
                      <TrendIcon
                        strokeWidth={2}
                        size={12}
                        className={trendColorClass} // 4. Apply conditional text color
                      />
                      <span
                        className={`text-[9px] font-montserrat font-bold ${trendColorClass}`}
                      >
                        {a.percentage}
                      </span>
                    </Badge>
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

export default CardAnalytics;

const analytics = [
  {
    icon1: IconNews,
    title: "Engagements",
    value: "3.6k",
    duration: "Last 30 days",
    percentage: "40.35%",
    isUp: true, // Use this for logic
  },
  {
    icon1: IconBookUpload,
    title: "Published Blogs",
    value: 300,
    duration: "Last 30 days",
    percentage: "12.5%",
    isUp: true, // This will trigger red and TrendingDown
  },
  {
    icon1: IconMessage,
    title: "Total Comments",
    value: 100,
    duration: "Last 30 days",
    percentage: "12.5%",
    isUp: false, // This will trigger red and TrendingDown
  },
  {
    icon1: IconNotesOff,
    title: "Total Drafts",
    value: 30,
    duration: "Last 30 days",
    percentage: "12.5%",
    isUp: true, // This will trigger red and TrendingDown
  },
  {
    icon1: IconCategoryPlus,
    title: "Total Categories",
    value: 4,
    duration: "Last 30 days",
    percentage: "12.5%",
    isUp: true, // This will trigger red and TrendingDown
  },
];
