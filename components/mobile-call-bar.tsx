import Link from "next/link"
import { Phone } from "lucide-react"

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden">
      <Link
        href="/#locations"
        className="flex items-center justify-center gap-2 bg-[#E63946] px-4 py-3.5 text-sm font-bold text-white shadow-lg"
      >
        <Phone className="size-4" />
        Find Your Store & Order Now
      </Link>
    </div>
  )
}
