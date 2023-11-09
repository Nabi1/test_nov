"use client";

import React, { useState, useEffect } from "react";

const ALL = "All";

export function Checkboxes({
  allGroups,
  onFilterChange,
  searchQuery,
}: {
  allGroups: string[];
  searchQuery: string;
  onFilterChange: (selectedGroups: string[]) => void;
}) {
  const [selectedGroups, setSelectedGroups] = useState<string[]>(allGroups);

  useEffect(() => {
    onFilterChange(selectedGroups);
  }, [selectedGroups, onFilterChange]);

  function toggleAllCheckbox() {
    if (selectedGroups.length === allGroups.length) {
      setSelectedGroups([]);
    } else {
      setSelectedGroups(allGroups);
    }
  }

  function handleCheckboxChange(group: string) {
    if (group === ALL) {
      toggleAllCheckbox();
    } else {
      const updatedSelectedGroups = selectedGroups.includes(group)
        ? selectedGroups.filter((item) => item !== group)
        : [...selectedGroups, group];
      setSelectedGroups(updatedSelectedGroups);
    }
  }

  return (
    <div className="flex flex-col">
      <label key={ALL} className="flex gap-2 items-center">
        <input
          type="checkbox"
          value={ALL}
          checked={selectedGroups.length === allGroups.length}
          onChange={() => handleCheckboxChange(ALL)}
          className="form-checkbox text-blue-500 border-blue-500"
        />
        <span className="">{ALL}</span>
      </label>
      {allGroups.map((group) => {
        if (
          searchQuery &&
          !group.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return null;
        }
        return (
          <label key={group} className="items-center">
            <div className="flex gap-2">
              <input
                type="checkbox"
                value={group}
                checked={selectedGroups.includes(group)}
                onChange={() => handleCheckboxChange(group)}
                className="form-checkbox text-blue-500 border-blue-500"
              />
              <span>{group}</span>
            </div>
          </label>
        );
      })}
    </div>
  );
}
