# Agent Workflow Examples - Practical Guide

## 🎯 Real-World Examples for Your Workout Tracker

This document shows exactly how to use specialized agents at each stage of your project.

---

## 📱 Example 1: Building the Onboarding Flow

### **Step 1: Development Agent - Build the Feature**

**Your Prompt:**
```
Create an onboarding flow for the workout tracker app with these screens:
1. Welcome screen
2. Experience level selection (Beginner/Intermediate/Advanced/Expert)
3. Goals selection (multi-select: Strength, Hypertrophy, Endurance, etc.)
4. Equipment selection (multi-select chips)
5. Injuries input (with body diagram)
6. Preferences (like/dislike exercises)

Use React Native with Expo, React Navigation for routing, and Zustand for state.
Make it smooth and modern.
```

**Agent creates the onboarding flow**

---

### **Step 2: Product Owner Agent - UX Review**

**Your Prompt:**
```
Act as a Product Owner for a fitness app. Review this onboarding flow:

Screens:
1. Welcome
2. Experience level
3. Goals
4. Equipment
5. Injuries
6. Preferences

Assess:
- Is 6 screens too many? Will users drop off?
- Are the questions clear and easy to understand?
- Is the order logical?
- Are there any friction points?
- Would a first-time user know what to do?
- What UX improvements would you suggest?

Provide specific, actionable feedback.
```

**Expected Agent Response:**
```
UX Assessment:

ISSUES:
1. 6 screens is too many - high drop-off risk
2. Injuries screen needs better UX (text input is vague)
3. No progress indicator (users don't know how many steps)
4. Preferences screen might be confusing (users don't know exercises yet)

IMPROVEMENTS:
1. Combine screens 2-3 (Experience + Goals) - they're related
2. Add progress bar showing "Step 2 of 5"
3. Replace injuries text input with visual body diagram with tap-to-select
4. Move preferences to later (after they've used the app)
5. Add "Skip for now" option on non-critical screens
6. Add helpful tooltips explaining why we ask each question

RECOMMENDED FLOW:
1. Welcome (with value proposition)
2. Experience + Goals (combined)
3. Equipment
4. Injuries (visual selector)
5. Done (preferences can be set later in profile)
```

---

### **Step 3: Business Product Agent - Market Analysis**

**Your Prompt:**
```
Act as a Business Product Analyst. Our onboarding collects:
- Experience level
- Goals
- Equipment
- Injuries
- Preferences

Compare this to competitors (Strong, Jefit, MyFitnessPal, Fitbod):
1. Are we asking the right questions?
2. What do competitors ask that we don't?
3. What would increase conversion (completing onboarding)?
4. Are we missing data that would improve personalization?
5. Should we have a "quick start" option for users who want to skip setup?
```

**Expected Agent Response:**
```
Business Analysis:

COMPETITOR COMPARISON:
- Strong: Minimal onboarding (just start tracking)
- Jefit: Asks goals, experience, body stats (height/weight)
- MyFitnessPal: Asks goals, activity level, body stats
- Fitbod: Extensive onboarding (goals, experience, equipment, body stats, schedule)

GAPS:
1. Missing body stats (height/weight) - useful for calorie tracking, BMI
2. Missing schedule (when do you workout?) - helps with plan recommendations
3. No "quick start" option - some users want to start immediately

OPPORTUNITIES:
1. Add "Quick Start" option that skips to basic tracking
2. Collect body stats (optional) for future features (nutrition, body comp)
3. Ask workout schedule for better plan recommendations
4. A/B test shorter vs longer onboarding

CONVERSION OPTIMIZATION:
- Show value proposition early ("Get personalized workouts")
- Make it skippable (reduce friction)
- Show progress (users complete more when they see progress)
```

---

### **Step 4: Development Agent - Implement Improvements**

**Your Prompt:**
```
Based on Product Owner and Business Analyst feedback, improve the onboarding:

1. Combine experience + goals into one screen
2. Add progress indicator ("Step 2 of 4")
3. Replace injuries text input with visual body diagram (tap body parts)
4. Add "Quick Start" option on welcome screen (skips to basic tracking)
5. Add optional body stats screen (height/weight) - can skip
6. Add workout schedule question (when do you typically workout?)
7. Add helpful tooltips explaining why we ask each question
8. Make all non-critical screens skippable

Implement these improvements.
```

**Agent refines the onboarding flow**

---

### **Step 5: Product Owner Agent - Re-Review**

**Your Prompt:**
```
Act as Product Owner. I've updated the onboarding based on your feedback. 
Review the new flow:

1. Welcome (with Quick Start option)
2. Experience + Goals (combined)
3. Equipment
4. Body Stats (optional, skippable)
5. Workout Schedule
6. Injuries (visual body diagram)
7. Done

Is this better? Any remaining UX issues?
```

**Agent confirms improvements or suggests final tweaks**

---

## 🏋️ Example 2: Building the Workout Screen

### **Step 1: Development Agent - Build Feature**

**Your Prompt:**
```
Create the active workout screen where users track their exercises. 
It should show:
- List of exercises in the workout
- For each exercise: sets completed, weight, reps
- Input fields to log weight and reps for each set
- Rest timer between sets
- Algorithm-suggested weight/rep for next set
- Exercise thumbnail images

Make it smooth and fast. Use FlatList for the exercise list.
```

**Agent creates the workout screen**

---

### **Step 2: Product Owner Agent - UX Review**

**Your Prompt:**
```
Act as Product Owner. Review this workout screen design:

Features:
- Exercise list with thumbnails
- Set tracking (weight/reps input)
- Rest timer
- Algorithm suggestions
- Progress indicators

Assess:
- Is it easy to log a set quickly during a workout?
- Can users see their progress clearly?
- Is the rest timer visible but not intrusive?
- Are algorithm suggestions helpful or annoying?
- What would make this screen better for actual gym use?
- Consider: users are sweaty, phone might be on floor, need speed
```

**Expected Agent Response:**
```
UX Assessment:

ISSUES:
1. Input fields might be too small for sweaty fingers
2. Rest timer should be more prominent (users forget to start it)
3. Algorithm suggestions might be distracting during workout
4. No way to quickly adjust if user can't complete suggested weight
5. Exercise thumbnails might not be enough - need quick access to form video

IMPROVEMENTS:
1. Larger tap targets for weight/rep inputs (minimum 44x44pt)
2. Make rest timer more prominent (maybe floating button or banner)
3. Make algorithm suggestions dismissible or collapsible
4. Add "Couldn't complete" button to quickly log failure
5. Add quick access to exercise demo (tap thumbnail for video)
6. Add haptic feedback on set completion (satisfying!)
7. Consider voice input for hands-free logging
8. Add "Superset" mode for advanced users
```

---

### **Step 3: Business Product Agent - Feature Gaps**

**Your Prompt:**
```
Act as Business Analyst. Our workout screen has:
- Exercise tracking
- Set logging
- Rest timer
- Algorithm suggestions

Compare to competitors:
- Strong: Has all above + RPE tracking, notes, exercise history
- Jefit: Has all above + rest timer sounds, plate calculator
- Fitbod: Has all above + form check reminders, rest suggestions

What features are we missing that would:
1. Increase user engagement?
2. Differentiate us from competitors?
3. Increase retention (make users come back)?
```

**Expected Agent Response:**
```
Business Analysis:

MISSING FEATURES:
1. RPE (Rate of Perceived Exertion) tracking - advanced users love this
2. Notes field - users want to remember how set felt
3. Plate calculator - helps with weight selection
4. Exercise history (last 3 workouts) - quick reference
5. Form reminders - adds value beyond tracking
6. Workout notes (overall) - "felt strong today" etc.

DIFFERENTIATION OPPORTUNITIES:
1. AI form analysis (future) - use phone camera
2. Smart rest suggestions based on heart rate (if available)
3. Social sharing of PRs
4. Workout streaks/gamification

RETENTION DRIVERS:
1. Progress visualization during workout (motivational)
2. PR notifications ("New PR on bench press!")
3. Workout completion celebration
4. Weekly/monthly progress summaries
```

---

### **Step 4: Development Agent - Add Key Features**

**Your Prompt:**
```
Based on feedback, add these features to the workout screen:

1. RPE input (1-10 scale) for each set
2. Notes field for each exercise (collapsible)
3. Plate calculator button (shows what plates to load)
4. Exercise history quick view (tap to see last 3 workouts)
5. Larger tap targets (minimum 44x44pt)
6. Haptic feedback on set completion
7. Quick access to exercise video (tap thumbnail)
8. PR celebration animation when user hits new PR

Prioritize performance - this screen needs to be fast!
```

**Agent adds features**

---

### **Step 5: Testing Agent - Create Tests**

**Your Prompt:**
```
Act as QA Testing Specialist. Write comprehensive tests for the workout screen:

Test cases needed:
- Set logging (weight, reps, RPE)
- Rest timer functionality
- Algorithm suggestions
- PR detection
- Exercise history
- Plate calculator
- Error handling (invalid inputs, etc.)

Create unit tests and integration tests.
```

**Agent creates test suite**

---

## 📊 Example 3: Competitive Analysis Workflow

### **Business Product Agent - Full Competitive Analysis**

**Your Prompt:**
```
Act as Business Product Analyst. Conduct a comprehensive competitive analysis 
for our workout tracker app.

Our current features:
- Exercise tracking
- Weight/rep suggestions (algorithm-based)
- Workout plans (beginner-expert)
- User profiles (experience, goals, equipment, injuries)
- Exercise media (photos/videos)
- Progress tracking

Competitors to analyze:
1. Strong (iOS/Android)
2. Jefit (iOS/Android)
3. MyFitnessPal (iOS/Android)
4. Fitbod (iOS/Android)
5. Hevy (iOS/Android)

For each competitor, identify:
- Key features we're missing
- Features they have that we should consider
- Their monetization strategy
- What makes them successful
- Our competitive advantages
- Our weaknesses vs them

Then provide:
1. Top 5 features we MUST add to compete
2. Top 5 features that would differentiate us
3. Monetization opportunities we're missing
4. User acquisition strategies they use that we should consider
```

**Agent provides comprehensive competitive analysis**

---

## 🎨 Example 4: Design Review Workflow

### **Product Owner Agent - Full App UX Audit**

**Your Prompt:**
```
Act as Product Owner. Conduct a comprehensive UX audit of our workout tracker app.

Review the entire user journey:

1. First Launch → Onboarding
2. Onboarding → Home Screen
3. Home Screen → Starting a Workout
4. During Workout → Logging Sets
5. Workout Complete → Viewing Results
6. Home Screen → Viewing History
7. Home Screen → Selecting Workout Plan
8. Profile → Editing Settings

For each step, assess:
- Is it intuitive?
- Are there friction points?
- Would users understand what to do?
- Is the flow logical?
- Are error states handled?
- Is it accessible?

Provide:
1. Critical UX issues (must fix)
2. Important UX improvements (should fix)
3. Nice-to-have UX enhancements
4. Overall UX score (1-10) with justification
```

**Agent provides comprehensive UX audit**

---

## 🔄 Complete Feature Development Cycle

### **Full Example: Adding "Workout Plans" Feature**

```
┌─────────────────────────────────────────────────────────┐
│ STEP 1: Business Product Agent - Feature Planning       │
└─────────────────────────────────────────────────────────┘
You: "Act as Business Analyst. Should we have workout plans? 
What types? How should they work?"

Agent: "Yes, essential feature. Recommend: Beginner/Intermediate/
Advanced/Expert levels, 4-12 week programs, progressive overload..."

┌─────────────────────────────────────────────────────────┐
│ STEP 2: Product Owner Agent - UX Design                 │
└─────────────────────────────────────────────────────────┘
You: "Act as Product Owner. Design the UX for workout plans. 
How should users discover, select, and follow plans?"

Agent: "Recommend: Browse by level, preview workouts, 
'Recommended for you' section, progress tracking..."

┌─────────────────────────────────────────────────────────┐
│ STEP 3: Development Agent - Build Feature               │
└─────────────────────────────────────────────────────────┘
You: "Build the workout plans feature based on the design..."

Agent: [Creates the feature]

┌─────────────────────────────────────────────────────────┐
│ STEP 4: Product Owner Agent - UX Review                 │
└─────────────────────────────────────────────────────────┘
You: "Act as Product Owner. Review the workout plans feature 
for UX issues..."

Agent: [Provides UX feedback]

┌─────────────────────────────────────────────────────────┐
│ STEP 5: Business Product Agent - Competitive Check       │
└─────────────────────────────────────────────────────────┘
You: "Act as Business Analyst. Does our plans feature 
compare well to competitors?"

Agent: [Identifies gaps]

┌─────────────────────────────────────────────────────────┐
│ STEP 6: Development Agent - Refine                      │
└─────────────────────────────────────────────────────────┘
You: "Implement the UX improvements and missing features..."

Agent: [Refines the feature]

┌─────────────────────────────────────────────────────────┐
│ STEP 7: Testing Agent - Quality Assurance               │
└─────────────────────────────────────────────────────────┘
You: "Act as QA. Write tests for workout plans..."

Agent: [Creates tests]

┌─────────────────────────────────────────────────────────┐
│ STEP 8: Performance Agent - Optimization                │
└─────────────────────────────────────────────────────────┘
You: "Act as Performance Specialist. Profile and optimize 
the plans feature..."

Agent: [Optimizes performance]

┌─────────────────────────────────────────────────────────┐
│ STEP 9: Documentation Agent - Documentation             │
└─────────────────────────────────────────────────────────┘
You: "Act as Technical Writer. Document the plans feature..."

Agent: [Creates documentation]
```

---

## 💡 Pro Tips

### **1. Use Agent Roles at the Right Time**

- **Planning Phase**: Business Product Agent + Product Owner Agent
- **Development Phase**: Development Agent
- **Review Phase**: Product Owner Agent + Business Product Agent
- **Quality Phase**: Testing Agent + Performance Agent
- **Completion Phase**: Documentation Agent

### **2. Don't Skip Reviews**

Even if a feature "works," always get:
- Product Owner review (UX)
- Business Product review (market fit)

### **3. Combine Agent Insights**

When multiple agents suggest improvements:
- Prioritize critical issues first
- Group related improvements
- Implement in logical order

### **4. Re-Review After Changes**

After implementing agent feedback:
- Re-review with the same agent
- Confirm improvements
- Catch any new issues

### **5. Build a Feedback Loop**

```
Build → Review → Improve → Re-Review → Deploy
  ↑                                        ↓
  └────────────────────────────────────────┘
```

---

## 🚀 Quick Reference: When to Use Which Agent

| Task | Agent | Example Prompt Start |
|------|-------|---------------------|
| Build feature | Development | "Create a..." |
| UX review | Product Owner | "Act as Product Owner. Review..." |
| Market analysis | Business Product | "Act as Business Analyst. Compare..." |
| Write tests | Testing | "Act as QA. Write tests for..." |
| Optimize performance | Performance | "Profile and optimize..." |
| Document code | Documentation | "Document this feature..." |
| Security review | Security | "Review security of..." |

---

**Ready to use these workflows?** Start with any feature and follow the cycle!

