# This script updates all git branches listed in a file, and pushes them to their relevant remotes.
# Usage - ./commitall.sh <File with names of branches> <SSH key>

# To setup this correctly, give each branch a remote of the same name.

# Add SSH certificate
eval $(ssh-agent -s)
ssh-add "$2"

# Script
for branch in $(cat "$1"); do
	git checkout "$branch"
	git merge master
	git pull "$branch"
	git push "$branch" "$branch"
	git push "$branch" master
done

# Switch to master, pretty important
git switch master
