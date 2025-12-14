import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useFlow } from "@/lib/flow-context";
import { questions, calculateResistanceType } from "@/lib/questionnaire-data";

export default function Questionnaire() {
  const [, navigate] = useLocation();
  const { state, addAnswer, setCurrentStep, setResistanceType } = useFlow();

  useEffect(() => {
    if (!state.taskDescription) {
      navigate("/start");
    }
  }, [state.taskDescription, navigate]);

  const currentQuestionIndex = state.currentStep;
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progressPercent = 33 + ((currentQuestionIndex + 1) / totalQuestions) * 34;

  const currentAnswer = state.answers.find(a => a.questionId === currentQuestion?.id);

  const handleSelect = (answerId: number) => {
    if (currentQuestion) {
      addAnswer(currentQuestion.id, answerId);
    }
  };

  const handleNext = () => {
    if (!currentAnswer) return;
    
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentStep(currentQuestionIndex + 1);
    } else {
      const allAnswers = [...state.answers];
      const existingIndex = allAnswers.findIndex(a => a.questionId === currentQuestion.id);
      if (existingIndex >= 0) {
        allAnswers[existingIndex] = { questionId: currentQuestion.id, answerId: currentAnswer.answerId };
      } else {
        allAnswers.push({ questionId: currentQuestion.id, answerId: currentAnswer.answerId });
      }
      const resistanceType = calculateResistanceType(allAnswers);
      setResistanceType(resistanceType);
      navigate("/results");
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentStep(currentQuestionIndex - 1);
    } else {
      navigate("/start");
    }
  };

  if (!currentQuestion) {
    return null;
  }

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
            Step 2 of 3
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <Card className="w-full max-w-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="mb-8">
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                  role="progressbar"
                  aria-valuenow={progressPercent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  data-testid="progress-bar"
                />
              </div>
              <div className="text-sm text-muted-foreground text-right" data-testid="text-question-count">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold mb-8 leading-tight" data-testid="text-question">
              {currentQuestion.text}
            </h2>

            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSelect(option.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 hover-elevate active-elevate-2 ${
                    currentAnswer?.answerId === option.id
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card"
                  }`}
                  data-testid={`button-option-${option.id}`}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        currentAnswer?.answerId === option.id
                          ? "border-primary bg-primary"
                          : "border-muted-foreground"
                      }`}
                    >
                      {currentAnswer?.answerId === option.id && (
                        <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                      )}
                    </div>
                    <span className="text-base leading-relaxed">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4">
              <Button 
                variant="ghost" 
                onClick={handleBack}
                className="text-muted-foreground"
                data-testid="button-back"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button 
                onClick={handleNext}
                disabled={!currentAnswer}
                data-testid="button-next"
              >
                {currentQuestionIndex === totalQuestions - 1 ? "See Results" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
