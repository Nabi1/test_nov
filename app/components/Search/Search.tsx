"use client";

import React, { useState } from "react";

import { Checkboxes } from "./components/Checkboxes";
import { Input } from "./components/Input";

export function Search({
  allGroups,
  onFilterChange,
}: {
  allGroups: string[];
  onFilterChange: (selectedGroups: string[]) => void;
}) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="flex p-4 bg-white rounded-md shadow-lg h-full w-full md:w-auto gap-2 flex-col">
      <Input searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Checkboxes
        searchQuery={searchQuery}
        allGroups={allGroups}
        onFilterChange={onFilterChange}
      />
    </div>
  );
}
