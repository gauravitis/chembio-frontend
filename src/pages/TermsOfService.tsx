import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const TermsOfService = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8 px-4"
    >
      <Card className="p-6 md:p-8 prose dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-sm text-muted-foreground">Last Updated: {currentDate}</p>

        <p className="mt-6">
          Welcome to Chembio Lifescience. These Terms of Service ("Terms") govern your use of our website, products, and services. 
          By accessing or using our website or services, you agree to be bound by these Terms. If you do not agree, 
          please do not use our website or services.
        </p>

        <h2 className="text-xl font-semibold mt-8">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the website and services provided by Chembio Lifescience, you accept and agree to comply with these Terms 
          and our Privacy Policy, which is incorporated herein by reference. If you are using the site on behalf of an organization, 
          you represent and warrant that you have the authority to bind that organization to these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Use of Our Website and Services</h2>
        <p>You agree to use our website and services for lawful purposes only and in accordance with any applicable laws and regulations. You may not:</p>
        <ul>
          <li>Engage in any activity that disrupts or interferes with the proper functioning of the website or services.</li>
          <li>Use the website for any fraudulent, malicious, or unauthorized purposes.</li>
          <li>Attempt to gain unauthorized access to any part of the website, server, or any network connected to the website.</li>
          <li>Copy, modify, distribute, or create derivative works from any content on our website without explicit permission.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">3. Account Registration</h2>
        <p>
          To access certain features of our website, you may be required to register an account. You agree to provide accurate, 
          current, and complete information during the registration process and to keep your account details up to date. You are 
          responsible for maintaining the confidentiality of your account credentials and are fully responsible for all activities 
          that occur under your account.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Order and Payment Terms</h2>
        <ul>
          <li><strong>Ordering:</strong> You agree to provide accurate information when placing an order through our website. Orders are subject to acceptance and availability.</li>
          <li><strong>Pricing and Payment:</strong> All prices are listed in USD and are subject to change. We accept various payment methods, which will be detailed during the checkout process. You agree to pay all charges associated with your order and any applicable taxes.</li>
          <li><strong>Order Confirmation:</strong> You will receive an email confirmation once your order has been successfully placed. We reserve the right to cancel any order that we deem suspicious or fraudulent.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">5. Shipping and Delivery</h2>
        <p>
          We strive to fulfill orders promptly. However, delivery times may vary based on product availability, shipping method, 
          and destination. We are not responsible for delays caused by third-party couriers or events outside our control.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Returns and Refunds</h2>
        <p>
          Our return and refund policy is detailed on our Return Policy page. You may request a return or refund if you receive 
          defective or incorrect products. Please review our Return Policy for the terms and conditions that apply.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Product Information and Warranty</h2>
        <p>
          We make every effort to ensure the accuracy of product descriptions, specifications, and pricing. However, we do not 
          guarantee that all information is completely accurate, reliable, or error-free. All products are sold "as is" and come 
          with no additional warranties unless otherwise specified.
        </p>

        <h2 className="text-xl font-semibold mt-6">8. Intellectual Property</h2>
        <p>
          All content, trademarks, logos, and other intellectual property on our website are the property of Chembio Horizon or 
          its licensors. You may not use, reproduce, or distribute any of our intellectual property without prior written permission.
        </p>

        <h2 className="text-xl font-semibold mt-6">9. Privacy</h2>
        <p>
          Your use of our website and services is governed by our Privacy Policy. Please review it to understand how we collect, 
          use, and protect your information.
        </p>

        <h2 className="text-xl font-semibold mt-6">10. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Chembio Lifescience shall not be liable for any indirect, incidental, consequential, 
          or punitive damages, or for any loss of profits, revenue, or data, arising from your use or inability to use our website 
          or services. Our total liability for any claim arising from these Terms shall not exceed the amount paid by you for the 
          product or service in question.
        </p>

        <h2 className="text-xl font-semibold mt-6">11. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Chembio Lifescience and its affiliates, employees, and agents from any 
          claim, liability, damage, or expense, including reasonable attorney's fees, arising out of your use of our website, 
          products, or services, or your violation of these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-6">12. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to our website and services at our sole discretion, without 
          notice, for any reason, including but not limited to violations of these Terms or applicable laws.
        </p>

        <h2 className="text-xl font-semibold mt-6">13. Governing Law and Jurisdiction</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of India. Any disputes relating to these Terms 
          shall be subject to the exclusive jurisdiction of the courts located in India.
        </p>

        <h2 className="text-xl font-semibold mt-6">14. Changes to These Terms</h2>
        <p>
          We may revise these Terms from time to time. Any changes will be posted on this page with an updated revision date. 
          Your continued use of the website after the posting of changes constitutes your acceptance of those changes.
        </p>

        <h2 className="text-xl font-semibold mt-6">15. Contact Information</h2>
        <p>If you have any questions or concerns about these Terms, please contact us at:</p>
        <ul>
          <li>Email: sales.chembio@gmail.com</li>
          <li>Phone: +91 (XXX) XXX-XXXX</li>
          <li>Address: [L-10, Himalya Tower, Gyankhand 2, Indirapuram, Ghaziabad, UP 201014]</li>
          <li>Contact Form: Available on our website's Contact page</li>
        </ul>
      </Card>
    </motion.div>
  );
};

export default TermsOfService;
