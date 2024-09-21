"use client";
import Image from 'next/image';

export default function BlogSection() {
  return (
    <div className="bg-white py-8" style={{ marginTop: '50px' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
          {/* Image Section (Left) */}
          <div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
            <Image
              src="https://spot-light-appwrite.vercel.app/static/media/3187910.d4f2d36e4a30e6346381.jpg"
              alt="Creative Potential"
              width={500} 
              height={600} 
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section (Right) */}
          <div className="w-full sm:w-1/2 text-center sm:text-left sm:pl-6">
            <h2 className="text-2xl font-bold text-pink-600">
              Unlock Your Creative Potential
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Our app empowers individual contributors and artists like you to
              unleash your creativity and organize remarkable events. Whether
              you're planning a solo exhibition, a live performance, or a
              collaborative workshop, our platform provides the tools and
              features you need to make your events a resounding success.
            </p>
            <button className="bg-[#2AC6FA] text-white py-2 px-4 rounded-full mt-4 text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
