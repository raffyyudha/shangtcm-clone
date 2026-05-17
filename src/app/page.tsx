import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Approach from "@/components/Approach";
import GoodHands from "@/components/GoodHands";
import Reviews from "@/components/Reviews";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f4ee]">
      <Header />
      <Hero />
      <TrustBadges />
      <About />
      <Expertise />
      <Approach />
      <GoodHands />
      <Reviews />
      <Appointment />
      <Footer />
    </main>
  );
}
