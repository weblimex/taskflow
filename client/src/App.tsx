import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FlowProvider } from "@/lib/flow-context";
import Landing from "@/pages/landing";
import TaskInput from "@/pages/task-input";
import Questionnaire from "@/pages/questionnaire";
import Results from "@/pages/results";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/start" component={TaskInput} />
      <Route path="/questionnaire" component={Questionnaire} />
      <Route path="/results" component={Results} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <FlowProvider>
          <Toaster />
          <Router />
        </FlowProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
