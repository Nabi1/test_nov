import React from "react";
import { Users } from "./icons/Users";

export function Tabs({ label }: { label: string }) {
  return (
    <span className="gap-1 text-xs items-center border-[#E4E4E7] inline-flex border font-medium leading-4 text-center p-2 rounded-[100px] border-solid">
      <Users />
      {label}
    </span>
  );
}
