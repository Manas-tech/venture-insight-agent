import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, DollarSign, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InvestmentThesis = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: "",
    subSector: "",
    geography: [] as string[],
    stage: "",
    checkSize: "",
    teamSize: "",
    revenue: "",
  });

  const handleContinue = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      navigate("/processing");
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-3 mb-8">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all ${
            i === step
              ? "bg-primary text-primary-foreground scale-110"
              : i < step
              ? "bg-success text-white"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {i}
        </div>
      ))}
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-semibold">Investment Focus</h2>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="industry" className="text-base mb-2 block">
                  Industry Vertical *
                </Label>
                <Select value={formData.industry} onValueChange={(val) => setFormData({ ...formData, industry: val })}>
                  <SelectTrigger id="industry" className="h-12">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="fintech">FinTech</SelectItem>
                    <SelectItem value="saas">B2B SaaS</SelectItem>
                    <SelectItem value="healthtech">HealthTech</SelectItem>
                    <SelectItem value="climate">Climate Tech</SelectItem>
                    <SelectItem value="ai">AI/ML</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="subSector" className="text-base mb-2 block">
                  Sub-sector Focus (Optional)
                </Label>
                <Input
                  id="subSector"
                  placeholder="e.g., AI-powered customer support tools"
                  className="h-12"
                  value={formData.subSector}
                  onChange={(e) => setFormData({ ...formData, subSector: e.target.value })}
                />
              </div>

              <div>
                <Label className="text-base mb-2 block">Geographic Preference</Label>
                <div className="grid grid-cols-2 gap-3">
                  {["North America", "Europe", "Asia-Pacific", "Latin America"].map((region) => (
                    <button
                      key={region}
                      type="button"
                      onClick={() => {
                        const newGeo = formData.geography.includes(region)
                          ? formData.geography.filter((g) => g !== region)
                          : [...formData.geography, region];
                        setFormData({ ...formData, geography: newGeo });
                      }}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        formData.geography.includes(region)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-semibold">Investment Stage</h2>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-base mb-2 block">Funding Stage *</Label>
                <div className="grid grid-cols-2 gap-3">
                  {["Pre-seed", "Seed", "Series A", "Series B+"].map((stage) => (
                    <button
                      key={stage}
                      type="button"
                      onClick={() => setFormData({ ...formData, stage })}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.stage === stage
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="font-semibold">{stage}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="checkSize" className="text-base mb-2 block">
                  Check Size Range *
                </Label>
                <Select value={formData.checkSize} onValueChange={(val) => setFormData({ ...formData, checkSize: val })}>
                  <SelectTrigger id="checkSize" className="h-12">
                    <SelectValue placeholder="Select check size" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="50k-250k">$50K - $250K</SelectItem>
                    <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                    <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                    <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                    <SelectItem value="2m+">$2M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-semibold">Team Requirements</h2>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="teamSize" className="text-base mb-2 block">
                  Preferred Team Size
                </Label>
                <Select value={formData.teamSize} onValueChange={(val) => setFormData({ ...formData, teamSize: val })}>
                  <SelectTrigger id="teamSize" className="h-12">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="2-5">2-5 people</SelectItem>
                    <SelectItem value="6-10">6-10 people</SelectItem>
                    <SelectItem value="11-20">11-20 people</SelectItem>
                    <SelectItem value="20+">20+ people</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base mb-2 block">Team Background Preferences</Label>
                <div className="space-y-2">
                  {["Big tech experience", "Previous exits", "Domain expertise", "Technical founders"].map((pref) => (
                    <button
                      key={pref}
                      type="button"
                      className="w-full p-3 rounded-lg border-2 border-border hover:border-primary/50 text-left transition-all"
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-semibold">Traction Metrics</h2>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="revenue" className="text-base mb-2 block">
                  Minimum Revenue (ARR/MRR)
                </Label>
                <Select value={formData.revenue} onValueChange={(val) => setFormData({ ...formData, revenue: val })}>
                  <SelectTrigger id="revenue" className="h-12">
                    <SelectValue placeholder="Select minimum revenue" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="pre">Pre-revenue</SelectItem>
                    <SelectItem value="0-50k">$0 - $50K</SelectItem>
                    <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                    <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                    <SelectItem value="500k+">$500K+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base mb-2 block">Growth Requirements</Label>
                <div className="space-y-2">
                  {["20%+ MoM growth", "Active users growing", "Strong unit economics", "Clear path to profitability"].map(
                    (req) => (
                      <button
                        key={req}
                        type="button"
                        className="w-full p-3 rounded-lg border-2 border-border hover:border-primary/50 text-left transition-all"
                      >
                        {req}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background dark">
      <Navigation />

      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3">Define Your Investment Thesis</h1>
            <p className="text-lg text-muted-foreground">
              Let our AI agent find the perfect startups for your fund
            </p>
          </div>

          {renderStepIndicator()}

          <Card className="p-8 bg-card border-border">
            {renderStep()}

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="ghost"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
              >
                Back
              </Button>
              <Button variant="hero" size="lg" onClick={handleContinue} className="group">
                {step === 4 ? "Start AI Analysis" : "Continue"}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Tips Panel */}
          <Card className="mt-6 p-6 bg-card border-border">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Quick Tips
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Be specific with your investment thesis to get better AI matches
            </p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div>• B2B SaaS with AI/ML integration</div>
              <div>• Climate tech hardware solutions</div>
              <div>• Consumer fintech applications</div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default InvestmentThesis;
