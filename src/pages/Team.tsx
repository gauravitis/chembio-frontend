import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Team = () => {
  const leadership = [
    {
      name: "Jagdish Kausal",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      bio: "Visionary leader with over 25 years of experience in industrial automation and process control"
    },
    {
      name: "Rajni Kausal",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      bio: "Strategic business leader specializing in organizational growth and operational excellence"
    }
  ];

  const experts = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Scientific Officer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      bio: "Ph.D. in Chemical Engineering with 15 years of research experience"
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: "MBA with expertise in supply chain management and process optimization"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop",
      bio: "Specialist in analytical chemistry and instrument development"
    },
    {
      name: "David Kim",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
      bio: "Expert in automation systems and industrial IoT solutions"
    },
    {
      name: "Lisa Wang",
      role: "Quality Assurance Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
      bio: "Certified Quality Manager with focus on regulatory compliance"
    },
    {
      name: "James Wilson",
      role: "Senior Engineer",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop",
      bio: "Specialized in industrial process control and optimization"
    },
    {
      name: "Maria Garcia",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop",
      bio: "PMP certified with extensive experience in large-scale implementations"
    },
    {
      name: "Robert Taylor",
      role: "Systems Architect",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop",
      bio: "Expert in designing robust industrial automation systems"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">Our Team</h1>
        
        {/* Leadership Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experts Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;