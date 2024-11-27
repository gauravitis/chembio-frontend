import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">About Chembio Lifescience</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be a global leader in providing innovative chemical and biological solutions that advance scientific discovery and improve human health.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To deliver high-quality, cutting-edge chemical and biological products while maintaining the highest standards of customer service, scientific integrity, and environmental responsibility.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Scientific Excellence</li>
                <li>Customer Focus</li>
                <li>Innovation</li>
                <li>Integrity</li>
                <li>Sustainability</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Founded in 2016, Chembio Lifescience emerged from a vision to bridge the gap between cutting-edge research and practical applications in the chemical and biological sciences. What started as a small company with a team of dedicated team members has grown into a leading provider of research tools and solutions.
              </p>
              <p className="text-muted-foreground">
                Over the years, we have expanded our portfolio to include a comprehensive range of products serving various fields including analytical chemistry, biochemistry, and material science. Our commitment to quality and innovation has earned us the trust of research institutions, pharmaceutical companies, and industrial laboratories worldwide.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Research & Development</h3>
                  <p className="text-muted-foreground">
                    Our R&D team constantly pushes the boundaries of scientific discovery, developing new products and improving existing ones to meet the evolving needs of our customers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Quality Control</h3>
                  <p className="text-muted-foreground">
                    Every product undergoes rigorous testing and validation in our state-of-the-art facilities to ensure the highest standards of quality and reliability.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technical Support</h3>
                  <p className="text-muted-foreground">
                    Our team of experienced scientists provides comprehensive technical support to help customers optimize their research and applications.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We are committed to environmentally responsible practices in our operations and product development processes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
