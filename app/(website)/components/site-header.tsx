"use client"

import Link from "next/link"
import { Globe, Search, ShoppingCart, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
  
export function SiteHeader() {
  return (
    <>
    <header className="sticky top-0 z-50 w-full bg-white">
    <div className="container flex flex-wrap items-center py-3 gap-4 md:gap-6">
      <Link href="/" className="flex items-center gap-2">
        <h2 className="text-xl font-bold text-[#FF8A3C]">Masco</h2>
      </Link>

      <div className="flex items-start gap-2">
          <div className="h-4 w-4 mt-1" />
          <div className="flex flex-col">
            <span className="text-[15px] font-normal">One-Stop Wholesale Jewelry No.1 Retailers Choice</span>
          </div>
        </div>
  
    <div className="flex flex-1 items-center gap-0">
      <div className="relative flex-1">
        <Input
          type="search"
          placeholder="Search for electronics..."
          className="w-full border-2 border-gray border-solid text-sm pr-10 focus-visible:ring-0"
        />
        <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  
      <div className="flex flex-wrap items-center gap-4 md:gap-6 md:mt-0">
        <Link href="/cart" className="flex items-center gap-2">
          <div className="relative">
            <Globe className="h-6 w-6" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF8A3C] text-xs font-medium">
              0
            </span>
          </div>
        </Link>
        <Link href="/cart" className="flex items-center gap-2">
          <div className="relative">
            <User className="h-6 w-6" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF8A3C] text-xs font-medium">
              0
            </span>
          </div>
        </Link>
        <Link href="/cart" className="flex items-center gap-2">
          <div className="relative">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF8A3C] text-xs font-medium">
              0
            </span>
          </div>
        </Link>
      </div>
    </div>
  </header>
  </>
  )
}