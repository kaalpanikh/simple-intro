#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if out directory exists
if [ -d "out" ]; then
    echo "Build successful! Static files generated in 'out' directory."
    echo "You can now:"
    echo "1. Push to GitHub and let GitHub Actions deploy automatically"
    echo "2. Or manually copy the 'out' folder contents to your GitHub Pages branch"
else
    echo "Build failed! Please check the errors above."
    exit 1
fi
