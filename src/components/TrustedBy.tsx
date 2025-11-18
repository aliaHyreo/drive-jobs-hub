const TrustedBy = () => {
  const companies = [
    "Swift Transportation",
    "Schneider National",
    "Werner Enterprises",
    "J.B. Hunt",
    "Prime Inc.",
    "Knight Transportation",
    "Crete Carrier",
    "CRST International"
  ];

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
          Trusted by Leading Carriers Nationwide
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-muted-foreground/60 font-semibold text-sm md:text-base hover:text-foreground transition-colors cursor-default"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
