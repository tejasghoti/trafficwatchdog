
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import ViolationStats from "@/components/ViolationStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-start p-4">
      <div className="text-center space-y-6 animate-fadeIn max-w-4xl pt-12 pb-8">
        <div className="relative">
          <Shield className="h-20 w-20 mx-auto text-purple-300 animate-pulse" />
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-bounce flex items-center justify-center">
            <AlertTriangle className="h-5 w-5 text-white" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400 drop-shadow-lg">
          Traffic Violation Reporter
        </h1>
        
        <p className="text-lg text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          Join us in making our roads safer. Report traffic violations and help authorities maintain order and safety in our community.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 animate-slideIn"
            style={{ animationDelay: "0.1s" }}
          >
            <Link to="/report" className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Report Violation
            </Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-purple-400/30 text-purple-300 hover:bg-purple-900/30 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 animate-slideIn"
            style={{ animationDelay: "0.2s" }}
          >
            <Link to="/admin" className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5" />
              Admin Login
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="container max-w-6xl mt-8 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
        <h2 className="text-2xl font-semibold text-purple-200 mb-6 text-center">Violation Statistics Dashboard</h2>
        <ViolationStats />
      </div>
    </div>
  );
};

export default Index;
