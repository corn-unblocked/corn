#!/bin/sh
git push origin master
git subtree push --prefix public origin gh-pages
firebase deploy
