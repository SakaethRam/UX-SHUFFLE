import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  MessageCircle, 
  Heart, 
  Share2, 
  TrendingUp,
  Clock,
  ArrowRight
} from "lucide-react";

const Blog = () => {
  const testimonials = [
    {
      id: 1,
      author: "Sarah Chen",
      role: "CTO at TechCorp",
      avatar: "SC",
      rating: 5,
      content: "ARKIN X ENGINE has transformed our customer support workflow. The accuracy is incredible, and the real-time translation feature has enabled us to serve global customers seamlessly.",
      likes: 127,
      replies: 23,
      timestamp: "2 days ago",
      tags: ["Enterprise", "Customer Support"]
    },
    {
      id: 2,
      author: "Marcus Rodriguez",
      role: "Lead Developer",
      avatar: "MR",
      rating: 5,
      content: "The API integration was surprisingly smooth. Their SDK documentation is top-notch, and the webhook notifications work flawlessly. We've processed over 1M audio files without a single issue.",
      likes: 89,
      replies: 15,
      timestamp: "5 days ago",
      tags: ["Developer Experience", "API"]
    },
    {
      id: 3,
      author: "Dr. Emily Watson",
      role: "Healthcare Solutions Architect",
      avatar: "EW",
      rating: 5,
      content: "For medical transcription, accuracy is critical. ARKIN X ENGINE's context-aware processing understands medical terminology perfectly. It's a game-changer for our industry.",
      likes: 156,
      replies: 31,
      timestamp: "1 week ago",
      tags: ["Healthcare", "Medical"]
    },
    {
      id: 4,
      author: "Alex Kim",
      role: "Product Manager",
      avatar: "AK",
      rating: 4,
      content: "The voice synthesis quality is outstanding. We use it for our e-learning platform, and students love the natural-sounding narration. The multilingual support is a huge plus.",
      likes: 72,
      replies: 8,
      timestamp: "1 week ago",
      tags: ["Education", "Voice Synthesis"]
    }
  ];

  const discussions = [
    {
      title: "Best practices for handling large audio files",
      author: "DevCommunity",
      replies: 45,
      trend: "trending",
      timestamp: "3 hours ago"
    },
    {
      title: "Optimizing transcription accuracy for noisy environments",
      author: "AudioExpert",
      replies: 28,
      trend: "hot",
      timestamp: "6 hours ago"
    },
    {
      title: "Voice cloning ethics and implementation guidelines",
      author: "EthicsTech",
      replies: 67,
      trend: "popular",
      timestamp: "1 day ago"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-radial opacity-30"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold metallic-text mb-6">
            Connect & Comment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of developers and businesses building the future with ARKIN X ENGINE
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-hover text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Active Developers</div>
          </div>
          <div className="glass-hover text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">2.5K</div>
            <div className="text-muted-foreground">Community Posts</div>
          </div>
          <div className="glass-hover text-center p-6">
            <div className="text-3xl font-bold text-primary-glow mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="glass-hover text-center p-6">
            <div className="text-3xl font-bold text-accent-glow mb-2">24/7</div>
            <div className="text-muted-foreground">Community Support</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Testimonials */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Customer Stories</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="glass-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-foreground">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {testimonial.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                          <Heart size={16} />
                          <span>{testimonial.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                          <MessageCircle size={16} />
                          <span>{testimonial.replies}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                          <Share2 size={16} />
                        </button>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{testimonial.timestamp}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Discussions */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Active Discussions</h3>
            <div className="space-y-4 mb-8">
              {discussions.map((discussion, index) => (
                <Card key={index} className="glass-hover cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        variant={discussion.trend === 'trending' ? 'default' : 'secondary'}
                        className={discussion.trend === 'trending' ? 'bg-primary' : ''}
                      >
                        <TrendingUp size={12} className="mr-1" />
                        {discussion.trend}
                      </Badge>
                    </div>
                    
                    <h4 className="font-semibold text-foreground mb-2 line-clamp-2">
                      {discussion.title}
                    </h4>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div>by {discussion.author}</div>
                      <div className="flex items-center space-x-2">
                        <MessageCircle size={14} />
                        <span>{discussion.replies}</span>
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground mt-2">
                      {discussion.timestamp}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Join Community CTA */}
            <Card className="glass-card text-center">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2">Join Our Community</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Connect with developers, share experiences, and get support from our team.
                </p>
                <Button className="btn-primary w-full">
                  Join Discord
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;