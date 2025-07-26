import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ".././globals.css"
import { SiteHeader } from "./components/site-header"
import { SiteFooter } from "./components/site-footer"
import { MainNav } from "./components/main-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Masco - Your Online Grocery Store",
  description: "Shop groceries, kitchen appliances, and home essentials",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white">
            <div className="bg-orange-400 flex justify-center px-4 py-1">
          <p className="text-center text-white text-sm">Welcome to Masco Wholesale Jewelry
          </p>
        </div>
            <div className="px-5 lg:px-[7.5rem]">
            <SiteHeader />
          </div>
        </div>
        <div className="bg-white">
          <div className="px-5 lg:px-[7.5rem]">
            <MainNav />
          </div>
        </div>
          <div className="px-5 lg:px-[7.5rem]">
          {children}
        </div>
        <div className="bg-[#FFF3E9] bg-cover bg-no-repeat">
            <div className="px-5 lg:px-[7.5rem]">
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  )
}