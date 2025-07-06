import Consultation from "@/components/Consultation";
import Featured from "@/components/Featured";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Testimonial from "@/components/Testimonial";
import TestimonialSection from "@/components/TestimonialSection";
import BooksPage from "@/components/BooksSection";
import LatestBlogs from "@/components/LatestBlogs";
import FAQPage from "@/components/AccordianSection";
import LocationPage from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <Statistics />
      <Help />
      <Consultation />
      <Testimonial />
      <Featured />
      <TestimonialSection/>
      <BooksPage/>
      <LatestBlogs/>
      <FAQPage/>
      <LocationPage/>
      <ContactSection recaptchaSiteKey=""/>
      <Footer/>
    </div>
  );
}
