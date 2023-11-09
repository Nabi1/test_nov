"use client";

import React, { useState, useEffect } from "react";
import { Input } from "./components/Input";
import { Checkboxes } from "./components/Checkboxes";

export function Search({
  allGroups,
  onFilterChange,
}: {
  allGroups: string[];
  onFilterChange: (selectedGroups: string[]) => void;
}) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGroups, setSelectedGroups] = useState<string[]>(allGroups);

  useEffect(() => {
    const filteredGroups = allGroups.filter((group) =>
      group.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Déterminez les groupes actuellement sélectionnés qui sont toujours valides après la recherche
    const validSelectedGroups = selectedGroups.filter((group) =>
      filteredGroups.includes(group)
    );

    // Vérifiez si les groupes sélectionnés ont changé, sinon ne faites rien pour éviter la boucle infinie
    if (
      validSelectedGroups.length !== selectedGroups.length ||
      filteredGroups.length === 0
    ) {
      setSelectedGroups(validSelectedGroups);
    }
  }, [allGroups, searchQuery, selectedGroups]);

  useEffect(() => {
    onFilterChange(selectedGroups);
  }, [selectedGroups]);

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
