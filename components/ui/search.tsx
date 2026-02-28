"use client";
import { Search } from "lucide-react";
import React from "react";

// 1. Define the interface so TypeScript knows what 'onSearch' is
interface SearchBarProps {
  onSearch: (term: string) => void;
}

// 2. Destructure 'onSearch' from the props
const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search posts..."
          className="pl-10 pr-4 py-2 border rounded-lg bg-white dark:bg-zinc-900 text-sm outline-none focus:ring-2 focus:ring-[#377389] w-full md:w-64"
          // 3. Now this call will work perfectly
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
