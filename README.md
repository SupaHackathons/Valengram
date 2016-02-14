# Valengram
Send your loved one a personalized valentine's day card!

### Quickstart
To see get it running
```
git clone https://github.com/SupaHackathons/Valengram valengram
cd valengram
npm install
make build
make dev-server // runs the express server
make dev-client // runs the webpack server
open http://localhost:8080
```

### Tests
```
# Run eslint
make lint

# Run tests
make test
```

### Contributing
Work on something in a separate branch, once it's ready make sure our check suite passes without failures:
```
make check
```
Once this works make sure your branch is up-to-date with master. Make a PR and ping us!

### Rebase Workflow
For this project let's use a rebase workflow to merge changes. Here's how it works
* FInish your feature branch and make sure `make check` passes w/o issues
* Check out and pull the latest master `git checkout master` `git pull`
* Checkout your branch and rebase master onto it `git checkout feature-branch` `git rebase master`
* There may be some merge conflicts, fix those if they appear
* If there were conflicts, make sure you run `make check` again and that it works without problems
* If there were conflicts, commit & push them
* Now switchback to master, verify that you still have the latest, if yes, rebase your branch into master `git checkout master` `git rebase feature-branch`
* To be extra safe you may want to run `make check` once more, but you don't really need to. At this point feel free to push it live `git push origin master`
* Ping the rest of the team to let us know you've pushed!
