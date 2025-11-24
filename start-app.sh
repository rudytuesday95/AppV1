#!/bin/bash

# Workout Tracker App - Easy Start Script
# This script will set up and run the app automatically

set -e  # Exit on error

echo "🚀 Starting Workout Tracker App Setup..."
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get the script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Step 1: Check Node.js
echo "📦 Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed.${NC}"
    echo "Please install Node.js from https://nodejs.org/ (version 18 or higher)"
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${YELLOW}⚠️  Node.js version is too old (need 18+). Trying to use nvm...${NC}"
    
    # Try to use nvm
    if [ -s "$HOME/.nvm/nvm.sh" ]; then
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        nvm use 18 2>/dev/null || nvm install 18
        nvm use 18
    else
        echo -e "${RED}❌ Please upgrade Node.js to version 18 or higher${NC}"
        exit 1
    fi
fi

echo -e "${GREEN}✅ Node.js is installed ($(node -v))${NC}"
echo ""

# Step 2: Fix file limit (try with sudo, but don't fail if it doesn't work)
echo "🔧 Fixing system file limits..."
if command -v sudo &> /dev/null; then
    sudo launchctl limit maxfiles 65536 200000 2>/dev/null || echo -e "${YELLOW}⚠️  Could not increase file limit (may need password). Continuing anyway...${NC}"
fi
ulimit -n 4096 2>/dev/null || true
echo -e "${GREEN}✅ File limits configured${NC}"
echo ""

# Step 3: Install dependencies
echo "📥 Installing dependencies (this may take a few minutes)..."
if [ ! -d "node_modules" ]; then
    npm install
else
    echo "Dependencies already installed. Skipping..."
fi
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Step 4: Start the app
echo -e "${GREEN}🎉 Starting the app...${NC}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  The app is starting! You should see:"
echo "  • A QR code (scan with Expo Go app on your phone)"
echo "  • Options to press 'i' for iOS or 'a' for Android"
echo ""
echo "  To stop the app, press Ctrl+C"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Start Expo
npm start

