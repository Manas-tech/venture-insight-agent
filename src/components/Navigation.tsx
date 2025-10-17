import { TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-secondary p-2.5 rounded-xl shadow-md">
              <TrendingUp className="w-6 h-6 text-secondary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">VenturePilot</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
              Login
            </Button>
            <Button variant="outline" size="sm" className="text-foreground hover:text-primary">
              Admin
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
