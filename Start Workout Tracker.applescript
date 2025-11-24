-- Workout Tracker App - Double-Click to Run
-- This creates a double-clickable app for Mac

on run
    set appPath to POSIX path of (path to me)
    set projectPath to POSIX path of (do shell script "dirname " & quoted form of appPath)
    
    tell application "Terminal"
        activate
        do script "cd " & quoted form of projectPath & " && ./start-app.sh"
    end tell
end run

