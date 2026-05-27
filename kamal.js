// when you need to add the collaborators then 
//settings->collaborators->add the username of the collaborator and then add the collaborator
//then other member can clone the repo 
//git clone <repository_url>
//you don't need to initilize the git repository because it is already initialized by the owner of the repo
//after cloning the repo you can create a new branch for your work
//git branch <branch_name>
//then you can switch to that branch
//git switch <branch_name>
// you only push to the branch that you have created and not to the main branch
// then you push your changes to the branch
//git add .
//git commit -m "your commit message"
//git push origin <branch_name>
// then you can create a pull request from your branch to the main branch
// then the owner of the repo can review your changes and merge it to the main branch
//if owner like the changes then they can merge the pull request and if they don't like the changes then they can ask you to make some changes and then you can make the changes and push it again to the same branch and then create a new pull request
// this is the basic workflow of how to collaborate on a project using git and github
// git switch master
// git pull origin master
// this is how you can update your local repository with the changes made by other collaborators on the main branch
//if you do any changes in your branch then you simply can't push to main branch
// you need to go to master branch and then pull the changes from the remote repository and then switch to your branch and then merge the master branch to your branch and then resolve the conflicts if there are any conflicts and then push the changes to your branch and then create a pull request to merge your branch to master branch
//git stash
// this command is used to save your changes temporarily and then you can switch to another branch and then you can apply the stashed changes to that branch
//git merge master
// this command is used to merge the master branch to your branch and then you can resolve the conflicts if there are any conflicts and then push the changes to your branch and then create a pull request to merge your branch to master branch
//git stash pop
// this command is used to apply the stashed changes to the current branch and then you can resolve the conflicts if there are any conflicts and then push the changes to your branch and then create a pull request to merge your branch to master branch
// git add .
//git commit -m "your commit message"
//git push origin <branch_name>
//if pull request doesnot come then you have to create it manually by going to the github repository and then click on the pull request tab and then click on the new pull request button and then select the branch that you want to merge to the main branch and then click on the create pull request button and then add a title and description for your pull request and then click on the create pull request button again to create the pull request
//base always main or master and compare is the branch that you have created and then you want to merge to the main branch
