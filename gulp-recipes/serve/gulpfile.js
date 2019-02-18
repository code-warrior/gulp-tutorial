const { watch } = require(`gulp`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 0, // A delay is sometimes helpful when reloading at the
        server: {       // end of a series of tasks.
            baseDir: [
                `temp`,
                `html`
            ]
        }
    });

    watch(`html/**/*.html`).on(`change`, reload);
};

exports.serve = serve;
