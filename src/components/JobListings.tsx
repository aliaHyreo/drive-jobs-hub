import JobCard from "./JobCard";
import { Button } from "@/components/ui/button";

const JobListings = () => {
  const jobs = [
    {
      company: "Swift Transportation",
      title: "Regional CDL-A Driver",
      location: "Phoenix, AZ",
      payRange: "$65,000 - $80,000/year",
      routeType: "Regional",
      cdlType: "CDL-A",
      schedule: "Home Weekly",
      posted: "2 days ago"
    },
    {
      company: "Schneider National",
      title: "Local Delivery Driver",
      location: "Dallas, TX",
      payRange: "$55,000 - $70,000/year",
      routeType: "Local",
      cdlType: "CDL-B",
      schedule: "Home Daily",
      posted: "1 day ago"
    },
    {
      company: "Werner Enterprises",
      title: "OTR Truck Driver",
      location: "Nationwide",
      payRange: "$70,000 - $90,000/year",
      routeType: "OTR",
      cdlType: "CDL-A",
      schedule: "Out 3 weeks",
      posted: "3 days ago"
    },
    {
      company: "J.B. Hunt Transport",
      title: "Dedicated Account Driver",
      location: "Atlanta, GA",
      payRange: "$60,000 - $75,000/year",
      routeType: "Dedicated",
      cdlType: "CDL-A",
      schedule: "Home Weekends",
      posted: "1 week ago"
    },
    {
      company: "Prime Inc.",
      title: "Flatbed Driver - Experienced",
      location: "Multiple Locations",
      payRange: "$75,000 - $95,000/year",
      routeType: "OTR",
      cdlType: "CDL-A",
      schedule: "Out 2-3 weeks",
      posted: "4 days ago"
    },
    {
      company: "Knight Transportation",
      title: "Regional Reefer Driver",
      location: "Chicago, IL",
      payRange: "$62,000 - $78,000/year",
      routeType: "Regional",
      cdlType: "CDL-A",
      schedule: "Home Weekly",
      posted: "5 days ago"
    }
  ];

  return (
    <section id="jobs" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-accent">Job Opportunities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse thousands of CDL jobs from top carriers nationwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
