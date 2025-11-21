import swiftLogo from "@/assets/carriers/swift.png";
import schneiderLogo from "@/assets/carriers/schneider.png";
import wernerLogo from "@/assets/carriers/werner.png";
import jbhuntLogo from "@/assets/carriers/jbhunt.png";
import primeLogo from "@/assets/carriers/prime.png";
import knightLogo from "@/assets/carriers/knight.png";
import creteLogo from "@/assets/carriers/crete.png";
import crstLogo from "@/assets/carriers/crst.png";
import hirschbachLogo from "@/assets/carriers/hirschbach.png";
import maverickLogo from "@/assets/carriers/maverick.png";
import tmcLogo from "@/assets/carriers/tmc.png";
import roehlLogo from "@/assets/carriers/roehl.png";

const TrustedBy = () => {
  const carriers = [
    { name: "Swift Transportation", logo: swiftLogo },
    { name: "Schneider National", logo: schneiderLogo },
    { name: "Werner Enterprises", logo: wernerLogo },
    { name: "J.B. Hunt", logo: jbhuntLogo },
    { name: "Prime Inc.", logo: primeLogo },
    { name: "Knight Transportation", logo: knightLogo },
    { name: "Crete Carrier", logo: creteLogo },
    { name: "CRST International", logo: crstLogo },
    { name: "Hirschbach Motor Lines", logo: hirschbachLogo },
    { name: "Maverick Transportation", logo: maverickLogo },
    { name: "TMC Transportation", logo: tmcLogo },
    { name: "Roehl Transport", logo: roehlLogo }
  ];

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
          Trusted by Leading Carriers Nationwide
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {carriers.map((carrier, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <img 
                src={carrier.logo} 
                alt={`${carrier.name} logo`}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
