"use client"

import Image, { StaticImageData } from "next/image"
import { Star } from "lucide-react"
import t1 from '@/images/test1.png'
import { Truck, Sparkles, CalendarPlus, Gem, Package, ShieldCheck, ShieldAlert, CreditCard, Headphones, Gift, Award, Leaf } from "lucide-react"

interface Items {
  id: number
  name: string
  icon: React.ReactNode
  text: string
}

const items: Items[] = [
  {
    id: 1,
    name: "Free Shipping & Returns",
    icon: <Truck className="h-6 w-6 text-primary" />,
    text: "Free shipping on orders over $150 + hassle-free 7-day returns.",
  },
  {
    id: 2,
    name: "Latest Trends First",
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    text: "Be the first to access the latest trends straight from the source.",
  },
  {
    id: 3,
    name: "Daily New Arrivals",
    icon: <CalendarPlus className="h-6 w-6 text-primary" />,
    text: "100+ new styles added daily to our 120,000+ SKU arsenal.",
  },
  {
    id: 4,
    name: "Jewelry Specialists",
    icon: <Gem className="h-6 w-6 text-primary" />,
    text: "100% committed to jewelry only for maximum expertise and quality.",
  },
  {
    id: 5,
    name: "Smart Logistics",
    icon: <Package className="h-6 w-6 text-primary" />,
    text: "Efficient cross-border logistics with worldwide shipping capabilities and real-time tracking.",
  },
  {
    id: 6,
    name: "Quality Assurance",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    text: "All products undergo rigorous quality checks to ensure premium standards.",
  },
  {
    id: 7,
    name: "Full Damage Protection",
    icon: <ShieldAlert className="h-6 w-6 text-primary" />,
    text: "Complete protection against damage during shipping with full replacement guarantee.",
  },
  {
    id: 8,
    name: "Buy Now Pay Later",
    icon: <CreditCard className="h-6 w-6 text-primary" />,
    text: "Flexible payment plan options to help you manage cash flow and grow your business.",
  },
  {
    id: 9,
    name: "24/7 Support",
    icon: <Headphones className="h-6 w-6 text-primary" />,
    text: "Round-the-clock customer support for shopping assistance whenever you need it.",
  },
  {
    id: 10,
    name: "Free Gifts & Samples",
    icon: <Gift className="h-6 w-6 text-primary" />,
    text: "There's a chance to get free gift or samples while supply allows.",
  },
]

interface Testimonial {
  id: number
  name: string
  image: StaticImageData
  rating: number
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    image: t1,
    rating: 5,
    text: "The quality of produce I received from this website was outstanding.",
  },
  {
    id: 2,
    name: "Maria Garcia",
    image: t1,
    rating: 5,
    text: "The pasta cooked perfectly and the spices added wonderful flavour to my dishes.",
  },
  {
    id: 3,
    name: "Anna Miller",
    image: t1,
    rating: 5,
    text: "The quality of rice and other dry ingredients is exceptional. I can always count on this website.",
  },
  {
    id: 4,
    name: "Chen Wei",
    image: t1,
    rating: 5,
    text: "The vegetables and fruits were delivered promptly and were of exceptional quality.",
  },
  {
    id: 5,
    name: "Sophie Dupont",
    image: t1,
    rating: 5,
    text: "I ordered a variety of spices from this website and I am impressed with their freshness.",
  },
  {
    id: 6,
    name: "Sophie Dupont",
    image: t1,
    rating: 5,
    text: "I ordered a variety of spices from this website and I am impressed with their freshness.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-8">
      <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#131947] text-center">About JewelryBuyDirect</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 max-w-4xl text-center mx-auto">
            <strong>Your Competitive Arsenal</strong> — Your premier one-stop solution for wholesale jewelry, JewelryBuyDirect (JBD)
            delivers competitive, direct pricing from trusted industry professionals. For 16 years, we have been a powerhouse in
            the jewelry industry, founded by passionate experts in San Jose, California. Our strength is now unleashed worldwide
            through this fresh and powerful one-stop online B2B wholesale platform, powered by a dynamic global supply chain in
            Asia. This efficient ecosystem combines top-tier suppliers, smart warehousing, and seamless cross-border logistics to
            give your business a definitive competitive edge.
          </p>

          
              <div className="grid gap-6 py-12 md:grid-cols-3 p-4">
                <div className="flex flex-col bg-[#FFF3E9] p-3 items-center text-center">
                  <div className="mb-4 rounded-full bg-primary p-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">HIGH-QUALITY FOOD</h3>
                  <p className="text-sm text-gray-600">
                    Nourish Your Body with the Best Sustainably Sourced Proteins for Your Well-being!
                  </p>
                </div>
          
                <div className="flex flex-col bg-[#FFF3E9] p-3 items-center text-center">
                  <div className="mb-4 rounded-full bg-primary p-4">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">UNBEATABLE VALUE</h3>
                  <p className="text-sm text-gray-600">
                    Get a range of high-quality cuts, from ground beef to filet mignon, at an amazing value.
                  </p>
                </div>
          
                <div className="flex flex-col bg-[#FFF3E9] p-3 items-center text-center">
                  <div className="mb-4 rounded-full bg-primary p-4">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">COMPLETE FLEXIBILITY</h3>
                  <p className="text-sm text-gray-600">
                    Shipping is always FREE, we deliver to your door on your schedule, and you can cancel anytime.
                  </p>
                </div>
              </div>

        <div className="mb-6 flex items-center justify-center">
          <h2 className="text-xl font-bold">Ordering Wholesale Jewelry Online Made Easy</h2>
        </div>
      <div className="flex flex-wrap -mx-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6"
          >
            <div className="rounded-b-lg border border-t-0 bg-white p-4 h-full">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-8 w-8 flex items-center justify-center bg-gray-100 rounded-full">
                  {item.icon}
                </div>
                <span className="font-medium">{item.name}</span>
              </div>
              <p className="text-sm text-[#0F0F0F] line-clamp-2">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className="w-full">
        <div className="mb-6 flex items-center justify-center">
          <h2 className="text-xl font-bold">What Our Clients Say</h2>
        </div>
        <div className="flex flex-wrap -mx-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6"
            >
              <div className="rounded-b-lg border border-t-0 bg-white p-4 h-full">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-8 w-8 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="font-medium">{testimonial.name}</span>
                </div>
                <div className="mb-2 flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-[#0F0F0F] line-clamp-2">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}