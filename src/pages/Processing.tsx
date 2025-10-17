import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bot, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Processing = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState(0);

  const tasks = [
    { label: "Company database filtering", detail: "2.3M matches", status: "complete" },
    { label: "Market intelligence gathering", detail: "", status: "complete" },
    { label: "Team background analysis", detail: "", status: "complete" },
    { label: "Technical stack assessment", detail: "in progress", status: "active" },
    { label: "Security compliance checking", detail: "", status: "pending" },
    { label: "Investment recommendation generation", detail: "", status: "pending" },
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => navigate("/discovery"), 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 80);

    const taskInterval = setInterval(() => {
      setCurrentTask((prev) => Math.min(prev + 1, tasks.length - 1));
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(taskInterval);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background dark flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        <div className="bg-card border border-border rounded-2xl p-12 shadow-2xl">
          {/* AI Icon with Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative bg-secondary/10 p-6 rounded-full">
                <Bot className="w-16 h-16 text-secondary" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-3">AI Agent Working</h2>
          <p className="text-center text-muted-foreground mb-8">
            Analyzing 20,847,329 companies worldwide
          </p>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm font-medium text-primary">{progress}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          {/* Current Task */}
          <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-border">
            <div className="flex items-center gap-2 text-sm font-medium mb-1">
              <Loader2 className="w-4 h-4 animate-spin text-primary" />
              <span>Current Task:</span>
            </div>
            <p className="text-base">Running technical due diligence analysis</p>
          </div>

          {/* Task List */}
          <div className="space-y-3 mb-8">
            <p className="text-sm font-medium mb-3">Progress Details:</p>
            {tasks.map((task, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                  index <= currentTask ? "bg-muted/30" : "opacity-50"
                }`}
              >
                <div className="mt-0.5">
                  {index < currentTask ? (
                    <Check className="w-5 h-5 text-success" />
                  ) : index === currentTask ? (
                    <Loader2 className="w-5 h-5 animate-spin text-primary" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-border"></div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{task.label}</p>
                  {task.detail && <p className="text-xs text-muted-foreground">{task.detail}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* ETA */}
          <div className="text-center text-sm text-muted-foreground mb-6">
            Estimated completion: {Math.max(0, 100 - progress)} seconds
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-center">
            <Button variant="ghost" size="sm">
              Cancel
            </Button>
            <Button variant="outline" size="sm">
              Minimize to background
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processing;
