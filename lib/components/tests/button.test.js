'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('button component', function() {
  it(
    'should display the correct text',
    (0, _asyncToGenerator3.default)(
      /*#__PURE__*/ _regenerator2.default.mark(function _callee() {
        var button, buttonString, containsButtonText;
        return _regenerator2.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  button = _reactTestRenderer2.default.create(
                    _react2.default.createElement(_button2.default, { text: 'Click me!' })
                  );
                  buttonString = (0, _stringify2.default)(button.toJSON());
                  containsButtonText = buttonString.includes('Click me!');

                  expect(containsButtonText).toEqual(true);

                case 4:
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
