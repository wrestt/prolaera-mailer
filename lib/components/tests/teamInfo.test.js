'use strict';

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _TeamInfo = require('../team/TeamInfo');

var _TeamInfo2 = _interopRequireDefault(_TeamInfo);

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

var team = {
  name: 'Test Team Name',
  description: 'Test Team Description',
  buttonText: 'Test Button Text',
  buttonLink: 'testButtonLink'
};

describe('TeamInfo component', function() {
  it(
    'checks custom inputs',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var wrapper;
        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TeamInfo2.default, team));

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        'h4',
                        { style: { marginTop: '0px' } },
                        'Name: ',
                        _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, 'Test Team Name')
                      )
                    )
                  ).toBe(true);
                  expect(
                    wrapper.contains(
                      _react2.default.createElement('p', { style: { marginTop: '10px' } }, 'Test Team Description')
                    )
                  ).toBe(true);
                  expect(
                    wrapper.contains(
                      _react2.default.createElement(_button2.default, {
                        text: 'Test Button Text',
                        link: 'https://app.prolaera.com/#/admin/testButtonLink/dashboard'
                      })
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

describe('TeamInfo button', function() {
  it(
    'checks conditional rendering',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
        var wrapper;
        return regeneratorRuntime.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TeamInfo2.default, null));

                  expect(wrapper.contains(_react2.default.createElement('span', { className: 'buttonSpan' }))).toBe(
                    true
                  );

                case 2:
                case 'end':
                  return _context2.stop();
              }
            }
          },
          _callee2,
          undefined
        );
      })
    )
  );
});
