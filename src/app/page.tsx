import Footer from "@/components/Footer";
import Instructors from "../components/Instructors";
import MusicSchoolTestimonials from "@/components/Testimonialscards";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import FeaturedCourses from "@/components/ui/FeaturedCourses";
import HeroSection from "@/components/ui/HeroSection";
import WhyChooseUS from "@/components/ui/WhyChooseUS";
import UpcomingWebinars from "@/components/UpcomingWebinars";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUS/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>
      <Instructors />
      <Footer />
    </main>
   
  );
}
