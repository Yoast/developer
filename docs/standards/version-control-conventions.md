---
id: version-control-conventions
title: Standards - Version control conventions
sidebar_label: Version control conventions
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/standards/version-control-conventions.md
---

Because we heavily rely on Git for our version control, it is necessary to enforce a strict set of rules when managing code.

## Branches
Our repositories contain a few of special branches:

| Branch | Description |
|--------|-------------|
| `master` | This is the branch that holds the latest released version. It should not contain any code that hasn't been properly reviewed and tested. |
| `develop` * | This is the branch that holds code that is in active development and which will be published in the next release. Whenever creating a new branch, this branch should be used. |
| `release/*.*` | This is the branch that's created when making a Release Candidate to ensure development can continue on `trunk`. |
| `hotfix/*.*` | This is the branch used for creating patches for the latest release. This branch is always based on `master`, not on trunk.

**\* In some repositories, `develop` is still called `trunk`. This is something we will be changing in the future.**

### Exceptions
The only exception in which commiting directly to `master` is permitted, is in the case of a high priority bugfix or security patch. Once a release is planned, `develop` will be used to create an Release Candidate (RC) and will eventually be merged into `master`.

The My Yoast project makes use of a different setup where feature branches are merged directly to `master` if they pass all the requirements. Therefore, there is no `develop` branch on that repository.

### Creating branches
Whenever you start working on an issue, it is important that you use a separate branch to commit to. This ensures that code that isn't complete (or possibly broken), isn't being spread to everyones development environment.

All these different branches contain the "truth" with regard to what __is__ shipped (`master`), what __can__ be shipped (`develop`), and what __will__ eventually be shipped (feature branches).

**Please refrain from branching off a branch that has not been merged. This is actually counter-productive. If you need a branched merged before being able to continue with an other issue, please request a code-review and acceptance test from one of your fellow team members.**

#### Branch naming conventions
To ensure branches can easily be identified within a repository, we adhere a convention that follows the following structure:
`{issue number}-{issue title}`.

Generally speaking the issue title is a short description of the problem that needs to be solved.

**This format implies that all PR's should have an issue on which they are based to ensure there's a clear separation of issue and solution.**

In the past we used an alternative convention that also contained your initials, but seeing at multiple people can be working on a single issue, it doesn't make much sense to adhere that structure. You might also run into a structure like `stories/{issue title}`. This is also part of the 'old' way of naming branches.

#### Tree example
Schematically our Git tree should look like this:

```
master
  |
  |-123-fix-typo
  |-132-xss-in-metabox
  |-...
  |
  |---trunk
        |
        |-164-add-button
        |-166-twitter-integration
        |-...
```

## Commits
Please try to use clear commit messages and keep your commits as small as possible.

## Pull Requests

#### Preparing your branch
Once your branch is ready, make sure you merge the latest version of the parent branch (`master`, `trunk` or a feature branch) in your current branch. This can be done by executing:

```SH
git checkout {parent_branch}
git pull
git checkout {your_branch}
git merge {parent_branch}
```

You might run into some merge conflicts. Solve them, commit the merge and push the code before filing a Pull Request (PR).

### Before submitting a PR
Three golden rules:

- Follow the [Yoast coding guidelines and principles](coding-guidelines-and-principles.md).
- Ensure that you've added tests (when applicable). This also applies to bugfixes.
- Add steps to the PR so the person that'll be acceptance testing your PR knows what the intended behavior is of your code. Also include things like adding / changing configuration files.

**Note: Do not assume that the person that will be testing your code uses the same setup as you do! Please take this into account when writing your PR.**

### Creating the PR
When filing a PR, please make sure your branch is compared with the right parent branch. For some repositories this is `trunk` by default, but you can change this at the top of your screen:

![branch_comparison](https://cloud.githubusercontent.com/assets/1488816/4550557/e621840a-4e67-11e4-8880-2cabd973bb33.png)

Indicate what issue is fixed by adding `Fixes #{issuenumber}`. This will ensure the issue is automatically closed once the PR is merged.

Your code is now ready for a code review.

## Other

### Global Git Ignore
To make sure we are not committing files to any repositories that don't belong in the repository, Git offers a way to globally exclude files from being staged to commits.

Adding a global git ignore file to Git, execute the following command in your terminal:
```
git config --global core.excludesfile ~/.gitignore_global
```

Enter the following data into the file `~/.gitignore_global`:
```
# IDE Specific files #
\.idea

# Compiled files #
\.so

# OS generated files #
######################
\.DS_Store
\.DS_Store?
\._*
\.Spotlight-V100
\.Trashes
ehthumbs\.db
Thumbs\.db
```

### Configure Git Hooks

#### Automatically run `composer install` when switching branches
The following command creates a Git hook, which is executed whenever `git checkout` is executed.
This will run the `composer install` command to make sure you have the right packages and generated autoloaders.

```
cat <<EOT >> .git/hooks/post-receive
#!/bin/sh
composer install --working-dir=$GIT_DIR/../
EOT
chmod +x .git/hooks/post-receive
```

You can use this hook for every repository that uses Composer for its dependency management.
