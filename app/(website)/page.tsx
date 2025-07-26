import { BestSellers } from "./components/best-sellers"
import { CategoryCarousel } from "./components/category-carousel"
import { CategorySections } from "./components/category-section"
import { DealsSection } from "./components/deals-section"
import { FeatureBoxes } from "./components/feature-boxes"
import { HeroWithSidebar } from "./components/hero-slider"
import { ProductCarousel } from "./components/product-carousel"
import { PromotionalBanners } from "./components/promotional-banner"
import { TestimonialsSection } from "./components/testimonials-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container">
          <HeroWithSidebar />
          <CategorySections />
          <ProductCarousel />
          <CategoryCarousel />
          <BestSellers />
          {/* <PromotionalBanners /> */}
        </div>
        {/* <DealsSection /> */}
        <TestimonialsSection />
      </main>
    </div>
  )
}
