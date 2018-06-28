'use strict';

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHtmlEmail = require('react-html-email');

var _genericInfo = require('../generic/genericInfo');

var _genericInfo2 = _interopRequireDefault(_genericInfo);

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

_enzyme2.default.configure({
  adapter: new _enzymeAdapterReact2.default()
});

var info = {
  header: 'Oh yeah!',
  body: 'Check out this body!',
  footer: 'Okay, all done now'
};

describe('GenericInfo component', function() {
  it(
    'checks custom inputs using enzyme',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var wrapper;
        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_genericInfo2.default, info));

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        _reactHtmlEmail.Item,
                        null,
                        _react2.default.createElement('div', null, 'Oh yeah!')
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        _reactHtmlEmail.Item,
                        null,
                        _react2.default.createElement('div', null, 'Check out this body!')
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        _reactHtmlEmail.Item,
                        null,
                        _react2.default.createElement('div', null, 'Okay, all done now')
                      )
                    )
                  ).toBe(true);

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
