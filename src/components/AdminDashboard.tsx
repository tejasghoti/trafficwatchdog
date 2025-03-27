
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Search, Filter, Map as MapIcon, BarChart, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DetailedReportView from "./DetailedReportView";
import { mockViolationReports } from "@/data/mockData";

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-500 hover:bg-yellow-600";
    case "Resolved":
      return "bg-green-500 hover:bg-green-600";
    case "Processing":
      return "bg-blue-500 hover:bg-blue-600";
    case "Rejected":
      return "bg-red-500 hover:bg-red-600";
    default:
      return "bg-slate-500 hover:bg-slate-600";
  }
};

const AdminDashboard = () => {
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [reports] = useState(mockViolationReports);
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter and sort reports
  const filteredReports = reports.filter((report) => {
    // Filter by status
    if (statusFilter !== "all" && report.status !== statusFilter) return false;
    
    // Search by location or violation type
    if (searchTerm && 
      !report.location.toLowerCase().includes(searchTerm.toLowerCase()) && 
      !report.violationType.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    // Sort reports
    switch (sortBy) {
      case "date-asc":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "date-desc":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "priority-high":
        return b.priority - a.priority;
      case "priority-low":
        return a.priority - b.priority;
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const handleRowClick = (report: any) => {
    setSelectedReport(report);
  };

  const handleBackToList = () => {
    setSelectedReport(null);
  };

  if (selectedReport) {
    return (
      <DetailedReportView 
        report={selectedReport}
        onBack={handleBackToList}
      />
    );
  }

  return (
    <div className="container py-8 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Traffic Violation Reports</h1>
          <p className="text-muted-foreground">
            Manage and review violation reports submitted by users
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <MapIcon className="h-4 w-4 mr-2" />
            View Map
          </Button>
          <Button variant="outline" size="sm">
            <BarChart className="h-4 w-4 mr-2" />
            Analytics
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Tabs defaultValue="list" className="w-full">
            <div className="px-4 pt-4 flex flex-col sm:flex-row justify-between gap-4 border-b">
              <TabsList>
                <TabsTrigger value="list">List View</TabsTrigger>
                <TabsTrigger value="grid">Grid View</TabsTrigger>
              </TabsList>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search reports..."
                    className="pl-8 sm:w-[200px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-2">
                  <Select 
                    value={statusFilter} 
                    onValueChange={setStatusFilter}
                  >
                    <SelectTrigger className="sm:w-[130px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Processing">Processing</SelectItem>
                      <SelectItem value="Resolved">Resolved</SelectItem>
                      <SelectItem value="Rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select
                    value={sortBy}
                    onValueChange={setSortBy}
                  >
                    <SelectTrigger className="sm:w-[130px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date-desc">Latest First</SelectItem>
                      <SelectItem value="date-asc">Oldest First</SelectItem>
                      <SelectItem value="priority-high">Highest Priority</SelectItem>
                      <SelectItem value="priority-low">Lowest Priority</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <TabsContent value="list" className="p-0">
              <div className="rounded-md border-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Violation Type</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredReports.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                          No reports found matching your criteria
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredReports.map((report) => (
                        <TableRow 
                          key={report.id} 
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => handleRowClick(report)}
                        >
                          <TableCell>
                            {format(new Date(report.date), "MMM d, yyyy h:mm a")}
                          </TableCell>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-red-500" />
                              {report.violationType}
                            </div>
                          </TableCell>
                          <TableCell>{report.location}</TableCell>
                          <TableCell>
                            <Badge variant={report.priority > 7 ? "destructive" : report.priority > 4 ? "default" : "secondary"}>
                              {report.priority > 7 ? "High" : report.priority > 4 ? "Medium" : "Low"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(report.status)}>
                              {report.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="grid" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredReports.map((report) => (
                  <Card 
                    key={report.id} 
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleRowClick(report)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                            {report.violationType}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {format(new Date(report.date), "MMM d, yyyy h:mm a")}
                          </p>
                        </div>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                      </div>
                      <p className="text-sm mb-2">{report.location}</p>
                      <div className="flex justify-between items-center mt-2">
                        <Badge variant={report.priority > 7 ? "destructive" : report.priority > 4 ? "default" : "secondary"}>
                          {report.priority > 7 ? "High" : report.priority > 4 ? "Medium" : "Low"} Priority
                        </Badge>
                        {report.hasGeoTag && (
                          <span className="text-xs text-green-600 flex items-center gap-1">
                            <MapIcon className="h-3 w-3" /> Geo-tagged
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
