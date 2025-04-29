"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <Link href="/" className="text-2xl font-serif text-gray-900 tracking-wide no-underline">
          Valeria Heredia
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-base font-medium text-gray-700 hover:text-gray-900 transition-all no-underline"
            >
              {route.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
          >
            Let&apos;s Connect
          </Link>
        </div>

        {/* Mobile Navigation - NavDrawer */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="p-2 rounded-lg border border-gray-300 bg-white shadow-sm"
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72 max-w-[90vw] bg-white">
              <SheetHeader className="border-b border-gray-200 px-6 py-4">
                <SheetTitle className="text-lg font-semibold text-gray-900">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 py-6 px-6">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="block w-full rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors no-underline"
                  >
                    {route.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="block w-full rounded-lg px-4 py-3 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 transition-colors"
                >
                  Let&apos;s Connect
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}