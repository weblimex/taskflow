export interface Question {
  id: number;
  text: string;
  options: {
    id: number;
    text: string;
    resistanceTypes: string[];
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "When you think about starting this task, what's the first feeling that comes up?",
    options: [
      { id: 1, text: "Overwhelm - it feels like too much", resistanceTypes: ["overwhelm"] },
      { id: 2, text: "Anxiety - worried I'll do it wrong", resistanceTypes: ["perfectionism"] },
      { id: 3, text: "Boredom - it just doesn't interest me", resistanceTypes: ["meaning"] },
      { id: 4, text: "Confusion - I don't know where to start", resistanceTypes: ["clarity"] },
    ],
  },
  {
    id: 2,
    text: "How clear are you on what a successful outcome looks like?",
    options: [
      { id: 1, text: "Very clear - I know exactly what I need to do", resistanceTypes: [] },
      { id: 2, text: "Somewhat clear - I have a general idea", resistanceTypes: ["clarity"] },
      { id: 3, text: "Unclear - I'm not sure what 'done' looks like", resistanceTypes: ["clarity", "overwhelm"] },
      { id: 4, text: "The outcome feels impossible to achieve", resistanceTypes: ["perfectionism", "overwhelm"] },
    ],
  },
  {
    id: 3,
    text: "What happens when you imagine yourself working on this task?",
    options: [
      { id: 1, text: "I feel tense and stressed", resistanceTypes: ["perfectionism", "fear"] },
      { id: 2, text: "I feel bored and disconnected", resistanceTypes: ["meaning"] },
      { id: 3, text: "I feel lost and scattered", resistanceTypes: ["clarity", "overwhelm"] },
      { id: 4, text: "I actually feel okay, just stuck", resistanceTypes: ["inertia"] },
    ],
  },
  {
    id: 4,
    text: "Have you attempted to start this task before?",
    options: [
      { id: 1, text: "Yes, multiple times - I keep stopping", resistanceTypes: ["perfectionism", "overwhelm"] },
      { id: 2, text: "Yes, once - but I got stuck quickly", resistanceTypes: ["clarity"] },
      { id: 3, text: "No - I've been avoiding it completely", resistanceTypes: ["fear", "meaning"] },
      { id: 4, text: "I'm working on it now, but very slowly", resistanceTypes: ["inertia", "meaning"] },
    ],
  },
  {
    id: 5,
    text: "What would make this task easier to start right now?",
    options: [
      { id: 1, text: "Breaking it into smaller pieces", resistanceTypes: ["overwhelm"] },
      { id: 2, text: "Knowing it doesn't have to be perfect", resistanceTypes: ["perfectionism"] },
      { id: 3, text: "Understanding why it matters to me", resistanceTypes: ["meaning"] },
      { id: 4, text: "Having a clear first step", resistanceTypes: ["clarity", "inertia"] },
    ],
  },
];

export interface ResistanceProfile {
  type: string;
  title: string;
  description: string;
  icon: string;
  strategies: {
    title: string;
    description: string;
    icon: string;
  }[];
  affirmation: string;
  nlpReframe: string;
}

export const resistanceProfiles: Record<string, ResistanceProfile> = {
  overwhelm: {
    type: "overwhelm",
    title: "The Overwhelm Response",
    description: "You're experiencing what happens when a task feels too big, too complex, or too demanding. Your brain is trying to protect you by avoiding what feels unmanageable. This is completely normal - it's a sign that you care about doing a good job.",
    icon: "Waves",
    strategies: [
      {
        title: "The 2-Minute Rule",
        description: "Commit to working on the task for just 2 minutes. Often, starting is the hardest part, and momentum builds naturally.",
        icon: "Timer",
      },
      {
        title: "Chunk It Down",
        description: "Break your task into pieces so small they feel almost too easy. Write down just the first three micro-steps.",
        icon: "LayoutGrid",
      },
      {
        title: "Environment Reset",
        description: "Clear your workspace of distractions. A clean environment signals your brain that it's time to focus on one thing.",
        icon: "Sparkles",
      },
      {
        title: "Progress Not Perfection",
        description: "Remind yourself that done is better than perfect. Any progress is meaningful progress.",
        icon: "TrendingUp",
      },
    ],
    affirmation: "I can handle this one small step at a time. I don't have to do everything at once.",
    nlpReframe: "As you notice how overwhelming this task has felt, you may begin to realize that breaking it into one small, manageable step is already helping your mind relax. You don't need to do everything now — just allowing yourself to start gently is enough."

  },
  perfectionism: {
    type: "perfectionism",
    title: "The Perfectionism Pattern",
    description: "Your high standards are a strength, but right now they're creating a barrier. The fear of not meeting your own expectations is making it hard to begin. Remember: a rough draft exists; a perfect plan doesn't.",
    icon: "Target",
    strategies: [
      {
        title: "Embrace the Rough Draft",
        description: "Give yourself permission to create something messy first. You can always improve it later - but you can't improve a blank page.",
        icon: "FileEdit",
      },
      {
        title: "Set a 'Good Enough' Standard",
        description: "Define what 'acceptable' looks like before you start. Not ideal, not perfect - just good enough for this iteration.",
        icon: "CheckCircle",
      },
      {
        title: "Time Boxing",
        description: "Set a fixed time limit. Whatever you create in that time is what you share. Constraints breed creativity.",
        icon: "Clock",
      },
      {
        title: "Separate Creating from Editing",
        description: "Don't judge your work while you're making it. Create first, critique later. These are two different modes of thinking.",
        icon: "Scissors",
      },
    ],
    affirmation: "My best effort today is enough. I give myself permission to be imperfect.",
    nlpReframe: "This is not a performance — it’s an experiment. Nothing you create right now is final, permanent, or visible to anyone else. You’re simply gathering material. Quality comes later; movement comes first."
  },
  clarity: {
    type: "clarity",
    title: "The Clarity Gap",
    description: "You're stuck because the path forward isn't clear. This isn't a motivation problem - it's an information problem. Your brain is wisely refusing to move until it knows which direction to go.",
    icon: "Compass",
    strategies: [
      {
        title: "Define the First Step Only",
        description: "You don't need to see the whole staircase. Just define one concrete action you could take in the next 10 minutes.",
        icon: "Footprints",
      },
      {
        title: "Ask Clarifying Questions",
        description: "Write down what you don't know. Sometimes articulating confusion is the first step to resolving it.",
        icon: "HelpCircle",
      },
      {
        title: "Find an Example",
        description: "Look for someone who has done something similar. How did they approach it? What can you learn from their path?",
        icon: "Search",
      },
      {
        title: "Talk It Through",
        description: "Explain what you're trying to do to someone else - or even to yourself out loud. Articulation creates clarity.",
        icon: "MessageCircle",
      },
    ],
    affirmation: "It's okay not to have all the answers. I can figure this out one question at a time.",
    nlpReframe: "As you notice that clarity doesn’t come from having everything figured out, you may begin to feel a quiet sense of relief. You don’t need the full plan right now — just allowing yourself to define one small next step is enough to let momentum emerge naturally."
  },
  meaning: {
    type: "meaning",
    title: "The Meaning Disconnect",
    description: "You're struggling because this task doesn't feel connected to what matters to you. Without a clear 'why', motivation is hard to find. This is your mind's way of asking for purpose.",
    icon: "Heart",
    strategies: [
      {
        title: "Find Your 'Why'",
        description: "Ask yourself: 'What's one positive thing that will happen when this is done?' Connect the task to a larger goal or value.",
        icon: "Lightbulb",
      },
      {
        title: "Reframe the Task",
        description: "Instead of 'I have to do this,' try 'I get to do this because...' Find even a small benefit or growth opportunity.",
        icon: "RefreshCw",
      },
      {
        title: "Add a Personal Touch",
        description: "Is there a way to approach this task that reflects your values or interests? Make it yours in some way.",
        icon: "Palette",
      },
      {
        title: "Pair It with Joy",
        description: "Combine the task with something you enjoy - music, a favorite drink, a comfortable spot. Create positive associations.",
        icon: "Music",
      },
    ],
    affirmation: "I can find meaning in small things. This task is one step on a larger journey.",
    nlpReframe: "As you recognize that clarity comes from asking the right questions rather than having all the answers, you may notice a sense of relief. You don’t need the whole plan right now — just allowing yourself to define one small next step can naturally create momentum."

  },
  fear: {
    type: "fear",
    title: "The Fear Response",
    description: "Underneath the surface, there may be a fear of failure, judgment, or not being good enough. This protective response kept our ancestors safe, but now it's holding you back from growth.",
    icon: "Shield",
    strategies: [
      {
        title: "Name the Fear",
        description: "What specifically are you afraid of? Write it down. Fears lose power when they're brought into the light.",
        icon: "PenLine",
      },
      {
        title: "Worst Case Scenario",
        description: "Imagine the worst case actually happened. Then ask: 'Would I survive? What would I do?' You're more resilient than you think.",
        icon: "CloudRain",
      },
      {
        title: "Celebrate the Attempt",
        description: "Commit to celebrating yourself just for trying, regardless of outcome. The courage to start is the real victory.",
        icon: "Trophy",
      },
      {
        title: "Remember Past Wins",
        description: "Think of a time you faced something scary and came through. You've done hard things before.",
        icon: "Star",
      },
    ],
    affirmation: "I am capable of handling whatever comes. I choose growth over comfort.",
    nlpReframe: "As you become aware that this fear is simply your mind trying to protect you, you may notice it softening. Fear doesn’t mean danger — it often signals growth. You can allow the feeling to be present while still choosing to take a small, safe step forward."

  },
  inertia: {
    type: "inertia",
    title: "The Inertia Effect",
    description: "You're not facing resistance from the task itself - you're facing the resistance of starting any new action. Objects at rest tend to stay at rest. You just need a gentle push to get moving.",
    icon: "Zap",
    strategies: [
      {
        title: "The 5-4-3-2-1 Method",
        description: "Count down from 5, then immediately take one tiny action toward the task. Don't give yourself time to overthink.",
        icon: "Play",
      },
      {
        title: "Change Your State",
        description: "Stand up, stretch, take a few deep breaths, or move to a different location. Physical movement creates mental momentum.",
        icon: "Activity",
      },
      {
        title: "Create a Trigger",
        description: "Link starting the task to something you already do. 'After my morning coffee, I will work on this for 5 minutes.'",
        icon: "Link",
      },
      {
        title: "Remove Friction",
        description: "Make starting as easy as possible. Open the document, lay out the materials, prepare your workspace in advance.",
        icon: "ArrowRight",
      },
    ],
    affirmation: "Starting is the hardest part, and I can do hard things. Momentum will carry me forward.",
    nlpReframe: "You don’t need motivation to begin — movement creates motivation. As soon as you take one tiny action, your system naturally shifts into motion. You may notice that doing is easier than deciding."
  },
};

export function calculateResistanceType(answers: { questionId: number; answerId: number }[]): string {
  const scores: Record<string, number> = {
    overwhelm: 0,
    perfectionism: 0,
    clarity: 0,
    meaning: 0,
    fear: 0,
    inertia: 0,
  };

  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question) {
      const option = question.options.find(o => o.id === answer.answerId);
      if (option) {
        option.resistanceTypes.forEach(type => {
          scores[type] = (scores[type] || 0) + 1;
        });
      }
    }
  });

  let maxScore = 0;
  let dominantType = "inertia";

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      dominantType = type;
    }
  });

  return dominantType;
}
