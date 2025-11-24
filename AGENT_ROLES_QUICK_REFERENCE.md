# Agent Roles - Quick Reference Card

## 🎯 When to Use Which Agent

### **Development Agent** 👨‍💻
**Use for**: Building features, writing code, fixing bugs
**Prompt start**: "Create...", "Build...", "Implement..."

**Example:**
```
Create a workout screen with exercise list, set tracking, and rest timer.
```

---

### **Product Owner Agent** 🎨
**Use for**: UX reviews, usability assessment, user flow analysis
**Prompt start**: "Act as a Product Owner...", "Review UX of..."

**Example:**
```
Act as a Product Owner. Review this onboarding flow. Is it user-friendly? 
Would users understand it? What UX improvements would you suggest?
```

**When to use:**
- After building a feature
- Before major releases
- When something feels "off"
- For complete app audits

---

### **Business Product Agent** 💼
**Use for**: Market analysis, competitive research, feature gaps, monetization
**Prompt start**: "Act as a Business Product Analyst...", "Compare to competitors..."

**Example:**
```
Act as a Business Product Analyst. Review our feature list and identify:
1. Business gaps compared to competitors
2. Missing features that would increase retention
3. Monetization opportunities
```

**When to use:**
- Feature planning
- Competitive analysis
- Before major releases
- When thinking about monetization

---

### **Testing Agent** 🧪
**Use for**: Writing tests, finding edge cases, quality assurance
**Prompt start**: "Act as a QA Testing Specialist...", "Write tests for..."

**Example:**
```
Act as a QA Testing Specialist. Write comprehensive tests for the workout screen.
Include unit tests and integration tests.
```

**When to use:**
- After features are complete
- Before releases
- When fixing bugs

---

### **Performance Agent** ⚡
**Use for**: Profiling, optimization, identifying bottlenecks
**Prompt start**: "Profile and optimize...", "Why is this slow?"

**Example:**
```
Profile the workout screen and identify performance bottlenecks. 
Optimize for 60fps scrolling.
```

**When to use:**
- When app feels slow
- Before releases
- After adding complex features

---

### **Documentation Agent** 📚
**Use for**: Code documentation, user guides, API docs
**Prompt start**: "Document...", "Create documentation for..."

**Example:**
```
Document the workout screen feature. Include user guide and code comments.
```

**When to use:**
- After features are complete
- For onboarding new developers
- For user-facing features

---

### **Security Agent** 🔒
**Use for**: Security reviews, vulnerability assessment
**Prompt start**: "Review security of...", "Are there security issues with..."

**Example:**
```
Review security of user data storage. Are we handling sensitive data correctly?
```

**When to use:**
- Before handling user data
- Before releases
- When adding authentication

---

## 🔄 Common Workflows

### **Feature Development**
```
1. Development Agent → Build feature
2. Product Owner Agent → Review UX
3. Business Product Agent → Check market fit
4. Development Agent → Refine
5. Testing Agent → Write tests
6. Documentation Agent → Document
```

### **Feature Planning**
```
1. Business Product Agent → Suggest features
2. Product Owner Agent → Assess UX value
3. Development Agent → Build highest priority
```

### **Pre-Release**
```
1. Product Owner Agent → Full UX audit
2. Business Product Agent → Competitive check
3. Testing Agent → Comprehensive tests
4. Performance Agent → Optimization
5. Security Agent → Security review
```

---

## 💡 Quick Tips

✅ **Do:**
- Use one agent role per prompt
- Provide full context
- Iterate based on feedback
- Use agents sequentially

❌ **Don't:**
- Ask multiple roles in one prompt
- Skip reviews
- Ignore agent feedback
- Rush through agent checkpoints

---

## 📋 Agent Role Checklist

After building a feature, use this checklist:

- [ ] **Product Owner Agent**: UX review
- [ ] **Business Product Agent**: Market fit check
- [ ] **Testing Agent**: Write tests
- [ ] **Performance Agent**: Optimize (if needed)
- [ ] **Documentation Agent**: Document feature

---

## 🎯 Your Specific Use Cases

### **Product Owner Agent for Your App**
Use to assess:
- Is onboarding too long?
- Are workout screens easy to use during gym?
- Is algorithm helpful or annoying?
- Can users find features easily?

### **Business Product Agent for Your App**
Use to identify:
- Missing features vs Strong/Jefit/MyFitnessPal
- Monetization opportunities
- Retention drivers
- User acquisition features

---

**Save this file for quick reference!** 📌

