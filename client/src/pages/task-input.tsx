import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useFlow } from "@/lib/flow-context";

const MAX_CHARS = 500;

export default function TaskInput() {
  const [, navigate] = useLocation();
  const { state, setTaskDescription, resetFlow } = useFlow();
  const [task, setTask] = useState(state.taskDescription);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (state.resistanceType) {
      resetFlow();
      setTask("");
    }
  }, []);

  const isValid = task.trim().length >= 10;
  const charCount = task.length;

  const handleSubmit = () => {
    if (isValid) {
      setTaskDescription(task.trim());
      navigate("/questionnaire");
    }
  };

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
            Step 1 of 3
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <Card className="w-full max-w-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="mb-8">
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-6">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: "33%" }}
                  role="progressbar"
                  aria-valuenow={33}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  data-testid="progress-bar"
                />
              </div>
              
              <h1 className="text-2xl md:text-3xl font-semibold mb-3" data-testid="text-page-title">
                What task have you been avoiding?
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Describe the task you're struggling to start. Be as specific as you can - 
                this helps us understand what's really going on.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <Textarea
                value={task}
                onChange={(e) => {
                  if (e.target.value.length <= MAX_CHARS) {
                    setTask(e.target.value);
                  }
                }}
                onBlur={() => setTouched(true)}
                placeholder="e.g., Writing the first draft of my project proposal, or Starting my tax preparation, or Organizing my home office..."
                className="min-h-32 text-base resize-none"
                data-testid="input-task-description"
              />
              <div className="flex items-center justify-between text-sm">
                <div>
                  {touched && !isValid && (
                    <span className="text-destructive" data-testid="text-validation-error">
                      Please describe your task in at least 10 characters
                    </span>
                  )}
                </div>
                <span className={`text-muted-foreground ${charCount > MAX_CHARS * 0.9 ? "text-destructive" : ""}`} data-testid="text-char-count">
                  {charCount}/{MAX_CHARS}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <Link href="/">
                <Button variant="ghost" className="text-muted-foreground" data-testid="button-back">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to home
                </Button>
              </Link>
              <Button 
                onClick={handleSubmit}
                disabled={!isValid}
                data-testid="button-continue"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
