'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PersonIndex = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Person = require('./model/Person');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PersonIndex = exports.PersonIndex = function () {
  function PersonIndex() {
    _classCallCheck(this, PersonIndex);

    this.props = {};
    var person = new _Person.Person('Stefan', 'Walther');
    this.props.person = person;
    this.props.fullName = person.fullName;
  }

  _createClass(PersonIndex, [{
    key: 'person',
    get: function get() {
      return this.props.person;
    }
  }]);

  return PersonIndex;
}();
//# sourceMappingURL=PersonIndex.js.map
