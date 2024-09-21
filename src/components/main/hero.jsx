"use client";
export default function Hero() {
  return (
    <div className="min-h-[50vh] bg-[#0d162e] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Eventa Your Creativity
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Curate Unforgettable Events
        </h2>
        <p className="text-gray-400 mb-10">
          RSVP and Management Made Effortless for Creators
        </p>
        <div className="flex justify-center space-x-2">
          <button className="bg-[#2AC6FA] text-white py-2 px-2 rounded-full">
            Get Started
          </button>
          <button className="bg-[#F95281] text-white py-2 px-2 rounded-full">
            Explore Events
          </button>
        </div>
      </div>
    </div>
  );
}
