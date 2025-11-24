# 🤖 Agent Mode Quick Reference Guide

## How to Get the Most Out of Agent Mode

### ✅ **DO: Effective Prompts**

**1. Start with Context**
```
"I'm building a workout tracker. I need a screen that shows the current workout 
with exercises, sets, and reps. The data comes from Zustand store."
```

**2. Be Specific About Requirements**
```
"Create a FlatList component that displays exercises. Each item should show:
- Exercise name
- Sets completed (e.g., '3/5')
- Last weight used
- Suggested next weight (from algorithm)
Make it smooth at 60fps."
```

**3. Request Optimization**
```
"This component is laggy when scrolling. Profile it and optimize for performance."
```

**4. Ask for Alternatives**
```
"Show me 3 different ways to implement the weight suggestion algorithm, 
with pros/cons of each."
```

**5. Request Explanations**
```
"Explain why using React.memo here improves performance. When should I use it?"
```

**6. Iterate and Refine**
```
"Good, but make the animations smoother. Use React Native Reanimated instead."
```

---

### ❌ **DON'T: Ineffective Prompts**

**1. Too Vague**
```
❌ "Make a workout app"
✅ "Create a workout tracking screen with exercise list and set counter"
```

**2. No Context**
```
❌ "Fix this bug"
✅ "The weight input field crashes when I type a decimal. Here's the error: [error]"
```

**3. Too Many Things at Once**
```
❌ "Create the entire app with all features"
✅ "Create the workout screen first, then we'll add the history screen next"
```

---

## 🎯 Agent Mode Workflow

### **Step 1: Planning Phase**
You: "I need to build [feature]. What's the best approach?"
Agent: Provides options with trade-offs
You: Choose approach

### **Step 2: Implementation Phase**
You: "Implement [chosen approach] with [specific requirements]"
Agent: Generates code
You: Review and test

### **Step 3: Refinement Phase**
You: "This works but [issue]. Optimize it."
Agent: Fixes and optimizes
You: Test again

### **Step 4: Integration Phase**
You: "Now integrate this with [other component/feature]"
Agent: Connects pieces together
You: Test integration

---

## 💡 Pro Tips

### **1. Use Agent for Repetitive Tasks**
- ✅ Generating similar components
- ✅ Creating test cases
- ✅ Writing documentation
- ✅ Setting up configuration files

### **2. Use Agent for Research**
- ✅ "What's the best library for [X] in React Native?"
- ✅ "How do I implement [algorithm] efficiently?"
- ✅ "What are common performance pitfalls in React Native?"

### **3. Use Agent for Debugging**
- ✅ Paste error messages
- ✅ Describe unexpected behavior
- ✅ Ask "Why is this slow?"

### **4. Use Agent for Code Quality**
- ✅ "Refactor this to be more performant"
- ✅ "Add error handling to this function"
- ✅ "Make this code more maintainable"

### **5. Use Agent for Learning**
- ✅ "Explain how this works"
- ✅ "What's the difference between X and Y?"
- ✅ "Show me best practices for [topic]"

---

## 🔄 Iterative Development Pattern

```
1. You: "I need [feature]"
   Agent: Creates initial version
   
2. You: "Test it" (or agent tests)
   Result: Works but has issues
   
3. You: "Fix [specific issue]"
   Agent: Fixes issue
   
4. You: "Make it faster/smoother"
   Agent: Optimizes
   
5. You: "Add [additional feature]"
   Agent: Extends functionality
   
6. Repeat until perfect!
```

---

## 📋 Common Agent Tasks for This Project

### **Setup & Configuration**
- "Set up React Native project with TypeScript"
- "Configure navigation with React Navigation"
- "Set up Zustand for state management"
- "Add ESLint and Prettier configuration"

### **Components**
- "Create a reusable Button component with loading state"
- "Build an ExerciseCard component that displays exercise info"
- "Make a SetTracker component for tracking sets/reps/weight"
- "Create a smooth animated progress bar"

### **Screens**
- "Create the Workout screen with exercise list"
- "Build the History screen with workout timeline"
- "Make the Exercise Selection screen with search"

### **Algorithms**
- "Implement 1RM calculation from reps and weight"
- "Create progressive overload suggestion algorithm"
- "Build volume/intensity recommendation system"
- "Add RPE-based weight suggestions"

### **Performance**
- "Optimize this FlatList for smooth scrolling"
- "Reduce re-renders in this component"
- "Profile and optimize the workout screen"
- "Make animations run at 60fps"

### **Testing**
- "Write unit tests for the exercise algorithm"
- "Create integration tests for workout flow"
- "Add tests for edge cases in weight calculations"

---

## 🎨 Design & UI Requests

### **Effective UI Prompts**
- "Create a modern, clean workout screen with smooth animations"
- "Design a card-based layout for exercises with subtle shadows"
- "Make the weight input feel responsive with haptic feedback"
- "Add skeleton loading states for better perceived performance"

### **Performance-Focused UI**
- "Use React Native Reanimated for all animations"
- "Implement optimistic UI updates for instant feedback"
- "Add proper image optimization and lazy loading"
- "Create smooth page transitions between screens"

---

## 🐛 Debugging with Agent

### **When Something Breaks**
1. **Describe the problem:**
   "The app crashes when I tap the exercise card"

2. **Provide context:**
   "Here's the component code: [paste code]"
   "Error message: [paste error]"

3. **Ask for fix:**
   "Fix this crash and explain what caused it"

### **When Something is Slow**
1. **Identify the issue:**
   "The workout screen is laggy when scrolling"

2. **Request profiling:**
   "Profile this screen and identify performance bottlenecks"

3. **Request optimization:**
   "Optimize the identified bottlenecks"

---

## 📚 Learning with Agent

### **Understand Code**
- "Explain how this algorithm works step by step"
- "What does this React Native optimization do?"
- "Why is this approach better than [alternative]?"

### **Best Practices**
- "What are React Native performance best practices?"
- "How should I structure state management for this app?"
- "What's the recommended way to handle animations?"

---

## 🚀 Ready to Start?

**Begin with:**
1. "Let's start Phase 1 - set up the project foundation"
2. "Create the project structure for React Native with Expo"
3. "Set up navigation and state management"

**Then iterate:**
- Build one feature at a time
- Test as you go
- Optimize for performance
- Refine the UI
- Repeat!

---

## 💬 Example Conversation Flow

```
You: "I want to create a workout tracker app"
Agent: [Provides game plan]

You: "Let's start Phase 1"
Agent: [Sets up entire project structure]

You: "Now create the workout screen"
Agent: [Creates workout screen with basic layout]

You: "Add the exercise list with FlatList"
Agent: [Adds optimized FlatList with exercises]

You: "Make it smoother, it's lagging"
Agent: [Optimizes with React.memo, useMemo, etc.]

You: "Perfect! Now add the set tracker component"
Agent: [Creates set tracker component]

You: "Integrate it with the workout screen"
Agent: [Connects components together]

[Continue iterating...]
```

---

**Remember:** Agent mode is most powerful when you:
- ✅ Provide clear context
- ✅ Break tasks into manageable pieces
- ✅ Iterate and refine
- ✅ Ask for explanations to learn
- ✅ Focus on one thing at a time

