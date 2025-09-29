#!/bin/bash

echo "🚀 Deploying to Netlify..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if out directory exists
if [ -d "out" ]; then
    echo "✅ Build successful! Static files generated in 'out' directory."
    echo ""
    echo "🎯 Next steps:"
    echo "1. Go to https://netlify.com"
    echo "2. Drag and drop the 'out' folder to deploy"
    echo "3. Or connect your GitHub repository for automatic deployments"
    echo ""
    echo "📁 Your static files are ready in the 'out' directory!"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
