// gulp
import gulp, { parallel, series } from 'gulp';
import browsersync from 'browser-sync';

//tasks
import { js } from './src/gulp/javascript.gulp';
import { css } from './src/gulp/css.gulp';
import { sassLint, jsLint } from './src/gulp/linters.gulp';

const myBrowsersync = () => {
  let files = [
    '*.html',
    'main.js',
    'styles.css',
  ];
  browsersync.init(files, {
    server: {
      baseDir: './',
    },
  });
};

const watchFiles = () => {
  gulp.watch('src/scss/**/*', parallel(css, sassLint));
  gulp.watch('src/js/**/*', parallel(js, jsLint));
  gulp.watch('src/iconfont/**/*', css);
  myBrowsersync();
};

export const dev = parallel(js, css);
export const prod = parallel(
  js,
  css
);
export const watch = series(dev, watchFiles);
