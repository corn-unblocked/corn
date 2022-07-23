#!/bin/sh
# This file was written by hand, lol

if [ -z $1 ]; then
	echo "No command specified, please specify either build or clean"
	exit 1
fi

case $1 in
	"build")
		mkdir public
		mkdir dist
		npm run build
		for file in "404.html about css devtools games img index.html license.txt other pr0xy scripts settings"; do
			cp -r $file public/
		done
		mv dist/bundle.js public/scripts/
		;;
	"clean")
		rm -r public
		rmdir dist
		;;
	*)
		echo "Invalid command specified, please specify either build or clean"
		exit 1
		;;
esac
