"use client";

import Nav from '@/components/main/nav.jsx'; // Ensure the path matches your project structure
import Hero from '@/components/main/hero.jsx';
import BlogSection from '@/components/main/blog.jsx';
import EventCarousel from '@/components/main/EventCarousel';
import ImageWithText from '@/components/main/ImageWithText';
import Footer from '@/components/main/footer';
import EventInfo from '@/components/main/EventInfo';
export default function Home() {
  return (
    <div>
      <Nav/> 
      <Hero/>
      <BlogSection/>
      <EventInfo/>
      <EventCarousel/>
      <ImageWithText/>
      <Footer/>   
    </div>
  );
}
