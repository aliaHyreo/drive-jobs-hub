import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ForDriversCarriers from "@/components/ForDriversCarriers";
import JobListings from "@/components/JobListings";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustedBy />
      <ForDriversCarriers />
      <JobListings />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
