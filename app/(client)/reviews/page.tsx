import { AddReview } from "@/components/reviews/add-review";
import ReviewCard from "@/components/reviews/review-card";
import ReviewHero from "@/components/reviews/review-hero";
import React from "react";

const page = () => {
  return (
    <div className="md:pb-16">
      <ReviewHero />
      <ReviewCard />
      <AddReview
        text="Your story deserves to be heard"
        title="Leave us a Review"
      />
    </div>
  );
};

export default page;
