import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const CatInput = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const handleAddCategory = () => {
    if (newCategory.trim()) {
      console.log("Adding category:", newCategory);
      // Your logic here
      setNewCategory("");
      setIsAddOpen(false);
    }
  };
  return (
    <div>
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-bold font-space-grotesk">New Category</h3>
          <p className="text-xs text-zinc-500 font-montserrat">
            Enter a name for your new blog category.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-montserrat">
            Category Name
          </label>
          <input
            autoFocus
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="e.g. Lifestyle"
            className="w-full p-3 rounded-xl border bg-zinc-50 dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-blue-600/40 font-montserrat text-sm"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            onClick={() => setIsAddOpen(false)}
            variant="outline"
            className="flex-1 rounded-full font-bold font-montserrat py-6 border-zinc-200"
          >
            Cancel
          </Button>
          <Button
            onClick={handleAddCategory}
            disabled={!newCategory.trim()}
            className="flex-1 rounded-full font-bold font-montserrat py-6 bg-blue-600 text-white  disabled:opacity-50"
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CatInput;
