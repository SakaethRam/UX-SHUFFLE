import { 
  Home, 
  User, 
  Briefcase, 
  BarChart3, 
  MessageSquare, 
  Mail,
  Settings,
  ChevronDown
} from "lucide-react";

const Sidebar = () => {
  const navigationItems = [
    { icon: <Home size={20} />, label: "Overview", active: false },
    { icon: <User size={20} />, label: "Profile", active: true },
    { icon: <Briefcase size={20} />, label: "Studios", active: false },
    { icon: <BarChart3 size={20} />, label: "Analytics", active: false },
    { icon: <MessageSquare size={20} />, label: "Community", active: false },
    { icon: <Mail size={20} />, label: "Contact", active: false },
    { icon: <Settings size={20} />, label: "Settings", active: false }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-card border-r border-card-border z-50 flex flex-col items-center py-6">
      {/* Logo/Brand */}
      <div className="w-8 h-8 bg-text-primary rounded flex items-center justify-center mb-8">
        <div className="text-primary-foreground text-sm font-bold">A</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col space-y-4">
        {navigationItems.map((item, index) => (
          <button
            key={index}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              item.active 
                ? 'bg-accent-subtle text-text-primary' 
                : 'text-text-muted hover:text-text-primary hover:bg-accent-subtle'
            }`}
          >
            {item.icon}
          </button>
        ))}
      </nav>

      {/* User Menu */}
      <div className="mt-auto">
        <button className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center text-text-primary">
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;