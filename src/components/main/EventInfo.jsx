"use client";

export default function EventInfo() {
  return (
    <div className="bg-[#0d162e] text-white py-8" style={{ marginTop: '50px' }}>
      <div className="container mx-auto px-6">
        {/* Flex container with responsive direction */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Content Section (Left) */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-pink-600 text-center md:text-left">
              Seamless Event Planning and Organization
            </h2>
          </div>
          {/* Content Section (Right) */}
          <div className="w-full md:w-1/2">
            <p className="text-center md:text-left text-sm">
              Say goodbye to the hassles of event planning. Our user-friendly interface simplifies
              the process, allowing you to focus on your artistic endeavors. Create and manage events
              effortlessly, from setting dates and locations to providing event descriptions and
              ticketing options. Streamline your planning process and bring your vision to reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
