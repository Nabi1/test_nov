import React from "react";
import Image from "next/image";

import { Tabs } from "./Tabs";
import { User } from "../../../types";
import { Dots } from "../../icons/Dots";

export const Content = ({
  users,
  selectedGroups,
}: {
  selectedGroups: string[];
  users?: User[];
}) => {
  const filteredUsers = users?.filter((user) => {
    if (selectedGroups.length === 0) {
      return true;
    }
    return user.groups.some((group) => selectedGroups.includes(group));
  });

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {filteredUsers?.map((user) => (
        <tr key={`${user.name}-${user.id}`}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex gap-3 items-center">
              <Image
                src={user.avatar}
                alt={user.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {user.name}
                </div>
                <div className="text-xs text-gray-500">{user.email}</div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap ">
            {user.groups.map((group) => (
              <Tabs label={group} key={group} />
            ))}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={`border-b border-dotted relative text-xs font-medium  ${
                user.access.length === 0 ? "text-red-500" : "text-gray-500"
              }`}
            >
              {user.access.length === 0
                ? "No access found"
                : `On ${user.access.length} product${
                    user.access.length ? "s" : ""
                  }`}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowraptext-xs font-medium text-xs text-[#E4E4E7]">
            {new Date(user.last_login * 1000).toLocaleString()}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button className="text-blue-500 hover:underline">
              <Dots />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
