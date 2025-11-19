import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import blogFuture from "@/assets/blog-future-trucking.jpg";
import blogCDL from "@/assets/blog-cdl-guide.jpg";
import blogRetention from "@/assets/blog-driver-retention.jpg";

const FeaturedBlogs = () => {
  const blogs = [
    {
      title: "The Future of Trucking: Technology Trends in 2024",
      excerpt: "Explore how AI, autonomous vehicles, and digital platforms are transforming the trucking industry and what it means for drivers.",
      image: blogFuture,
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Industry Trends"
    },
    {
      title: "Complete Guide to Getting Your CDL-A License",
      excerpt: "Everything you need to know about obtaining your Class A CDL, from requirements to training programs and test preparation.",
      image: blogCDL,
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Career Guide"
    },
    {
      title: "Top 10 Benefits Drivers Look for in 2024",
      excerpt: "Learn what professional drivers prioritize when choosing carriers, from home time to health benefits and performance bonuses.",
      image: blogRetention,
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "For Carriers"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest <span className="text-accent">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay informed with expert advice, industry news, and career tips
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogs.map((blog, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {blog.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground hover:text-accent transition-colors cursor-pointer">
                  {blog.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {blog.excerpt}
                </p>

                <Button variant="ghost" className="group p-0 h-auto text-accent hover:text-accent/80">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
