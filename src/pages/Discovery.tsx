import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  LayoutGrid,
  List,
  TrendingUp,
  MapPin,
  Users,
  DollarSign,
  Calendar,
  Heart,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Startup {
  id: string;
  logo: string;
  name: string;
  tagline: string;
  location: string;
  founded: string;
  employees: number;
  aiScore: number;
  raised: string;
  arr: string;
  growth: string;
  team: string[];
  tech: string[];
  description: string;
}

const mockStartups: Startup[] = [
  {
    id: "1",
    logo: "🚀",
    name: "CustomerAI Inc.",
    tagline: "B2B SaaS • Series A Ready",
    location: "San Francisco, CA",
    founded: "Jan 2023",
    employees: 12,
    aiScore: 94,
    raised: "$2.1M",
    arr: "$180K",
    growth: "45% MoM",
    team: ["Ex-Stripe", "Ex-Zendesk"],
    tech: ["React", "Node.js", "AWS"],
    description: "AI-powered customer support automation with proven traction and experienced founding team",
  },
  {
    id: "2",
    logo: "🏥",
    name: "HealthSync AI",
    tagline: "HealthTech • Seed Stage",
    location: "Boston, MA",
    founded: "Mar 2023",
    employees: 8,
    aiScore: 89,
    raised: "$1.5M",
    arr: "$120K",
    growth: "38% MoM",
    team: ["Ex-Google Health", "Ex-Epic"],
    tech: ["Python", "TensorFlow", "GCP"],
    description: "Medical imaging analysis platform leveraging deep learning for faster diagnosis",
  },
  {
    id: "3",
    logo: "💰",
    name: "FinFlow",
    tagline: "FinTech • Pre-seed",
    location: "New York, NY",
    founded: "Jul 2023",
    employees: 5,
    aiScore: 87,
    raised: "$800K",
    arr: "$65K",
    growth: "52% MoM",
    team: ["Ex-Square", "Ex-Plaid"],
    tech: ["TypeScript", "Go", "PostgreSQL"],
    description: "Real-time financial data aggregation and analytics for SMBs",
  },
];

const Discovery = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [aiScoreRange, setAiScoreRange] = useState([85]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 70) return "text-primary";
    if (score >= 50) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="min-h-screen bg-background dark">
      <Navigation />

      <main className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">Smart Discovery</h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Investment Thesis: Series A SaaS, AI/ML, $100K+ MRR</span>
                  <Button variant="link" size="sm" className="h-auto p-0">
                    Edit Thesis
                  </Button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Save Search
                </Button>
                <Button variant="outline" size="sm">
                  Share Results
                </Button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input placeholder="Search startups..." className="pl-10 h-12" />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>

            {/* Stats & View Toggle */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">🎯 234 matches found</span>
                <span className="text-sm text-muted-foreground">• Updated 2 minutes ago</span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <LayoutGrid className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            {/* Filter Sidebar */}
            <aside className="w-72 flex-shrink-0">
              <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Refine Results
                </h3>

                <div className="space-y-6">
                  {/* AI Score */}
                  <div>
                    <Label className="mb-3 block">AI Confidence Score</Label>
                    <Slider
                      value={aiScoreRange}
                      onValueChange={setAiScoreRange}
                      max={100}
                      min={0}
                      step={5}
                      className="mb-2"
                    />
                    <div className="text-sm text-muted-foreground">{aiScoreRange[0]}-100</div>
                  </div>

                  {/* Funding Status */}
                  <div>
                    <Label className="mb-3 block">Funding Status</Label>
                    <div className="space-y-2">
                      {["Actively raising", "Pre-fundraising", "Recently funded"].map((status) => (
                        <div key={status} className="flex items-center gap-2">
                          <Checkbox id={status} defaultChecked={status !== "Recently funded"} />
                          <label htmlFor={status} className="text-sm cursor-pointer">
                            {status}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Maturity */}
                  <div>
                    <Label className="mb-3 block">Technical Maturity</Label>
                    <div className="space-y-2">
                      {["MVP Stage", "Product-market fit", "Scaling phase"].map((maturity) => (
                        <div key={maturity} className="flex items-center gap-2">
                          <Checkbox id={maturity} defaultChecked={maturity !== "Scaling phase"} />
                          <label htmlFor={maturity} className="text-sm cursor-pointer">
                            {maturity}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Team Background */}
                  <div>
                    <Label className="mb-3 block">Team Background</Label>
                    <div className="space-y-2">
                      {["Big tech experience", "Previous exits", "Domain expertise"].map((bg) => (
                        <div key={bg} className="flex items-center gap-2">
                          <Checkbox id={bg} defaultChecked={bg !== "Previous exits"} />
                          <label htmlFor={bg} className="text-sm cursor-pointer">
                            {bg}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Reset Filters
                  </Button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">📌 High Priority Recommendations ({mockStartups.length})</h2>
              </div>

              <div className="space-y-4">
                {mockStartups.map((startup) => (
                  <div
                    key={startup.id}
                    className="feature-card cursor-pointer"
                    onClick={() => navigate(`/startup/${startup.id}`)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{startup.logo}</div>
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{startup.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{startup.tagline}</p>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {startup.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              Founded {startup.founded}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {startup.employees} employees
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* AI Score Badge */}
                      <div className="text-center">
                        <div
                          className={`text-3xl font-bold ${getScoreColor(startup.aiScore)} mb-1`}
                        >
                          {startup.aiScore}
                        </div>
                        <div className="text-xs text-muted-foreground">AI Match</div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-border">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Raised</div>
                        <div className="font-semibold">{startup.raised}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">ARR</div>
                        <div className="font-semibold">{startup.arr}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Growth</div>
                        <div className="font-semibold text-success">{startup.growth}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Team</div>
                        <div className="font-semibold text-sm">{startup.team.join(", ")}</div>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-muted-foreground">Tech Stack:</span>
                        <div className="flex gap-2">
                          {startup.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">{startup.description}</p>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button variant="default" size="sm" className="group">
                        View Details
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="outline" size="sm">
                        Add to Pipeline
                      </Button>
                      <Button variant="outline" size="sm">
                        Schedule Meeting
                      </Button>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Load More Results
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Discovery;
