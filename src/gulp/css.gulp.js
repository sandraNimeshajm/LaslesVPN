import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import flexBugsFix from 'postcss-flexbugs-fixes';
import autoprefixer from 'autoprefixer';
import postcssGapProperties from 'postcss-gap-properties';
import gulpif from 'gulp-if';

const env = process.env.NODE_ENV || 'development';

const plugins = [
  autoprefixer({
    grid: true,
  }),
  flexBugsFix,
  postcssGapProperties,
];

export const css = () => {
  return gulp
    .src(['./src/scss/styles.scss'])
    .pipe(
      gulpif(
        env === 'development',
        sass({ outputStyle: 'expanded', includePaths: ['node_modules'] })
      )
    )
    .pipe(
      gulpif(
        env === 'production',
        sass({ outputStyle: 'compressed', includePaths: ['node_modules'] })
      )
    )
    .pipe(gulpif(env === 'production', postcss(plugins)))
    .pipe(gulpif(env === 'development', gulp.dest('./')))
    .pipe(gulpif(env === 'production', gulp.dest('./')));
};
