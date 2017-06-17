/**
 *  images-task.js
 *  ==============
 *  Optimize images.
 *
 */

module.exports = (gulp, plugins, config) => {

  gulp.task('images', () => {
    const options = {
      plugins: [
        plugins.imagemin.gifsicle({interlaced: true}),
        plugins.imagemin.jpegtran({progressive: true}),
        plugins.imagemin.optipng({optimizationLevel: 5}),
        plugins.imagemin.svgo({plugins: [{removeViewBox: true}]})
      ],
      imagemin: {
        verbose: true
      }
    };

    return gulp.src(config.globs.img.src)
      .pipe(plugins.newer(config.globs.img.dest))
      .pipe(!config.debug ? plugins.imagemin(options.plugins, options.imagemin) : plugins.util.noop())
      .pipe(gulp.dest(config.globs.img.dest))
  });
};
