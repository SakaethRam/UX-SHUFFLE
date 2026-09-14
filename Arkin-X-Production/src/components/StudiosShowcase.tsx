import { ExternalLink, MapPin, Calendar, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const StudiosShowcase = () => {
  const studios = [
    {
      name: "PENTAGRAM",
      location: "Global",
      rank: 1,
      founded: 1972,
      team: "20+ Partners",
      specialty: "Brand Identity",
      description: "World-renowned interdisciplinary design collective (brand & identity, luxury systems)",
      alignment: "Global prestige and luxury system mastery",
      website: "pentagram.com"
    },
    {
      name: "RETHINK",
      location: "Vancouver, Canada", 
      rank: 2,
      founded: 1999,
      team: "150+ People",
      specialty: "Brand Strategy",
      description: "Canadian creative agency with strong Vancouver presence; formalizing design practice",
      alignment: "Local connection with growing design focus",
      website: "rethinkideas.com"
    },
    {
      name: "ANAGRAMA",
      location: "Mexico City",
      rank: 3,
      founded: 2011,
      team: "30+ Designers",
      specialty: "Packaging",
      description: "Boutique studio known for material-driven, finish-forward brand systems and packaging",
      alignment: "Material craft and packaging expertise",
      website: "anagrama.com"
    },
    {
      name: "COLLINS",
      location: "New York / SF",
      rank: 4,
      founded: 2008,
      team: "100+ Team",
      specialty: "Transformation",
      description: "Strategic transformation agency specializing in brand evolution and digital experiences",
      alignment: "Strategic transformation and innovation",
      website: "collins.co"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Target Studios
          </h2>
          <p className="subtitle max-w-3xl mx-auto">
            Carefully selected industry leaders and strategic partners
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="studio-card text-center">
            <div className="text-2xl font-light text-text-primary mb-1">4</div>
            <div className="text-sm text-text-muted">Target Studios</div>
            <div className="text-xs text-text-secondary mt-1">Carefully selected</div>
          </div>
          <div className="studio-card text-center">
            <div className="text-2xl font-light text-text-primary mb-1">5</div>
            <div className="text-sm text-text-muted">Cities</div>
            <div className="text-xs text-text-secondary mt-1">Global reach</div>
          </div>
          <div className="studio-card text-center">
            <div className="text-2xl font-light text-text-primary mb-1">300+</div>
            <div className="text-sm text-text-muted">Total Team</div>
            <div className="text-xs text-text-secondary mt-1">Across studios</div>
          </div>
          <div className="studio-card text-center">
            <div className="text-2xl font-light text-text-primary mb-1">50+</div>
            <div className="text-sm text-text-muted">Years Combined</div>
            <div className="text-xs text-text-secondary mt-1">Experience</div>
          </div>
        </div>

        {/* Studios Grid */}
        <div className="space-y-6">
          {studios.map((studio, index) => (
            <div key={index} className="studio-card group cursor-pointer">
              <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                {/* Studio Logo/Rank */}
                <div className="flex items-center space-x-4 lg:w-64 flex-shrink-0">
                  <div className="w-12 h-12 bg-accent-subtle rounded flex items-center justify-center">
                    <div className="text-lg font-light text-text-primary">{studio.rank}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-text-primary mb-1">
                      {studio.name}
                    </h3>
                    <div className="flex items-center text-sm text-text-secondary">
                      <MapPin size={14} className="mr-1" />
                      {studio.location}
                    </div>
                  </div>
                </div>

                {/* Studio Details */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-text-secondary">
                      <Calendar size={14} className="mr-2" />
                      <span className="font-medium">{studio.founded}</span>
                      <span className="ml-2">Founded</span>
                    </div>
                    <div className="flex items-center text-sm text-text-secondary">
                      <Users size={14} className="mr-2" />
                      <span className="font-medium">{studio.team}</span>
                      <span className="ml-2">Team</span>
                    </div>
                    <div className="flex items-center text-sm text-text-secondary">
                      <Target size={14} className="mr-2" />
                      <span className="font-medium">{studio.specialty}</span>
                      <span className="ml-2">Specialty</span>
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-3">
                    <p className="body-text text-sm leading-relaxed">
                      {studio.description}
                    </p>
                    
                    <div className="border-l-2 border-accent-subtle pl-3">
                      <div className="text-xs font-medium text-text-secondary mb-1 uppercase tracking-wider">
                        ALIGNMENT
                      </div>
                      <p className="text-sm text-text-primary italic">
                        "{studio.alignment}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="text-sm text-text-secondary">
                        {studio.website}
                      </div>
                      <Button variant="outline" size="sm" className="btn-secondary text-xs">
                        Visit <ExternalLink size={12} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="studio-card max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-text-primary mb-4">
              Partnership Opportunities
            </h3>
            <p className="body-text mb-6">
              Connect with industry-leading studios and expand your network through strategic partnerships.
            </p>
            <Button className="btn-primary">
              Explore Partnerships
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudiosShowcase;