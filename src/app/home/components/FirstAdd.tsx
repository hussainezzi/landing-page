import Image from "next/image"
// (Optional) If you're using Next.js, next/image is recommended.
// Otherwise, you can use a normal <img> tag.

export default function FirstAdd() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Container Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Illustration */}
        <div className="md:w-1/2 flex justify-center">
          {/* Replace with your actual image path */}
          <Image
            src="https://img.icons8.com/3d-fluency/1000/analytics.png"
            alt="Business Analysis Illustration"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            Light, Fast &amp; Powerful
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
            natoque penatibus et magnis dis parturient montes, nascetur 
            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
            pretium quis, sem.
          </p>
        </div>
      </section>
    </main>
  )
}
