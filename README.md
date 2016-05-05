# [promise2stream][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Transform ES2015 Promise to Stream - specifically, Transform Stream using [through2][]. Works in object mode by default, but you can pass options directly to the [through2][] package.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i promise2stream --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const promise2stream = require('promise2stream')
```

## Related
* [limon](https://www.npmjs.com/package/limon): The pluggable JavaScript lexer on per character basis. | [homepage](https://github.com/limonjs/limon)
* [postcss](https://www.npmjs.com/package/postcss): Tool for transforming styles with JS plugins | [homepage](http://postcss.org/)
* [posthtml](https://www.npmjs.com/package/posthtml): HTML/XML processor | [homepage](https://github.com/posthtml/posthtml)
* [postjson](https://www.npmjs.com/package/postjson): Transforming JSON with plugins. | [homepage](https://github.com/postjson/postjson)
* [promise2thunk](https://www.npmjs.com/package/promise2thunk): Convert (transform) promise to thunk, just like was in co@3 | [homepage](https://github.com/tunnckocore/promise2thunk)
* [stream-from-promise](https://www.npmjs.com/package/stream-from-promise): Create streams from promises | [homepage](https://github.com/schnittstabil/stream-from-promise)
* [through2](https://www.npmjs.com/package/through2): A tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise | [homepage](https://github.com/rvagg/through2)
* [thunk2promise](https://www.npmjs.com/package/thunk2promise): Transform or convert thunk to Bluebird Promise. | [homepage](https://github.com/tunnckocore/thunk2promise)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/hybridables/promise2stream/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[through2]: https://github.com/rvagg/through2

[npmjs-url]: https://www.npmjs.com/package/promise2stream
[npmjs-img]: https://img.shields.io/npm/v/promise2stream.svg?label=promise2stream

[license-url]: https://github.com/hybridables/promise2stream/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/promise2stream.svg

[downloads-url]: https://www.npmjs.com/package/promise2stream
[downloads-img]: https://img.shields.io/npm/dm/promise2stream.svg

[codeclimate-url]: https://codeclimate.com/github/hybridables/promise2stream
[codeclimate-img]: https://img.shields.io/codeclimate/github/hybridables/promise2stream.svg

[travis-url]: https://travis-ci.org/hybridables/promise2stream
[travis-img]: https://img.shields.io/travis/hybridables/promise2stream/master.svg

[coveralls-url]: https://coveralls.io/r/hybridables/promise2stream
[coveralls-img]: https://img.shields.io/coveralls/hybridables/promise2stream.svg

[david-url]: https://david-dm.org/hybridables/promise2stream
[david-img]: https://img.shields.io/david/hybridables/promise2stream.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg