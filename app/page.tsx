"use client";

import { useState } from "react";
import useSWR from "swr";

import { User } from "./types";
import { UsersTable } from "./components/UsersTable/UsersTable";

const mockDataUrl =
  "https://6511a930b8c6ce52b394dc63.mockapi.io/api/users/users";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  const { data: users } = useSWR<User[]>(mockDataUrl, fetcher);

  return (
    <main className="m-4 flex min-h-screen justify-center flex-col gap-4 lg:flex-row ">
      <UsersTable users={users} selectedGroups={selectedGroups} />
    </main>
  );
}
