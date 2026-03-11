"use client";
import React, { useState } from "react";
import { AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  type?: "danger" | "primary";
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  type = "primary",
}: ConfirmProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Dialog Card */}
      <div className="relative bg-white dark:bg-zinc-950 w-full max-w-md rounded-[32px] p-8 shadow-2xl border border-zinc-100 dark:border-zinc-800 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center space-y-4">
          {/* <div
            className={`p-4 rounded-full ${type === "danger" ? "bg-red-50 text-red-600" : "bg-blue-50 text-[#377389]"}`}
          >
            <AlertCircle className="w-8 h-8" />
          </div> */}

          <div className="space-y-2">
            <h3 className="text-xl font-bold font-space-grotesk">{title}</h3>
            <p className="text-sm text-zinc-500 font-montserrat leading-relaxed">
              {message}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1 rounded-full font-bold font-montserrat py-6 border-zinc-200"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`flex-1 rounded-full font-bold font-montserrat py-6 text-white shadow-lg ${
              type === "danger"
                ? "bg-red-600 hover:bg-red-700 shadow-red-200"
                : "bg-[#377389] hover:bg-[#2c5d6f] shadow-[#377389]/20"
            }`}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}
