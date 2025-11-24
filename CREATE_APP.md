# Creating a Double-Clickable App for Mac

## Option 1: Use the Script (Easiest)

Just double-click `start-app.sh` in Finder, or run in Terminal:
```bash
./start-app.sh
```

## Option 2: Create a Double-Clickable App

1. Open **Script Editor** (Applications > Utilities > Script Editor)

2. Copy and paste this code:

```applescript
on run
    set projectPath to "/Users/rudycruz/Documents/GitHub/AppV1"
    
    tell application "Terminal"
        activate
        do script "cd " & quoted form of projectPath & " && ./start-app.sh"
    end tell
end run
```

3. Save as:
   - **File Format**: Application
   - **Name**: "Start Workout Tracker"
   - **Location**: Your Desktop or Applications folder

4. Double-click the app to run!

## Option 3: Create an Automator App (Most User-Friendly)

1. Open **Automator** (Applications > Automator)

2. Choose **Application**

3. Add these actions:
   - **Run Shell Script**
   - Paste this:
   ```bash
   cd /Users/rudycruz/Documents/GitHub/AppV1
   ./start-app.sh
   ```

4. Save as "Start Workout Tracker.app" on your Desktop

5. Double-click to run!

---

**Note**: The first time you run it, macOS may ask for permission. Click "Open" in System Preferences if prompted.

