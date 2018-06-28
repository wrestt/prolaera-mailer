'use strict';

var _domHelpers = require('../domHelpers');

var _domHelpers2 = _interopRequireDefault(_domHelpers);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(
            function(value) {
              step('next', value);
            },
            function(err) {
              step('throw', err);
            }
          );
        }
      }
      return step('next');
    });
  };
}

describe('domHelper functions', function() {
  it(
    'checks setInnerHtml function is returning parsed data correctly',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var testData1, parsedData1, testData2, parsedData2, testData3, parsedData3;
        return regeneratorRuntime.wrap(
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
