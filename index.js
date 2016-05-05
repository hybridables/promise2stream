/*!
 * promise2stream <https://github.com/hybridables/promise2stream>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var then = require('then-callback')
var through2 = require('through2')
var isPromise = require('is-promise')

/**
 * > Transform a Promise `val` to transform stream.
 *
 * **Example**
 *
 * ```js
 * var promise2stream = require('promise2stream')
 * var promise = Promise.resolve(123)
 *
 * var stream = promise2stream(promise)
 * stream
 *   .on('data', function (val) {
 *     console.log(val) // => 123
 *   })
 *   .once('error', console.error)
 *   .once('end', function () {
 *     console.log('end')
 *   })
 *
 * // or access the promise
 * stream.promise.then(function (val) {
 *   console.log(val) // => 123
 * }, console.error)
 * ```
 *
 * @param  {Promise} `val` Some promise.
 * @param  {Object} `opts` Options passed directly to [through2][].
 * @return {Stream}
 * @api public
 */

module.exports = function promise2stream (val, opts) {
  if (!isPromise(val)) {
    throw new TypeError('promise2stream: expect `val` be promise')
  }

  opts = typeof opts === 'object' ? opts : {}
  opts.objectMode = typeof opts.objectMode === 'boolean' ? opts.objectMode : true

  var stream = through2(opts)
  stream.promise = val
  stream.promise = then(stream.promise)
    .then(function cb (err, res) {
      if (err) return stream.emit('error', err)
      stream.push(res)
      stream.push(null)
    })

  return stream
}
