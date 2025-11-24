#!/bin/bash
# Script to start Expo with proper file limits

# Source nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node 18
nvm use 18

# Increase file limit
ulimit -n 4096

# Navigate to project
cd "$(dirname "$0")"

# Start Expo
npm start

