import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Jobs = () => {
  const [showFilters, setShowFilters] = useState(true);

  const jobs = [
    {
      company: "Swift Transportation",
      title: "CDL A OTR Driver - Dry Van",
      location: "Toronto, ON",
      payRange: "$75,000 - $85,000/year",
      routeType: "OTR",
      cdlType: "CDL-A",
      schedule: "14 days out, 3 days home",
      posted: "2 days ago"
    },
    {
      company: "Schneider National",
      title: "Local CDL A Driver - Home Daily",
      location: "Vancouver, BC",
      payRange: "$70,000 - $80,000/year",
      routeType: "Local",
      cdlType: "CDL-A",
      schedule: "Home daily",
      posted: "1 day ago"
    },
    {
      company: "European Transport Ltd",
      title: "International Trailer Driver - Poland",
      location: "Remote (Poland-based)",
      payRange: "Up to $3,500/month",
      routeType: "International",
      cdlType: "Heavy Licence",
      schedule: "Long haul international",
      posted: "3 days ago"
    },
    {
      company: "Werner Enterprises",
      title: "CDL A Regional Driver - Flatbed",
      location: "Calgary, AB",
      payRange: "$0.58 - $0.68/mile",
      routeType: "Regional",
      cdlType: "CDL-A",
      schedule: "5 days out, 2 days home",
      posted: "3 days ago"
    },
    {
      company: "J.B. Hunt Transport",
      title: "CDL A Intermodal Driver",
      location: "Montreal, QC",
      payRange: "$1,200 - $1,500/week",
      routeType: "Local",
      cdlType: "CDL-A",
      schedule: "Home daily",
      posted: "1 day ago"
    },
    {
      company: "Crete Carrier",
      title: "CDL A Refrigerated Driver",
      location: "Winnipeg, MB",
      payRange: "$0.58 - $0.68/mile",
      routeType: "OTR",
      cdlType: "CDL-A",
      schedule: "18-21 days out",
      posted: "4 days ago"
    },
    {
      company: "Knight Transportation",
      title: "CDL B Local Delivery Driver",
      location: "Ottawa, ON",
      payRange: "$60,000 - $70,000/year",
      routeType: "Local",
      cdlType: "CDL-B",
      schedule: "Home daily",
      posted: "2 days ago"
    },
    {
      company: "TransX Group",
      title: "Long Haul Truck Driver",
      location: "Edmonton, AB",
      payRange: "$75,000 - $90,000/year",
      routeType: "OTR",
      cdlType: "CDL-A",
      schedule: "2 weeks out, 4 days home",
      posted: "5 days ago"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Find Your Next <span className="text-accent">Truck Driving Job</span>
          </h1>
          <p className="text-center text-lg text-primary-foreground/90 mb-8">
            Browse thousands of CDL jobs across Canada
          </p>
          
          {/* Quick Search Bar */}
          <div className="max-w-3xl mx-auto bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Job title or keywords" 
                  className="pl-10 h-12 bg-background"
                />
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 space-y-6`}>
              <div className="bg-background rounded-lg p-6 shadow-sm space-y-6 sticky top-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-foreground">Filters</h2>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowFilters(false)}
                    className="lg:hidden"
                  >
                    Close
                  </Button>
                </div>

                {/* Job Title/Keywords */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Job Title or Keywords</label>
                  <Input placeholder="e.g. Local Driver" />
                </div>

                {/* CDL Type */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">CDL Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select CDL" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cdl-a">CDL-A</SelectItem>
                      <SelectItem value="cdl-b">CDL-B</SelectItem>
                      <SelectItem value="heavy">Heavy Licence</SelectItem>
                      <SelectItem value="any">Any</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* ZIP Code */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">ZIP/Postal Code</label>
                  <Input placeholder="Enter ZIP or Postal Code" />
                </div>

                {/* Province/Territory */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Province/Territory</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Province" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="on">Ontario</SelectItem>
                      <SelectItem value="qc">Quebec</SelectItem>
                      <SelectItem value="bc">British Columbia</SelectItem>
                      <SelectItem value="ab">Alberta</SelectItem>
                      <SelectItem value="mb">Manitoba</SelectItem>
                      <SelectItem value="sk">Saskatchewan</SelectItem>
                      <SelectItem value="ns">Nova Scotia</SelectItem>
                      <SelectItem value="nb">New Brunswick</SelectItem>
                      <SelectItem value="nl">Newfoundland and Labrador</SelectItem>
                      <SelectItem value="pe">Prince Edward Island</SelectItem>
                      <SelectItem value="nt">Northwest Territories</SelectItem>
                      <SelectItem value="nu">Nunavut</SelectItem>
                      <SelectItem value="yt">Yukon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Posted */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Date Posted</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Anytime" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24h">Last 24 hours</SelectItem>
                      <SelectItem value="7d">Last 7 days</SelectItem>
                      <SelectItem value="14d">Last 14 days</SelectItem>
                      <SelectItem value="30d">Last 30 days</SelectItem>
                      <SelectItem value="any">Anytime</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Job Type */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Type of Job</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="local">Local</SelectItem>
                      <SelectItem value="regional">Regional</SelectItem>
                      <SelectItem value="otr">OTR (Over the Road)</SelectItem>
                      <SelectItem value="international">International</SelectItem>
                      <SelectItem value="dedicated">Dedicated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Salary Range */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Salary Range</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Salary" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50k-60k">$50,000 - $60,000</SelectItem>
                      <SelectItem value="60k-70k">$60,000 - $70,000</SelectItem>
                      <SelectItem value="70k-80k">$70,000 - $80,000</SelectItem>
                      <SelectItem value="80k-90k">$80,000 - $90,000</SelectItem>
                      <SelectItem value="90k+">$90,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Apply Filters
                </Button>
              </div>
            </aside>

            {/* Job Listings */}
            <main className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {jobs.length} Jobs Found
                  </h2>
                  <p className="text-muted-foreground">Based on your search criteria</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  CDL-A
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  Local
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  Home Daily
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  $70k+
                </Badge>
              </div>

              <div className="grid gap-6">
                {jobs.map((job, index) => (
                  <JobCard key={index} {...job} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center gap-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;
