import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Sparkles, 
  RotateCcw,
  Waves,
  Target,
  Compass,
  Heart,
  Shield,
  Zap,
  Timer,
  LayoutGrid,
  TrendingUp,
  FileEdit,
  CheckCircle,
  Clock,
  Scissors,
  Footprints,
  HelpCircle,
  Search,
  MessageCircle,
  Lightbulb,
  RefreshCw,
  Palette,
  Music,
  PenLine,
  CloudRain,
  Trophy,
  Star,
  Play,
  Activity,
  type LucideIcon
} from "lucide-react";
import { useFlow } from "@/lib/flow-context";
import { resistanceProfiles } from "@/lib/questionnaire-data";

const iconMap: Record<string, LucideIcon> = {
  Waves,
  Target,
  Compass,
  Heart,
  Shield,
  Zap,
  Timer,
  LayoutGrid,
  Sparkles,
  TrendingUp,
  FileEdit,
  CheckCircle,
  Clock,
  Scissors,
  Footprints,
  HelpCircle,
  Search,
  MessageCircle,
  Lightbulb,
  RefreshCw,
  Palette,
  Music,
  PenLine,
  CloudRain,
  Trophy,
  Star,
  Play,
  Activity,
  ArrowRight,
  Link: RefreshCw,
};

export default function Results() {
  const [, navigate] = useLocation();
  const { state, resetFlow } = useFlow();
  const [interestResponse, setInterestResponse] = useState<"yes" | "no" | null>(null);


  useEffect(() => {
    if (!state.resistanceType) {
      navigate("/");
    }
  }, [state.resistanceType, navigate]);

  const profile = state.resistanceType ? resistanceProfiles[state.resistanceType] : null;

  const handleStartOver = () => {
    resetFlow();
    navigate("/start");
  };

  if (!profile) {
    return null;
  }

  const DiagnosisIcon = iconMap[profile.icon] || Sparkles;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg">TaskFlow</span>
            </div>
          </Link>
          <div className="text-sm text-muted-foreground" data-testid="text-step-indicator">
            Step 3 of 3 - Complete
          </div>
        </div>
      </header>

      <main className="flex-1 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-12">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: "100%" }}
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
              data-testid="progress-bar"
            />
          </div>

          <Card className="mb-12">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <DiagnosisIcon className="w-10 h-10 text-primary" />
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm mb-4">
                <span>Your resistance pattern</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-semibold mb-6" data-testid="text-diagnosis-title">
                {profile.title}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                {profile.description}
              </p>

              <div className="bg-muted/50 rounded-xl p-6 max-w-xl mx-auto">
                <p className="text-sm text-muted-foreground mb-2">
                  A thought to hold onto
                </p>
                <p
                  className="text-lg italic text-foreground"
                  data-testid="text-affirmation"
                >
                  "{profile.affirmation}"
                </p>

                {profile.nlpReframe ? (
                  <div className="mt-4 text-muted-foreground leading-relaxed">
                    {profile.nlpReframe}
                  </div>
                ) : null}
              </div>

            </CardContent>
          </Card>
          
          <Card className="mb-12">
  <CardContent className="p-6 md:p-8 text-center">
    
    <h3 className="text-xl font-semibold mb-2">
      A moment to check in
    </h3>

    <p className="text-muted-foreground mb-6">
      Would deeper guidance for this pattern help you right now?
    </p>

    {interestResponse === null && (
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          onClick={async () => {
            setInterestResponse("yes");
            console.log("deep_guidance_interest_yes");
            // Send interest data to server
            try {
              await fetch('/api/interest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  task: state.taskDescription,
                  resistanceType: state.resistanceType,
                  interest: 'yes'
                })
              });
            } catch (error) {
              console.error('Failed to log interest:', error);
            }
          }}
        >
          Yes, I’d like that
        </Button>

        <Button
          variant="ghost"
          onClick={async () => {
            setInterestResponse("no");
            console.log("deep_guidance_interest_no");
            // Send interest data to server
            try {
              await fetch('/api/interest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  task: state.taskDescription,
                  resistanceType: state.resistanceType,
                  interest: 'no'
                })
              });
            } catch (error) {
              console.error('Failed to log interest:', error);
            }
          }}
        >
          Not right now
        </Button>
      </div>
    )}

    {interestResponse === "yes" && (
      <p className="mt-4 text-muted-foreground">
        That makes sense. Sometimes a little more guidance can help things settle.
        <br />
        Deeper reflection tools are coming soon.
      </p>
    )}

    {interestResponse === "no" && (
      <p className="mt-4 text-muted-foreground">
        That’s completely okay. Awareness alone is already progress.
      </p>
    )}
  </CardContent>
</Card>


          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center" data-testid="text-strategies-title">
              Strategies That Can Help
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Pick just one. You don’t need to do them all.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {profile.strategies.map((strategy, index) => {
                const StrategyIcon = iconMap[strategy.icon] || Sparkles;
                return (
                  <Card key={index} className="overflow-visible">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <StrategyIcon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2" data-testid={`text-strategy-title-${index}`}>
                            {strategy.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {strategy.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Remember your task?
                  </h3>
                  <p className="text-primary-foreground/80 max-w-lg">
                    "{state.taskDescription}"
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="secondary"
                    onClick={handleStartOver}
                    className="bg-primary-foreground text-primary"
                    data-testid="button-start-another"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Start Another Reflection
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
               You don’t need to solve everything right now.
                Understanding what’s happening is already progress.
            </p>
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground" data-testid="button-back-home">
                Back to Home
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-primary-foreground" />
            </div>
            <span>TaskFlow</span>
          </div>
          <p>Designed to help you move forward</p>
        </div>
      </footer>
    </div>
  );
}
