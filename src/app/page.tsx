import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import UpcomingVideos from "@/components/UpcomingVideos";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import React from "react";
import Testimonials from "@/components/Testimonials";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <>
      <main className='min-h-screen bg-slate-900/[0.96] antialiased bg-grid-white/[0.02]'>
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <Testimonials />
        <UpcomingVideos />
        <Instructors />
        <Footer />
      </main>
    </>
  );
}
