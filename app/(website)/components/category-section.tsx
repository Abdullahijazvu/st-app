import Link from "next/link"
import CatImg1 from '@/images/cat-1.png'
import CatImg2 from '@/images/cat-2.png'
import CatImg3 from '@/images/cat-3.png'
import CatImg4 from '@/images/cat-4.png'
import CatImg5 from '@/images/cat-5.png'
import CatImg6 from '@/images/cat-6.png'
import CatImg7 from '@/images/cat-7.png'
import CatImg8 from '@/images/cat-8.png'
import CatImg9 from '@/images/cat-9.png'
import CatImg10 from '@/images/cat-10.png'
import CatImg11 from '@/images/cat-11.png'
import CatImg12 from '@/images/cat-12.png'
import Image, { StaticImageData } from "next/image"

interface CategoryImage {
  src: StaticImageData
  alt: string
}

interface CategorySectionProps {
  title: string
  subtitle: string
  images: CategoryImage[]
}

function CategorySection({ title, subtitle, images }: CategorySectionProps) {
  return (
    <div className="flex-1">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-[#1A1B4B]">{title}</h2>
        <p className="text-sm font-medium text-[#1A1B4B]">{subtitle}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <Link key={index} href="#" className="overflow-hidden rounded-lg bg-white">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={280}
              height={180}
              className="h-[180px] w-full object-cover transition-transform hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export function CategorySections() {

  return (
    <section className="py-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
        <CategorySection
          title="ESSENTIAL GROCERIES"
          subtitle="ALL IN ONE PLACE"
          images={[
            { src: CatImg1, alt: "Cooking Oils Collection" },
            { src: CatImg2, alt: "Premium Spices" },
            { src: CatImg3, alt: "Canned Goods" },
            { src: CatImg4, alt: "Organic Grains" },
          ]}
        />

        <CategorySection
          title="TOP CATEGORIES IN"
          subtitle="KITCHEN APPLIANCES"
          images={[
            { src: CatImg5, alt: "Premium Cookware Set" },
            { src: CatImg6, alt: "Electric Kettle" },
            { src: CatImg7, alt: "Instant Pot" },
            { src: CatImg8, alt: "Coffee Machine" },
          ]}
        />

        <CategorySection
          title="SHOP FOR YOUR"
          subtitle="HOME ESSENTIALS"
          images={[
            { src: CatImg9, alt: "Cleaning Supplies" },
            { src: CatImg10, alt: "Luxury Bedding" },
            { src: CatImg11, alt: "Home Decor" },
            { src: CatImg12, alt: "Storage Solutions" },
          ]}
        />
      </div>
    </section>
  )
}

