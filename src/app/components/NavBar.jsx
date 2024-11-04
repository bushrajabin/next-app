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
    <nav>
      <ul className="bg-slate-600 p-3 flex flex-row justify-center lg:flex lg:flex-row lg:justify-center  xl:flex xl:flex-row xl:justify-center">
        {navLinks.map((link) => (
          <li key={link.id} className="  flex flex-row p-3">
            <span
              onClick={() => router.push(link.path)}
              className="bg-gray-700 text-white cursor-pointer font-mono p-2 rounded-lg lg:p-2  xl:p-2 xl:font-mono xl:text-lg xl:text-white xl:rounded-lg xl:cursor-pointer"
            >
              {link.title}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
