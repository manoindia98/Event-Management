import { CallToAction } from "@/components/call-to-action";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Howitworks } from "@/components/howitworks";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";


export default function Home() {
  return (
    <main>
      
      <Header />
      <HeroSection />
      <Features />
      <Howitworks/>
      <Pricing/>
      <Testimonials/>
      <CallToAction />
      <FAQ/>
      <Footer/>
    </main>
  );
}
