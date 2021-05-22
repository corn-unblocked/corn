# This script updates all git branches listed in a file, and pushes them to their relevant remotes.
# Usage - ./commitall.sh <File with names of branches> <SSH key>

# To setup this correctly, give each branch a remote of the same name.

# Add SSH certificate
eval $(ssh-agent -s)
ssh-add "$2"

# Get commit message
git switch master
msg = $(git log -1 --pretty=%B | head -1)

# Script
for branch in $(cat "$1"); do
	git checkout "$branch"
	git merge master -m "$msg"
	git pull "$branch"
	git push "$branch" "$branch"
done

# Switch to master, pretty important
git switch master

# Push all branches to origin
git push -all origin
