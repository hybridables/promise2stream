/*!
 * promise2stream <https://github.com/tunnckoCore/promise2stream>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var then = require('then-callback')
var through2 = require('through2')
var isPromise = require('is-promise')

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
