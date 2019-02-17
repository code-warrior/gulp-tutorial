const { src, dest } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);

let compressHTML = () => {
    return src(`uncompressed-html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`compressed-html/`));
}

// The string after “exports.” is what is exposed to Gulp.
// For example, “compressHTML” is what is exposed when
// running “gulp --tasks”

exports.compressHTML = compressHTML;

// If you want compressHTML to be the default task,
// uncomment the following line and comment the previous
// one. Then you’d only need to run “gulp”, not
// “gulp compressHTML”.
// exports.default = compressHTML;
