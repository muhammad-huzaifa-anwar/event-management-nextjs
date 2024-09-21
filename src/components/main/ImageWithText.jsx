"use client";
import Image from 'next/image';

export default function ImageWithText() {
  return (
    <div className="bg-white py-8" style={{ marginTop: '50px' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
          {/* Content Section (Right) */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold text-pink-600">
              Unlock Your Creative Potential
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              "Rest assured that your event data is safe and secure with our web app. We prioritize data protection and employ industry-standard security measures to safeguard your information. Our reliable infrastructure ensures that your event management process remains uninterrupted, allowing you to focus on what matters most – creating exceptional events."
            </p>
            <button className="bg-[#2AC6FA] text-white py-2 px-4 rounded-full mt-4 text-sm">
              Get Started
            </button>
          </div>
          {/* Image Section (Left) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              src="https://spot-light-appwrite.vercel.app/static/media/security.9e0c85df1eb5ccc91b86.jpg"
              alt="Creative Potential"
              width={500} 
              height={600} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
