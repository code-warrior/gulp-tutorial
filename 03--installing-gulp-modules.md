# Installing Gulp Modules
With `package.json` in place, we can now choose the Gulp module(s) we need in order to auto-task our development work. This is usually done with the command `npm i -D MODULE`: `i`nstall `MODULE` and save it for use during `-D`evelopment. (The long form of `npm i -D MODULE` is `npm install --save-dev MODULE`.)

`MODULE` is the name of a Gulp module we’d invoke in a task. As an example, let’s use `gulp-htmlmin`, which is a module that compresses HTML files. In the same folder in which `package.json` was created, let’s run:
```bash
npm i -D gulp-htmlmin
```

This will search for `gulp-htmlmin` in the [NPM registry](https://registry.npmjs.org/), then, if found, download the `gulp-htmlmin` module into a folder called `node_modules`. If `node_modules` doesn’t exist, this module will create it. (Every first module fetched from the registry will create `node_modules` if `node_modules` isn’t found.)

If you open `package.json`, you’ll note that a new object called `devDependencies` was added with a member whose name is `"gulp-htmlmin"` and whose value is `"^5.0.1"` (`"gulp-htmlmin": "^5.0.1"`). This means that the versions of `gulp-htmlmin` that will be used range from `5.0.1` → `6.0.0`, inclusive and exclusive, respectively. (Read more at [https://docs.npmjs.com/misc/semver#caret-ranges-123-025-004](https://docs.npmjs.com/misc/semver#caret-ranges-123-025-004).)

Let’s also install a local version of Gulp:
```bash
npm i -D gulp
```

Note the new `gulp` member object in `devDependencies`.

§
