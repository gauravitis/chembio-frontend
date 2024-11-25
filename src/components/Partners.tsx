interface Partner {
  name: string;
  logo: string;
}

export function Partners() {
  const partners: Partner[] = [
    { name: "SRL", logo: "/lovable-uploads/d0824bba-4949-4cf9-b81c-c7cb1421550b.png" },
    { name: "Merck", logo: "/lovable-uploads/56be3766-1faf-43c4-9703-33d4d26ee523.png" },
    { name: "Honeywell", logo: "/lovable-uploads/e25ff1b7-9d55-4829-a2b8-dc34c34f4f30.png" },
    { name: "Sigma Aldrich", logo: "https://placehold.co/200x100/png?text=Sigma+Aldrich" },
    { name: "Borosil", logo: "https://placehold.co/200x100/png?text=Borosil" },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative flex flex-col items-center space-y-4 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-32 h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                style={{
                  backgroundColor: partner.name === "SRL" ? "#FF0000" : "transparent"
                }}
              />
              <span className="text-lg font-semibold text-primary/80 group-hover:text-primary relative">
                {partner.name}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}