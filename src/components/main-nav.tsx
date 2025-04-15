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
  ]

  return (
    <nav className="flex items-center justify-between w-full py-4 px-2 md:px-8">
      <Link href="/" className="text-xl font-semibold text-primary-700">
        Welcome
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {routes.map((route) => (
          <Link 
            key={route.href} 
            href={route.href}
            className="text-base font-medium transition-colors hover:text-primary capitalize"
          >
            {route.label}
          </Link>
        ))}
      </div>
      
      {/* Mobile Navigation - NavDrawer */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Open menu" className="p-2 rounded-lg border border-border bg-background shadow-sm">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72 max-w-[90vw]">
            <SheetHeader className="border-b px-6 py-4">
              <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-2 py-6 px-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="block w-full rounded-lg px-4 py-3 text-base font-medium text-left hover:bg-muted focus:bg-muted transition-colors"
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}