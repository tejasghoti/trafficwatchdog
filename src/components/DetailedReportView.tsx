
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { ChevronLeft, User, MapPin, Calendar, Clock, AlertTriangle, Car, Info, Camera, Map as MapIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface DetailedReportViewProps {
  report: any;
  onBack: () => void;
}

const DetailedReportView = ({ report, onBack }: DetailedReportViewProps) => {
  const { toast } = useToast();

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

  const updateStatus = (newStatus: string) => {
    // In a real app, this would make an API call
    toast({
      title: "Status Updated",
      description: `Report #${report.id} status changed to ${newStatus}`,
    });
  };

  return (
    <div className="container py-6">
      <Button variant="ghost" onClick={onBack} className="mb-6">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Reports
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    {report.violationType}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">Report ID: #{report.id}</p>
                </div>
                <Badge className={getStatusColor(report.status)}>
                  {report.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {format(new Date(report.date), "MMMM d, yyyy")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {format(new Date(report.date), "h:mm a")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{report.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Reported by: {report.reportedBy}</span>
                  </div>
                </div>

                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Violation Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Vehicle: {report.vehicleType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">License Plate: {report.licensePlate}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm">{report.description}</p>
                </div>

                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium flex items-center gap-2 mb-3">
                    <Camera className="h-4 w-4" />
                    Evidence Photos
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {report.images.map((image: string, index: number) => (
                      <div key={index} className="aspect-video relative rounded-md overflow-hidden border">
                        <img 
                          src={image} 
                          alt={`Evidence ${index + 1}`} 
                          className="object-cover w-full h-full" 
                        />
                        {report.hasGeoTag && index === 0 && (
                          <Badge className="absolute top-2 right-2 bg-green-500">
                            <MapIcon className="h-3 w-3 mr-1" />
                            Geo-tagged
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {report.hasGeoTag && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Location Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Interactive map view would appear here</span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Action Center</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Update Status</label>
                <Select defaultValue={report.status} onValueChange={updateStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Processing">Processing</SelectItem>
                    <SelectItem value="Resolved">Resolved</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                    <SelectItem value="Insufficient Information">Insufficient Information</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1.5 block">Priority Level</label>
                <div className="flex items-center gap-2">
                  <Badge variant={report.priority > 7 ? "destructive" : report.priority > 4 ? "default" : "secondary"}>
                    {report.priority > 7 ? "High" : report.priority > 4 ? "Medium" : "Low"}
                  </Badge>
                  <span className="text-sm text-muted-foreground">({report.priority}/10)</span>
                </div>
              </div>
              
              <Separator />
              
              <div className="pt-2 space-y-3">
                <Button className="w-full">Assign to Officer</Button>
                <Button variant="outline" className="w-full">Request More Information</Button>
                <Button variant="destructive" className="w-full">Mark as False Report</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Report Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {report.timeline.map((event: any, index: number) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-1 bg-primary/20 rounded-full relative flex-shrink-0">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div className="pb-4">
                      <p className="text-sm font-medium">{event.action}</p>
                      <time className="text-xs text-muted-foreground">
                        {format(new Date(event.date), "MMM d, yyyy h:mm a")}
                      </time>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailedReportView;
