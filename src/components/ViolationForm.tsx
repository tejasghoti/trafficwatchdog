import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Camera, MapPin, ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const violationTypes = [
  { id: "parking", label: "Illegal Parking" },
  { id: "wrong_side", label: "Wrong Side Driving" },
  { id: "accident", label: "Accident" },
  { id: "road_rage", label: "Road Rage" },
  { id: "oil_spill", label: "Oil Spill" },
  { id: "signal_jump", label: "Signal Jump" },
  { id: "speeding", label: "Speeding" },
  { id: "no_helmet", label: "No Helmet" },
];

const ViolationForm = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Report Submitted Successfully",
      description: "Your report has been received and will be reviewed shortly.",
    });
    
    setLoading(false);
    setImage(null);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <Card className="w-full max-w-2xl mx-auto animate-fadeIn relative bg-white/5 backdrop-blur-lg border-purple-400/20">
        <Link to="/" className="absolute top-4 left-4 text-purple-300 hover:text-purple-200 transition-colors">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-200">Report Traffic Violation</CardTitle>
          <CardDescription className="text-purple-300/70">
            Help maintain road safety by reporting traffic violations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="violation-type" className="text-purple-200">Violation Type</Label>
              <Select required>
                <SelectTrigger className="bg-white/5 border-purple-400/20 text-purple-200">
                  <SelectValue placeholder="Select violation type" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-purple-400/20">
                  {violationTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id} className="text-purple-200 focus:bg-purple-500/20 focus:text-purple-200">
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vehicle-number" className="text-purple-200">Vehicle Number</Label>
              <Input
                id="vehicle-number"
                placeholder="Enter vehicle number"
                required
                className="bg-white/5 border-purple-400/20 text-purple-200 placeholder:text-purple-400/50 uppercase"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-purple-200">Location</Label>
              <div className="relative">
                <Input
                  id="location"
                  placeholder="Enter location details"
                  required
                  className="bg-white/5 border-purple-400/20 text-purple-200 placeholder:text-purple-400/50 pr-10"
                />
                <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-purple-400/50" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-purple-200">Description</Label>
              <Textarea
                id="description"
                placeholder="Provide detailed description of the violation"
                required
                className="bg-white/5 border-purple-400/20 text-purple-200 placeholder:text-purple-400/50 min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image" className="text-purple-200">Evidence (Photo)</Label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-purple-400/20 rounded-lg">
                <div className="space-y-1 text-center">
                  {image ? (
                    <div className="relative">
                      <img
                        src={image}
                        alt="Preview"
                        className="mx-auto max-h-48 rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => setImage(null)}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                      >
                        <AlertCircle className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Camera className="mx-auto h-12 w-12 text-purple-400/50" />
                      <div className="flex text-sm text-purple-300/70">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-purple-400 hover:text-purple-300"
                        >
                          <span>Upload a file</span>
                          <Input
                            id="file-upload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                          />
                        </label>
                      </div>
                      <p className="text-xs text-purple-300/70">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200" 
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Report"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViolationForm;
