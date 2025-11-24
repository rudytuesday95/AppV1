# Agent Roles & Workflows - Optimization Guide

## 🎯 Overview

You can use agents in specialized roles to maximize efficiency and quality. This guide shows you how to set up different agent "personas" for different aspects of your project.

---

## 👥 Specialized Agent Roles

### **1. Development Agent** (Primary Coder)
**Role**: Implements features, writes code, fixes bugs
**When to use**: Building features, refactoring, debugging

### **2. Testing Agent** (QA Specialist)
**Role**: Writes tests, finds edge cases, validates functionality
**When to use**: After features are built, before deployment

### **3. Documentation Agent** (Technical Writer)
**Role**: Documents code, creates user guides, writes API docs
**When to use**: After features are complete, for onboarding

### **4. Product Owner Agent** (UX/Usability Expert)
**Role**: Assesses user experience, identifies UX issues, suggests improvements
**When to use**: During design, after features, for user flow reviews

### **5. Business Product Agent** (Business Analyst)
**Role**: Identifies business gaps, suggests monetization, analyzes market fit
**When to use**: Feature planning, competitive analysis, business strategy

### **6. Performance Agent** (Optimization Specialist)
**Role**: Profiles performance, identifies bottlenecks, optimizes code
**When to use**: When app feels slow, before release

### **7. Security Agent** (Security Auditor)
**Role**: Reviews security, identifies vulnerabilities, suggests fixes
**When to use**: Before handling sensitive data, before release

---

## 🎭 How to Use Specialized Agents

### **Method 1: Explicit Role Assignment in Prompts**

Simply tell the agent what role to take:

```
"Act as a Product Owner and review this workout screen design. 
Assess: Is it user-friendly? Would users understand how to use it? 
What UX improvements would you suggest?"
```

```
"Act as a Business Product Analyst. Review our feature list and identify:
1. Business gaps compared to competitors
2. Missing features that would increase user retention
3. Monetization opportunities we're missing"
```

### **Method 2: Create Role Templates**

Save these prompts as templates to reuse:

---

## 📋 Agent Role Templates

### **Product Owner Agent Template**

```
You are a Product Owner for a fitness/workout tracking app. Your role is to:

1. **User Experience Assessment**:
   - Is the feature intuitive?
   - Would a first-time user understand it?
   - Are there any friction points?
   - Is the flow logical?

2. **User Value**:
   - Does this solve a real user problem?
   - Is it better than alternatives?
   - Would users actually use this?

3. **Usability Issues**:
   - Identify confusing elements
   - Suggest clearer labels/instructions
   - Recommend UX improvements

4. **Accessibility**:
   - Is it accessible to all users?
   - Are there any barriers?

Review the following [feature/screen/code] and provide your assessment:
[PASTE YOUR CODE/DESIGN HERE]
```

### **Business Product Agent Template**

```
You are a Business Product Analyst specializing in fitness/health apps. Your role is to:

1. **Market Analysis**:
   - How does this compare to competitors (Strong, Jefit, MyFitnessPal)?
   - What features do competitors have that we're missing?
   - What's our unique value proposition?

2. **Business Gaps**:
   - Missing features that would increase retention
   - Features that would drive user engagement
   - Monetization opportunities (freemium, subscriptions, etc.)

3. **User Acquisition**:
   - What features would attract new users?
   - What would make users switch from competitors?
   - Social/viral features?

4. **Retention & Engagement**:
   - What keeps users coming back?
   - Gamification opportunities?
   - Community features?

5. **Revenue Opportunities**:
   - Premium features worth paying for?
   - Subscription tiers?
   - Partnerships (gyms, trainers, equipment)?

Review our current feature set and provide business recommendations:
[PASTE FEATURE LIST OR DESCRIBE APP]
```

### **Testing Agent Template**

```
You are a QA Testing Specialist. Your role is to:

1. **Test Coverage**:
   - What test cases are needed?
   - What edge cases should be tested?
   - What integration tests are required?

2. **Bug Detection**:
   - Review code for potential bugs
   - Identify error handling gaps
   - Check for null/undefined issues

3. **Test Implementation**:
   - Write unit tests
   - Write integration tests
   - Create test data

Review this code and provide tests:
[PASTE CODE HERE]
```

### **Documentation Agent Template**

```
You are a Technical Documentation Specialist. Your role is to:

1. **Code Documentation**:
   - Add JSDoc comments
   - Explain complex logic
   - Document function parameters/returns

2. **User Documentation**:
   - Create user guides
   - Write feature explanations
   - Create onboarding materials

3. **API Documentation**:
   - Document services/functions
   - Create usage examples
   - Explain data models

Document the following:
[PASTE CODE/FEATURE HERE]
```

---

## 🔄 Recommended Workflows

### **Workflow 1: Feature Development Cycle**

```
1. Development Agent: "Build the workout screen with these features..."
   → Agent creates the feature

2. Product Owner Agent: "Review this workout screen for UX/usability..."
   → Agent provides UX feedback

3. Development Agent: "Implement these UX improvements..."
   → Agent refines the feature

4. Testing Agent: "Write tests for the workout screen..."
   → Agent creates test suite

5. Performance Agent: "Profile and optimize the workout screen..."
   → Agent optimizes performance

6. Documentation Agent: "Document the workout screen feature..."
   → Agent creates documentation
```

### **Workflow 2: Feature Planning**

```
1. Business Product Agent: "What features should we prioritize for a workout tracker?"
   → Agent suggests features with business justification

2. Product Owner Agent: "Review these feature ideas for user value..."
   → Agent assesses UX/usability of suggested features

3. Development Agent: "Build the highest priority feature..."
   → Agent implements
```

### **Workflow 3: Pre-Release Review**

```
1. Product Owner Agent: "Review the entire app flow for UX issues..."
   → Agent provides comprehensive UX audit

2. Business Product Agent: "Identify any missing features before launch..."
   → Agent suggests critical features

3. Testing Agent: "Create comprehensive test suite..."
   → Agent ensures quality

4. Performance Agent: "Profile the entire app..."
   → Agent optimizes performance

5. Security Agent: "Review security of user data handling..."
   → Agent ensures security
```

---

## 💡 Practical Examples

### **Example 1: Using Product Owner Agent**

**You**: 
```
Act as a Product Owner. I just built an onboarding flow that asks users 
about their experience level, goals, equipment, and injuries. 

Review this flow and assess:
1. Is it too long? Will users drop off?
2. Are the questions clear?
3. Is the order logical?
4. What UX improvements would you suggest?

Here's the flow:
- Screen 1: Welcome
- Screen 2: Experience level (Beginner/Intermediate/Advanced/Expert)
- Screen 3: Goals (multi-select: Strength, Hypertrophy, etc.)
- Screen 4: Equipment (multi-select chips)
- Screen 5: Injuries (text input + body diagram)
- Screen 6: Preferences (like/dislike exercises)
```

**Agent Response**: 
- "The flow is 6 screens which might cause drop-off. Consider combining screens 2-3..."
- "The injuries screen needs better UX - text input is too vague..."
- "Add progress indicator so users know how many steps remain..."
- etc.

### **Example 2: Using Business Product Agent**

**You**:
```
Act as a Business Product Analyst. Our workout tracker app has:
- Exercise tracking
- Weight/rep suggestions
- Workout plans (beginner-expert)
- User profiles (experience, goals, equipment, injuries)
- Exercise photos/videos

Compare us to competitors (Strong, Jefit, MyFitnessPal) and identify:
1. Critical features we're missing
2. Business gaps that would hurt retention
3. Monetization opportunities
4. Features that would drive user acquisition
```

**Agent Response**:
- "Missing: Social features (share workouts, compete with friends)..."
- "Missing: Progress photos (before/after)..."
- "Monetization: Premium plans with advanced analytics..."
- "Retention: Streak tracking, achievements, challenges..."
- etc.

### **Example 3: Multi-Agent Workflow**

**Step 1 - Development**:
```
Create a workout plan selection screen that shows plans by level 
(Beginner/Intermediate/Advanced/Expert) with cards for each plan.
```

**Step 2 - Product Owner Review**:
```
Act as Product Owner. Review this plan selection screen. Is it clear 
which plan to choose? Would users understand the differences? 
Suggest UX improvements.
```

**Step 3 - Business Review**:
```
Act as Business Analyst. Review this plan selection feature. 
Are we missing any plan types that competitors offer? 
Should we have a "recommended for you" section?
```

**Step 4 - Refinement**:
```
Based on the feedback, improve the plan selection screen:
- Add "Recommended for you" section
- Add plan comparison view
- Improve plan descriptions
```

---

## 🎯 Best Practices

### **1. Use Agents Sequentially**
- Don't ask multiple roles in one prompt
- Let each agent do their specialized job
- Build on previous agent's work

### **2. Provide Context**
- Always give agents the full context
- Paste code/designs when asking for reviews
- Reference previous decisions

### **3. Iterate Based on Feedback**
- Take agent feedback seriously
- Ask for clarification if needed
- Implement improvements, then re-review

### **4. Combine Agent Insights**
- Product Owner says "UX issue"
- Business Agent says "Missing feature"
- Development Agent implements both

### **5. Regular Reviews**
- Weekly Product Owner review of new features
- Monthly Business Agent competitive analysis
- Continuous Testing Agent coverage

---

## 📊 Agent Role Decision Tree

```
Need to build something?
  → Development Agent

Feature is built, need to test?
  → Testing Agent

Feature is complete, need docs?
  → Documentation Agent

Want to know if it's user-friendly?
  → Product Owner Agent

Want business/market insights?
  → Business Product Agent

App feels slow?
  → Performance Agent

Handling sensitive data?
  → Security Agent
```

---

## 🚀 Quick Start: Setting Up Your Workflow

### **Step 1: Create a Prompt Library**

Save these templates in a file (like `agent-prompts.md`):
- Product Owner review template
- Business Analyst template
- Testing template
- etc.

### **Step 2: Establish Review Checkpoints**

**After each feature:**
1. Development Agent builds it
2. Product Owner reviews UX
3. Testing Agent writes tests
4. Performance Agent optimizes (if needed)

**Before major releases:**
1. Full Product Owner audit
2. Business Product competitive analysis
3. Comprehensive testing
4. Performance profiling
5. Security review

### **Step 3: Create Review Checklists**

**Product Owner Checklist:**
- [ ] Is it intuitive?
- [ ] Would first-time users understand?
- [ ] Are there friction points?
- [ ] Is the flow logical?
- [ ] Are error states handled?

**Business Product Checklist:**
- [ ] How does it compare to competitors?
- [ ] What features are we missing?
- [ ] Monetization opportunities?
- [ ] Retention drivers?
- [ ] Acquisition drivers?

---

## 💬 Example Conversations

### **Full Feature Development Cycle**

```
You: "Create a workout history screen that shows past workouts in a timeline"

[Development Agent creates the screen]

You: "Act as Product Owner. Review this workout history screen for UX. 
Is it easy to see progress? Can users find specific workouts? 
What improvements would you suggest?"

[Product Owner provides feedback]

You: "Implement these UX improvements: add search, add filters, 
improve date grouping"

[Development Agent refines]

You: "Act as Business Analyst. Does this history feature compare 
well to competitors? What's missing?"

[Business Agent suggests: progress charts, PR tracking, etc.]

You: "Add progress charts and PR tracking to the history screen"

[Development Agent adds features]

You: "Write comprehensive tests for the history screen"

[Testing Agent creates tests]

You: "Document the history screen feature"

[Documentation Agent creates docs]
```

---

## 🎓 Advanced: Agent Collaboration

You can even have agents "collaborate":

```
You: "I have two agent reviews:
1. Product Owner says: 'Add progress visualization'
2. Business Analyst says: 'Add social sharing'

Act as Development Agent. Implement both features in a way that 
makes sense together. Consider how progress visualization and 
social sharing could work together."
```

---

## 📝 Summary

**Yes, you can absolutely use agents as:**
- ✅ Product Owner (UX/usability assessment)
- ✅ Business Analyst (market gaps, monetization)
- ✅ And any other specialized role!

**Key is:**
1. Explicitly assign the role in your prompt
2. Use templates for consistency
3. Work sequentially (one role at a time)
4. Iterate based on feedback
5. Combine insights from multiple agents

**This approach gives you:**
- Better UX (Product Owner perspective)
- Better business strategy (Business Analyst perspective)
- Higher quality code (Testing Agent)
- Better performance (Performance Agent)
- Complete documentation (Documentation Agent)

Ready to try it? Start with: "Act as a Product Owner and review [your feature]..."

