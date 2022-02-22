#!/bin/bash

echo 'Build to gh-pages...'
npx tailwindcss -o ./gh-pages/css/style.css --minify
mkdir -p gh-pages/css
cp -R public/* gh-pages

echo 'Build succesfull'