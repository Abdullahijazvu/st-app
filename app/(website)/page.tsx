import { BestSellers } from "./components/best-sellers"
import { CategoryCarousel } from "./components/category-carousel"
import { CategorySections } from "./components/category-section"
import { HeroWithSidebar } from "./components/hero-slider"
import { ProductCarousel } from "./components/product-carousel"
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
        </div>
        <TestimonialsSection />
      </main>
    </div>
  )
}
