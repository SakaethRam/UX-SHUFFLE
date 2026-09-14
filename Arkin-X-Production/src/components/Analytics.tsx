import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { TrendingUp, Users, Activity, Globe } from "lucide-react";

const Analytics = () => {
  const usageData = [
    { month: 'Jan', transcriptions: 45000, translations: 32000, synthesis: 28000 },
    { month: 'Feb', transcriptions: 52000, translations: 38000, synthesis: 35000 },
    { month: 'Mar', transcriptions: 48000, translations: 42000, synthesis: 31000 },
    { month: 'Apr', transcriptions: 61000, translations: 45000, synthesis: 42000 },
    { month: 'May', transcriptions: 55000, translations: 51000, synthesis: 38000 },
    { month: 'Jun', transcriptions: 67000, translations: 48000, synthesis: 45000 },
  ];

  const languageData = [
    { name: 'English', value: 35, color: 'hsl(var(--primary))' },
    { name: 'Spanish', value: 20, color: 'hsl(var(--accent))' },
    { name: 'French', value: 15, color: 'hsl(var(--primary-glow))' },
    { name: 'German', value: 12, color: 'hsl(var(--accent-glow))' },
    { name: 'Other', value: 18, color: 'hsl(var(--muted-foreground))' },
  ];

  const performanceData = [
    { time: '00:00', accuracy: 99.1, latency: 45 },
    { time: '04:00', accuracy: 99.3, latency: 42 },
    { time: '08:00', accuracy: 99.2, latency: 48 },
    { time: '12:00', accuracy: 99.5, latency: 38 },
    { time: '16:00', accuracy: 99.4, latency: 41 },
    { time: '20:00', accuracy: 99.2, latency: 44 },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Performance Analytics
          </h2>
          <p className="subtitle max-w-3xl mx-auto">
            Monitor performance, track usage, and gain insights with comprehensive analytics dashboard
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="studio-card">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-text-secondary">Total Requests</div>
              <Activity className="h-4 w-4 text-text-secondary" />
            </div>
            <div className="text-2xl font-light text-text-primary mb-1">2.4M</div>
            <p className="text-xs text-text-muted">
              +12.5% from last month
            </p>
          </div>

          <div className="studio-card">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-text-secondary">Active Users</div>
              <Users className="h-4 w-4 text-text-secondary" />
            </div>
            <div className="text-2xl font-light text-text-primary mb-1">543K</div>
            <p className="text-xs text-text-muted">
              +8.2% from last month
            </p>
          </div>

          <div className="studio-card">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-text-secondary">Avg Response Time</div>
              <TrendingUp className="h-4 w-4 text-text-secondary" />
            </div>
            <div className="text-2xl font-light text-text-primary mb-1">42ms</div>
            <p className="text-xs text-text-muted">
              -15% improvement
            </p>
          </div>

          <div className="studio-card">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-text-secondary">Global Reach</div>
              <Globe className="h-4 w-4 text-text-secondary" />
            </div>
            <div className="text-2xl font-light text-text-primary mb-1">187</div>
            <p className="text-xs text-text-muted">
              Countries served
            </p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Usage Trends */}
          <div className="studio-card">
            <div className="mb-6">
              <h3 className="font-medium text-text-primary">Usage Trends</h3>
              <p className="text-sm text-text-muted">Monthly processing volume</p>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--text-muted))" fontSize={12} />
                  <YAxis stroke="hsl(var(--text-muted))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card-background))',
                      border: '1px solid hsl(var(--card-border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--text-primary))'
                    }}
                  />
                  <Bar dataKey="transcriptions" fill="hsl(var(--text-primary))" />
                  <Bar dataKey="translations" fill="hsl(var(--text-secondary))" />
                  <Bar dataKey="synthesis" fill="hsl(var(--text-muted))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Language Distribution */}
          <div className="studio-card">
            <div className="mb-6">
              <h3 className="font-medium text-text-primary">Language Distribution</h3>
              <p className="text-sm text-text-muted">Usage by language</p>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={languageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {languageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card-background))',
                      border: '1px solid hsl(var(--card-border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--text-primary))'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {languageData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-xs text-text-muted">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" />
                <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--glass-background))',
                    border: '1px solid hsl(var(--glass-border))',
                    borderRadius: '8px',
                  }}
                />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="accuracy" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="latency" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Analytics;