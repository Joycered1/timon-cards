import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import WhyTimon from '@/components/WhyTimon/WhyTimon';
import HowToSignUp from '@/components/HowToSignUp/HowToSignUp';
import Testimonials from '@/components/Testimonials/Testimonials';
import FAQ from '@/components/FAQ/FAQ';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyTimon />
      <HowToSignUp />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
