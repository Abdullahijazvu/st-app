"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import catr1 from '@/images/catr1.png'
import catr2 from '@/images/catr2.png'
import { useRef, useState } from "react"

const categories = [
  {
    name: "Fruit & Vegetables",
    image: catr1,
  },
  {
    name: "Meat & Seafood",
    image: catr2,
  },
  {
    name: "Bread & Pastries",
    image: catr1,
  },
  {
    name: "Cereals & Granolas",
    image: catr2,
  },
  {
    name: "Dairy Items",
    image: catr1,
  },
  {
    name: "Snacks & Candy",
    image: catr2,
  },
  {
    name: "Snacks & Candy",
    image: catr2,
  },
]

export function CategoryCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
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
    <div className="relative py-8">
      <div className="relative overflow-hidden">
        {/* <div className="flex justify-center gap-4 overflow-x-auto pb-4 scrollbar-hide mx-3"> */}
        <div ref={scrollRef} onScroll={checkScroll} className="flex gap-4 overflow-x-auto scrollbar-hide" style={{
        WebkitOverflowScrolling: 'touch',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
        }}>
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-none cursor-pointer rounded-lg bg-white p-4 text-center"
              style={{ width: "250px" }}
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={200}
                  height={150}
                  className="h-[150px] w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-medium">{category.name}</h3>
            </div>
          ))}
        </div>
        <button className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md">
        <button
              onClick={() => scroll("left")}
            //   disabled={!canScrollLeft}
              className="rounded-full border p-2 transition-colors hover:bg-gray-100 disabled:opacity-50"
              aria-label="Previous testimonial"
            >
          <ChevronLeft className="h-6 w-6" />
        </button>
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md">
        <button
              onClick={() => scroll("right")}
            //   disabled={!canScrollRight}
              className="rounded-full border p-2 transition-colors hover:bg-gray-100 disabled:opacity-50"
              aria-label="Next testimonial"
            >
          <ChevronRight className="h-6 w-6" />
        </button>
        </button>
      </div>
    </div>
  )
}