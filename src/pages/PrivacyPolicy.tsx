import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
          <p className="text-muted-foreground">Last Updated: 27/11/2024</p>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            At Chembio Lifescience, we are committed to protecting your privacy and ensuring that your personal data is handled responsibly. This Privacy Policy explains how we collect, use, and protect your information when you use our website, products, or services. By accessing or using our website, you agree to the terms outlined in this policy.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
          <p>We may collect and process the following types of personal data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, job title, and company information.</li>
            <li><strong>Financial Information:</strong> Payment details, billing address, and transaction history for processing orders.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, and website usage data collected through cookies and other tracking technologies.</li>
            <li><strong>Communication Data:</strong> Information you provide when contacting us, such as messages, feedback, or inquiries.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
          <p>We use your personal data for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Order Processing:</strong> To fulfill and manage your orders, including payment processing, shipping, and order confirmation.</li>
            <li><strong>Customer Support:</strong> To respond to your inquiries, provide support, and address any issues.</li>
            <li><strong>Marketing:</strong> To send you updates, promotional materials, newsletters, and other relevant information if you have opted in.</li>
            <li><strong>Website Improvement:</strong> To analyze website performance, monitor traffic, and optimize the user experience.</li>
            <li><strong>Compliance and Security:</strong> To comply with legal obligations, enforce our terms of service, and prevent fraud or security breaches.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. How We Protect Your Information</h2>
          <p>We use industry-standard security measures to protect your data, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Encryption:</strong> We use SSL/TLS encryption for data transmission to protect your information during transfer.</li>
            <li><strong>Access Controls:</strong> Only authorized personnel have access to your personal data, and we use secure authentication methods.</li>
            <li><strong>Data Storage:</strong> Your data is stored securely with the use of secure servers and firewalls.</li>
          </ul>
          <p>Despite our best efforts, no system is entirely secure. We cannot guarantee the absolute security of your data, but we strive to maintain high standards of data protection.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Sharing Your Information</h2>
          <p>We may share your personal data in the following situations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service Providers:</strong> With third-party service providers that assist us in processing orders, managing our website, and providing customer support.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your personal data may be transferred to the new entity.</li>
            <li><strong>Legal Requirements:</strong> To comply with legal obligations, respond to legal processes, or protect our rights and property.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar tracking technologies to improve our website and provide a better user experience. Cookies help us:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Remember your preferences and login details.</li>
            <li>Analyze traffic patterns and website usage.</li>
            <li>Personalize content and ads based on your interests.</li>
          </ul>
          <p>You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may impact your experience on our site.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites and recommend that you review their privacy policies.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">7. Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access:</strong> The right to request access to your personal data.</li>
            <li><strong>Correction:</strong> The right to request the correction of inaccurate or incomplete data.</li>
            <li><strong>Deletion:</strong> The right to request the deletion of your personal data under certain conditions.</li>
            <li><strong>Objection:</strong> The right to object to the processing of your data for specific purposes, such as marketing.</li>
            <li><strong>Data Portability:</strong> The right to receive your data in a structured, commonly used, and machine-readable format.</li>
          </ul>
          <p>To exercise any of these rights, please contact us at sales.chembio@gmail.com.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">8. Retention of Your Information</h2>
          <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by applicable law. Data related to transactions and orders is generally retained for 7 years for financial and tax purposes.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">9. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your data.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">10. Contact Us</h2>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
          <ul className="list-none space-y-2">
            <li><strong>Email:</strong> sales.chembio@gmail.com</li>
            <li><strong>Address:</strong> L-10, Himalya Tower, Gyankhand 2, Indirapuram, Ghaziabad, UP 201014</li>
            <li><strong>Contact Form:</strong> Available on our website's Contact page</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
