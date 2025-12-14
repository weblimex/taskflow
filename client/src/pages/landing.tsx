import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, Target, ChevronDown } from "lucide-react";

export default function Landing() {
  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg" data-testid="text-logo">TaskFlow</span>
          </div>
          <Link href="/start">
            <Button data-testid="button-header-start">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </header>

      <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            <span>A gentle approach to getting unstuck</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6" data-testid="text-hero-title">
            Struggling to start?
            <br />
            <span className="text-muted-foreground">Let's find out why.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Discover what's really holding you back and get personalized strategies 
            to move forward. In just a few minutes, you'll understand your resistance 
            and have a clear path to action.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/start">
              <Button size="lg" className="px-8 py-6 text-lg rounded-full" data-testid="button-hero-start">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-muted-foreground"
              onClick={scrollToHowItWorks}
              data-testid="button-learn-more"
            >
              Learn more
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
        
        <button 
          onClick={scrollToHowItWorks}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
          aria-label="Scroll to learn more"
          data-testid="button-scroll-indicator"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </section>

      <section id="how-it-works" className="py-20 md:py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-how-title">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, guided process to understand and overcome your task resistance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3" data-testid="text-step-1-title">Name Your Task</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tell us what you've been avoiding or struggling to start. 
                  No judgment, just clarity.
                </p>
              </div>
              <div className="hidden md:block absolute top-8 -right-6 w-12 h-0.5 bg-border" />
            </div>
            
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3" data-testid="text-step-2-title">Explore Your Feelings</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Answer a few thoughtful questions about how you feel 
                  when you think about this task.
                </p>
              </div>
              <div className="hidden md:block absolute top-8 -right-6 w-12 h-0.5 bg-border" />
            </div>
            
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3" data-testid="text-step-3-title">Get Your Insights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receive a personalized diagnosis of your resistance pattern 
                  with actionable strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6" data-testid="text-trust-title">
            Resistance is natural.
            <br />
            <span className="text-muted-foreground">Understanding it is powerful.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Everyone experiences task resistance. It's not a character flaw - it's your brain 
            trying to protect you. When you understand what's really going on beneath the surface, 
            you can work with your mind instead of against it.
          </p>
          <Link href="/start">
            <Button size="lg" className="px-8 py-6 text-lg rounded-full" data-testid="button-trust-start">
              Begin Your Discovery
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

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
