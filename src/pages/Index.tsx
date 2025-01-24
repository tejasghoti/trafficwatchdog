import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-4 animate-fadeIn">
        <Shield className="h-16 w-16 mx-auto text-primary" />
        <h1 className="text-4xl font-bold tracking-tight">Traffic Violation Reporter</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Help maintain road safety by reporting traffic violations. Your reports will be reviewed by authorized personnel.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button asChild size="lg" className="animate-slideIn" style={{ animationDelay: "0.1s" }}>
            <Link to="/report">Report Violation</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="animate-slideIn" style={{ animationDelay: "0.2s" }}>
            <Link to="/admin">Admin Login</Link>
          </Button>
        </div>
      </div>
      
      <Card className="mt-12 w-full max-w-4xl animate-fadeIn" style={{ animationDelay: "0.3s" }}>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-lg">Quick Reporting</h3>
            <p className="text-muted-foreground">Submit violations easily with our user-friendly form</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-lg">Real-time Updates</h3>
            <p className="text-muted-foreground">Track the status of your reported violations</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-lg">Secure Platform</h3>
            <p className="text-muted-foreground">Your reports are handled with utmost confidentiality</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;