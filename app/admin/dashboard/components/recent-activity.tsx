"use client";

import React, { useState } from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const recentActivities = [
  {
    id: "1",
    activity: "Mastering React Server Components",
    type: "Post",
    date: "Today",
  },
  {
    id: "2",
    activity: "Tailwind CSS Best Practices",
    type: "Draft",
    date: "Today",
  },
  {
    id: "3",
    activity: "Database Indexing 101",
    type: "Post",
    date: "Last 2 days",
  },
  {
    id: "4",
    activity: "UI/UX Design Trends in 2024",
    type: "Post",
    date: "Yesterday",
  },
  {
    id: "5",
    activity: "User login from new device",
    type: "Security",
    date: "3 days ago",
  },
  {
    id: "6",
    activity: "Updated API Documentation",
    type: "Docs",
    date: "4 days ago",
  },
  {
    id: "7",
    activity: "Deleted obsolete assets",
    type: "System",
    date: "Last week",
  },
  {
    id: "8",
    activity: "New collaborator added",
    type: "Team",
    date: "Last week",
  },
];

export function RecentActivity() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  // Pagination Logic
  const totalPages = Math.ceil(recentActivities.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentItems = recentActivities.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const next = () => setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
  const prev = () => setCurrentPage((p) => Math.max(p - 1, 0));

  return (
    <Card className="px-3 pb-3">
      {/* <CardHeader className="p-0 font-space-grotesk font-medium">
        Recent Activities
      </CardHeader> */}
      <Table className="w-full table-fixed">
        <TableHeader>
          <TableRow className="font-space-grotesk">
            <TableHead className="w-1/2">Recent Activity</TableHead>
            <TableHead className="w-1/4">Type</TableHead>
            <TableHead className="w-1/4 text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium font-montserrat text-xs line-clamp-1">
                {item.activity}
              </TableCell>
              <TableCell className="font-montserrat text-xs">
                <span className={getTypeStyles(item.type)}>{item.type}</span>
              </TableCell>
              <TableCell className="text-right font-montserrat text-xs text-muted-foreground">
                {item.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls inside the Card */}
      <div className="flex items-center justify-between mt-4 px-2">
        <span className="text-[10px] text-muted-foreground font-montserrat">
          Page {currentPage + 1} of {totalPages}
        </span>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={prev}
            disabled={currentPage === 0}
          >
            <ChevronLeft size={14} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={next}
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight size={14} />
          </Button>
        </div>
      </div>
    </Card>
  );
}

const getTypeStyles = (type: any) => {
  switch (type.toLowerCase()) {
    case "post":
      return "text-green-600";
    case "draft":
      return "text-blue-800";
    case "security":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};
