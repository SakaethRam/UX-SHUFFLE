import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stripes">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-background"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Brand Name */}
          <div className="mb-12">
            <div className="text-sm font-medium text-text-secondary mb-4 tracking-wider uppercase">
              ARKIN X ENGINE
            </div>
            <h1 className="hero-title mb-6">
              AI-Powered Media
              <br />
              Solutions
            </h1>
          </div>
          
          {/* Mission Statement */}
          <div className="studio-card max-w-2xl mx-auto mb-12">
            <div className="flex items-start space-x-3">
              <div>
                <div className="text-xs font-medium text-text-secondary mb-2 uppercase tracking-wider">
                  MISSION
                </div>
                <p className="subtitle text-center">
                  To deliver context-aware transcription, translation, and voice synthesis 
                  solutions that transform how businesses communicate globally.
                </p>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="btn-primary group">
              Get Started
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="btn-secondary group">
              <Play size={18} className="mr-2" />
              View Demo
            </Button>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="studio-card text-center">
              <div className="text-2xl font-light text-text-primary mb-1">99.9%</div>
              <div className="text-sm text-text-muted">Accuracy</div>
            </div>
            <div className="studio-card text-center">
              <div className="text-2xl font-light text-text-primary mb-1">50ms</div>
              <div className="text-sm text-text-muted">Response Time</div>
            </div>
            <div className="studio-card text-center">
              <div className="text-2xl font-light text-text-primary mb-1">100+</div>
              <div className="text-sm text-text-muted">Languages</div>
            </div>
            <div className="studio-card text-center">
              <div className="text-2xl font-light text-text-primary mb-1">24/7</div>
              <div className="text-sm text-text-muted">Support</div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;