# Writing the Gulpfile
It’s in this last step that we write the Gulp task(s). Most times, if not every time, you’ll think of some feature in the development or deployment of your project, Google the terms, then find yourself on either the NPMJS page for the Gulp plugin, or its GitHub page.

In fact, let’s try it. Google “gulp html compressor,” without the inch marks. You’ll likely come across a handful of links to Gulp plugins for minifiying/compressing HTML. Let’s go with [`gulp-htmlmin`](https://www.npmjs.com/package/gulp-htmlmin).

The NPMJS page for a Gulp plugin will usually have an **Install** section, one or more examples in the **Usage** section, and options under the **API** section.

**Note**: Because Gulp 4 was released in January 2018, it’s still considered relatively new. As such, many examples on the NPMJS web site and on the web were written in Gulp 3.9.x. All examples in this tutorial and repo are written in Gulp 4.0.0.

Using the `compress-html` folder we’ve been working with during this tutorial, create a folder called `uncompressed-html`, then add to it an HTML document called `index.html`.

Now, create an empty file called `gulpfile.js` in `compress-html`. Recall from step 2 of this tutorial that `gulpfile.js` is the `entry point` in `package.json`. Before continuing, ensure the folder `compress-html` has the following folders/files:
* `package.json`
* `uncompressed-html/index.html`
* `gulpfile.js`
* `node_modules` (there are too many folders/files to list under `node_modules`, so just ensure it exists)

Copy and paste the following into `gulpfile.js`.

```javascript
const { src, dest } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);

let compressHTML = () => {
    return src(`uncompressed-html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`compressed-html/`));
}

exports.compressHTML = compressHTML;
```

Before I explain the syntax, run the following from your command line:
```bash
gulp compressHTML
```

If there were no problems, then a new folder called `compressed-html` would have been added to the `compress-html` folder, and `index.html` from the folder `uncompressed-html` would have been copied into `compressed-html`, but minified/compressed. Open`index.html` in a text editor and verify that it, indeed, has been minified/compressed.

Now, back to the code.

## Line 1
```javascript
const { src, dest } = require(`gulp`);
```

Standing for source and destination, respectively, `src` and `dest` are Gulp functions used to source input (`src`) and to generate output (`dest`).

## Line 2
```javascript
const htmlCompressor = require(`gulp-htmlmin`);
```

Recall that we installed the Gulp module/plug-in earlier by running `npm i -D gulp-htmlmin`, which installed `gulp-htmlmin` into the `node_modules` folder. This assignment gives us access to `gulp-htmlmin`’s features.

## Lines 4–8
```javascript
let compressHTML = () => {
  return src(`uncompressed-html/*.html`)
    .pipe(htmlCompressor({collapseWhitespace: true}))
    .pipe(dest(`compressed-html/`));
}
```

First, a note about task naming. Instead of echoing the name of the Gulp module in the task name, I name tasks based on what they do. This differs somewhat from the approach taken by many in the Gulp community. As an educator, I find this to be easier to understand. Thus, naming the task `compressHTML` is clearer than naming it something like `gulp-htmlmin`.

Now, back to the code on lines 4–8.

We establish a function, which we’ll also refer to as a task, called `compressHTML`, which will do the following:
1. Source  all HTML files in the `uncompressed-html` folder.
2. Pipe, or send,  the outputof all the HTML files  to our `htmlCompressor` function, which, in turn, receives an object of options (a common Gulp feature) that collapses whitespace.
3. Pipe the compressed HTML files, which are copies of the original files in the `uncompressed-html` folder, to the final destination: the  `compressed-html` folder. If the folder doesn’t exist, the `dest` function will create it; the compressed files retain the names of the original files copied from the `compressed-html` folder.

## Last Line
```javascript
exports.compressHTML = compressHTML;
```

And, finally, the last line in this `gulpfile` needs to expose the task to Gulp. The `compressHTML` component in `exports.compressHTML` is what is exposed to Gulp on the command line, and the `compressHTML` task in the `gulpfile` to the right of the assignment operator (`=`) is our local, private task that is made public in the assignment. It’s common to assign the name of the local task to `exports` for public exposure to Gulp.

You’ve authored your first Gulp task.

§
