#!/bin/sh
# This file was written by hand, lol

if [ -z $1 ]; then
	echo "No command specified, please specify either build or clean"
	exit 1
fi

case $1 in
	"build")
		$0 clean
		mkdir -p public/src
		for file in "404.html about css devtools games img index.html license.txt other pr0xy scripts settings"; do
			cp -rf $file public/
		done
		;;
	"clean")
		rm -r public
		;;
	*)
		echo "Invalid command specified, please specify either build or clean"
		exit 1
		;;
esac
