import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone,
  ExternalLink,
  Send,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const integrations = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      description: "Open source projects and SDK repositories",
      link: "https://github.com/arkin-x-engine",
      color: "hover:text-white"
    },
    {
      name: "Fiverr",
      icon: <ExternalLink size={24} />,
      description: "Custom development and consulting services",
      link: "https://fiverr.com/arkin-x-engine",
      color: "hover:text-green-400"
    },
    {
      name: "Dribbble",
      icon: <ExternalLink size={24} />,
      description: "Design inspiration and UI/UX showcases",
      link: "https://dribbble.com/arkin-x-engine",
      color: "hover:text-pink-400"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      description: "Professional network and company updates",
      link: "https://linkedin.com/company/arkin-x-engine",
      color: "hover:text-blue-400"
    }
  ];

  const contactMethods = [
    {
      icon: <Mail size={20} />,
      title: "Email Support",
      description: "Get in touch with our team",
      contact: "support@arkinxengine.com",
      availability: "24/7 Response"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <MapPin size={20} />,
      title: "Office Location",
      description: "Visit us in person",
      contact: "San Francisco, CA",
      availability: "By Appointment"
    },
    {
      icon: <MessageSquare size={20} />,
      title: "Live Chat",
      description: "Instant support and guidance",
      contact: "Available on website",
      availability: "24/7 Available"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold metallic-text mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with AI-powered solutions? Let's collaborate and build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center">
                <Send size={24} className="mr-3 text-primary" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input 
                    id="firstName"
                    placeholder="John"
                    className="glass border-glass-border bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input 
                    id="lastName"
                    placeholder="Doe"
                    className="glass border-glass-border bg-background/50"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="glass border-glass-border bg-background/50"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company (Optional)
                </label>
                <Input 
                  id="company"
                  placeholder="Your Company"
                  className="glass border-glass-border bg-background/50"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input 
                  id="subject"
                  placeholder="How can we help you?"
                  className="glass border-glass-border bg-background/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell us about your project or inquiry..."
                  rows={6}
                  className="glass border-glass-border bg-background/50 resize-none"
                />
              </div>
              
              <Button className="btn-primary w-full">
                Send Message
                <Send size={16} className="ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <div className="text-primary">
                        {method.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {method.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-1">
                        {method.description}
                      </p>
                      <p className="text-sm font-medium text-primary mb-1">
                        {method.contact}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {method.availability}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-semibold text-primary">Under 2 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Client Satisfaction</span>
                  <span className="font-semibold text-accent">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Projects Delivered</span>
                  <span className="font-semibold text-primary-glow">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Years of Experience</span>
                  <span className="font-semibold text-accent-glow">8+</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Integration Links */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">Connect With Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="glass-hover cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`text-muted-foreground group-hover:scale-110 transition-all duration-300 mb-4 ${integration.color}`}>
                    {integration.icon}
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">
                    {integration.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {integration.description}
                  </p>
                  <Button variant="outline" size="sm" className="btn-glass">
                    Visit <ExternalLink size={14} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 metallic-text">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-8">
              Join thousands of developers and businesses already using ARKIN X ENGINE to power their applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                Start Free Trial
              </Button>
              <Button variant="outline" className="btn-glass">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;