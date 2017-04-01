<img src="https://cdn.rawgit.com/eddo81/skeletal/master/src/images/skeletal-logo.svg" />
<sub>(Icon made by [Webalys](http://www.flaticon.com/authors/webalys) from [www.flaticon.com](http://www.flaticon.com))</sub>

## Description

The Skeletal starter kit consists of various front end tools such Gulp 4, Webpack 2 and regular NPM scripts, configured in a way that caters to a more modular/component based development workflow. The purpose of Skeletal is to provide tooling that is generic enough to serve as a starting point for any kind of project, while still being easy to extend if the need arises.

###### Features the usual suspects of front-end tooling

> * Live reloding with BrowserSync
> * SASS-compliation with node-sass
> * Image optimization with Imagemin
> * Liting with Eslint
> * Transpilation, bundling and module loading with Webpack

## Installation

Clone the Github repo, and run the install script:

```
$ git clone https://github.com/eddo81/skeletal.git
$ cd skeletal
$ npm install
```

### Dependencies

Before running the install script do make sure to have all the necessary dependencies installed on your system.
You will need the following package managers to initialize the Skeletal starter kit:

> * [Node & Npm](https://nodejs.org/)

### Npm Scripts

To run the project in development mode run:

```
$ npm start
```

To create a production build of the project run:

```
$ npm run build
```

To run Critical CSS in your project (inline "above the fold" CSS) run:

```
$ npm run postbuild
```

To run clean out the public folder type:

```
$ npm run clean
```

## Contributors

The following people have helped create the Skeletal starter kit:

* [Eduardo Jönnerstig](https://github.com/eddo81)

## License

The Skeletal starter kit is a free seed project and carries a [MIT license](https://github.com/eddo81/skeletal/blob/master/LICENSE?raw=true).