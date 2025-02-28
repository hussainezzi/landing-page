"use client" // Only needed in Next.js App Router if you're using client components

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

// (Optional) Lucide icons for the feature blocks
import { Lightbulb, Package } from "lucide-react"

export default function SecondAdd() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left content (Text + Features) */}
        <div className="md:w-2/3 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            Light, Fast &amp; Powerful
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>

          {/* Feature Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <Card className="border border-gray-200 shadow-sm rounded-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                  <span>Title Goes Here</span>
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm rounded-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-blue-600" />
                  <span>Title Does Here</span>
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Aenean commodo ligula eget dolor.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Cum sociis natoque penatibus et magnis dis parturient montes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right: Nature Image from Unsplash */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1535909339361-3a22c38c2d7e?ixlib=rb-4.0.3&ixid=MnwyMzI4NHwwfDF8c2VhcmNofDF8fG5hdHVyZSUyMGxhbmRzY2FwZXxlbnwwfHx8fDE2Nzg5ODk1NzI&auto=format&fit=crop&w=800&q=60"
            alt="Nature scene"
            className="object-contain w-full h-auto max-w-sm"
          />
        </div>
      </section>
    </main>
  )
}
