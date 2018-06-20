# Git Basic Interview Questions

1. What is the difference between Git and GitHub?

   * Git is version control software that let's users create repositories for recording changes to a project.
   * GitHub stores these repositories online.

2. Why would you use Git?

   * To track the changes that developers make to a project, especially collaborative ones. The branch system also prevents users from writing code that would mess a project up.

3. Why would you use GitHub?

   * To store projects remotely and allow users to collab on a project anywhere with an Internet connection.

4. What is the first step necessary to create a _local_ Git repository?
5. `git init`

6. Once a repository is created and linked to GitHub, what are the three commands you need to do each time you create or modify files to send something up to GitHub?

   * `git add .`
   * `git commit -m <comment>`
   * `git push origin <branch name>`

7. How do you update your local repository from GitHub?

   * `git pull origin <branch name>`

8. What is one way to create a new branch?

   * `git branch <branchname>`

9. What is one way to check and see what branch you are currently in? (a terminal/bash command)

   * `git branch`

10. What is it called when you make a request on GitHub to merge a branch into another branch?

    * A merge.

11. How would you delete a _local_ Git repository?

    * `rm -R .git`

12. What does `git clone` do?

    * It clones a GitHub repo to a local machine.

13. What is "branching" for?
    * So that all collaborators on a project can work at the same time without writing code that conflicts with other parts of the project.
