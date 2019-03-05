const { src } = require(`gulp`);
const cssLinter = require(`gulp-stylelint`);

let lintCSS = () => {
    return src(`css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
};

exports.lintCSS = lintCSS;
