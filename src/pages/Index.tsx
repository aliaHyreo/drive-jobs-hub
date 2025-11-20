import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import DriverBenefits from "@/components/DriverBenefits";
import ForDriversCarriers from "@/components/ForDriversCarriers";
import HowItWorks from "@/components/HowItWorks";
import JobListings from "@/components/JobListings";
import AIFeatures from "@/components/AIFeatures";
import CarrierRecruitment from "@/components/CarrierRecruitment";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustedBy />
      <DriverBenefits />
      <ForDriversCarriers />
      <HowItWorks />
      <JobListings />
      <AIFeatures />
      <CarrierRecruitment />
      <WhyChooseUs />
      <FeaturedBlogs />
      <Footer />
    </div>
  );
};

export default Index;
