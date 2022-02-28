**Meta description:** Git is a VCS for managing files in the development life cycle. Prepare for an interview in the tech industry by reviewing the top Git interview questions and answers.

# Top 15 Git Interview Questions and Answers
Git experience may be required if you are interviewing for a role in the tech industry. For instance, a position as a Technical Writer, Software Developer, or DevOps Engineer may entail using Git as part of the day-to-day workflow. The version control tool is handy for [development teams](https://discuss.codecademy.com/t/guide-what-you-need-to-know-about-git-github-and-coding-in-teams/394581) because it allows seamless collaboration amongst peers and non-linear work progression.

If you are a beginner to Git or looking to refresh your skills in the version control system (VCS), consider taking our [Git](https://www.codecademy.com/learn/learn-git) course first, then checking out our [Getting Started with Git](https://www.codecademy.com/resources/blog/getting-started-with-git/) blog. For those of you preparing for an interview, here we will provide common questions (and answers) typically asked regarding Git.

## Git interview questions and answers
Almost every development team depends on Git for version control. It's the industry standard for tracking changes in any set of files. However, not every developer utilizes the software as intended — even experienced programmers! So, one of the most beneficial things you (as a candidate) can do in an interview regarding Git, is show that you have the know-how of working with it regularly. Committing regularly. As long as you exemplify some Git best practices, you should have no problem getting through that portion of the interview.

Let’s review 15 questions and think about the proper answers.

### Question 1: What are branches? What command creates a new branch?
`C1 - - - C2 - - - C3`

Above is an example of simple commit history, in which `C1` is the first commit (version), `C2` is the second commit, and `C3` is the third commit. This is an example of a `main` branch. Any new branches that get created are called the `feature` branch.

To create a new branch, we use the `git branch` command, and to view it, we use the `git checkout` command.

### Question 2: How often do you commit when using Git? And do you review files before committing?
You should be committing regularly. If you don’t know when to commit, just make a routine of it. For example, commit every Friday at the end of the week, and remember to leave a detailed message.

### Question 3: What are your best practices for writing commit messages?
It's a good idea to have consistency across your commit messages. Following a template for each message within a project is one of the best practices for writing commits. It allows you to quickly identify and get some detail about the commit without needing to do extra searching.

### Question 4: What's the difference between git merge and git rebase? Which method do you prefer?
The two commands allow developers to incorporate changes from one branch into another. Merge allows for the creation of a new "merge commit" occurring between the `main` and `feature` commit. The command joins the two (or more if needed) together. For example, `git merge` will add changes to the current branch. Whereas `git rebase` can reapply the feature commit on top of the main branch.

So the major difference between the two is how the history gets managed. With `git merge`, the history of branches remains the same but can subsequently leave clutter from unnecessary old commits. And with rebase, the `main` history is partially forfeited in favor of the `feature` history.

As for answering which technique is your preference, there is no correct answer — just as long as you can prove your point. However, there is some scrutiny with rebasing when working in large teams because you may inadvertently rewrite public commits. Nevertheless, both methods can be effective as long as you know what you’re doing. Look into the "golden rule of rebasing" for more info on this.

### Question 5: What is the difference between Git and Github?
To answer this interview question, we quote our [Articles](https://www.codecademy.com/articles) resources, which provide a more in-depth overview of programming concepts. Like this article on [Getting Started with Git and GitHub Desktop](https://www.codecademy.com/article/what-is-git-and-github-desktop).

* >“Git is a widely-used version control system used to manage code. Nearly 70% of developers use Git, according to a [Stack Overflow survey](https://insights.stackoverflow.com/survey/2017#technology).”
* >“GitHub is a popular hosting service for Git repositories. GitHub allows you to store your local Git repositories in the cloud. With GitHub, you can back up your personal files, share your code, and collaborate with others.”

### Question 6: Do you use the command line with Git?
[The command line](https://www.codecademy.com/learn/learn-the-command-line) (CLI) is a text interface for the computer’s operating system. It's a useful tool for developers to work with system files, among other tasks. Git can be used with graphical user interfaces (GUIs), like GitHub, or it can be used with the command line. All Git commands are able to run on the command line. However, this is not the case for GUIs. So even if you don’t know Git all that well, having proficiency with the command line is a beneficial skillset to show interviewers that you have the capability to, at the very least, work with Git.

### Question 7: When should you use git push, compared to when you use git pull?
* `git push` can update remote refs using local refs.
* `git pull` can request a summary of pending changes.

If you would like to read up on answering technical interview questions, go ahead and jump over to this [complete guide](https://www.codecademy.com/resources/blog/technical-interview-guide/).

### Question 8: What command do you use to call an older version?
To return to a previous version, you will first want to run `git hist` to pull up the branch's history. Then, after identifying the version's hash you want to go to, use the `git checkout` command to call the previous commit.

### Question 9: Has there ever been a time when you worked from multiple machines or with multiple developers? How did you like it? What did you find most challenging?
To answer this question, you can talk about your workflow. For example, explain how you’ve used Git in the past as your version control system for working between machines or to share with multiple developers.

### Question 10: Talk about methods you use to clean up your feature branches.
* `git merge --squash` is a command that can merge multiple commits of a branch.
* `git commit --fixup` marks the commit as a fix of the previous commit.
* `git rebase -i --autosquash` is a rebase type of squash for merging multiple commits.

### Question 11: What are Git attributes used for?
Git attributes allow programmers to try different merge strategies within the files or directories of a project. Attributes are set on paths so that when certain settings are applied along the path, the attribute can perform requests. Git attributes can also, among other things, perform requests when exporting your project.

### Question 12: Have you ever done debugging with Git? How did you do this?
* `git bisect` identifies the first commit to introduce a bug by using automatic binary search.
* `git blame` identifies the author of a commit.
* `git grep` searches for any string or regular expression in any of the files in the staging area.

### Question 13: Have you ever encountered a merge conflict? How did you go about resolving it?
Merge conflicts can be resolved by, first, editing the file that has the conflict. And once the edits get made, add and commit the file.

>“Merge conflicts happen when you merge branches that have competing commits, and Git needs your help to decide which changes to incorporate in the final merge.” - [GitHub article about merge conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)

### Question 14: Explain Git hooks.
Git hooks are custom scripts that can run when certain actions occur. There are two types: client-side hooks and server-side hooks. Git hooks can be written in any scripting programming language. They should be located within the hooks subdirectory of the .git directory.
### Question 15: What is your Git workflow like?
Some programmers use Git every day, and some do not use it at all. It can depend on the project and team size, but you should be using Git just about every day that you program, in an ideal world. So, modeling your workflow around Git is a great practice to have.
One of the best tips we can give you regarding the VCS is to continuously communicate with team members to ensure everyone follows the same Git conventions. Also, remember to explain your workflow for all Git interview questions and answers.
## Expand your coding resources by learning with our courses
If you work on a software development team, preparing for Git interview questions is important. Ensure you know how to properly collaborate with your peers by efficiently managing your files and tacking your history with Git.
For more help answering technical and behavioral interview questions, [check out our blog](https://www.codecademy.com/resources/blog/technical-and-behavioral-interview-tips/). To learn more programming-related content, check out all the courses we offer in our [Full Catalog](https://www.codecademy.com/catalog/all).
