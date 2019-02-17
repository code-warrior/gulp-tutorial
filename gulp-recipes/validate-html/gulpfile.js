const { src } = require(`gulp`);
const htmlValidator = require(`gulp-html`);

let validateHTML = () => {
    return src(`html-files/*.html`)
        .pipe(htmlValidator());
};

exports.validateHTML = validateHTML;
