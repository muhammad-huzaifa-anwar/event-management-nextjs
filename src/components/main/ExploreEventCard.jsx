"use client";
import React from 'react';

const ExploreEventCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-8 w-[300px] h-44 flex-shrink-0 snap-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
      <div className="flex justify-center items-center text-4xl mb-4">
        ✏️
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-sm font-bold mb-2 text-center truncate">{title}</h3>
        <p className="text-gray-600 text-center text-[8px] leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExploreEventCard;
