'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _dompurify = require('dompurify');

var _dompurify2 = _interopRequireDefault(_dompurify);

var _jsdom = require('jsdom');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var window = new _jsdom.JSDOM('').window;
var domPurify = (0, _dompurify2.default)(window);

function setInnerHtml(string) {
  var clean = domPurify.sanitize(string);
  return { __html: clean };
}

exports.default = setInnerHtml;
