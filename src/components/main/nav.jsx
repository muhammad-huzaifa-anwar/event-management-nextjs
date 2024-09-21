"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as Icons from "lucide-react";
import { Button } from '../ui/button';
import Image from 'next/image';

const Nav = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const loggedInUser = users.find((u) => u.login === true);
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', { method: 'POST' });
      if (response.ok) {
        alert("Logged out successfully");
        document.cookie = "user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const updatedUsers = users.map(u => ({ ...u, login: false }));
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUser(null);
        window.location.href = '/auth';
      } else {
        alert("Logout failed");
        console.error('Logout error:', response.statusText);
      }
    } catch (error) {
      alert("An error occurred during logout");
      console.error('Fetch error:', error);
    }
  };

  return (
    <nav className="bg-[#0d162e] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
        <Image
          src="/images/logo.png"
          alt="Eventa Logo"
          width={32} // Replace with appropriate size
          height={16} // Replace with appropriate size
          className="w-8 h-4"
        />

          <span className="text-white font-bold text-xl">Eventa</span>
        </Link>

        {/* Nav Links */}
        <ul className="text-white flex space-x-6 items-center">
          <li>
            <Link href="/explore" className="hover:text-yellow-400 transition duration-300 ease-in-out">
              Explore
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-400 transition duration-300 ease-in-out">
              Contact Us
            </Link>
          </li>

          {/* Conditional Links for Logged-In Users */}
          {user ? (
            <>
              {user.accountType === 'eventOrganizer' ? (
                <li>
                  <Link href="/dashboard" className="hover:text-yellow-400 transition duration-300 ease-in-out">
                    Dashboard
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link href="/invitations" className="hover:text-yellow-400 transition duration-300 ease-in-out">
                      Invitations
                    </Link>
                  </li>
                  <li>
                    <Link href="/myrsvps" className="hover:text-yellow-400 transition duration-300 ease-in-out">
                      My RSVPs
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Button
                  onClick={handleLogout}
                  variant='secondary'
                  className="rounded-full px-3 bg-red-500 text-white hover:bg-red-600 transition-transform duration-200 hover:scale-105"
                >
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/auth">
                <Button
                  variant='secondary'
                  className="bg-white text-black rounded-full px-3 hover:bg-black hover:scale-105 transition-transform duration-200 hover:text-white"
                >
                  Login
                </Button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
