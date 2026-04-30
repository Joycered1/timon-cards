"use client"

import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import WhyTimon from '@/components/WhyTimon/WhyTimon';
import HowToSignUp from '@/components/HowToSignUp/HowToSignUp';
import TravellingNow from '@/components/TravellingNow/TravellingNow';
import Testimonials from '@/components/Testimonials/Testimonials';
import FAQ from '@/components/FAQ/FAQ';
import Footer from '@/components/Footer/Footer';
import { useEffect } from 'react';
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			smoothWheel: true,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);
  return (
    <>
      <Navbar />
      <Hero />
      <WhyTimon />
      <HowToSignUp />
      <TravellingNow />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
