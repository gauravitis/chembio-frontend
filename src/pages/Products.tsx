import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Utility function to format price in Indian Rupees with commas
const formatIndianPrice = (price: number) => {
  return "₹" + price.toLocaleString('en-IN');
};

interface ProductVariant {
  size: string;
  price: number;
  sku: string;
}

interface Product {
  name: string;
  description: string;
  image: string;
  features: string[];
  catalogueId: string;
  brand: string;
  casNumber: string;
  purity?: string;
  grade?: string;
  storage?: string;
  variants: ProductVariant[];
  indianSuppliers: string[];
  certifications: string[];
  applications: string[];
}

const Products = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category') || "chemistry-biochemicals"
  );

  const categories = [
    {
      id: "chemistry-biochemicals",
      name: "Chemistry & Biochemicals",
      products: [
        {
          name: "Sodium Chloride (NaCl)",
          description: "High-purity sodium chloride for analytical and research applications",
          image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&h=350&fit=crop",
          features: [
            "High purity assurance",
            "Low heavy metal content",
            "Consistent quality",
            "Batch-wise analysis report"
          ],
          catalogueId: "CHEM-2024-001",
          brand: "Merck",
          casNumber: "7647-14-5",
          purity: "≥99.5%",
          grade: "AR/GR/LR Grade Available",
          storage: "Store in a cool, dry place",
          variants: [
            { size: "500g", price: 450, sku: "NaCl-500G-AR" },
            { size: "1kg", price: 800, sku: "NaCl-1KG-AR" },
            { size: "5kg", price: 3500, sku: "NaCl-5KG-AR" },
            { size: "25kg", price: 15000, sku: "NaCl-25KG-AR" }
          ],
          indianSuppliers: [
            "Merck Life Science India",
            "SRL Chemicals",
            "Finar Chemicals",
            "TCI Chemicals India"
          ],
          certifications: [
            "ISO 9001:2015",
            "GMP Certified",
            "NABL Accredited"
          ],
          applications: [
            "Buffer preparation",
            "Cell culture media",
            "General laboratory use",
            "Pharmaceutical formulations"
          ]
        },
        {
          name: "Tris Base (Tris(hydroxymethyl)aminomethane)",
          description: "Ultra pure Tris base for molecular biology and biochemistry applications",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=350&fit=crop",
          features: [
            "DNase, RNase, and Protease free",
            "Endotoxin tested",
            "Ideal for buffer preparation",
            "High lot-to-lot consistency"
          ],
          catalogueId: "BIO-2024-002",
          brand: "HiMedia",
          casNumber: "77-86-1",
          purity: "≥99.9%",
          grade: "Molecular Biology Grade",
          storage: "Store at room temperature",
          variants: [
            { size: "100g", price: 850, sku: "MB-TRIS-100G" },
            { size: "500g", price: 3200, sku: "MB-TRIS-500G" },
            { size: "1kg", price: 5500, sku: "MB-TRIS-1KG" },
            { size: "5kg", price: 24000, sku: "MB-TRIS-5KG" }
          ],
          indianSuppliers: [
            "HiMedia Laboratories",
            "MP Biomedicals India",
            "Sigma-Aldrich India",
            "Sisco Research Laboratories"
          ],
          certifications: [
            "ISO 9001:2015",
            "ISO 13485:2016",
            "CE Certified",
            "GMP Certified"
          ],
          applications: [
            "Buffer preparation",
            "Protein purification",
            "Molecular biology",
            "Biochemical research"
          ]
        },
        {
          name: "DMEM (Dulbecco's Modified Eagle Medium)",
          description: "High-glucose cell culture medium with L-glutamine and sodium pyruvate",
          image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&h=350&fit=crop",
          features: [
            "Sterile, filtered",
            "Endotoxin tested",
            "pH 7.2 - 7.4",
            "With phenol red indicator"
          ],
          catalogueId: "CCM-2024-003",
          brand: "Gibco",
          casNumber: "N/A",
          grade: "Cell Culture Grade",
          storage: "Store at 2-8°C, protected from light",
          variants: [
            { size: "100mL", price: 750, sku: "DMEM-100ML" },
            { size: "500mL", price: 2800, sku: "DMEM-500ML" },
            { size: "1L", price: 4500, sku: "DMEM-1L" }
          ],
          indianSuppliers: [
            "Thermo Fisher Scientific India",
            "HiMedia Laboratories",
            "Sigma-Aldrich India",
            "Invitrogen BioServices India"
          ],
          certifications: [
            "ISO 13485:2016",
            "CE Certified",
            "GMP Certified",
            "USFDA Registered"
          ],
          applications: [
            "Cell culture maintenance",
            "Cell growth studies",
            "Tissue culture",
            "Virology research"
          ]
        },
        {
          name: "L-Glutamine Solution",
          description: "Cell culture tested L-Glutamine solution (200mM)",
          image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&h=350&fit=crop",
          features: [
            "Cell culture tested",
            "Sterile filtered",
            "Endotoxin tested",
            "Suitable for cell culture applications"
          ],
          catalogueId: "CCM-2024-004",
          brand: "HiMedia",
          casNumber: "56-85-9",
          grade: "Cell Culture Grade",
          storage: "Store at -20°C",
          variants: [
            { size: "20mL", price: 850, sku: "GLN-20ML" },
            { size: "100mL", price: 3500, sku: "GLN-100ML" },
            { size: "500mL", price: 15000, sku: "GLN-500ML" }
          ],
          indianSuppliers: [
            "HiMedia Laboratories",
            "Thermo Fisher Scientific India",
            "Sigma-Aldrich India"
          ],
          certifications: [
            "ISO 9001:2015",
            "ISO 13485:2016",
            "GMP Certified"
          ],
          applications: [
            "Cell culture media supplementation",
            "Tissue culture",
            "Microbiology research"
          ]
        },
        {
          name: "Methanol (HPLC Grade)",
          description: "Ultra pure methanol for HPLC applications",
          image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&h=350&fit=crop",
          features: [
            "HPLC Grade",
            "Low water content",
            "UV cutoff: 205nm",
            "Filtered through 0.2μm filter"
          ],
          catalogueId: "SOL-2024-001",
          brand: "Merck",
          casNumber: "67-56-1",
          purity: "≥99.9%",
          grade: "HPLC Grade",
          storage: "Store at room temperature",
          variants: [
            { size: "500mL", price: 750, sku: "MEOH-500ML" },
            { size: "1L", price: 1400, sku: "MEOH-1L" },
            { size: "2.5L", price: 3200, sku: "MEOH-2.5L" },
            { size: "4L", price: 4800, sku: "MEOH-4L" }
          ],
          indianSuppliers: [
            "Merck Life Science India",
            "Finar Chemicals",
            "Avantor India"
          ],
          certifications: [
            "ISO 9001:2015",
            "USP",
            "ACS Grade"
          ],
          applications: [
            "HPLC mobile phase",
            "Analytical chemistry",
            "Sample preparation"
          ]
        },
        {
          name: "Agarose (Molecular Biology Grade)",
          description: "High quality agarose for molecular biology applications",
          image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&h=350&fit=crop",
          features: [
            "DNase/RNase free",
            "Low EEO",
            "High gel strength",
            "Optimal resolution"
          ],
          catalogueId: "MB-2024-001",
          brand: "SRL",
          casNumber: "9012-36-6",
          grade: "Molecular Biology Grade",
          storage: "Store at room temperature",
          variants: [
            { size: "100g", price: 2500, sku: "AG-100G" },
            { size: "500g", price: 11000, sku: "AG-500G" },
            { size: "1kg", price: 20000, sku: "AG-1KG" }
          ],
          indianSuppliers: [
            "SRL Chemicals",
            "HiMedia Laboratories",
            "Sigma-Aldrich India"
          ],
          certifications: [
            "ISO 9001:2015",
            "DNase/RNase Free Certified",
            "Molecular Biology Grade"
          ],
          applications: [
            "DNA/RNA gel electrophoresis",
            "PCR product analysis",
            "Molecular weight determination"
          ]
        }
      ]
    },
    {
      id: "lab-equipment",
      name: "Laboratory Equipment",
      products: [
        {
          name: "Digital Analytical Balance",
          description: "High precision analytical balance with 0.1mg readability",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=350&fit=crop",
          features: [
            "0.1mg readability",
            "Internal calibration",
            "LCD display",
            "Draft shield"
          ],
          catalogueId: "EQP-2024-001",
          brand: "Shimadzu",
          casNumber: "N/A",
          grade: "Laboratory Grade",
          storage: "Keep in dry environment",
          variants: [
            { size: "220g capacity", price: 150000, sku: "BAL-220G" },
            { size: "320g capacity", price: 180000, sku: "BAL-320G" }
          ],
          indianSuppliers: [
            "Shimadzu India",
            "Aczet India",
            "Wensar India"
          ],
          certifications: [
            "ISO 9001:2015",
            "CE Certified",
            "NABL Traceable"
          ],
          applications: [
            "Analytical weighing",
            "Research laboratories",
            "Quality control"
          ]
        },
        {
          name: "UV-Vis Spectrophotometer",
          description: "Double beam UV-Visible spectrophotometer with high accuracy",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=350&fit=crop",
          features: [
            "Wavelength range: 190-1100nm",
            "Double beam optics",
            "Built-in validation",
            "USB connectivity"
          ],
          catalogueId: "EQP-2024-002",
          brand: "Systronics",
          casNumber: "N/A",
          grade: "Research Grade",
          storage: "Temperature controlled environment",
          variants: [
            { size: "Standard Model", price: 350000, sku: "UV-2401" },
            { size: "Advanced Model", price: 450000, sku: "UV-2401-PRO" }
          ],
          indianSuppliers: [
            "Systronics India",
            "LabIndia Instruments",
            "Thermo Fisher Scientific India"
          ],
          certifications: [
            "ISO 9001:2015",
            "CE Certified",
            "IQ/OQ/PQ Documentation"
          ],
          applications: [
            "Quantitative analysis",
            "Kinetic studies",
            "Quality control",
            "Research applications"
          ]
        }
      ]
    },
    {
      id: "molecular-biology",
      name: "Molecular Biology",
      products: [
        {
          name: "PCR Master Mix (2X)",
          description: "Ready-to-use PCR master mix for molecular biology applications",
          image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&h=350&fit=crop",
          features: [
            "Hot-start PCR ready",
            "Contains Taq DNA Polymerase",
            "Optimized buffer system",
            "High specificity"
          ],
          catalogueId: "MB-2024-002",
          brand: "Genetix",
          casNumber: "N/A",
          grade: "Molecular Biology Grade",
          storage: "Store at -20°C",
          variants: [
            { size: "100 reactions", price: 3500, sku: "PCR-100" },
            { size: "500 reactions", price: 15000, sku: "PCR-500" },
            { size: "1000 reactions", price: 28000, sku: "PCR-1000" }
          ],
          indianSuppliers: [
            "Genetix Biotech Asia",
            "HiMedia Laboratories",
            "Bio-Rad India"
          ],
          certifications: [
            "ISO 13485:2016",
            "DNase/RNase Free",
            "CE-IVD Marked"
          ],
          applications: [
            "Standard PCR",
            "Genotyping",
            "Gene expression studies",
            "Molecular diagnostics"
          ]
        }
      ]
    },
    {
      id: "cell-culture",
      name: "Cell Culture",
      products: [
        {
          name: "Fetal Bovine Serum (FBS)",
          description: "Premium quality FBS for cell culture applications",
          image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&h=350&fit=crop",
          features: [
            "Heat inactivated",
            "Sterile filtered",
            "Endotoxin tested",
            "Cell culture tested"
          ],
          catalogueId: "CC-2024-001",
          brand: "Gibco",
          casNumber: "N/A",
          grade: "Cell Culture Grade",
          storage: "Store at -20°C",
          variants: [
            { size: "100mL", price: 8500, sku: "FBS-100" },
            { size: "500mL", price: 38000, sku: "FBS-500" }
          ],
          indianSuppliers: [
            "Thermo Fisher Scientific India",
            "HiMedia Laboratories",
            "Merck Life Science India"
          ],
          certifications: [
            "ISO 13485:2016",
            "GMP Certified",
            "USDA Approved"
          ],
          applications: [
            "Cell culture media supplementation",
            "Stem cell culture",
            "Tissue culture",
            "Hybridoma culture"
          ]
        }
      ]
    },
    {
      id: "chromatography",
      name: "Chromatography",
      products: [
        {
          name: "HPLC Column (C18)",
          description: "High-performance reverse phase HPLC column",
          image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&h=350&fit=crop",
          features: [
            "End-capped C18 phase",
            "High efficiency",
            "Low bleed",
            "Extended pH range"
          ],
          catalogueId: "CHR-2024-001",
          brand: "Waters",
          casNumber: "N/A",
          grade: "HPLC Grade",
          storage: "Room temperature",
          variants: [
            { size: "4.6 x 250mm, 5µm", price: 45000, sku: "COL-C18-250" },
            { size: "4.6 x 150mm, 5µm", price: 35000, sku: "COL-C18-150" }
          ],
          indianSuppliers: [
            "Waters India",
            "Agilent India",
            "Thermo Fisher Scientific India"
          ],
          certifications: [
            "ISO 9001:2015",
            "Certificate of Analysis",
            "Performance Test Certificate"
          ],
          applications: [
            "Pharmaceutical analysis",
            "Environmental testing",
            "Food analysis",
            "Research applications"
          ]
        }
      ]
    },
    {
      id: "lab-plasticware",
      name: "Lab Plasticware",
      products: [
        {
          name: "Microcentrifuge Tubes",
          description: "High-quality PP microcentrifuge tubes",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=350&fit=crop",
          features: [
            "DNase/RNase free",
            "Autoclavable",
            "Graduated markings",
            "Snap-cap design"
          ],
          catalogueId: "PLS-2024-001",
          brand: "Tarsons",
          casNumber: "N/A",
          grade: "Laboratory Grade",
          storage: "Room temperature",
          variants: [
            { size: "500 tubes (1.5mL)", price: 450, sku: "MCT-1.5-500" },
            { size: "1000 tubes (1.5mL)", price: 800, sku: "MCT-1.5-1000" },
            { size: "500 tubes (2mL)", price: 500, sku: "MCT-2.0-500" }
          ],
          indianSuppliers: [
            "Tarsons Products",
            "Genaxy Scientific",
            "Axygen Scientific India"
          ],
          certifications: [
            "ISO 9001:2015",
            "DNase/RNase Free Certified",
            "CE Marked"
          ],
          applications: [
            "Sample storage",
            "Centrifugation",
            "PCR applications",
            "General laboratory use"
          ]
        }
      ]
    },
    {
      id: "safety-equipment",
      name: "Safety Equipment",
      products: [
        {
          name: "Laboratory Safety Goggles",
          description: "Chemical splash and impact resistant safety goggles",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=350&fit=crop",
          features: [
            "Anti-fog coating",
            "UV protection",
            "Chemical splash protection",
            "Adjustable strap"
          ],
          catalogueId: "SAF-2024-001",
          brand: "3M",
          casNumber: "N/A",
          grade: "Safety Grade",
          storage: "Room temperature",
          variants: [
            { size: "Standard", price: 800, sku: "SG-STD" },
            { size: "Over-the-Glasses", price: 1200, sku: "SG-OTG" }
          ],
          indianSuppliers: [
            "3M India",
            "Karam Industries",
            "Joseph Leslie"
          ],
          certifications: [
            "EN166 Standard",
            "ANSI Z87.1",
            "CE Marked"
          ],
          applications: [
            "Chemical handling",
            "Laboratory work",
            "Sample preparation",
            "General protection"
          ]
        },
        {
          name: "Chemical Resistant Gloves",
          description: "Nitrile chemical resistant gloves for laboratory use",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=350&fit=crop",
          features: [
            "Powder-free",
            "Chemical resistant",
            "Textured fingertips",
            "Ambidextrous"
          ],
          catalogueId: "SAF-2024-002",
          brand: "Kimberly-Clark",
          casNumber: "N/A",
          grade: "Laboratory Grade",
          storage: "Cool, dry place",
          variants: [
            { size: "Small (100 pcs)", price: 850, sku: "GL-S-100" },
            { size: "Medium (100 pcs)", price: 850, sku: "GL-M-100" },
            { size: "Large (100 pcs)", price: 850, sku: "GL-L-100" }
          ],
          indianSuppliers: [
            "Kimberly-Clark India",
            "Sri Sai Safety",
            "Supreme Healthcare"
          ],
          certifications: [
            "EN374 Standard",
            "ISO 9001:2015",
            "CE Marked"
          ],
          applications: [
            "Chemical handling",
            "Laboratory procedures",
            "Sample handling",
            "Clean room use"
          ]
        },
        {
          name: "Laboratory First Aid Kit",
          description: "Comprehensive first aid kit for laboratory emergencies",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=350&fit=crop",
          features: [
            "Chemical burn treatment",
            "Eye wash solution",
            "Burn dressing",
            "Emergency instructions"
          ],
          catalogueId: "SAF-2024-003",
          brand: "PharmaPack",
          casNumber: "N/A",
          grade: "Medical Grade",
          storage: "Room temperature",
          variants: [
            { size: "Basic Kit", price: 2500, sku: "FAK-BASIC" },
            { size: "Advanced Kit", price: 4500, sku: "FAK-ADV" }
          ],
          indianSuppliers: [
            "Pharmapack India",
            "Acme Safety",
            "Medicare Hygiene"
          ],
          certifications: [
            "ISO 13485:2016",
            "CE Marked",
            "FDA Registered"
          ],
          applications: [
            "Laboratory safety",
            "Emergency response",
            "Chemical exposure",
            "First aid treatment"
          ]
        }
      ]
    },
    {
      id: "glass-labware",
      name: "Glass Labware",
      products: [
        {
          name: "Borosilicate Beakers Set",
          description: "Premium quality borosilicate glass beakers with graduations",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=350&fit=crop",
          features: [
            "Low thermal expansion",
            "High chemical resistance",
            "Accurate graduations",
            "Uniform wall thickness"
          ],
          catalogueId: "GLS-2024-001",
          brand: "Borosil",
          casNumber: "N/A",
          grade: "Laboratory Grade",
          storage: "Room temperature",
          variants: [
            { size: "Set of 5 (50-1000mL)", price: 1500, sku: "BKR-SET-5" },
            { size: "Set of 8 (25-2000mL)", price: 2800, sku: "BKR-SET-8" }
          ],
          indianSuppliers: [
            "Borosil India",
            "J-SIL Glass",
            "Glassco Laboratory"
          ],
          certifications: [
            "ISO 9001:2015",
            "DIN ISO 3819",
            "CE Marked"
          ],
          applications: [
            "General laboratory use",
            "Chemical mixing",
            "Sample preparation",
            "Storage"
          ]
        },
        {
          name: "Volumetric Flask Class A",
          description: "High precision volumetric flasks for analytical work",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=350&fit=crop",
          features: [
            "Class A accuracy",
            "Borosilicate glass",
            "Batch certified",
            "Individual calibration"
          ],
          catalogueId: "GLS-2024-002",
          brand: "Glassco",
          casNumber: "N/A",
          grade: "Class A",
          storage: "Room temperature",
          variants: [
            { size: "100mL", price: 450, sku: "VF-100" },
            { size: "250mL", price: 650, sku: "VF-250" },
            { size: "500mL", price: 850, sku: "VF-500" },
            { size: "1000mL", price: 1200, sku: "VF-1000" }
          ],
          indianSuppliers: [
            "Glassco Laboratory",
            "Borosil India",
            "VENSIL Glass Works"
          ],
          certifications: [
            "DIN ISO 1042",
            "USP Standards",
            "ASTM E694"
          ],
          applications: [
            "Analytical chemistry",
            "Solution preparation",
            "Quality control",
            "Research work"
          ]
        },
        {
          name: "Condenser (Liebig)",
          description: "Standard Liebig condenser for distillation setups",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=350&fit=crop",
          features: [
            "Borosilicate glass",
            "Ground glass joints",
            "Efficient cooling",
            "Standard taper joints"
          ],
          catalogueId: "GLS-2024-003",
          brand: "J-SIL",
          casNumber: "N/A",
          grade: "Laboratory Grade",
          storage: "Careful handling required",
          variants: [
            { size: "300mm length", price: 2200, sku: "CON-300" },
            { size: "400mm length", price: 2800, sku: "CON-400" }
          ],
          indianSuppliers: [
            "J-SIL Glass",
            "Borosil India",
            "VENSIL Glass Works"
          ],
          certifications: [
            "ISO 9001:2015",
            "DIN Standards",
            "Quality Tested"
          ],
          applications: [
            "Distillation",
            "Reflux reactions",
            "Organic synthesis",
            "Laboratory setup"
          ]
        }
      ]
    },
    {
      id: "lab-consumables",
      name: "Lab Consumables",
      products: [
        {
          name: "Filter Paper Set",
          description: "High-quality filter papers for laboratory filtration",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=350&fit=crop",
          features: [
            "Multiple pore sizes",
            "High retention",
            "Pure cellulose",
            "Ash-free grades"
          ],
          catalogueId: "CON-2024-001",
          brand: "Whatman",
          casNumber: "N/A",
          grade: "Laboratory Grade",
          storage: "Cool, dry place",
          variants: [
            { size: "Grade 1 (100 sheets)", price: 850, sku: "FP-1-100" },
            { size: "Grade 42 (100 sheets)", price: 1200, sku: "FP-42-100" },
            { size: "Mixed Grades Set", price: 1800, sku: "FP-MIX-100" }
          ],
          indianSuppliers: [
            "GE Healthcare India",
            "HiMedia Laboratories",
            "Merck Life Science India"
          ],
          certifications: [
            "ISO 9001:2015",
            "Quality Tested",
            "Lab Certified"
          ],
          applications: [
            "Gravimetric analysis",
            "Sample preparation",
            "Qualitative analysis",
            "General filtration"
          ]
        },
        {
          name: "pH Test Strips",
          description: "Universal pH indicator strips with color chart",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=350&fit=crop",
          features: [
            "pH range 0-14",
            "Color coded chart",
            "Quick results",
            "Non-bleeding"
          ],
          catalogueId: "CON-2024-002",
          brand: "Merck",
          casNumber: "N/A",
          grade: "Laboratory Grade",
          storage: "Store in dry place",
          variants: [
            { size: "100 strips/pack", price: 350, sku: "PH-100" },
            { size: "200 strips/pack", price: 650, sku: "PH-200" }
          ],
          indianSuppliers: [
            "Merck Life Science India",
            "HiMedia Laboratories",
            "Cole-Parmer India"
          ],
          certifications: [
            "ISO 9001:2015",
            "Quality Tested",
            "Calibration Certificate"
          ],
          applications: [
            "pH measurement",
            "Water testing",
            "Quality control",
            "Field testing"
          ]
        },
        {
          name: "Disposable Petri Dishes",
          description: "Sterile plastic petri dishes for microbiology",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=350&fit=crop",
          features: [
            "Sterile",
            "Optically clear",
            "Vented design",
            "Stackable"
          ],
          catalogueId: "CON-2024-003",
          brand: "Tarsons",
          casNumber: "N/A",
          grade: "Cell Culture Grade",
          storage: "Room temperature",
          variants: [
            { size: "90mm (50 pcs)", price: 450, sku: "PD-90-50" },
            { size: "90mm (500 pcs)", price: 4000, sku: "PD-90-500" }
          ],
          indianSuppliers: [
            "Tarsons Products",
            "HiMedia Laboratories",
            "Genaxy Scientific"
          ],
          certifications: [
            "ISO 9001:2015",
            "Sterility Certified",
            "DNase/RNase Free"
          ],
          applications: [
            "Cell culture",
            "Microbiology",
            "Sample preparation",
            "Storage"
          ]
        }
      ]
    },
    {
      id: "research-instruments",
      name: "Research Instruments",
      products: [
        {
          name: "Digital Colony Counter",
          description: "Automatic colony counting system with digital display",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=350&fit=crop",
          features: [
            "LED illumination",
            "Digital display",
            "Automatic counting",
            "USB connectivity"
          ],
          catalogueId: "RES-2024-001",
          brand: "Systronics",
          casNumber: "N/A",
          grade: "Research Grade",
          storage: "Room temperature",
          variants: [
            { size: "Basic Model", price: 45000, sku: "CC-BASIC" },
            { size: "Advanced Model", price: 75000, sku: "CC-ADV" }
          ],
          indianSuppliers: [
            "Systronics India",
            "Lab India Instruments",
            "Electronics India"
          ],
          certifications: [
            "ISO 9001:2015",
            "CE Marked",
            "Calibration Certificate"
          ],
          applications: [
            "Microbiology research",
            "Quality control",
            "Food testing",
            "Research laboratories"
          ]
        },
        {
          name: "Microplate Reader",
          description: "Multi-mode microplate reader for research applications",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=350&fit=crop",
          features: [
            "UV-Vis absorbance",
            "Fluorescence detection",
            "96-well format",
            "Temperature control"
          ],
          catalogueId: "RES-2024-002",
          brand: "Thermo Scientific",
          casNumber: "N/A",
          grade: "Research Grade",
          storage: "Air-conditioned environment",
          variants: [
            { size: "Basic Model", price: 450000, sku: "MPR-BASIC" },
            { size: "Advanced Model", price: 750000, sku: "MPR-ADV" }
          ],
          indianSuppliers: [
            "Thermo Fisher Scientific India",
            "PerkinElmer India",
            "Molecular Devices India"
          ],
          certifications: [
            "ISO 13485:2016",
            "CE-IVD",
            "GMP Certified"
          ],
          applications: [
            "ELISA assays",
            "Protein quantification",
            "Cell-based assays",
            "Drug discovery"
          ]
        },
        {
          name: "Gel Documentation System",
          description: "Complete gel imaging and documentation system",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=350&fit=crop",
          features: [
            "High-resolution camera",
            "UV and white light",
            "Analysis software",
            "Compact design"
          ],
          catalogueId: "RES-2024-003",
          brand: "Bio-Rad",
          casNumber: "N/A",
          grade: "Research Grade",
          storage: "Laboratory environment",
          variants: [
            { size: "Basic System", price: 350000, sku: "GDS-BASIC" },
            { size: "Advanced System", price: 580000, sku: "GDS-ADV" }
          ],
          indianSuppliers: [
            "Bio-Rad Laboratories India",
            "Syngene International",
            "MDI Advanced Microdevices"
          ],
          certifications: [
            "ISO 9001:2015",
            "CE Marked",
            "UL Listed"
          ],
          applications: [
            "DNA/RNA gel imaging",
            "Western blot imaging",
            "Protein gel documentation",
            "Research documentation"
          ]
        }
      ]
    }
  ];

  const filteredCategories = categories.filter(category => 
    !selectedCategory || category.id === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Products</h1>
              <p className="text-muted-foreground">Browse our extensive catalog of laboratory products</p>
            </div>
            <div className="w-full md:w-auto flex items-center gap-4">
              <div className="relative flex-grow md:flex-grow-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 w-full md:w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={selectedCategory || ""} onValueChange={(value) => setSelectedCategory(value)}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              <h2 className="text-2xl font-semibold">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products
                  .filter(product => 
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((product) => (
                    <Card key={product.catalogueId} className="flex flex-col">
                      <CardHeader>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-semibold">Catalogue ID:</span>
                            <p className="text-muted-foreground">{product.catalogueId}</p>
                          </div>
                          <div>
                            <span className="font-semibold">Brand:</span>
                            <p className="text-muted-foreground">{product.brand}</p>
                          </div>
                          <div>
                            <span className="font-semibold">CAS Number:</span>
                            <p className="text-muted-foreground">{product.casNumber}</p>
                          </div>
                          {product.purity && (
                            <div>
                              <span className="font-semibold">Purity:</span>
                              <p className="text-muted-foreground">{product.purity}</p>
                            </div>
                          )}
                          {product.grade && (
                            <div>
                              <span className="font-semibold">Grade:</span>
                              <p className="text-muted-foreground">{product.grade}</p>
                            </div>
                          )}
                          <div>
                            <span className="font-semibold">SKU:</span>
                            <p className="text-muted-foreground">{product.variants[0].sku}</p>
                          </div>
                        </div>

                        <div>
                          <span className="font-semibold">Storage:</span>
                          <p className="text-muted-foreground text-sm">{product.storage}</p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold">Key Features:</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {product.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold">Applications:</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {product.applications.map((app, idx) => (
                              <li key={idx}>{app}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold">Available From:</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {product.indianSuppliers.map((supplier, idx) => (
                              <li key={idx}>{supplier}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold">Certifications:</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.certifications.map((cert, idx) => (
                              <Badge key={idx} variant="outline">{cert}</Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex-grow">
                            <Select
                              value={product.variants[0].sku}
                              onValueChange={(value) => 
                                setSelectedVariants(prev => ({...prev, [product.name]: value}))
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                              <SelectContent>
                                {product.variants.map((variant) => (
                                  <SelectItem key={variant.sku} value={variant.sku}>
                                    {variant.size} - {formatIndianPrice(variant.price)}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <Button 
                            className="flex-shrink-0"
                            onClick={() => navigate(`/contact?product=${encodeURIComponent(product.name)}&sku=${product.variants[0].sku}`)}
                          >
                            Request Quote
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;