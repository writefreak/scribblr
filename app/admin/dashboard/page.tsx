import React from "react";
import CardAnalytics from "./components/card-analytics";
import { ChartAnalytics } from "./components/chart-analytics";
import { PostOverview } from "./components/post-overview";
import { RecentActivity } from "./components/recent-activity";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <CardAnalytics />
      <ChartAnalytics />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PostOverview />
        <RecentActivity />
      </div>
    </div>
  );
};

export default page;
