#!/bin/zsh

git add .

git commit --amend

git push -f origin main
git push -f gitee main
