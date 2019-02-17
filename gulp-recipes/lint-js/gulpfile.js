const { src } = require(`gulp`);
const jsLinter = require(`gulp-eslint`);

let lintJS = () => {
    return src(`scripts/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};

exports.lintJS = lintJS;
