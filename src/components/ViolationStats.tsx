
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line, CartesianGrid } from "recharts";
import { violationStats } from "@/data/mockData";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { MapPin, AlertTriangle, Clock } from "lucide-react";

const COLORS = ["#8B5CF6", "#F97316", "#0EA5E9", "#F43F5E", "#8E9196", "#64748B"];

const ViolationStats = () => {
  const violationData = Object.entries(violationStats.violationCounts).map(([name, value]) => ({
    name,
    value
  }));

  const statusData = Object.entries(violationStats.resolutionStats).map(([name, value]) => ({
    name,
    value
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="col-span-full lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Violation Types
            </CardTitle>
            <CardDescription>
              Most common traffic violations reported
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <ChartContainer 
                config={{
                  Speeding: { color: "#8B5CF6" },
                  "Red Light": { color: "#F97316" },
                  "Illegal Parking": { color: "#0EA5E9" },
                  "Distracted Driving": { color: "#F43F5E" },
                  DUI: { color: "#ea384c" },
                  "Traffic Sign": { color: "#44C4A1" },
                  Other: { color: "#8E9196" }
                }}
              >
                <BarChart data={violationData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" fill="var(--color-Speeding)" name="Count" />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-full md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              Case Status
            </CardTitle>
            <CardDescription>
              Current status of reported violations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} reports`, 'Count']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-500" />
              Violation Map
            </CardTitle>
            <CardDescription>
              Geographic distribution of reported incidents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
              <span className="text-muted-foreground">Interactive map would appear here</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-500" />
              Monthly Trends
            </CardTitle>
            <CardDescription>
              Violation reports over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ChartContainer 
                config={{
                  count: { color: "#8B5CF6" }
                }}
              >
                <LineChart data={violationStats.monthlyReports}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="count" 
                    stroke="var(--color-count)" 
                    activeDot={{ r: 8 }} 
                    name="Reports"
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ViolationStats;
