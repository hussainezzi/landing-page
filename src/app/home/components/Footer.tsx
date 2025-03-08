
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#F4F6FC] text-gray-700">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-sm">©2023 Yourcompany</span>
        <h1 className="text-lg font-bold text-blue-900">Landing</h1>
        <Button className="bg-blue-900 text-white hover:bg-blue-800 rounded-full px-4 py-2">
          Purchase now
        </Button>
      </div>

      {/* Blue Divider */}
      <hr className="border-t-2 border-blue-500" />

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Navigation Links */}
        <nav className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 text-gray-500">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-700">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-700">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-gray-700">
            <Youtube className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
