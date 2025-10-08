#!/bin/bash

# Build React frontend
echo "Building React frontend..."
npm run build

# Create Django static directory
echo "Creating Django static directory..."
mkdir -p portfolai/static/frontend

# Copy built files to Django static directory
echo "Copying built files to Django static directory..."
cp -r dist/* portfolai/static/frontend/

echo "Build complete! You can now run Django server."
echo "Run: cd portfolai && python manage.py runserver 0.0.0.0:8000"
