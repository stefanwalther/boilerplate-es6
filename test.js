'use strict';

require('mocha');
var assert = require('assert');
var es6Boilerplate = require('./');

describe('es6-boilerplate', function() {
      it('should export a function', function() {
    assert.equal(typeof es6Boilerplate, 'function');
  });

    it('should export an object', function() {
    assert(es6Boilerplate);
    assert.equal(typeof es6Boilerplate, 'object');
  });

    it('should throw an error when invalid args are passed', function(cb) {
    try {
      es6Boilerplate();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected first argument to be a string');
      assert.equal(err.message, 'expected callback to be a function');
      cb();
    }
  });
});
