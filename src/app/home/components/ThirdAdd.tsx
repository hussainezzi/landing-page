
import { Button } from "@/components/ui/button"

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* 1. Curved SVG at the top */}
      <div className="absolute top-0 left-0 w-full h-[200px]">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0 C150,100 350,0 500,100 L500,0 Z"
            fill="#F4F6FC"
          />
        </svg>
      </div>

      {/* 2. Main Pricing Content */}
      <div className="pt-24 pb-16 px-6 bg-[#F4F6FC] flex items-center justify-center min-h-[400px]">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            A Price To Suit Everyone
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
          <div className="text-5xl font-bold text-blue-900 mb-2">
            $40
          </div>
          <div className="text-gray-500 mb-4">
            UI Design Kit
          </div>
          <p className="text-gray-600 mb-8 leading-relaxed">
            See, One price. Simple.
          </p>
          <Button className="bg-blue-900 text-white hover:bg-blue-800 rounded-full px-8 py-3">
            Purchase Now
          </Button>
        </div>
      </div>
    </section>
  )
}
