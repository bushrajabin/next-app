"use client";
import { useRouter } from "next/navigation";
import React from "react";

const navLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Products",
    path: "/products",
  },
];

function NavBar() {
  const router = useRouter();

  return (
    <nav className=" bg-red-900">
      <ul className="bg-purple-900 flex flex-row">
        {navLinks.map((link) => (
          <li key={link.id} className="  flex flex-row p-3">
            <span onClick={() => router.push(link.path)} className="bg-gray-700">{link.title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
