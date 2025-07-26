import Link from "next/link"

const navItems = [
  { title: "Best Sellers", href: "#" },
  { title: "New Arrivals", href: "#" },
  { title: "Necklaces", href: "#" },
  { title: "Bracelets", href: "#" },
  { title: "Rings", href: "#" },
  { title: "Earrings", href: "#" },
  { title: "Body Jewelry", href: "#" },
  { title: "Material", href: "#" },
  { title: "Jewelry Making", href: "#" },
  { title: "Collection", href: "#" },
]

export function MainNav() {
  return (
    <nav className="py-3 pl-0">
      <div className="container grid gap-10 md:flex md:items-center">
        {navItems.slice(0, 2).map((item) => (
          <Link key={item.href} href={item.href} className="text-sm transition-colors hover:text-primary md:block">
            {item.title}
          </Link>
        ))}
        {navItems.slice(2).map((item) => (
          <Link key={item.href} href={item.href} className="text-sm transition-colors hover:text-primary md:block">
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}