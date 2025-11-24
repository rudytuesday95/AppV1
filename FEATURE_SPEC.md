# Feature Specifications

## 📋 User Profile System

### **Profile Data Model**

```typescript
UserProfile {
  // Experience & Level
  yearsOfExperience: number (0-50)
  experienceLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  
  // Goals (multi-select)
  goals: Array<'strength' | 'hypertrophy' | 'endurance' | 'weight_loss' | 'general_fitness' | 'athletic_performance'>
  
  // Preferences
  likedExercises: string[] (exercise IDs)
  dislikedExercises: string[] (exercise IDs)
  
  // Limitations
  injuries: Array<{
    bodyPart: string (e.g., 'knee', 'shoulder', 'lower_back')
    severity: 'mild' | 'moderate' | 'severe'
    notes?: string
  }>
  
  // Equipment
  availableEquipment: Array<
    'barbell' | 'dumbbells' | 'kettlebell' | 
    'resistance_bands' | 'cable_machine' | 'smith_machine' |
    'pull_up_bar' | 'dip_station' | 'bench' | 'squat_rack' |
    'cardio_machines' | 'bodyweight_only' | 'full_gym'
  >
  
  // Metadata
  createdAt: Date
  lastUpdated: Date
}
```

### **How Profile Affects App Behavior**

1. **Exercise Filtering**:
   - Only show exercises user can perform with available equipment
   - Exclude exercises that target injured body parts
   - Prioritize liked exercises in recommendations
   - Avoid disliked exercises (unless user explicitly searches)

2. **Weight/Rep Suggestions**:
   - **Beginner**: Conservative estimates, focus on form
   - **Intermediate**: Moderate progression
   - **Advanced**: Aggressive progression, periodization
   - **Expert**: Autoregulation, advanced techniques

3. **Workout Plan Recommendations**:
   - Suggest plan level matching experience
   - Filter plan exercises by equipment/injuries
   - Adapt volume based on goals

4. **Rest Periods**:
   - Beginners: Longer rest (2-3 min)
   - Advanced: Shorter rest (1-2 min) for conditioning

---

## 🎯 Workout Plans System

### **Plan Structure**

```typescript
WorkoutPlan {
  id: string
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  duration: number (weeks, e.g., 4, 8, 12)
  frequency: number (workouts per week)
  description: string
  
  weeks: Array<{
    weekNumber: number
    focus: string (e.g., 'hypertrophy', 'strength', 'deload')
    workouts: Array<{
      dayNumber: number
      name: string (e.g., 'Push Day', 'Pull Day')
      exercises: Array<{
        exerciseId: string
        sets: number | 'auto' (based on algorithm)
        reps: number | 'auto' | 'range' (e.g., '8-12')
        restPeriod: number (seconds)
        notes?: string
      }>
    }>
  }>
  
  progression: {
    type: 'linear' | 'undulating' | 'block'
    rules: string (description of how plan progresses)
  }
  
  requirements: {
    equipment: string[] (required equipment)
    timePerWorkout: number (minutes)
    daysPerWeek: number
  }
}
```

### **Plan Levels**

#### **Beginner Plans**
- **Focus**: Learning movements, building base
- **Frequency**: 3x/week (full body or upper/lower split)
- **Volume**: Low to moderate (3-4 exercises per workout)
- **Intensity**: Moderate (focus on form over weight)
- **Duration**: 4-8 weeks
- **Progression**: Linear, simple

#### **Intermediate Plans**
- **Focus**: Progressive overload, building strength
- **Frequency**: 4-5x/week (push/pull/legs or similar)
- **Volume**: Moderate to high (4-6 exercises per workout)
- **Intensity**: Moderate to high
- **Duration**: 8-12 weeks
- **Progression**: Linear or undulating

#### **Advanced Plans**
- **Focus**: Periodization, advanced techniques
- **Frequency**: 5-6x/week (specialized splits)
- **Volume**: High (5-7 exercises per workout)
- **Intensity**: High, with deload weeks
- **Duration**: 12+ weeks
- **Progression**: Block periodization

#### **Expert Plans**
- **Focus**: Autoregulation, advanced periodization
- **Frequency**: 6x/week (highly specialized)
- **Volume**: Very high (6-8 exercises per workout)
- **Intensity**: Very high, with strategic deloads
- **Duration**: 12-16 weeks
- **Progression**: Advanced periodization, autoregulation

### **Plan Personalization**

When user selects a plan:
1. **Filter exercises** by available equipment
2. **Replace/modify exercises** that target injured areas
3. **Adjust volume** based on experience level
4. **Adapt progression** based on goals
5. **Show preview** of modified plan before starting

---

## 📸 Exercise Media System

### **Media Data Model**

```typescript
Exercise {
  id: string
  name: string
  muscleGroups: string[]
  equipment: string[]
  
  // Media
  thumbnailImage: string (URL or local path)
  images: string[] (multiple angles)
  video: string (URL or local path)
  
  // Instructions
  instructions: string[]
  tips: string[]
  commonMistakes: string[]
  
  // Algorithm data
  defaultSets: number
  defaultReps: number | 'range'
  restPeriod: number (seconds)
}
```

### **Media Implementation Strategy**

#### **Phase 1: Placeholder System**
- Use placeholder images/videos initially
- Structure code to easily swap in real media later
- Create media loading/caching infrastructure

#### **Phase 2: Media Sources** (Future)
- **Option A**: User-generated content (community)
- **Option B**: Licensed stock media
- **Option C**: Third-party API (e.g., ExerciseDB)
- **Option D**: In-house production

#### **Media Requirements**
- **Images**: 
  - Thumbnail: 200x200px (for lists)
  - Full size: 800x800px (for detail view)
  - Multiple angles (front, side, back if applicable)
  
- **Videos**:
  - Duration: 15-60 seconds
  - Format: MP4, optimized for mobile
  - Show: Form, setup, common mistakes
  - Include: Audio narration or captions

### **Media Display**

1. **Exercise List**: Thumbnail image
2. **Exercise Detail**: 
   - Large image or video player
   - Swipeable image gallery
   - Video with play/pause controls
3. **During Workout**: 
   - Quick reference thumbnail
   - Tap to view full demo
   - Minimize to continue workout

---

## 🔄 Integration Flow

### **First-Time User Journey**

1. **Onboarding**:
   ```
   Welcome → Experience Level → Goals → Equipment → Injuries → Preferences → Done
   ```

2. **Plan Selection**:
   - App suggests plan based on profile
   - User can browse all plans
   - Preview shows personalized version

3. **First Workout**:
   - Exercise list filtered by profile
   - Each exercise shows thumbnail
   - Tap exercise to see video demo
   - Algorithm suggests starting weights

### **Returning User Journey**

1. **Home Screen**: 
   - Current plan progress
   - Today's workout
   - Quick stats

2. **Workout Screen**:
   - Exercises from plan (or custom)
   - Real-time weight/rep suggestions
   - Exercise demos available
   - Progress tracking

3. **Profile Updates**:
   - User can update any profile field
   - App re-filters exercises/plans
   - Algorithm adjusts suggestions

---

## 🎨 UI/UX Considerations

### **Onboarding**
- **Progressive disclosure**: Don't overwhelm with all questions at once
- **Visual aids**: Icons for equipment, body diagrams for injuries
- **Skip options**: Allow skipping non-critical fields
- **Edit later**: Make it easy to update profile later

### **Plan Selection**
- **Visual cards**: Show plan level, duration, frequency
- **Preview**: Show sample workout before committing
- **Comparison**: Compare multiple plans side-by-side
- **Personalization indicator**: Show how plan adapts to user

### **Exercise Media**
- **Fast loading**: Lazy load, show thumbnails first
- **Offline support**: Cache frequently viewed media
- **Accessibility**: Captions for videos, alt text for images
- **Performance**: Optimize for smooth scrolling

### **Profile Management**
- **Easy editing**: Quick access to update any field
- **Visual feedback**: Show how changes affect recommendations
- **Smart defaults**: Pre-fill based on previous answers

---

## 🧪 Algorithm Enhancements

### **Personalized Weight Suggestions**

```typescript
function suggestWeight(
  exercise: Exercise,
  userProfile: UserProfile,
  history: WorkoutHistory
): number {
  // Base calculation from history
  let baseWeight = calculateFromHistory(exercise, history);
  
  // Adjust for experience level
  if (userProfile.experienceLevel === 'beginner') {
    baseWeight *= 0.8; // Conservative for beginners
  } else if (userProfile.experienceLevel === 'expert') {
    baseWeight *= 1.1; // Aggressive for experts
  }
  
  // Adjust for injuries (reduce load on affected areas)
  if (hasInjuryRelatedToExercise(exercise, userProfile.injuries)) {
    baseWeight *= 0.7; // Significant reduction
  }
  
  // Adjust for goals
  if (userProfile.goals.includes('strength')) {
    // Higher weight, lower reps
  } else if (userProfile.goals.includes('hypertrophy')) {
    // Moderate weight, moderate reps
  }
  
  return baseWeight;
}
```

### **Exercise Filtering**

```typescript
function filterExercises(
  allExercises: Exercise[],
  userProfile: UserProfile
): Exercise[] {
  return allExercises.filter(exercise => {
    // Equipment check
    const hasEquipment = exercise.equipment.every(eq => 
      userProfile.availableEquipment.includes(eq)
    );
    
    // Injury check
    const isSafe = !exercise.muscleGroups.some(mg =>
      userProfile.injuries.some(injury => 
        injury.bodyPart.includes(mg) && injury.severity !== 'mild'
      )
    );
    
    // Preference check (optional - don't exclude, just deprioritize)
    const isPreferred = !userProfile.dislikedExercises.includes(exercise.id);
    
    return hasEquipment && isSafe;
  }).sort((a, b) => {
    // Prioritize liked exercises
    const aLiked = userProfile.likedExercises.includes(a.id);
    const bLiked = userProfile.likedExercises.includes(b.id);
    if (aLiked && !bLiked) return -1;
    if (!aLiked && bLiked) return 1;
    return 0;
  });
}
```

---

## 📊 Data Storage Strategy

### **User Profile**
- Store in AsyncStorage (local)
- Sync to cloud (future feature)
- Version for migration (if schema changes)

### **Workout Plans**
- Pre-defined plans in app bundle (JSON)
- User's active plan stored locally
- Progress tracked in local database

### **Exercise Media**
- **Initial**: Placeholder URLs (can be local assets)
- **Future**: 
  - Cache frequently viewed media locally
  - Stream from CDN for less common exercises
  - Allow offline mode for saved workouts

### **Workout History**
- SQLite for complex queries
- AsyncStorage for simple key-value (if SQLite is overkill)
- Export functionality (future)

---

## 🚀 Implementation Priority

### **Must Have (MVP)**
1. ✅ User profile (basic: experience, goals, equipment)
2. ✅ Exercise filtering by equipment
3. ✅ Basic workout plans (1-2 per level)
4. ✅ Exercise thumbnails (placeholder)
5. ✅ Personalized weight suggestions

### **Should Have (v1.0)**
1. ✅ Full profile (injuries, preferences)
2. ✅ Multiple workout plans per level
3. ✅ Exercise videos (placeholder or real)
4. ✅ Plan personalization
5. ✅ Preference-based filtering

### **Nice to Have (v1.1+)**
1. ⏳ Real exercise media (photos/videos)
2. ⏳ Advanced plan customization
3. ⏳ Community features
4. ⏳ Cloud sync
5. ⏳ Social sharing

---

## 🎯 Success Metrics

- **User Engagement**: % completing onboarding
- **Plan Completion**: % finishing full workout plans
- **Personalization**: % using profile-based features
- **Performance**: App smoothness (60fps target)
- **User Satisfaction**: Feedback on recommendations accuracy

---

**Ready to implement?** This spec will guide development. Each feature can be built incrementally with agent assistance!

