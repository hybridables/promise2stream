/*!
 * promise2stream <https://github.com/hybridables/promise2stream>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var fs = require('fs')
var test = require('assertit')
var promise2stream = require('./index')
var isPromise = require('is-promise')
var isStream = require('is-node-stream')
var isBuffer = require('is-buffer')
var Promize = require('pinkie-promise')

test.true = function (val) {
  test.strictEqual(isStream(val), true)
}

test('should throw TypeError if `val` not a promise', function (done) {
  function fixture () {
    promise2stream(123)
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `val` be promise/)
  done()
})

test('should create stream from a resolved promise', function (done) {
  var promiseNumber = Promize.resolve(123)
  var promiseString = Promize.resolve('str')
  var promiseBuffer = Promize.resolve(new Buffer('buff'))

  test.true(promise2stream(promiseNumber))
  test.true(promise2stream(promiseString))
  test.true(promise2stream(promiseBuffer))
  done()
})

test('should fire `end` event if promise resolves `null` value', function (done) {
  var promise = Promize.resolve(null)
  var stream = promise2stream(promise)
  var called = 0

  /* istanbul ignore next */
  stream.on('data', function (val) {
    called++
  })
  stream.once('error', done)
  stream.once('end', function () {
    test.strictEqual(called, 0)
    done()
  })
})

test('should fire `error` event if rejected promise', function (done) {
  var rejectedPromise = Promize.reject(new Error('foo bar'))
  var stream = promise2stream(rejectedPromise)

  stream.once('error', function (err) {
    test.strictEqual(err instanceof Error, true)
    test.strictEqual(err.message, 'foo bar')
    done()
  })
})

test('should fire `data` event if resolved promise with number value', function (done) {
  var resolvedPromise = Promize.resolve(123)
  var stream = promise2stream(resolvedPromise)

  stream.on('data', function (val) {
    test.strictEqual(val, 123)
  })
  stream.once('error', done)
  stream.once('end', done)
})

test('should fire `data` event if object value', function (done) {
  var promise = Promize.resolve({ a: 'b' })
  var stream = promise2stream(promise)

  stream.on('data', function (val) {
    test.deepEqual(val, { a: 'b' })
  })
  stream.once('error', done)
  stream.once('end', done)
})

test('should get buffer if promise resolves buffer value', function (done) {
  var buffer = Promize.resolve(new Buffer('a b. c'))
  promise2stream(buffer)
    .on('data', function (buf) {
      test.strictEqual(isBuffer(buf), true)
      test.strictEqual(buf.toString('utf8'), 'a b. c')
    })
    .on('end', done)
})

test('should not be object mode stream (opts.objectMode: false)', function (done) {
  var promise = Promize.resolve({ foo: 'bar' })
  var stream = promise2stream(promise, { objectMode: false })
  stream.on('error', function (err) {
    test.ifError(!err)
    test.strictEqual(err instanceof TypeError, true)
    test.strictEqual(/Invalid non-string\/buffer chunk/gi.test(err.message), true)
    done()
  })
})

test('should access the promise from returned stream, e.g. `stream.promise`', function (done) {
  var promise = Promize.resolve(456)
  var stream = promise2stream(promise)

  test.strictEqual(isPromise(stream.promise), true)

  stream.promise.then(function (val) {
    test.strictEqual(val, 456)
    done()
  }, done)
})

test('should get value of promise that resolves another promise', function (done) {
  var promise = Promize.resolve('foo bar')
  var resolved = Promize.resolve(promise)
  var stream = promise2stream(resolved)
  stream
    .on('data', function (val) {
      test.strictEqual(val, 'foo bar')
    })
    .once('error', done)
    .once('end', done)
})

test('should not get value of resolved stream', function (done) {
  var pkgStream = fs.createReadStream('package.json')
  pkgStream
    .on('data', function (val) {
      var str = val.toString('utf8')
      test.strictEqual(isBuffer(val), true)
      test.strictEqual(str.indexOf('license') !== -1, true)
    })
    .once('error', done)
    .once('end', function () {
      var promise = Promize.resolve(pkgStream)
      var stream = promise2stream(promise)
      stream
        .on('data', function (val) {
          test.strictEqual(isStream(val), true)
        })
        .once('error', done)
        .once('end', done)
    })
})
