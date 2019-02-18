const { src, dest } = require(`gulp`);
const jsCompressor = require(`gulp-uglify`);
const babel = require(`gulp-babel`);

let compressJS = () => {
    return src(`uncompressed-scripts/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`compressed-scripts`));
};

exports.compressJS = compressJS;
