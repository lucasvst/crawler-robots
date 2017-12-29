# Crawler Robots

## This is a proof of concept of how to use web crawling tools only with JS.

You must have Node(v8.9.3) and NPM(5.5.1) installed.

```
https://lucasvst.wordpress.com/2017/09/18/nodejs-porque-usar-um-version-manager/
```

Installing dependencies:

```
$ npm install
```

In this version you must run each bot isolated (e.g.):

```
$ cd robots/celesc
$ node lista-e.js
```

2 new files will be created:
 - lista-e.js.pdf (a screenshot of visited page)
 - lista-e.js.json (a file with the table rows contained in visited page)