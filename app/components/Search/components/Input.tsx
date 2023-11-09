"use client";

import React from "react";

import { Search as Icon } from "../../icons/Search";

export function Input({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon />
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
      />
    </div>
  );
}
