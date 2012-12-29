require("./core/core");

require("util").puts(JSON.stringify({
  "name": "d3",
  "version": d3.version,
  "description": "A small, free JavaScript library for manipulating documents based on data.",
  "keywords": ["dom", "w3c", "visualization", "svg", "animation", "canvas"],
  "homepage": "http://d3js.org",
  "author": {"name": "Mike Bostock", "url": "http://bost.ocks.org/mike"},
  "repository": {"type": "git", "url": "https://github.com/mbostock/d3.git"},
  "main": "index.js",
  "browserify" : "index-browserify.js",
  "jam": {
    "main": "d3.js",
    "shim": {
      "exports": "d3"
    }
  },
  "dependencies": {
    "jsdom": "0.2.14",
    "sizzle": "1.1.x"
  },
  "devDependencies": {
    "uglify-js": "2.2.2",
    "vows": "0.6.x"
  },
  "scripts": {"test": "./node_modules/vows/bin/vows"}
}, null, 2));
