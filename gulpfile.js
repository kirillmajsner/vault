function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      rename = require('gulp-rename'),
      minify = require('gulp-uglify')

gulp.task('css', function() {
  gulp.src('uncompiled_scss/style.scss')
  .pipe(sass({
    outputStyle: 'compact'
  }))
  .on('error', swallowError)
  .pipe(autoprefixer({
    browsers: ['last 5 versions'],
    cascade: false,
    grid: true
  }))
  .pipe(gulp.dest('assets/styles/'))
})

gulp.task('watch', function(){
  gulp.watch('uncompiled_scss/**/*', ['css'])
})

gulp.task('default', ['watch', 'css'])
