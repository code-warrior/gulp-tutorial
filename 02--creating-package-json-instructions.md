## Creating `package.json`
Gulp requires a manifest file called `package.json` that configures its tasking environment. We’ll cover the the basics that most people use, but you can look at [https://docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json) for more.

Create a folder anywhere on your computer that isn’t this repo and name it `compress-html`. (A folder in this repo called `compress-html` already exists. Ignore it.) Navigate into the folder and initialize the creation of `package.json`:
```bash
npm init
```
You are now in interactive mode with NPM to populate `package.json` with some basic entries.

The first entry you’re required to interact with is for the package name. The default, rendered in parentheses, is the name of the folder in which `npm init` was run. Items in parentheses become the default value if the user hits `return`. Items without parentheses enter blank values if the user hits `return`.
```bash
package name: (compress-html)
```

Take the default. As your projects improve, you would update its version number.
```bash
version: (1.0.0)
```

Taking a moment to describe your project will help you to distinguish one project from another.
```bash
description:
```

If you were authoring a Node program, `index.js` might be the program that initiates your project. However, because our project is a Gulp task running project, we use `gulpfile.js` (or `Gulpfile.js`) as the entry point.
```bash
entry point: (index.js): gulpfile.js
```

This setting allows for tests to be run using `npm run-script SCRIPT`, where `SCRIPT` is one or more command(s)/script(s) you might use to test your project before deployment. At the outset, we won’t need it. Hit `return`.
```bash
test command
```

If your project is being synced with a remote, that would go here. Leave it blank at outset.
```bash
git repository:
```

These keywords are used by `npmjs` to search. Leave these empty for now.
```bash
keywords:
```

Enter your name
```bash
author:
```

This option takes an SPDX-formatted license initialism, listed at [https://spdx.org/licenses/](https://spdx.org/licenses/). Take the default.
```bash
license: (ISC)
```

And, finally, a report of all your entries is given to you for verification. If it all looks correct, hit `return`.
```bash
Is this OK? (yes)
```
One last note. If you want to stand up a Gulp project and you’re willing to take all the defaults for your `package.json` file, simply run `npm init --yes`.

§
