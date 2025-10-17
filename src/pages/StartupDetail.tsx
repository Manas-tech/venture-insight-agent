import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ExternalLink,
  Mail,
  Calendar,
  FileText,
  Star,
  MapPin,
  Users,
  DollarSign,
  TrendingUp,
  Check,
  AlertTriangle,
  Code,
  Shield,
  GitBranch,
  Target,
} from "lucide-react";

const StartupDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const startup = {
    name: "CustomerAI Inc.",
    tagline: "AI-powered customer support automation",
    logo: "🚀",
    location: "San Francisco, CA",
    website: "customerai.com",
    founded: "Jan 2023",
    employees: 12,
    aiScore: 94,
    raised: "$2.1M",
    arr: "$180K",
    status: "Currently raising Series A ($500K-2M target)",
  };

  const metrics = [
    { label: "ARR", value: "$180K", progress: 75, status: "Strong" },
    { label: "Growth", value: "45% MoM", progress: 90, status: "Excellent" },
    { label: "Customers", value: "24 paid", progress: 65, status: "Good" },
    { label: "Team", value: "12 people", progress: 75, status: "Strong" },
    { label: "Runway", value: "18 months", progress: 50, status: "Moderate" },
  ];

  const techStack = [
    { category: "Frontend", tech: "React 18, TypeScript, Tailwind CSS" },
    { category: "Backend", tech: "Node.js, Express, GraphQL API" },
    { category: "Database", tech: "PostgreSQL (primary), Redis (cache)" },
    { category: "Infrastructure", tech: "AWS (ECS, RDS, ElastiCache)" },
    { category: "Monitoring", tech: "Datadog, Sentry" },
  ];

  const securityItems = [
    { label: "SSL Certificate (A+ rating)", status: "complete" },
    { label: "SOC2 Type II (in progress - Q4 2025)", status: "progress" },
    { label: "GDPR compliance framework", status: "complete" },
    { label: "Data encryption at rest and in transit", status: "complete" },
  ];

  const milestones = [
    { text: "Closed $500K seed extension", time: "2 weeks ago" },
    { text: "Launched enterprise features", time: "1 month ago" },
    { text: "SOC2 Type II certification in progress", time: "Ongoing" },
    { text: "3 customer case studies published", time: "3 weeks ago" },
  ];

  return (
    <div className="min-h-screen bg-background dark">
      <Navigation />

      <main className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Back Button */}
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate("/discovery")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Results
          </Button>

          {/* Header */}
          <div className="bg-card border border-border rounded-xl p-8 mb-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-6">
                <div className="text-6xl">{startup.logo}</div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">{startup.name}</h1>
                  <p className="text-lg text-muted-foreground mb-3">{startup.tagline}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {startup.location}
                    </span>
                    <a href={`https://${startup.website}`} className="flex items-center gap-1 hover:text-primary">
                      {startup.website}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span>Founded {startup.founded}</span>
                  </div>
                  <div className="flex items-center gap-4 text-base font-medium">
                    <span className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-primary" />
                      {startup.raised} raised
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      {startup.employees} employees
                    </span>
                    <span className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-success" />
                      {startup.arr} ARR
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{startup.status}</p>
                </div>
              </div>

              <div className="text-center">
                <div className="relative inline-block">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - startup.aiScore / 100)}`}
                      className="text-success transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-success">{startup.aiScore}</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mt-2">AI Match Score</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-6 border-t border-border">
              <Button variant="default" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact
              </Button>
              <Button variant="outline" className="gap-2">
                <Calendar className="w-4 h-4" />
                Schedule Meeting
              </Button>
              <Button variant="outline" className="gap-2">
                <FileText className="w-4 h-4" />
                Add to Pipeline
              </Button>
              <Button variant="ghost" className="gap-2 ml-auto">
                <Star className="w-4 h-4" />
                Save
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-card border border-border">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="market">Market</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="financials">Financials</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6 space-y-6">
              {/* AI Summary */}
              <Card className="p-6 bg-card border-border">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  AI Investment Summary
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    CustomerAI demonstrates strong technical foundation with modern architecture, experienced founding
                    team from Stripe/Zendesk, and solid early traction in a competitive but growing market.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Check className="w-5 h-5 text-success" />
                        <span className="font-semibold">Strengths</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Technical architecture, team experience, growth metrics
                      </p>
                    </div>
                    <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-5 h-5 text-warning" />
                        <span className="font-semibold">Concerns</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Market competition, customer concentration</p>
                    </div>
                  </div>
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="font-semibold text-primary">Recommendation: PROCEED with due diligence</p>
                  </div>
                </div>
              </Card>

              {/* Key Metrics */}
              <Card className="p-6 bg-card border-border">
                <h2 className="text-xl font-semibold mb-6">Key Metrics</h2>
                <div className="grid grid-cols-5 gap-6">
                  {metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold mb-2">{metric.value}</div>
                      <div className="text-sm text-muted-foreground mb-3">{metric.label}</div>
                      <Progress value={metric.progress} className="h-2 mb-2" />
                      <div className="text-xs text-muted-foreground">{metric.status}</div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recent Activity */}
              <Card className="p-6 bg-card border-border">
                <h2 className="text-xl font-semibold mb-4">Recent Activity & Milestones</h2>
                <div className="space-y-3">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <Check className="w-5 h-5 text-success mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{milestone.text}</p>
                        <p className="text-xs text-muted-foreground mt-1">{milestone.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="technical" className="mt-6 space-y-6">
              {/* Architecture */}
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Architecture Assessment
                  </h2>
                  <Badge variant="secondary" className="text-base px-4 py-1">
                    Score: 87/100
                  </Badge>
                </div>
                <div className="space-y-4">
                  {techStack.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg">
                      <div className="font-semibold text-sm w-32">{item.category}:</div>
                      <div className="text-sm text-muted-foreground flex-1">{item.tech}</div>
                    </div>
                  ))}
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm">
                      View Full Tech Stack
                    </Button>
                    <Button variant="outline" size="sm">
                      Architecture Diagram
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Security */}
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Security & Compliance
                  </h2>
                  <Badge variant="secondary" className="text-base px-4 py-1">
                    Score: 82/100
                  </Badge>
                </div>
                <div className="space-y-3">
                  {securityItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                      {item.status === "complete" ? (
                        <Check className="w-5 h-5 text-success" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-primary animate-pulse"></div>
                      )}
                      <span className="text-sm">{item.label}</span>
                    </div>
                  ))}
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium mb-2">Vulnerability Scan: No critical issues</p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        View Security Report
                      </Button>
                      <Button variant="outline" size="sm">
                        Compliance Checklist
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Development Velocity */}
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <GitBranch className="w-5 h-5 text-primary" />
                    Development Velocity
                  </h2>
                  <Badge variant="secondary" className="text-base px-4 py-1">
                    Score: 78/100
                  </Badge>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-3">GitHub Activity (Last 30 days):</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-muted/20 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary">247</div>
                        <div className="text-sm text-muted-foreground mt-1">Commits</div>
                      </div>
                      <div className="p-4 bg-muted/20 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary">23</div>
                        <div className="text-sm text-muted-foreground mt-1">PRs Merged</div>
                      </div>
                      <div className="p-4 bg-muted/20 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary">4</div>
                        <div className="text-sm text-muted-foreground mt-1">Contributors</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-warning" />
                      <span className="font-semibold">Code Quality:</span>
                      <span className="text-sm text-muted-foreground">Test coverage 45% (needs improvement)</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      View GitHub Analysis
                    </Button>
                    <Button variant="outline" size="sm">
                      Code Quality Report
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="market" className="mt-6">
              <Card className="p-6 bg-card border-border">
                <h2 className="text-xl font-semibold mb-4">Market Analysis</h2>
                <p className="text-muted-foreground">Market analysis content coming soon...</p>
              </Card>
            </TabsContent>

            <TabsContent value="team" className="mt-6">
              <Card className="p-6 bg-card border-border">
                <h2 className="text-xl font-semibold mb-4">Team Information</h2>
                <p className="text-muted-foreground">Team details coming soon...</p>
              </Card>
            </TabsContent>

            <TabsContent value="financials" className="mt-6">
              <Card className="p-6 bg-card border-border">
                <h2 className="text-xl font-semibold mb-4">Financial Overview</h2>
                <p className="text-muted-foreground">Financial data coming soon...</p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default StartupDetail;
