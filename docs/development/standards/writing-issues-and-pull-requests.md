---
id: writing-issues-and-pull-requests
title: Standards - Writing issues and pull requests
sidebar_label: Writing issues and pull requests
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/development/standards/writing-issues-and-pull-requests.md
---

A very important aspect of working in teams, is proper communication. This isn't limited to just team members, but also everyone involved (i.e. customers, managers, developers etc.).
To be as efficient as possible, we adhere a few rules at Yoast regarding writing issues and pull request messages.

## Issues
There are a few important aspects when writing issues. This is something we try to enforce as much as possible. In general, you can adhere these same steps when submitting an issue to one of the repositories, however sometimes issues don't fit within the template. More about that later.

### Title
The following rules should be followed when writing titles:
* No usage of labels such as [Feature], [Bug] etc. GitHub has labels for this exact reason.
* Clearly word what the problem is. Example: 'Redirects throw 404 errors despite having valid targets'. Refrain from messages such as: 'Redirects broken' as this isn't a good summary of the issue at hand.

### Content
The content of the issue is based on a standard template that has been added to most repositories. If you notice a repository without this template, please inform a member of the Plugin team.

In case a template is lacking, please make sure to add the following:

For bug reports:
* Describe what you expected to happen.
* Describe what actually happened.
* Describe the steps to reproduce said issue.
* Add what version of WordPress and Yoast SEO you are using. If relevant, also include what other third-party plugins are installed.

For features / enhancements:
* Describe the feature /enhancement you want to be added. Adding a motivation as to why you want it included, and adding clear specifications, you help the developer that will be working on said request by adding more context to the whole story. A request to add more / better tests is also considered an enhancement and should be labeled as such.

A few general notes regarding writing issues / feature requests:
* The wording needs to be directive.
* Adding screenshots is encouraged (when applicable).
* Add proper labels. If it refers to a specific component, please make sure you apply the applicable label. Also don't forget to label the status of the issue (i.e. `development`, `needs-codereview` etc.).

## Pull requests
Pull requests (PR) are slightly different from issues. Here's what to keep in mind when writing a PR.

### Title
Whereas the title for an issue describes the problem, the title for a PR describes the solution. Other than that, the same rules apply as with titles for issues.

### Content
For the content of a PR, you need to make sure you add the following things:
* A changelog entry. This changelog entry should be written in the present verb tense (See [Verb tenses](https://en.oxforddictionaries.com/grammar/verb-tenses)  for more information).
  Please don't shy away from adding a long, descriptive text to clearly communicate what the code does. Even if the PR only contains code that isn't user-facing, it is still useful for quality assurance and can have historical value.
  
    Examples:
    * Fixes a bug where [...].
    * Introduces a button that [...].
    * Removes code that [...].

* When submitting a PR on the 'monorepo', extra info is needed in front of the changelog entries, as that repository contains multiple packages. This is explained in the comment above the changelog entry, which can be found in the PR template.
    * Please note the difference between `[yoast-components]` and `[@yoast/components]`, the latter being the new one. They are not the same package.
    * Please add separate changelog entries for each package and/or change. It is fine if they use the same text when they describe the same change.
    * For inspiration see [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) .
* A changelog label. This is to indicate what type of change it is (For the monorepo see [types of changes](https://keepachangelog.com/en/1.0.0/#how) ).
    * The usage of  the 'user-facing' label, is dependent on the product the PR is destined for. In case of the plugin, this is the end user. For the monorepo, this is the library user, which means the PR can be a bit more technical.
* A milestone. This is important, so that we don't miss any testing paths and information in the changelog.
    * In a normal workflow a milestone can be added when merging a PR. In case of a feature branch (or similar), you can add the milestone when creating the PR.
    * If the desired milestone doesn't exist, you should create it.
    * When you merge a PR into a feature branch, there should be a milestone for that feature branch.
    * When you merge a PR into trunk/develop, you should know which release this code will be shipped in. As a general rule when merging to trunk/develop, this tends to be the release _after_ the upcoming release.
* Relevant technical choices need to be named when applicable. This allows you to share context on why you decided to use a particular solution. This entry mostly applies to PRs that contain a lot of changes or introduce a lot of new code.

* Testing steps. This is an important one; If you don't add testing steps, it'll be impossible for other developers to reproduce the old and new behavior and thus verify that your code actually works. Try to be as explicit as possible. This includes mentioning things such as particular settings that may need changing before testing or certain other plugins/themes that need to be installed. More on this below!

* Finally, it's very important you add the line `Fixes #<issue_id>` as it links the PR to the proper GitHub issue for automatic closing once the PR has been merged. In case of issues reported on Jira, the following format should be used: `Fixes [<issue ID>]`.

#### Writing test instructions
Whenever you submit a PR, it is essential that you also include proper testing instructions. This is because not only developers will be looking into this, but also testers (i.e. SEO and beta testers) will be checking whether issues have been properly fixed.

Please  ensure that the following is  described when submitting a PR:
* A small contextual introduction to the situation - Do not assume that the person testing has full knowledge of all the moving parts within the plugin. If you want people to ensure certain things are working as intended before they test your PR: Describe what they need to check.
* Only include relevant information - We only support the current version of our own plugin and have to be backwards-compatible with WordPress up to two versions back.
* WordPress support - Double-check that recent WordPress updates don't influence our own changes. If so, please add this in the PR so testers know that they might be a difference between WordPress versions.
* Customizing - If something like a custom post type or custom user rights are necessary for testing, please ensure you link to a solution (plugin, code-snippet etc.) that the tester can use.
