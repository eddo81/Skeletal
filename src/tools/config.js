/**
 *  config.js
 *  =========
 *
 */

 (function() {
 'use strict';

   const debug        = ((process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production') ? true : false;
   const pkg          = require('../../package.json');
   const path         = require('path');
   const src_path     = 'src/';
   const dest_path    = 'public/';
   const namespace    = 'S_';

   const folders = {
     src: new function () {
       this.root       = path.basename(path.join(__dirname, '../../')) + '/';
       this.assets     = 'assets/';
       this.scripts    = 'scripts/';
       this.tools      = 'tools/';
       this.framework  = 'vue/';

       this.style      = this.assets + 'scss/';
       this.images     = this.assets + 'images/';
       this.videos     = this.assets + 'videos/';
       this.fonts      = this.assets + 'fonts/';
       this.gulp       = this.tools + 'gulp/';
       this.webpack    = this.tools + 'webpack/';
     },

     dest: new function () {
       this.style   = 'css/';
       this.scripts = 'js/';
       this.images  = 'img/';
       this.videos  = 'videos/';
       this.fonts   = this.style + 'fonts/';
     }
   };
   
    const server = {
      localhost: 'http://localhost:80/',
      public_path: folders.src.root + dest_path
    };

   module.exports = {

    tools: {

      webpack: {
        root: './' + src_path + folders.src.webpack, //check this
        exclude: /(node_modules|bower_components)/,
        extensions: {
          js: [/\.(js|es6)$/i],
          vue: [/\.vue$/],
          sass: [/\.s[a|c]ss$/],
          text: [/\.(html|xml|txt)$/i]
        }
      },

      gulp: {
        root: './' + src_path + folders.src.gulp
      },

      browsersync: {
        port: 3000,
        proxy: {
          active: false,
          target: server.localhost + server.public_path
        }
      },

      uncss: {
        ignore: [
          RegExp('^(\.' + namespace + '|#' + namespace + ')+'),
          /^(\.container|\.row|\.col)+/,
          /^(\.fa|\.fa-)+/
        ]
      }

    },

     globs: {

      html: {
        src: src_path + 'index.html',
        dest: dest_path
      },

      js: {
        src: folders.src.scripts + 'main.js',
        dest: folders.dest.scripts + 'bundle.js'
      },

      css: {
        src: src_path + folders.src.style + 'style.scss',
        dest: dest_path + folders.dest.style
      },

      img: {
        src: src_path + folders.src.images + '**/*.+(png|jpg|jpeg|gif|svg|tiff|bmp|ico)',
        dest: dest_path + folders.dest.images
      },

      videos: {
        src: src_path + folders.src.videos + '**/*.+(mov|avi|ogg|ogv|webm|flv|swf|mp4)',
        dest: dest_path + folders.dest.videos
      },

      fonts: {
        src: src_path + folders.src.fonts + '**/*.+(ttf|woff|woff2|eof|eot|svg)',
        dest: dest_path + folders.dest.fonts
      },

      root_src: src_path,
      root_dest: dest_path,
      folders: folders,
      server: server
     },

     debug: debug,

     pkg: pkg
   };

 })();
