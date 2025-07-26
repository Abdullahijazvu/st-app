import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Mail } from "lucide-react"
import Pay1 from '@/images/pay1.png'
import Pay2 from '@/images/pay2.png'
import Pay3 from '@/images/pay3.png'
import Pay4 from '@/images/pay4.png'

const paymentImages: Record<string, string> = {
  paypal: Pay1,
  mastercard: Pay2,
  visa: Pay3,
  amex: Pay4,
};

export function SiteFooter() {
  return (
    <footer>
      <div className="container py-6">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-5 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#FF8A3C]" />
                <p className="text-sm">
                  <span className="font-semibold">Address:</span> 36/38 Oxford St, Manchester M1 5EJ, United Kingdom
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#FF8A3C]" />
                <p className="text-sm">
                  <span className="font-semibold">Email:</span> contact@mascogb.com
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#FF8A3C]" />
                <p className="text-sm">
                  <span className="font-semibold">Hours:</span> 09:00 - 23:00/ Mon - Sun
                </p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <p className="mb-6 text-sm font-bold">Company</p>
            <ul className="space-y-2">
              {["About us", "Helping Hands", "Terms and condition", "Contact Us", "Support Center"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#FF8A3C]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <p className="mb-6 text-sm font-bold">Account</p>
            <ul className="space-y-3">
              {["Sign In", "My Wishlist", "Track My Order", "Help Ticket", "Shipping Details"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#FF8A3C]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment & Shipping */}
          <div>
            <p className="mb-6 text-sm font-bold">Payment & Shipping</p>
            <ul className="space-y-2">
              {[
                "Terms of Use",
                "Payment Methods",
                "Shipping Guide",
                "Locations We Ship To",
                "Estimated Delivery Time",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#FF8A3C]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
            <div>
              <p className="mb-4 text-sm font-semibold">Secured Payment Gateways</p>
              <div className="flex gap-4">
                {["paypal", "mastercard", "visa", "amex"].map((payment) => (
                  <div key={payment} className="h-8 w-12 rounded bg-white p-1 shadow-sm">
                    <Image
                      src={paymentImages[payment]}
                      alt={payment}
                      width={40}
                      height={30}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col justify-center gap-4 md:flex-row mt-6">
          <p className="text-sm text-gray-600 text-center">
            Copyright 2025, Designed by{" "}
            <Link href="#" className="text-[#FF8A3C]">
              eposfirst.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}