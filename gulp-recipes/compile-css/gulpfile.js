const { src, dest } = require(`gulp`);
const sass = require(`gulp-sass`);

let compileCSS = () => {
    return src(`sass/main.scss`)
        .pipe(sass({
            outputStyle: `expanded`,
            precision: 10
        }).on(`error`, sass.logError))
        .pipe(dest(`css/`));
};

exports.compileCSS = compileCSS;
