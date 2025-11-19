import JobCard from "./JobCard";
import { Button } from "@/components/ui/button";

const JobListings = () => {
  const jobs = [
    {
      company: "Swift Transportation",
      title: "CDL A OTR Driver - Dry Van",
      location: "Phoenix, AZ",
      payRange: "$0.55 - $0.65/mile",
      routeType: "OTR",
      cdlType: "CDL-A",
      schedule: "14 days out, 3 days home",
      posted: "2 days ago"
    },
    {
      company: "Schneider National",
      title: "Local CDL A Driver - Home Daily",
      location: "Green Bay, WI",
      payRange: "$75,000 - $85,000/year",
      routeType: "Local",
      cdlType: "CDL-A",
      schedule: "Home daily",
      posted: "1 day ago"
    },
    {
      company: "Werner Enterprises",
      title: "CDL A Regional Driver - Flatbed",
      location: "Omaha, NE",
      payRange: "$70,000 - $80,000/year",
      routeType: "Regional",
      cdlType: "CDL-A",
      schedule: "5 days out, 2 days home",
      posted: "3 days ago"
    },
    {
      company: "J.B. Hunt Transport",
      title: "CDL A Intermodal Driver",
      location: "Chicago, IL",
      payRange: "$1,200 - $1,500/week",
      routeType: "Local",
      cdlType: "CDL-A",
      schedule: "Home daily",
      posted: "1 day ago"
    },
    {
      company: "Crete Carrier",
      title: "CDL A Refrigerated Driver",
      location: "Lincoln, NE",
      payRange: "$0.58 - $0.68/mile",
      routeType: "OTR",
      cdlType: "CDL-A",
      schedule: "18-21 days out",
      posted: "4 days ago"
    },
    {
      company: "Knight Transportation",
      title: "CDL B Local Delivery Driver",
      location: "Toronto, ON",
      payRange: "$60,000 - $70,000/year",
      routeType: "Local",
      cdlType: "CDL-B",
      schedule: "Home daily",
      posted: "2 days ago"
    }
  ];

  return (
    <section id="jobs" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Next Great <span className="text-accent">Trucking Career</span> Starts Here
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore high-paying CDL opportunities with top carriers hiring now
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
