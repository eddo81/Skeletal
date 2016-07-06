/**
 *
 *  config.js
 *  =========
 *
 */

 (function() {
 'use strict';

   const debug        = ((process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production') ? true : false;
   const pkg          = require('../../package.json');
   const src_path     = 'src/';
   const dest_path    = 'public/';
   const folders      = {

    src: {
      components: 'components/',
      style: 'scss/',
      scripts: 'scripts/',
      images: 'images/',
      fonts: 'fonts/',
      tools: 'tools/'
    },

    dest:{
      style: 'css/',
      scripts: 'js/',
      images: 'img/',
      fonts: 'fonts/',
    }

  };

   module.exports = {

     globs: {

       html: {
         src: src_path + 'index.html',
         dest: dest_path
       },

       js: {
         src: src_path + folders.src.scripts + 'main.js',
         dest: dest_path + folders.dest.scripts
       },

       css: {
        src: src_path + folders.src.style + 'style.scss',
        dest: dest_path + folders.dest.style
       },

       img: {
         src: src_path + folders.src.images + '**/*.+(png|jpg|jpeg|gif|svg)',
         dest: dest_path + folders.dest.images
       },

       fonts: {
         src: src_path + folders.src.fonts + '**/*.+(ttf|woff|eof|eot|svg)',
         dest: dest_path + folders.dest.style + folders.fonts
       },

       components: {

        html: {
          src: src_path + folders.src.components + '**/*.html'
        },

        js: {
          src: src_path + folders.src.components + '**/*.js'
        },

        css: {
          src: src_path + folders.src.components + '**/*.scss'
        }

       },

       root_src: src_path,
       root_dest: dest_path,
       folders: folders
     },

     debug: debug,

     pkg: pkg
   };

 })();