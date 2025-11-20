import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, Clock, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface JobCardProps {
  company: string;
  title: string;
  location: string;
  payRange: string;
  routeType: string;
  cdlType: string;
  schedule: string;
  posted: string;
}

const JobCard = ({ company, title, location, payRange, routeType, cdlType, schedule, posted }: JobCardProps) => {
  const navigate = useNavigate();
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-border">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
            <p className="text-lg text-muted-foreground font-semibold">{company}</p>
          </div>
          <Badge className="bg-accent text-accent-foreground">{cdlType}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <DollarSign className="h-4 w-4" />
            <span className="font-semibold text-foreground">{payRange}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Truck className="h-4 w-4" />
            <span>{routeType}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{schedule}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-muted-foreground">Posted {posted}</span>
          <Button 
            onClick={() => navigate('/apply/1')}
            className="bg-primary hover:bg-primary/90"
          >
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
