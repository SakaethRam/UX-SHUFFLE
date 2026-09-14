import { 
  Mic, 
  Languages, 
  AudioWaveform, 
  Brain, 
  Zap, 
  Shield,
  Cloud,
  Cpu,
  Globe
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Mic size={32} />,
      title: "Advanced Transcription",
      description: "AI-powered speech-to-text with industry-leading accuracy across multiple audio formats and environments.",
      metrics: "99.9% accuracy"
    },
    {
      icon: <Languages size={32} />,
      title: "Real-Time Translation",
      description: "Instant translation across 100+ languages with context-aware processing and cultural nuance detection.",
      metrics: "100+ languages"
    },
    {
      icon: <AudioWaveform size={32} />,
      title: "Voice Synthesis",
      description: "Natural-sounding voice generation with emotional intelligence and customizable voice profiles.",
      metrics: "Sub-50ms latency"
    },
    {
      icon: <Brain size={32} />,
      title: "Context Intelligence",
      description: "Deep learning algorithms that understand context, tone, and intent for more accurate processing.",
      metrics: "AI-powered"
    },
    {
      icon: <Zap size={32} />,
      title: "Lightning Fast",
      description: "Optimized processing pipeline delivering results in milliseconds, not seconds.",
      metrics: "50ms response"
    },
    {
      icon: <Shield size={32} />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and privacy controls with full compliance certification.",
      metrics: "SOC2 compliant"
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Native",
      description: "Scalable cloud infrastructure that grows with your needs, from startup to enterprise.",
      metrics: "99.99% uptime"
    },
    {
      icon: <Cpu size={32} />,
      title: "Edge Processing",
      description: "Local processing capabilities for sensitive data and offline functionality.",
      metrics: "On-device AI"
    },
    {
      icon: <Globe size={32} />,
      title: "Global Scale",
      description: "Worldwide deployment with regional data centers for optimal performance everywhere.",
      metrics: "Global CDN"
    }
  ];

  return (
    <section className="py-24 px-4 relative bg-minimal-grid">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Core Capabilities
          </h2>
          <p className="subtitle max-w-3xl mx-auto">
            Enterprise-grade AI solutions built for scale and precision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="studio-card group cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-subtle rounded flex items-center justify-center flex-shrink-0">
                  <div className="text-text-primary group-hover:text-text-primary transition-colors">
                    {feature.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium mb-2 text-text-primary">
                    {feature.title}
                  </h3>
                  
                  <p className="body-text text-sm mb-3 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="text-xs font-medium text-text-secondary">
                    {feature.metrics}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 studio-card">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-text-primary mb-2">10M+</div>
              <div className="text-sm text-text-muted">Hours Processed</div>
            </div>
            <div>
              <div className="text-3xl font-light text-text-primary mb-2">500K+</div>
              <div className="text-sm text-text-muted">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-light text-text-primary mb-2">99.99%</div>
              <div className="text-sm text-text-muted">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-light text-text-primary mb-2">24/7</div>
              <div className="text-sm text-text-muted">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;