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

var _trackInfo = require('../learningTrack/trackInfo');

var _trackInfo2 = _interopRequireDefault(_trackInfo);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_enzyme2.default.configure({
  adapter: new _enzymeAdapterReact2.default()
});

var track = {
  name: 'Test Track Name',
  author: 'Test Track Author',
  description: 'Test Track Description',
  buttonText: 'Test Button Text',
  profileId: 'testProfileId',
  trackId: 'testTrackId'
};

describe('TrackInfo component', function() {
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
                  wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_trackInfo2.default, track));

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        'h4',
                        { style: { marginTop: '0px' } },
                        'Name: ',
                        _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, 'Test Track Name')
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        'h4',
                        null,
                        'Author: ',
                        _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, 'Test Track Author')
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement('p', { style: { marginTop: '10px' } }, 'Test Track Description')
                    )
                  ).toBe(true);
                  expect(
                    wrapper.contains(
                      _react2.default.createElement(_button2.default, {
                        text: 'Test Button Text',
                        link: 'https://app.prolaera.com/#/users/testProfileId/learning/track?track=testTrackId'
                      })
                    )
                  ).toBe(true);

                case 5:
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

describe('TrackInfo button', function() {
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
                  wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_trackInfo2.default, null));

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
