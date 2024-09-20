---
id: productivity-tips-and-tricks
title: "Development productivity: tips and tricks"
sidebar_label: Productivity tips & tricks
---

Here's a few things you could do or learn to make your life a bit easier when it comes to software development. This is an ever-growing list; feel free to add to it!

**Note: Most of these instructions assume you're working with OSX.**

## PhpStorm

### Keyboard shortcuts

| Shortcut    | Description                                                                                                                                                                                                                                                                                                             |
|-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `⌘ + e`     | Opens the 'recent files' window. Select by typing the name of the file or moving up and down with arrow keys. Or press the return key directly for the previous file.                                                                                                                                                   |
| `⌥ + ↑`     | Hard to explain, just give it a try... Selects, or extends, the selection of text in your editor. Pressing it repeatedly, increases the scope in which code is selected. Can be used to select a word, a statement or variable, a line, a function or a class and so on.                                                |
| `⌘ + ⌥ + l` | Reformats your code according to what you have setup in your code style settings (`PhpStorm` → `Preferences` → `Editor` → `Code Style` → `{your language}`). A very useful tool for preventing your colleagues from requesting changes on your pull requests just for a code style error.                               |
| `⌘ + 9`     | Opens the 'version control' panel. Here you can check out the history of a branch. View which files are changed in what commit. And albeit with a little more effort, open the changed files in the editor (it defaults to changes window).                                                                             |
| `^ + g`     | [Multiple selection](https://blog.jetbrains.com/phpstorm/2014/03/working-with-multiple-selection-in-phpstorm-8-eap/): select next occurrence. Find the next occurrence of the selection and adds a cursor there too. Very handy for a quick refactor in one file. Also you can just `⌥ + click` to add an extra cursor. |

## Sublime Text

### Auto-indent code like PHPStorm does.
Open the keybinding settings in the menu bar: `Sublime Text` → `Preferences` → `Keybindings`

It opens two files. Edit the one on the right (It's specific for your user). Add this line between `[]` and then restart Sublime.
``` json
{ "keys": ["command+option+l"], "command": "reindent", "args": {"single_line": false} }
```

`⌘ + ⌥ + l` now properly indents your code.

## iTerm 2

### Natural Text Editing
In normal text editors on your Mac, you can navigate through text quickly using `⌘ + ←` or `⌘ + →`. To enable this in iTerm 2, go to `Preferences` → `Profiles` → `Keys`. Then, click the "Presets" dropdown and select "Natural Text Editing".

## Git

### Delete merged branches
(This only deletes them locally and does not affect the remote in any way.)

Add this line to your `~/.bash_profile` or `~/.zshrc` file. Use the latter only if you're using Z-shell (or `echo $SHELL` outputs something like `/bin/zsh`).

```shell script
alias delete-merged='git branch --merged | grep -v "\*" | grep -v main | grep -v trunk | grep -v develop | xargs -n 1 git branch -d'
```
You can now use `delete-merged` in the terminal in any git repository to delete branches which have been merged to either `trunk`, `develop` or `main`.

### Aliases tips
This is a nice post about git aliases: https://haacked.com/archive/2014/07/28/github-flow-aliases/

## Autojump
Autojump is an awesome tool for moving where you need to go in the terminal blazingly fast.

if you have brew installed, which you totally should, run `brew install autojump`. Then, if you're using [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh), simply search for the `plugins` variable in the `~/.zshrc` file and add `autojump` to the list. After sourcing that config file again, or restarting the terminal, you can use `j` to jump to any directory you have visited earlier while autojump was installed.

### Example
Instead of `cd ~/Dev/yoast.com/site/web/app/themes/yoast-com`, you can type `j yoast-c` directly. It only needs a small part of the path or directory name to know where it should go.

If autojump picks the incorrect directory, simply run the command again. It will then pick the second-best match. You could then boost the current directory's weight by calling `j -i [WEIGHT]` from that directory. run `j -s` to see the current weights of all indexed directories.

## Command line
* `pbcopy` will copy a certain result to your clipboard.
* `pbpaste` will paste your last copied text from your clipboard.

So to get your SSH key into GitHub you could use the following command, `cat ~/.ssh/id_rsa.pub | pbcopy` and then paste it into to GitHub UI. `pbpaste` is very useful if you copied data from somewhere that needs to go into a script. Use `pbpaste | ./awesome-data-processing-script.php`.

## `sudo` easiness
* Increase `sudo` timeout: Add this to your `/etc/sudoers` file: 
```shell script
Defaults timestamp_timeout=15
```
