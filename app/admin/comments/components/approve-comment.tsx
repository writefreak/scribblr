"use client";

import React, { useState } from "react";
import { Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock data array
const initialReviews = [
  {
    id: "1",
    name: "Alex Johnson",
    businessName: "TechNova Solutions",
    reviewText:
      "The design interface is incredibly intuitive. It has streamlined our entire workflow.",
    status: "pending",
  },
  {
    id: "2",
    name: "Sarah Chen",
    businessName: "Creative Flow Studio",
    reviewText:
      "Absolutely love the typography choices here. Clean, modern, and very professional.",
    status: "approved",
  },
  {
    id: "3",
    name: "Marcus Thorne",
    businessName: "Thorne Marketing",
    reviewText:
      "Great support and even better results. The responsiveness on mobile is top-notch.",
    status: "pending",
  },
  {
    id: "4",
    name: "Marcus Thorne",
    businessName: "Thorne Marketing",
    reviewText:
      "Great support and even better results. The responsiveness on mobile is top-notch.",
    status: "pending",
  },
  {
    id: "5",
    name: "Marcus Thorne",
    businessName: "Thorne Marketing",
    reviewText:
      "Great support and even better results. The responsiveness on mobile is top-notch.",
    status: "pending",
  },
];

const ApproveComment = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [approvingIds, setApprovingIds] = useState<string[]>([]);
  const [deletingIds, setDeletingIds] = useState<string[]>([]);

  // Approve a review locally
  const handleApprove = (id: string) => {
    setApprovingIds((prev) => [...prev, id]);

    // Simulating a brief delay for UI feedback
    setTimeout(() => {
      setReviews((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: "approved" } : r)),
      );
      setApprovingIds((prev) => prev.filter((lid) => lid !== id));
    }, 500);
  };

  // Delete a review locally
  const handleDelete = (id: string) => {
    setDeletingIds((prev) => [...prev, id]);

    // Simulating a brief delay for UI feedback
    setTimeout(() => {
      setReviews((prev) => prev.filter((r) => r.id !== id));
      setDeletingIds((prev) => prev.filter((lid) => lid !== id));
    }, 500);
  };

  return (
    <div>
      <div className="md:px-0 md:pt-0 pt-10">
        {reviews.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-70 overflow-y-hidden">
            <Info height={40} width={40} className="text-neutral-400 mb-2" />
            <p className="text-center text-xl text-neutral-500">
              Sorry, No designs yet
            </p>
          </div>
        ) : (
          <div className="flex md:grid md:grid-cols-3 gap-4 no-scrollbar overflow-x-auto scroll-snap-x scroll-start-offset snap-x snap-mandatory">
            {reviews.map((t) => (
              <Card
                data-aos="zoom-in"
                key={t.id}
                className="p-5 py-9 md:py-8 dark:bg-transparent  rounded-md shrink-0 w-[85%] snap-start md:w-auto flex flex-col justify-between"
              >
                <div>
                  <p className="font-inter text-[12.6px] font-montserrat not-dark:text-black/80">
                    {t.reviewText}
                  </p>

                  <div className="not-dark:text-black font-space-grotesk flex flex-col gap-2 pt-5 md:pt-5">
                    <h3 className="font-raleway text-sm font-semibold">
                      {t.name}
                    </h3>
                    <span className="font-raleway text-xs">
                      {t.businessName}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    className="bg-blue-800 font-space-grotesk text-white h-8 flex-1"
                    disabled={
                      approvingIds.includes(t.id) || t.status === "approved"
                    }
                    onClick={() => handleApprove(t.id)}
                  >
                    <span className="text-xs md:text-sm">
                      {t.status === "approved"
                        ? "Approved"
                        : approvingIds.includes(t.id)
                          ? "Approving..."
                          : "Approve"}
                    </span>
                  </Button>
                  <Button
                    className="bg-red-700 text-white font-space-grotesk h-8 flex-1"
                    disabled={deletingIds.includes(t.id)}
                    onClick={() => handleDelete(t.id)}
                  >
                    <span className="text-xs  md:text-sm">
                      {deletingIds.includes(t.id) ? "Deleting..." : "Delete"}
                    </span>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApproveComment;
