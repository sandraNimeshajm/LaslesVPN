// gulp
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import sassLinter from 'gulp-sass-lint';

export const sassLint = () => {
  return gulp
    .src([
      'src/scss/**/*.scss',
      '!src/scss/config/icon-font-config.scss',
      '!src/scss/base/_icon-font.scss',
    ])
    .pipe(
      sassLinter({
        rules: {
          'no-ids': 0,
          'property-sort-order': 0,
          'class-name-format': [
            1,
            {
              'allow-leading-underscore': false,
              convention: 'strictbem',
            },
          ],
          indentation: 0,
          quotes: 0,
          'variable-name-format': 0,
          'leading-zero': 0,
        },
      })
    )
    .pipe(sassLinter.format())
    .pipe(sassLinter.failOnError());
};

export const jsLint = () => {
  return gulp.src(['src/js/**/*.js']).pipe(eslint()).pipe(eslint.format());
};
