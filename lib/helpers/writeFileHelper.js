'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var writeFile = (function() {
  var _ref = (0, _asyncToGenerator3.default)(
    /*#__PURE__*/ _regenerator2.default.mark(function _callee(emailHtml, htmlFileName) {
      return _regenerator2.default.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                return _context.abrupt(
                  'return',
                  new _promise2.default(function(resolve, reject) {
                    _fs2.default.writeFile(__dirname + '/../templates/tests/html/' + htmlFileName, emailHtml, function(
                      err
                    ) {
                      if (err) {
                        console.log(err);
                        reject(err);
                      }
                      resolve(true);
                    });
                  })
                );

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        this
      );
    })
  );

  return function writeFile(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = writeFile;
