"use client";
const Footer = () => {
  return (
      <footer className="bg-[#0d162e] py-3 "> 
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-1">
          <span className="text-white text-sm font-semibold">Eventa</span>
        </div>

        {/* Right Side: Links */}
        <div className="flex items-center space-x-4 text-white text-sm">
          <a href="#" className="hover:underline">
            EXPLORE
          </a>
          <a href="#" className="hover:underline">
            DASHBOARD
          </a>
        </div>
      </div>

      {/* Bottom Section: Social Links and Copyright */}
      <div className="border-t border-gray-600 mt-4 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-3">
            <a
              href="#"
              className="p-1 rounded-full bg-white text-black hover:bg-gray-200 transition-all"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.75 3h8.5A4.25 4.25 0 0120.5 7.25v8.5A4.25 4.25 0 0116.25 20h-8.5A4.25 4.25 0 013.5 15.75v-8.5A4.25 4.25 0 017.75 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.25 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-4 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="p-1 rounded-full bg-white text-black hover:bg-gray-200 transition-all"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 1.5c-5.376 0-9.75 4.374-9.75 9.75 0 4.314 2.799 7.976 6.677 9.258.488.09.676-.211.676-.477 0-.237-.007-.867-.011-1.7-2.715.59-3.288-1.309-3.288-1.309-.444-1.125-1.083-1.425-1.083-1.425-.885-.605.068-.593.068-.593.978.069 1.491 1.004 1.491 1.004.87 1.49 2.283 1.06 2.84.81.088-.63.34-1.06.617-1.303-2.168-.246-4.447-1.084-4.447-4.826 0-1.065.38-1.935 1-2.617-.1-.246-.435-1.238.094-2.58 0 0 .82-.262 2.682 1a9.34 9.34 0 012.446-.328c.83.004 1.667.112 2.446.328 1.863-1.262 2.682-1 2.682-1 .528 1.342.194 2.334.095 2.58.622.682 1 1.552 1 2.617 0 3.751-2.283 4.576-4.455 4.82.35.301.66.899.66 1.814 0 1.31-.01 2.366-.01 2.688 0 .269.184.571.683.473 3.874-1.284 6.67-4.944 6.67-9.26 0-5.376-4.374-9.75-9.75-9.75z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="p-1 rounded-full bg-white text-black hover:bg-gray-200 transition-all"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 19h.01M16 19h.01M12 21h.01M6.293 17.707L3.879 20.12A1 1 0 002 19.121v-4.242a1 1 0 01.293-.707L6.707 10.293A1 1 0 018.293 12l-1 1a1 1 0 000 1.414L6.293 17.707z"
                />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-white text-xs mt-4 md:mt-0">
            © Eventa 2024 | All rights reserved | WebxSec
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
