import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const footerLinks = {
  company: {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Contact", href: "/contact" },
    ],
  },
  products: {
    title: "Products",
    links: [
      { name: "Chemistry & Biochemicals", href: "/products?category=chemistry-biochemicals" },
      { name: "Laboratory Equipment", href: "/products?category=laboratory-equipment" },
      { name: "Molecular Biology", href: "/products?category=molecular-biology" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { name: "FAQ", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
    ],
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Footer() {
  return (
    <motion.footer 
      className="bg-muted py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Chembio Lifescience</h3>
            <p className="text-muted-foreground">
              Your trusted partner in chemical and laboratory equipment supply.
            </p>
          </motion.div>

          {Object.values(footerLinks).map((section) => (
            <motion.div variants={item} key={section.title} className="space-y-4">
              <h4 className="text-lg font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-muted-foreground/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              &copy; 2024 Chembio Lifescience. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}