# Setup Instructions - Running the App Locally

## ⚠️ Prerequisites

### **Node.js Version**
You need **Node.js version 18 or higher** to run this app.

**Check your current version:**
```bash
node --version
```

**If you have Node.js < 18, you need to upgrade:**

#### **Option 1: Using nvm (Recommended)**
```bash
# Install nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or run:
source ~/.bashrc

# Install Node.js 18 (LTS)
nvm install 18
nvm use 18

# Verify
node --version  # Should show v18.x.x or higher
```

#### **Option 2: Download from nodejs.org**
1. Go to https://nodejs.org/
2. Download the LTS version (18.x or higher)s
3. Install it
4. Restart your terminal

### **Other Prerequisites**
- **npm** (comes with Node.js)
- **Expo CLI** (we'll install this globally or use npx)
- **iOS Simulator** (for Mac) or **Android Studio** (for Android)

---

## 📦 Installation Steps

### **Step 1: Upgrade Node.js** (if needed)
See above.

### **Step 2: Install Dependencies**
```bash
cd /Users/rudycruz/Documents/GitHub/AppV1
npm install
```

This will install all required packages. It may take a few minutes.

### **Step 3: Start the Development Server**
```bash
npm start
```

This will:
- Start the Expo development server
- Show a QR code in your terminal
- Open Expo DevTools in your browser

### **Step 4: Run on Device/Simulator**

#### **Option A: Using Expo Go App (Easiest)**
1. Install **Expo Go** on your phone:
   - iOS: https://apps.apple.com/app/expo-go/id982107779
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent

2. Scan the QR code from the terminal with:
   - **iOS**: Use the Camera app
   - **Android**: Use the Expo Go app to scan

#### **Option B: iOS Simulator (Mac only)**
```bash
npm run ios
```

This will:
- Open iOS Simulator
- Build and run the app automatically

#### **Option C: Android Emulator**
```bash
npm run android
```

**Note**: You need Android Studio installed and an emulator running.

---

## 🚀 Quick Start Commands

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm start

# Run on iOS simulator (Mac only)
npm run ios

# Run on Android emulator
npm run android

# Run on web (for testing)
npm run web
```

---

## 🔧 Troubleshooting

### **"Node version too old" error**
- Upgrade Node.js to version 18 or higher (see above)

### **"Command not found: expo"**
- Use `npx expo start` instead of `expo start`
- Or install globally: `npm install -g expo-cli`

### **iOS Simulator not opening**
- Make sure Xcode is installed: `xcode-select --install`
- Open Xcode and accept license agreements

### **Android Emulator not working**
- Install Android Studio
- Create an Android Virtual Device (AVD)
- Start the emulator before running `npm run android`

### **Port already in use**
- Kill the process using port 8081: `lsof -ti:8081 | xargs kill -9`
- Or use a different port: `expo start --port 8082`

### **Metro bundler cache issues**
```bash
# Clear cache and restart
npm start -- --clear
```

---

## 📱 Testing on Physical Device

### **iOS (iPhone/iPad)**
1. Make sure your Mac and iPhone are on the same WiFi network
2. Run `npm start`
3. Scan QR code with Camera app (iOS 11+)
4. App opens in Expo Go

### **Android**
1. Make sure your computer and phone are on the same WiFi network
2. Run `npm start`
3. Scan QR code with Expo Go app
4. App opens in Expo Go

---

## 🎯 What You'll See

When you first run the app:
1. **Onboarding Screen** (if first time)
   - Currently a placeholder
   - Has a "Skip for now" button (temporary)
   
2. **Home Screen** (after onboarding)
   - Welcome message
   - Ready for more features

---

## 📝 Next Steps

After the app is running:
- Review the code structure
- Start building Phase 2 features
- Test on both iOS and Android

---

## 💡 Tips

- **Hot Reload**: Changes to code automatically refresh the app
- **Developer Menu**: Shake device or press `Cmd+D` (iOS) / `Cmd+M` (Android) in simulator
- **Reload**: Press `r` in the terminal where `npm start` is running
- **Clear Cache**: Press `Shift+C` in the terminal

---

**Need help?** Check the Expo docs: https://docs.expo.dev/

