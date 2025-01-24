import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Shield, ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Login Failed",
      description: "Please check your credentials and try again.",
      variant: "destructive",
    });
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto animate-fadeIn relative bg-white/5 backdrop-blur-lg border-purple-400/20">
        <Link to="/" className="absolute top-4 left-4 text-purple-300 hover:text-purple-200 transition-colors">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-purple-400" />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-purple-200">Admin Login</CardTitle>
          <CardDescription className="text-center text-purple-300/70">
            Authorized personnel only
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="badge-number" className="text-purple-200">Badge Number</Label>
              <Input
                id="badge-number"
                placeholder="Enter your badge number"
                required
                className="bg-white/5 border-purple-400/20 text-purple-200 placeholder:text-purple-400/50 focus:border-purple-400/40 focus:ring-purple-400/20"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-purple-200">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="bg-white/5 border-purple-400/20 text-purple-200 placeholder:text-purple-400/50 focus:border-purple-400/40 focus:ring-purple-400/20"
                />
                <Lock className="absolute right-3 top-2.5 h-5 w-5 text-purple-400/50" />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200" 
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;