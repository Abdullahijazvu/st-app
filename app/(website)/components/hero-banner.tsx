import { Button } from "@/components/ui/button"
import Img from '@/images/hd-img.png'
import Image from "next/image"

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden bg-[#FF8A3C] px-6 py-8 md:px-8">
      <div className="container flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex-1">
          <Image src={Img} height={300} width={500} alt="Fresh groceries" className="w-full object-cover" />
        </div>
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            FLAT <span className="text-[#1A1B4B]">25%</span> OFF
          </h1>
          <p className="mt-2 text-2xl font-medium text-white md:text-3xl">10:00AM TO 12:00PM</p>
          <Button size="lg" className="mt-6 bg-[#1A1B4B] text-white hover:bg-[#1A1B4B]/90">
            SHOP NOW
          </Button>
        </div>
      </div>
    </div>
  )
}