import React from "react";

import { Content } from "./Content";
import { Head } from "./Head";
import { User } from "../../types";

export const UsersTable = ({
  selectedGroups,
  users,
}: {
  selectedGroups: string[];
  users: User[];
}) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row shadow-lg rounded-lg w-[80vw] h-fit	overflow-x-auto mt-4 lg:mt-0 max-h-[90vh]">
      <table className="w-full divide-y divide-gray-200">
        <Head />
        <Content selectedGroups={selectedGroups} users={users} />
      </table>
    </div>
  );
};
