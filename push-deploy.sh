#!/bin/sh
lastcommit="$(git log -1 --pretty=%B)"

for file in $(find .); do
	sed -i -re 's/(((src)|(href))=\"\/)/\1corn\//g' $file
	git add $file
done
git commit -m "file fix for subtree"
git subtree push --prefix public origin gh-pages

for file in $(find .); do 
	sed -i -re 's/(((src)|(href))=\")\/corn/\1/g' $file
	git add $file
done

git commit -m "$lastcommit"
git push origin master
firebase deploy
