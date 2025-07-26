import { Award, Leaf, Truck } from "lucide-react"

export function FeatureBoxes() {
  return (
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
  )
}