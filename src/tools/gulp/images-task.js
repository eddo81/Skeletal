/**
 *  images-task.js
 *  ==============
 *  Optimize images.
 *
 */

module.exports = function (gulp, plugins, config) {

  const options = {

    imagemin: {
      progressive: true,
      interlaced: true
    },

    size: {
      title: 'images'
    }

  };

  gulp.task('images', function () {

    gulp.src(config.globs.img.src)
      .pipe(plugins.newer(config.globs.img.dest))
      .pipe(plugins.if(!config.debug, plugins.imagemin(options.imagemin)))
      .pipe(gulp.dest(config.globs.img.dest))
      .pipe(plugins.size(options.size))
  });

};