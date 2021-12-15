// gulp
import gulp from 'gulp';
import gulpif from 'gulp-if';

const env = process.env.NODE_ENV || 'development';

export const fonts = () => {
  return gulp
    .src('./src/fonts/**/*')
    .pipe(gulpif(env === 'development', gulp.dest('./dist/fonts')))
    .pipe(gulpif(env === 'production', gulp.dest('./build/fonts')));
};
