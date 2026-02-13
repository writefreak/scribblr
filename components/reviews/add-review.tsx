"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  text?: string;
  title?: string;
}

export function AddReview({ text, title }: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(""); // 👈 new

  const handleSave = async () => {
    setLoading(true);
    setSuccessMsg("");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, businessName, reviewText }),
      });

      if (res.ok) {
        setName("");
        setEmail("");
        setBusinessName("");
        setReviewText("");

        // show success message for 2s then close dialog
        setSuccessMsg("✅ Your review has been submitted!");
        setTimeout(() => {
          setSuccessMsg("");
          setOpen(false);
        }, 2000);
      } else {
        console.error("Failed to submit review");
        setSuccessMsg("❌ Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      setSuccessMsg("❌ Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <h2 className="md:text-xl text-sm font-space-grotesk">{text}</h2>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="">
          <Button className="h-7 md:p-4 text-xs md:text-sm font-space-grotesk hover:bg-[#377389] hover:-translate-y-1 transition-all duration-500 bg-[#377389] text-white rounded-full">
            {title}
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-106.25 not-dark:bg-white">
          <DialogHeader>
            <DialogTitle className="font-space-grotesk">
              Write a review
            </DialogTitle>
            <DialogDescription className="font-montserrat text-xs">
              Tell others how you feel about our blogs and how you'd like us to
              improve
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 pt-4">
            <div className="grid gap-3">
              <input
                type="text"
                placeholder="Please input your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="placeholder:text-xs border border-gray-600 font-montserrat p-2 rounded-md text-sm"
              />
            </div>

            <div className="grid gap-3">
              <textarea
                placeholder="Write your review..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="h-20 placeholder:text-xs border border-gray-600 font-montserrat p-2 rounded-md text-sm resize-none"
                draggable="false"
              ></textarea>
            </div>
            {successMsg && (
              <p className="text-green-600 text-xs">{successMsg}</p> // 👈 shows feedback
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="border border-gray-600 font-montserrat"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              onClick={handleSave}
              className="bg-[#377389] dark:text-white"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
