#!/bin/bash

echo 'Build to directory ./docs...'
npx tailwindcss -o ./docs/css/style.css --minify
cp -R public/* docs

echo 'Build succesfull...'