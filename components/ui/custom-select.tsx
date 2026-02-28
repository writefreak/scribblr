import React, { useState } from "react";

const CustomSelect = () => {
  const [category, setCategory] = useState("Technology");
  return (
    <div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-3 rounded-xl border bg-zinc-50 dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-[#377389]/50 transition-all font-montserrat text-sm"
      >
        <option>Technology</option>
        <option>Business</option>
        <option>Politics</option>
        <option>Health</option>
      </select>
    </div>
  );
};

export default CustomSelect;
