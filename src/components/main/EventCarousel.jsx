"use client";
import React from 'react';
import ExploreEventCard from './ExploreEventCard';

const EventCarousel = () => {
  const sliderRef = React.useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -450,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 450,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#0d162e' }}>
      <div className="relative w-full">
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex space-x-4 overflow-x-scroll scroll-smooth hide-scrollbar snap-x snap-mandatory"
          >
            <ExploreEventCard 
              title="Event Creation Made Easy" 
              description="Seamlessly create and manage events with our intuitive event creation feature. Specify event details, add images, and set ticket options."
            />
            <ExploreEventCard 
              title="Customizable Event Pages" 
              description="Create custom event pages to give a personalized look and feel to your events. Add logos, banners, and more."
            />
            <ExploreEventCard 
              title="Easy Ticket Management" 
              description="Handle ticketing effortlessly with our integrated ticket management system. Monitor sales, generate reports, and track attendance."
            />
            <ExploreEventCard 
              title="Post-Event Analytics" 
              description="Get valuable insights after your events with our post-event analytics feature. Track attendee engagement and performance metrics."
            />
          </div>
        </div>

        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md z-10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:shadow-lg transition-all duration-300 ease-in-out text-sm w-8 h-8 flex items-center justify-center"
        >
          ←
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md z-10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:shadow-lg transition-all duration-300 ease-in-out text-sm w-8 h-8 flex items-center justify-center"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default EventCarousel;
