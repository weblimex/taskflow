import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export interface QuestionnaireAnswer {
  questionId: number;
  answerId: number;
}

export interface FlowState {
  taskDescription: string;
  answers: QuestionnaireAnswer[];
  currentStep: number;
  resistanceType: string | null;
}

interface FlowContextType {
  state: FlowState;
  setTaskDescription: (task: string) => void;
  addAnswer: (questionId: number, answerId: number) => void;
  setCurrentStep: (step: number) => void;
  setResistanceType: (type: string) => void;
  resetFlow: () => void;
  goBack: () => void;
}

const initialState: FlowState = {
  taskDescription: "",
  answers: [],
  currentStep: 0,
  resistanceType: null,
};

const FlowContext = createContext<FlowContextType | undefined>(undefined);

export function FlowProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FlowState>(initialState);

  const setTaskDescription = useCallback((task: string) => {
    setState(prev => ({ ...prev, taskDescription: task }));
  }, []);

  const addAnswer = useCallback((questionId: number, answerId: number) => {
    setState(prev => {
      const existingIndex = prev.answers.findIndex(a => a.questionId === questionId);
      const newAnswers = [...prev.answers];
      if (existingIndex >= 0) {
        newAnswers[existingIndex] = { questionId, answerId };
      } else {
        newAnswers.push({ questionId, answerId });
      }
      return { ...prev, answers: newAnswers };
    });
  }, []);

  const setCurrentStep = useCallback((step: number) => {
    setState(prev => ({ ...prev, currentStep: step }));
  }, []);

  const setResistanceType = useCallback((type: string) => {
    setState(prev => ({ ...prev, resistanceType: type }));
  }, []);

  const resetFlow = useCallback(() => {
    setState(initialState);
  }, []);

  const goBack = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentStep: Math.max(0, prev.currentStep - 1),
    }));
  }, []);

  return (
    <FlowContext.Provider
      value={{
        state,
        setTaskDescription,
        addAnswer,
        setCurrentStep,
        setResistanceType,
        resetFlow,
        goBack,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
}

export function useFlow() {
  const context = useContext(FlowContext);
  if (context === undefined) {
    throw new Error("useFlow must be used within a FlowProvider");
  }
  return context;
}
