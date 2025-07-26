"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Img from '@/images/hd-img.png'
import Icon1 from '@/images/icon1.png'
import Icon2 from '@/images/icon2.png'
import Icon3 from '@/images/icon3.png'
import Icon4 from '@/images/icon4.png'

const slides = [
  { id: 1, image: Img },
  { id: 2, image: Img },
]

const categories = [
  "New Arrivals",
  "Necklaces",
  "Bracelets",
  "Rings",
  "Earrings",
  "Body Jewelry",
  "Jewelry Sets",
  "Material",
  "Jewelry Making",
  "Collection"
]

export function HeroWithSidebar() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {/* Sidebar */}
      <div className="w-full md:w-[25%] bg-white rounded-[15px] p-4 shadow">
        <ul className="space-y-2">
          {categories.map((cat, index) => (
            <li key={index} className="text-gray-700 text-sm hover:text-black cursor-pointer">
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Slider */}
      <div className="w-full md:w-[75%] overflow-hidden rounded-[15px] relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-[15px]"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
      {/* Features Section */}
        <div className="my-6 grid gap-6 border-y border-gray-200 py-6 md:grid-cols-4">
          {[
            {
              icon: Icon1,
              title: "Free Delivery",
              description: "Free UK shipping when you spend £50",
            },
            {
              icon: Icon2,
              title: "24/7 Support",
              description: "We are always ready to take your phone",
            },
            {
              icon: Icon3,
              title: "Secure Payment",
              description: "Delivery to any point of the city and regions",
            },
            {
              icon: Icon4,
              title: "Return goods",
              description: "Shop securely and pay with your bank card",
            },
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="rounded-full bg-[#FF8A3C] p-3">
                <Image src={feature.icon} alt={feature.title} width={41} height={41} />
              </div>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        </>
  )
}
