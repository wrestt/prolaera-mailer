'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _domHelpers = require('../domHelpers');

var _domHelpers2 = _interopRequireDefault(_domHelpers);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('domHelper functions', function() {
  it(
    'checks setInnerHtml function is returning parsed data correctly',
    (0, _asyncToGenerator3.default)(
      /*#__PURE__*/ _regenerator2.default.mark(function _callee() {
        var testData1, parsedData1, testData2, parsedData2, testData3, parsedData3;
        return _regenerator2.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  testData1 = '<TABLE><tr><td>HELLO</tr></TABL>';
                  parsedData1 = (0, _domHelpers2.default)(testData1);
                  testData2 = '<svg><g/onload=alert(2)//<p>';
                  parsedData2 = (0, _domHelpers2.default)(testData2);
                  testData3 = '<UL><li><A HREF=//google.com>click</UL>';
                  parsedData3 = (0, _domHelpers2.default)(testData3);

                  expect(parsedData1).toEqual({ __html: '<table><tbody><tr><td>HELLO</td></tr></tbody></table>' });
                  expect(parsedData2).toEqual({ __html: '<svg><g></g></svg>' });
                  expect(parsedData3).toEqual({ __html: '<ul><li><a href="//google.com">click</a></li></ul>' });

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          undefined
        );
      })
    )
  );
});
