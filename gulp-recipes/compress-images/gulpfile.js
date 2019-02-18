const { src, dest } = require(`gulp`);
const cache = require(`gulp-cache`);
const imageCompressor = require(`gulp-imagemin`);

let compressImages = () => {
    // Read about the double-star glob pattern at
    // https://gulpjs.com/docs/en/getting-started/explaining-globs#special-character-double-star
    return src([
        `uncompressed-images/**/*.png`,
        `uncompressed-images/**/*.jpg`,
        `uncompressed-images/**/*.svg`,
        `uncompressed-images/**/*.gif`
    ])
        .pipe(cache(
            imageCompressor({
                optimizationLevel: 3, // For PNG files. Accepts 0 – 7; 3 is default.
                progressive: true,    // For JPG files.
                multipass: false,     // For SVG files. Set to true for compression.
                interlaced: false     // For GIF files. Set to true for compression.
            })
        ))
        .pipe(dest(`compressed-images`));
};

exports.compressImages = compressImages;
