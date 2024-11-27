import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqItems = [
    {
      question: "What types of products and services do you offer?",
      answer: "We provide a wide range of high-quality chemicals, laboratory equipment, and supplies. Our product catalog includes reagents, solvents, glassware, lab instruments, safety equipment, and specialized scientific tools. We also offer custom sourcing solutions and maintenance services for laboratory equipment."
    },
    {
      question: "Who are your primary clients?",
      answer: "Our clients include educational institutions, research centers, colleges and universities, government organizations, and multinational corporations across different industries. We serve laboratories with varying needs, from educational experiments to advanced research projects."
    },
    {
      question: "Do you supply to both local and international clients?",
      answer: "Yes, we cater to both national and international clients. We have experience working with customers from different regions and ensure efficient shipping and compliance with international trade regulations."
    },
    {
      question: "How do I place an order?",
      answer: "You can place an order through our website using our online store, by contacting our sales team via phone or email, or by filling out our custom quote form for specific requests. If you need assistance, our customer service team is available to guide you through the process."
    },
    {
      question: "What is your policy on custom orders and special requests?",
      answer: "We are happy to accommodate custom orders for specialized chemicals and equipment not found in our standard catalog. Our team works closely with clients to fulfill specific requirements and ensure timely delivery. Please contact us for a quote and lead time for custom orders."
    },
    {
      question: "Do you provide bulk or wholesale pricing?",
      answer: "Yes, we offer competitive pricing for bulk and wholesale orders. For more details, please reach out to our sales department to discuss your needs and request a customized pricing plan."
    },
    {
      question: "Can I get a product sample before placing a large order?",
      answer: "Yes, we provide samples for many of our products to allow clients to test quality and suitability. Reach out to our customer service team to request a sample, and they will guide you through the process."
    },
    {
      question: "What are your payment options?",
      answer: "We accept a range of payment options, including credit and debit cards, bank transfers, and invoicing for eligible organizations. Please contact our billing department for specific details related to your payment preference."
    },
    {
      question: "What is your return and refund policy?",
      answer: "We prioritize customer satisfaction and handle returns on a case-by-case basis. If you receive a defective or incorrect product, please contact us within 30 days of receipt to initiate a return or exchange. For more details, please refer to our Return Policy page."
    },
    {
      question: "Do you provide technical support and training for the equipment?",
      answer: "Yes, we offer comprehensive technical support and training for many of our lab equipment items. Our team is available to assist with installation, training sessions, and troubleshooting. Contact us to schedule a training session or for more information on support services."
    },
    {
      question: "How do you ensure the quality and safety of your products?",
      answer: "We source our products from trusted manufacturers and ensure they comply with international standards for safety and quality. Each item is thoroughly tested and inspected before delivery to meet rigorous safety protocols. For lab chemicals, we provide Material Safety Data Sheets (MSDS) for proper handling and safety information."
    },
    {
      question: "Can you help with laboratory setup and consulting?",
      answer: "Yes, we offer consulting services to help with lab setup, equipment selection, and overall workflow optimization. Our experts work closely with you to design and implement the most effective and efficient lab environments."
    },
    {
      question: "What is the estimated delivery time for orders?",
      answer: "Delivery time depends on the product type, order size, and destination. Typically, domestic orders are processed within 1-3 business days, while international orders may take longer, depending on the shipping method and customs clearance. Contact our logistics team for precise shipping estimates."
    },
    {
      question: "Do you offer after-sales support?",
      answer: "Yes, our customer support team is available to help with any questions or issues after the sale. Whether you need assistance with product usage, warranty information, or troubleshooting, we are here to help."
    },
    {
      question: "How do I contact your customer support team?",
      answer: "You can contact our customer support team via:\n\nPhone: [Your phone number]\nEmail: [sales.chembio@gmail.com]\nLive chat: Available on our website during business hours\nContact form: Found on our website's Contact page"
    },
    {
      question: "Are there any special offers or discounts available?",
      answer: "We periodically offer promotions and discounts on selected items or for bulk purchases. To stay updated, sign up for our newsletter or check our website's promotions section for current deals."
    },
    {
      question: "What measures are taken to ensure environmental sustainability?",
      answer: "We are committed to sustainability and minimize our environmental impact by sourcing eco-friendly products where possible and reducing waste in packaging. We comply with regulations that support responsible disposal and recycling practices."
    },
    {
      question: "Do you provide certifications for the products you sell?",
      answer: "Yes, we provide product certifications and documentation upon request. This includes compliance with industry standards and any specific certifications that may be required for research, regulatory, or safety purposes."
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Frequently Asked Questions (FAQ)</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQ;
