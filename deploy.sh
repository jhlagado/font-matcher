#!/bin/bash
pnpm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:yourusername/your-repo-name.git master:gh-pages
cd -
