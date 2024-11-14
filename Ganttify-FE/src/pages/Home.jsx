import Contact from "../components/Contact";
import Cta from "../components/CTA";
import CustomerSection from "../components/CustomerSection";
import Features from "../components/Features";
import FooterComponent from "../components/FooterComponent";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Proof from "../components/Proof";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Proof component before Hero on large screens */}
      <div className="hidden lg:block">
        <Proof />
      </div>

      <div className="flex flex-col items-center">
        <Hero />

        {/* Proof component after Hero on small screens */}
        <div className="lg:hidden">
          <Proof />
        </div>

        <Features />
        <Pricing />

        <CustomerSection />
        <div className="lg:hidden">
          <Cta />
        </div>
        <div className="hidden lg:flex">
          <Contact />
        </div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default Home;
