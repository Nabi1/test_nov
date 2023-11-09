import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Content } from "../Content";

const usersMock = [
  {
    createdAt: "2023-09-25T01:35:08.491Z",
    name: "Jo Gibson",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1120.jpg",
    email: "email 3",
    groups: ["QA Tester"],
    access: ["zebra", "orange-money", "nomad"],
    last_login: 1695656209,
    id: "3",
  },
  {
    createdAt: "2023-09-24T19:16:18.339Z",
    name: "Ben Skiles",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/478.jpg",
    email: "email 4",
    groups: ["Manager"],
    access: ["django"],
    last_login: 1695656149,
    id: "4",
  },
  {
    createdAt: "2023-09-25T10:23:00.948Z",
    name: "Pauline Bins",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/125.jpg",
    email: "email 5",
    groups: ["Manager"],
    access: ["orange-money", "django"],
    last_login: 1695656089,
    id: "5",
  },
  {
    createdAt: "2023-09-24T15:46:10.923Z",
    name: "Elsie Conroy",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/436.jpg",
    email: "email 6",
    groups: ["Intern"],
    access: ["zebra", "nomad"],
    last_login: 1695656029,
    id: "6",
  },
  {
    createdAt: "2023-09-25T01:20:10.304Z",
    name: "Roger Funk IV",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/971.jpg",
    email: "email 7",
    groups: ["Intern"],
    access: ["django"],
    last_login: 1695655969,
    id: "7",
  },
  {
    createdAt: "2023-09-24T22:29:16.438Z",
    name: "Todd Hudson",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/869.jpg",
    email: "email 8",
    groups: ["Manager"],
    access: ["nomad"],
    last_login: 1695655909,
    id: "8",
  },
  {
    createdAt: "2023-09-25T05:04:49.686Z",
    name: "Luz Ankunding",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/961.jpg",
    email: "email 9",
    groups: ["Manager"],
    access: ["orange-money", "nomad"],
    last_login: 1695655849,
    id: "9",
  },
  {
    createdAt: "2023-09-25T05:55:07.580Z",
    name: "Irene McGlynn",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/921.jpg",
    email: "email 10",
    groups: ["QA Tester"],
    access: ["nomad", "orange-money"],
    last_login: 1695655789,
    id: "10",
  },
  {
    createdAt: "2023-09-25T11:52:01.991Z",
    name: "Donna Cummings",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/800.jpg",
    email: "email 11",
    groups: ["Intern"],
    access: [],
    last_login: 1695655729,
    id: "11",
  },
];

describe("Content Component", () => {
  // Test to ensure users from the "QA Tester" group are displayed correctly
  test("renders users from 'QA Tester' group", () => {
    const selectedGroupsMock = ["QA Tester"];
    render(<Content users={usersMock} selectedGroups={selectedGroupsMock} />);

    expect(screen.getByText("Jo Gibson")).toBeInTheDocument();
    expect(screen.getByText("Irene McGlynn")).toBeInTheDocument();
  });

  test("renders users from 'Manager' group", () => {
    const selectedGroupsMock = ["Manager"];
    render(<Content users={usersMock} selectedGroups={selectedGroupsMock} />);

    expect(screen.getByText("Ben Skiles")).toBeInTheDocument();
  });

  // Test to ensure that users not belonging to the selected groups are not displayed
  test("does not render users not belonging to selected groups", () => {
    const selectedGroupsMock = ["QA Tester", "Manager"];
    render(<Content users={usersMock} selectedGroups={selectedGroupsMock} />);

    expect(screen.queryByText("Elsie Conroy")).not.toBeInTheDocument();
  });
});
