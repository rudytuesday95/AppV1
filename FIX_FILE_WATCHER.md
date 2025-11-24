# Fix "EMFILE: too many open files" Error

This is a macOS system limit issue. Here are solutions:

## Solution 1: Increase System Limits (Recommended)

Add this to your `~/.zshrc` or `~/.bash_profile`:

```bash
# Increase file watcher limit for React Native/Expo
ulimit -n 4096
```

Then restart your terminal or run:
```bash
source ~/.zshrc  # or source ~/.bash_profile
```

## Solution 2: Use Watchman (Already Installed)

Watchman should help, but you may need to restart it:

```bash
watchman shutdown-server
watchman watch-del-all
```

Then try starting the app again.

## Solution 3: Temporary Workaround

Try starting with tunnel mode (slower but sometimes works):

```bash
npx expo start --tunnel
```

## Solution 4: System-Level Fix (Permanent)

Create/edit `/etc/sysctl.conf` (requires sudo):

```bash
sudo nano /etc/sysctl.conf
```

Add:
```
kern.maxfiles=65536
kern.maxfilesperproc=65536
```

Then restart your Mac.

## Quick Test

After applying Solution 1, try:

```bash
ulimit -n 4096
npm start
```

If it still doesn't work, the issue might be with too many files in your project directory. Check if there are unnecessary files that can be excluded.


