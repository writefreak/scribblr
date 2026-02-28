"use client";
import React, { useState } from "react";
import QuillEditor from "@/components/ui/quill";
import { Button } from "@/components/ui/button";
import {
  Save,
  Send,
  Image as ImageIcon,
  Settings2,
  Eye,
  ArrowLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Wrapper } from "@/components/ui/wrapper";
import CustomSelect from "@/components/ui/custom-select";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [category, setCategory] = useState("Technology");
  const router = useRouter();

  const handlePublish = () => {
    console.log({ title, editorContent, category });
  };

  return (
    <Wrapper>
      <div className=" pb-20">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between gap-4 mb-6 md:mb-10 border-b pb-6">
          <div className="flex items-center gap-3">
            {/* <button
              onClick={() => router.back()}
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button> */}
            <h2 className="text-xl md:text-2xl font-bold tracking-tight font-space-grotesk">
              Create New Blog
            </h2>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <Button
              variant="outline"
              className="hidden sm:flex gap-2 rounded-full font-montserrat px-5 border-zinc-300 h-9 text-sm"
            >
              <Save className="w-4 h-4" /> Draft
            </Button>
            <Button
              onClick={handlePublish}
              className="bg-[#377389] hover:bg-[#2c5d6f] text-white rounded-full font-montserrat px-6 md:px-8 h-9 text-sm shadow-md flex gap-2"
            >
              <Send className="w-4 h-4" /> Publish
            </Button>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Title Area */}
          <textarea
            placeholder="Blog Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent text-3xl  font-bold font-space-grotesk outline-none resize-none placeholder:text-zinc-200 dark:placeholder:text-zinc-800 leading-tight"
            rows={1}
          />

          {/* Editor Container */}
          {/* Updated Editor Container in your AddBlog.tsx */}
          <div className=" [&_.ql-editor]:min-h-125 [&_.ql-container]:border-none prose prose-zinc dark:prose-invert max-w-none">
            <QuillEditor value={editorContent} onChange={setEditorContent} />
          </div>

          {/* HORIZONTAL SETTINGS BAR */}
          <div className="pt-2">
            <div className="flex items-center gap-2 mb-4">
              <Settings2 className="w-4 h-4 text-[#377389]" />
              <h3 className="font-bold font-space-grotesk text-sm uppercase tracking-wider">
                Post Details
              </h3>
            </div>

            <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-4 md:gap-6 p-5 md:p-6 border rounded-2xl not-dark:bg-white shadow-sm">
              {/* Category */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-montserrat">
                  Category
                </span>
                <CustomSelect />
              </div>

              {/* Feature Image Upload */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-montserrat">
                  Cover Image
                </label>
                <div className="flex items-center gap-3 p-2 border border-dashed rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 cursor-pointer transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                    <ImageIcon className="w-5 h-5 text-zinc-400 group-hover:text-[#377389]" />
                  </div>
                  <span className="text-xs font-montserrat text-zinc-500">
                    Upload Photo
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-montserrat">
                  Preview
                </label>
                <Button
                  variant="secondary"
                  className="w-full rounded-xl flex gap-2 font-montserrat h-10.5 text-sm"
                >
                  <Eye className="w-4 h-4" /> Preview Mode
                </Button>
              </div>
            </div>

            <p className="mt-4 text-[10px] text-center md:text-left text-zinc-400 font-montserrat italic">
              * Changes are saved automatically as you type.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddBlog;
