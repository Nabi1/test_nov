import React from "react";

const tableHeaders = [
  { label: "User" },
  { label: "Teams" },
  { label: "Access" },
  { label: "Last Loggin" },
  { label: "" },
];

export const Head = () => (
  <thead className="bg-gray-50">
    <tr>
      {tableHeaders.map((header, index) => (
        <th
          key={header.label}
          className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
            index === tableHeaders.length - 1 ? "" : "border-b border-gray-200"
          }`}
        >
          {header.label}
        </th>
      ))}
    </tr>
  </thead>
);
