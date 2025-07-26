"use client"

import Image, { StaticImageData } from "next/image"
import { ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Veg1 from '@/images/veg-1.png'
import Veg2 from '@/images/veg-2.png'
import Veg3 from '@/images/veg-3.png'
import Veg4 from '@/images/veg-4.png'
import Veg5 from '@/images/veg-5.png'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  image: StaticImageData
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
  {
    id: 9,
    name: "Fresh Tomato",
    price: 3.99,
    rating: 5,
    image: Veg3,
  },
  {
    id: 10,
    name: "Fresh Tomato",
    price: 3.99,
    rating: 5,
    image: Veg4,
  },
]

export function BestSellers() {
  return (
    <div className="relative">
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-xl font-bold">Best Sellers</h2>
      </div>

      {/* ✅ Grid Layout Instead of Slider */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative rounded-lg border bg-white pb-2 shadow-sm"
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
                  <span className="text-sm text-gray-500 line-through ml-1">£{product.originalPrice}</span>
                )}
              </div>
              <Button size="sm" className="w-[36px] h-[28px] flex items-center justify-center">
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}