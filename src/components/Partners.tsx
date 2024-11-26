import { motion } from "framer-motion";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "Partner 1", logo: "https://placehold.co/200x100/png?text=Partner+1" },
  { name: "Partner 2", logo: "https://placehold.co/200x100/png?text=Partner+2" },
  { name: "Partner 3", logo: "https://placehold.co/200x100/png?text=Partner+3" },
  { name: "Partner 4", logo: "https://placehold.co/200x100/png?text=Partner+4" },
  { name: "Partner 5", logo: "https://placehold.co/200x100/png?text=Partner+5" },
];

export function Partners() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Trusted Partners</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-[200px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}