'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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
    (0, _asyncToGenerator3.default)(
      /*#__PURE__*/ _regenerator2.default.mark(function _callee() {
        var wrapper;
        return _regenerator2.default.wrap(
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
    (0, _asyncToGenerator3.default)(
      /*#__PURE__*/ _regenerator2.default.mark(function _callee2() {
        var wrapper;
        return _regenerator2.default.wrap(
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
