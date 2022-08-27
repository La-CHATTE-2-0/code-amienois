#!/bin/bash
# Auto Copy script for the apache server

echo "Start building"
npm run build 
rm -rf /var/www/html/code-amienois
cp -r ./dist /var/www/html/code-amienois

echo "Done."