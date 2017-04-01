/**
 *  images-task.js
 *  ==============
 *  Optimize images.
 *
 */

module.exports = (gulp, plugins, config) => {

  gulp.task('images', () => {
    const options = {
      imagemin: {
        progressive: true,
        interlaced: true
      }
    };

    return gulp.src(config.globs.img.src)
      .pipe(plugins.newer(config.globs.img.dest))
      .pipe(!config.debug ? plugins.imagemin() : plugins.util.noop())
      .pipe(gulp.dest(config.globs.img.dest));
  });
};
