import Image from "next/image";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Preview from "@/components/Preview";
import Choose from "@/components/Choose";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <Preview />
      <Choose />    
      <Pricing />
      <Testimonial />
      <FAQ />
      <Footer />
    </>

  );
}
