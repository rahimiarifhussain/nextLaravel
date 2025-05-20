"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "/components/ui/button";
import { ModeToggle } from "../components/mode-toggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-lg font-semibold text-gray-900 dark:text-gray-100"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline"
          >
            Posts
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline"
          >
            About
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
