"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Veg1 from '@/images/veg-1.png'
import Veg2 from '@/images/veg-2.png'
import Veg3 from '@/images/veg-3.png'
import Veg4 from '@/images/veg-4.png'
import Veg5 from '@/images/veg-5.png'
import { useRef, useState } from "react"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  image: string
  discount?: number
}

const products: Product[] = [
  {
    id: 1,
    name: "Green Oak Lettuce",
    price: 5.99,
    originalPrice: 7.99,
    rating: 5,
    image: Veg1,
    discount: 15,
  },
  {
    id: 2,
    name: "Beetroot Organic",
    price: 2.99,
    rating: 5,
    image: Veg2,
  },
  {
    id: 3,
    name: "Cabbage organic",
    price: 2.99,
    rating: 5,
    image: Veg3,
  },
  {
    id: 4,
    name: "Colorful bell pepper",
    price: 2.99,
    rating: 5,
    image: Veg4,
  },
  {
    id: 5,
    name: "Fresh lime",
    price: 1.99,
    rating: 5,
    image: Veg5,
  },
  {
    id: 6,
    name: "Buna Shimeji Mushroom",
    price: 2.99,
    rating: 5,
    image: Veg2,
  },
  {
    id: 7,
    name: "Fresh Tomato",
    price: 3.99,
    rating: 5,
    image: Veg3,
  },
  {
    id: 8,
    name: "Fresh Tomato",
    price: 3.99,
    rating: 5,
    image: Veg4,
  },
]

export function ProductCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [canScrollRight, setCanScrollRight] = useState(true)
    
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
      }
    }
  
  const scroll = (direction: "left" | "right") => {
      if (scrollRef.current) {
        const scrollAmount = scrollRef.current.clientWidth
        scrollRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        })
        if (direction === "right" && scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollRef.current.scrollLeft = 0
        } else if (direction === "left" && scrollRef.current.scrollLeft <= 0) {
          scrollRef.current.scrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        }
      }
    }
  
  return (
    <div className="relative">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">Featured Products</h2>
        <div className="flex gap-4">
          {["Fresh Vegetables", "Fresh Fruits", "Herbs & Spices", "Hot Products"].map((tab) => (
            <>
            <button key={tab} className="text-sm font-medium text-gray-600 hover:text-primary">
            {tab}
            </button>
            </>
          ))}
        </div>
      </div>

      <div ref={scrollRef} onScroll={checkScroll} className="flex gap-4 overflow-x-auto scrollbar-hide" style={{
        WebkitOverflowScrolling: 'touch',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
        }}>
          {products.map((product) => (
            <div
              key={product.id}
              className="relative flex-none rounded-lg border bg-white pb-2 shadow-sm"
              style={{ width: "220px" }}
            >
              {product.discount && (
                <span className="absolute left-2 top-2 rounded bg-yellow-100 px-2 py-1 text-xs font-semibold">
                  {product.discount}% OFF
                </span>
              )}
              <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 px-3 text-sm font-medium">{product.name}</h3>
              <div className="mb-2 flex px-3">
                {[...Array(product.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 text-xs text-gray-500">(5.0)</span>
              </div>
              <div className="mb-4 px-3 flex items-center justify-between">
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
          ))}
        </div>
        <button className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md">
            <button
            onClick={() => scroll("left")}
            className="p-2 transition-colors hover:bg-gray-100 disabled:opacity-50"
            aria-label="Previous testimonial"
            >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md">
        <button
              onClick={() => scroll("right")}
              className="p-2 transition-colors hover:bg-gray-100 disabled:opacity-50"
              aria-label="Next testimonial"
            >
          <ChevronRight className="h-6 w-6" />
        </button>
        </button>
      </div>
  )
}