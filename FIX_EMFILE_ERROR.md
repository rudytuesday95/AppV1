# Fix EMFILE Error - Step by Step

## The Problem
Your macOS system has a file watcher limit of 256 files, which is too low for React Native/Expo development.

## Solution: Increase System Limits

### Step 1: Check Current Limits
```bash
launchctl limit maxfiles
```
You'll see something like: `maxfiles    256            unlimited`

### Step 2: Create/Edit System Configuration

**Option A: Using launchctl (Temporary - until restart)**
```bash
sudo launchctl limit maxfiles 65536 200000
```

**Option B: Permanent Fix (Recommended)**

1. Create/edit the plist file:
```bash
sudo nano /Library/LaunchDaemons/limit.maxfiles.plist
```

2. Paste this content:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>limit.maxfiles</string>
    <key>ProgramArguments</key>
    <array>
      <string>launchctl</string>
      <string>limit</string>
      <string>maxfiles</string>
      <string>65536</string>
      <string>200000</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>ServiceIPC</key>
    <false/>
  </dict>
</plist>
```

3. Save and exit (Ctrl+X, then Y, then Enter)

4. Load it:
```bash
sudo launchctl load -w /Library/LaunchDaemons/limit.maxfiles.plist
```

5. **Restart your Mac** (or log out and back in)

### Step 3: Verify
After restart, check:
```bash
launchctl limit maxfiles
```
Should show: `maxfiles    65536           200000`

### Step 4: Start the App
```bash
cd /Users/rudycruz/Documents/GitHub/AppV1
npm start
```

## Alternative: Quick Temporary Fix

If you don't want to restart, run this in your terminal before starting the app:

```bash
sudo launchctl limit maxfiles 65536 200000
ulimit -n 4096
npm start
```

## Using the Start Script

I've created a `start.sh` script. You can use it:

```bash
./start.sh
```

But you still need to fix the system limits first (Step 2 above).

---

**Note**: The permanent fix requires a restart, but it's the best solution for long-term development.

