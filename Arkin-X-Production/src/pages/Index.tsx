import Hero from "@/components/Hero";
import Features from "@/components/Features";
import StudiosShowcase from "@/components/StudiosShowcase";
import Workflow from "@/components/Workflow";
import Analytics from "@/components/Analytics";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Features />
      <StudiosShowcase />
      <Workflow />
      <Analytics />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;