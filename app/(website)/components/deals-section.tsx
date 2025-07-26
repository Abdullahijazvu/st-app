"use client"

import { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import C1 from '@/images/c1.png'
import C2 from '@/images/c2.png'
import D1 from '@/images/d1.png'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  image: StaticImageData
  discount?: number
  sold?: string
}

// Featured product
const featuredProduct: Product = {
  id: 1,
  name: "Dry Roasted Brazil Nuts Sea Salted",
  price: 5.99,
  originalPrice: 7.99,
  rating: 5,
  image: D1,
  // image: "/placeholder.svg?height=400&width=400",
  sold: "12/30",
}

// Deals products
const dealsProducts: Product[] = [
  {
    id: 2,
    name: "Coconut Cream and Almond Milk Half and Half",
    price: 7.99,
    originalPrice: 9.99,
    rating: 5,
    image: C1,
    // image: "/placeholder.svg?height=200&width=200",
    discount: 15,
  },
  {
    id: 3,
    name: "Catalina Crunch Keto Friendly Cereal",
    price: 8.99,
    rating: 5,
    image: C2,
  },
  {
    id: 4,
    name: "Squirrel Brand Variety Nut Bundle",
    price: 7.99,
    rating: 5,
    image: C1,
    discount: 15,
  },
  {
    id: 5,
    name: "Nutra Fig Fruitcake mix nuts",
    price: 7.99,
    rating: 5,
    image: C2,
  },
]

// Healthy drink products
const healthyDrinkProducts: Product[] = [
  {
    id: 6,
    name: "ASPIRE Mango Lemonade Healthy Energy",
    price: 8.99,
    originalPrice: 10.99,
    rating: 5,
    image: C1,
    discount: 15,
  },
  {
    id: 7,
    name: "HUZZAH! - A Healthy Sparkling Seltzer Water",
    price: 7.99,
    rating: 5,
    image: C2,
  },
  {
    id: 8,
    name: "Boost Iced Coffee Mocha 12 x 250 ml",
    price: 7.99,
    rating: 5,
    image: C1,
  },
  {
    id: 9,
    name: "Alchemy Cordial Turmeric Elixir Syrup Turmeric Latte",
    price: 8.99,
    rating: 5,
    image: C2,
    discount: 15,
  },
]

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 14,
    minutes: 14,
    seconds: 50,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center gap-1 text-base font-medium">
      <span>{timeLeft.days}d</span>
      <span>:</span>
      <span>{timeLeft.hours.toString().padStart(2, "0")}h</span>
      <span>:</span>
      <span>{timeLeft.minutes.toString().padStart(2, "0")}m</span>
      <span>:</span>
      <span>{timeLeft.seconds.toString().padStart(2, "0")}s</span>
    </div>
  )
}

function ProductCard({ product, isFeatured = false }: { product: Product; isFeatured?: boolean }) {
  return (
    <div className={`relative rounded-lg border bg-white ${isFeatured ? "h-full" : ""}`}>
      {product.discount && (
        <span className="absolute z-40 left-2 top-2 rounded bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-600">
          {product.discount}% OFF
        </span>
      )}
      <div className={`relative mb-4 overflow-hidden rounded-lg ${isFeatured ? "aspect-[4/5]" : "aspect-square"}`}>
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>
      <h3 className="mb-2 text-sm font-medium line-clamp-2 px-3">{product.name}</h3>
      <div className="mb-2 flex items-center gap-1 px-3">
        {Array.from({ length: product.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        <span className="text-xs text-gray-500">(5.0)</span>
      </div>
      <div className="mb-4 flex items-center justify-between px-3">
        <div>
        <span className="text-lg font-bold">£{product.price}</span>
        {product.originalPrice && (
          <span className="text-sm text-gray-500 line-through">£{product.originalPrice}</span>
        )}
        </div>
        <div>
      <Button size="sm" className="w-full w-[36px] h-[28px] flex align-item-center">
        <ShoppingCart className="h-4 w-6" />
      </Button>
        </div>
        </div>
    </div>
  )
}

export function DealsSection() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Featured Product Column */}
          <div className="h-full">
          <h2 className="text-3xl mb-1 text-[#0F0F0F] font-bold">Highlighted Deals of the Week</h2>
            <ProductCard product={featuredProduct} isFeatured={true} />
          </div>

          {/* Deals Column */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              {/* <h2 className="text-lg font-bold">Highlighted Deals of the Week</h2> */}
              <Countdown />
              <Link href="#" className="text-xl text-[#333333] hover:text-primary">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {dealsProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Healthy Drinks Column */}
          <div>
            <div className="mb-1 flex items-center justify-between">
              <h2 className="text-3xl font-bold">Healthy Drink</h2>
              <Link href="#" className="text-xl text-[#333333] hover:text-primary">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {healthyDrinkProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

