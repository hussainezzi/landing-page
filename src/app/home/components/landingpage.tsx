import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 1. Top Navigation */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <nav className="flex items-center space-x-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Another
          </a>
        </nav>
        <h1 className="font-bold text-lg">Landing</h1>
        <div>By Roay</div>
      </header>

      {/* 2. Hero Section */}
      <main className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 gap-8 max-w-7xl mx-auto">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            Introduce Your Product <br />
            Quickly & Effectively
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full">
              Purchase UI Kit
            </Button>
            <Button variant="outline" className="rounded-full px-6 py-3">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://img.icons8.com/3d-fluency/1000/workspace.png"
            alt="Modern Workplace 3D Illustration"
            className="max-w-sm md:max-w-md w-full h-auto"
          />
        </div>
      </main>
    </div>
  )
}
