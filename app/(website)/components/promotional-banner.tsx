import Image from "next/image";
import Pro1 from '@/images/pro-1.png'
import Pro2 from '@/images/pro-2.jpeg'

export function PromotionalBanners() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-3">
      {/* Orange Banner */}
      <div className="relative overflow-hidden p-8 text-white flex flex-col justify-center items-start h-[430px]">
        <Image
          src={Pro1}
          alt="Fresh Oranges"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 h-full"
        />
        <h2 className="text-3xl xl:text-5xl font-bold relative">FRESH ORANGES</h2>
        <p className="text-2xl xl:text-4xl font-semibold relative">UNBEATABLE PRICES</p>
        <p className="relative mt-2 text-lg">Indulge in the refreshing sweetness of <br /> our hand-picked oranges.</p>
        <button className="relative mt-4 px-4 py-2 bg-white text-[#DE691C] font-bold rounded">ORDER NOW</button>
      </div>
      
      {/* Coffee Banner */}
      <div className="relative overflow-hidden p-8 text-white flex flex-col justify-center items-start h-[430px]">
        <Image
          src={Pro2}
          alt="Fresh Oranges"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 h-full"
        />
        <h2 className="text-3xl xl:text-5xl font-bold relative">Perfect Blend</h2>
        <p className="text-2xl xl:text-4xl font-semibold relative">And Irresistible</p>
        <p className="relative mt-2 text-lg">Savor the delightful harmony of coffee and <br /> chocolate with our Coffee Mix Chocolate.</p>
        <button className="relative mt-4 px-4 py-2 bg-[#8A4C14] text-white font-bold rounded">ORDER NOW</button>
      </div>
    </div>
  );
}
