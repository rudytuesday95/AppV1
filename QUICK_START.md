# ⚡ Quick Start Guide

## For Non-Technical Users

### **Super Easy: Double-Click to Run**

I've created a file on your **Home directory** (Desktop level) called:

**`Start_Workout_Tracker.command`**

Just **double-click it** and the app will start automatically!

---

## What the Script Does

The `start-app.sh` script automatically:

1. ✅ **Checks Node.js** - Makes sure it's installed and the right version
2. ✅ **Fixes System Limits** - Handles the "too many files" error
3. ✅ **Installs Dependencies** - Downloads all required packages
4. ✅ **Starts the App** - Launches Expo development server

---

## What You'll See

After double-clicking, a Terminal window opens showing:

```
🚀 Starting Workout Tracker App Setup...
📦 Checking Node.js installation...
✅ Node.js is installed (v18.x.x)
🔧 Fixing system file limits...
✅ File limits configured
📥 Installing dependencies...
✅ Dependencies installed
🎉 Starting the app...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  The app is starting! You should see:
  • A QR code (scan with Expo Go app on your phone)
  • Options to press 'i' for iOS or 'a' for Android
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Then you'll see a QR code and options to run the app!

---

## Running the App

### **On Your Phone (Easiest)**

1. Install **Expo Go**:
   - iOS: https://apps.apple.com/app/expo-go/id982107779
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent

2. Scan the QR code from the Terminal

3. Make sure phone and computer are on the same WiFi

### **On iOS Simulator (Mac only)**

Press `i` in the Terminal (requires Xcode)

### **On Android Emulator**

Press `a` in the Terminal (requires Android Studio)

---

## Troubleshooting

**"Permission denied" when double-clicking:**
- Right-click the file → Get Info
- Check "Execute" permission
- Or run in Terminal: `chmod +x Start_Workout_Tracker.command`

**Script asks for password:**
- This is normal - it's fixing system file limits
- Enter your Mac password (this is safe)

**"Node.js not found":**
- Install from https://nodejs.org/ (version 18+)
- Or the script will try to install it via nvm

**App doesn't start:**
- Check the Terminal window for error messages
- See `SETUP_INSTRUCTIONS.md` for detailed help

---

## Files Created

- **`start-app.sh`** - Main script (in project folder)
- **`Start_Workout_Tracker.command`** - Double-clickable launcher (in Home directory)
- **`README_START.md`** - Detailed instructions
- **`CREATE_APP.md`** - How to create a custom app icon

---

**That's it! Just double-click and go! 🚀**

