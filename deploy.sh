#!/bin/bash

# Portfolio Deployment Script
# Usage: ./deploy.sh "your commit message"

echo "🚀 Portfolio Deployment Script"
echo "================================"
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Must run from portfolio root directory"
    exit 1
fi

# Get commit message or use default
COMMIT_MSG="${1:-feat: update portfolio}"

echo "📋 Status Check..."
git status --short

echo ""
echo "📦 Adding files..."
git add .

echo ""
echo "💬 Committing with message: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo ""
echo "🚀 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment initiated!"
echo ""
echo "🌐 Your site will be live in 1-2 minutes at:"
echo "   https://iamgurjitsingh.github.io/"
echo ""
echo "📊 Check deployment status:"
echo "   https://github.com/iamgurjitsingh/iamgurjitsingh.github.io/actions"
echo ""
echo "💡 Tips:"
echo "   - Clear browser cache if changes don't appear (Ctrl+Shift+R)"
echo "   - Wait 5-10 minutes for full propagation"
echo "   - Check GitHub Actions for any errors"
echo ""
echo "🎉 Happy deploying!"

