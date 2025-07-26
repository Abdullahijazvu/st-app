// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import Img from '@/images/hd-img.png'

// const slides = [
//     {
//       id: 1,
//       title: "FLAT",
//       subtitle1: "25%",
//       subtitle2: "OFF",
//       subtitle1Size: "text-[80px] md:text-[80px]",
//       subtitle2Size: "text-[60px] md:text-[60px]",
//       time: "10:00AM TO 12:00PM",
//       image: Img,
//     },
//     {
//       id: 2,
//       title: "FLAT",
//       subtitle1: "30%",
//       subtitle2: "SALE",
//       subtitle1Size: "text-[80px] md:text-[80px]",
//       subtitle2Size: "text-[60px] md:text-[60px]",
//       time: "12:00PM TO 02:00PM",
//       image: Img,
//     },
//   ]

// export function HeroSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   // Auto slide every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [])

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index)
//   }
  
//     return (
//       <div className="relative overflow-hidden bg-[#FB8B24] rounded-[15px] pr-5 md:width-[1702px]">
//         <div className="">
//         <div
//           className="relative flex transition-transform duration-500 ease-in-out w-full"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//             {slides.map((slide, index) => (
//               <div key={slide.id}
//             //   className="relative min-w-full shrink-0 overflow-hidden whitespace-nowrap px-3 py-6" style={{ width: '100%' }}
//               className="flex-shrink-0 w-full" style={{ width: '100%' }}
//               >
//                 <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
//                   <div className="w-full md:w-[60%]">
//                     <Image
//                       src={slide.image || "/placeholder.svg"}
//                       alt={`Slide ${index + 1}`}
//                       className="h-auto w-full object-cover"
//                       priority={index === 0}
//                     />
//                   </div>
//                   <div className="w-full md:w-[40%] text-center md:text-left overflow-hidden mx-0">
//                     <h2 className="mb-2 text-4xl text-white leading-tight lg:text-[80px]">
//                     <span className="text-xl md:text-[60px] text-[#131947]">{slide.title}</span>
//                     <span className={`font-bold ${slide.subtitle1Size}`}> {slide.subtitle1}</span>
//                     <span className={`text-[#131947] ${slide.subtitle2Size}`}> {slide.subtitle2}</span>
//                     </h2>
//                     <p className="mb-6 text-4xl text-white 2xl:text-[60px]">{slide.time}</p>
//                     <Button size="lg" className="w-full bg-[#1A1B4B] py-8 text-4xl xl:text-[40px] text-white hover:bg-[#1A1B4B]/90 mr-0">
//                       SHOP NOW
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
  
//           {/* Navigation */}
//           <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`h-2 transition-all duration-300 ${
//                   currentSlide === index ? "w-8 rounded-full bg-white" : "w-2 rounded-full bg-white/60 hover:bg-white/80"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }

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
