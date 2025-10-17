import { Navigation } from "@/components/Navigation";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Lightbulb, Zap, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navigation />

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Hero Heading */}
            <h1 className="text-foreground leading-tight">
              Revolutionize
              <br />
              Investment
              <br />
              with <span className="gradient-text">AI</span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Scout, analyze, mentor, and invest in startups with unprecedented precision and speed using our
              multi-agent AI system.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button variant="hero" size="lg" className="group">
                Get Started Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 animate-slide-up">
            <FeatureCard
              icon={Target}
              title="AI Scout"
              description="Discover hidden gems"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Smart Analysis"
              description="Deep market insights"
            />
            <FeatureCard
              icon={Lightbulb}
              title="Growth Mentor"
              description="Personalized mentoring & strategic guidance"
            />
            <FeatureCard
              icon={Zap}
              title="Investor Agent"
              description="Lightning-fast execution"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
