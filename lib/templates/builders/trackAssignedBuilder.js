'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHtmlEmail = require('react-html-email');

var _footer = require('../../components/footer');

var _footer2 = _interopRequireDefault(_footer);

var _header = require('../../components/header');

var _header2 = _interopRequireDefault(_header);

var _trackInfo = require('../../components/learningTrack/trackInfo');

var _trackInfo2 = _interopRequireDefault(_trackInfo);

var _subHeader = require('../../components/subHeader');

var _subHeader2 = _interopRequireDefault(_subHeader);

var _templateCSS = require('../templateCSS.js');

var _templateCSS2 = _interopRequireDefault(_templateCSS);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var trackAssignedBuilder = (function() {
  var _ref = (0, _asyncToGenerator3.default)(
    /*#__PURE__*/ _regenerator2.default.mark(function _callee(completeTrack, imageUrl) {
      var Header, profileId, trackId;
      return _regenerator2.default.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _header2.default)(imageUrl);

              case 3:
                Header = _context.sent;
                profileId = 'testProfileId';
                trackId = 'testTrackId';
                return _context.abrupt(
                  'return',
                  (0, _reactHtmlEmail.renderEmail)(
                    _react2.default.createElement(
                      _reactHtmlEmail.Email,
                      { title: "You've been assigned a new learning track", headCSS: _templateCSS2.default },
                      _react2.default.createElement(Header, {
                        text: 'View Track',
                        link: 'https://app.prolaera.com/#/users/' + profileId + '/learning/track?track=' + trackId
                      }),
                      _react2.default.createElement(_subHeader2.default, {
                        subText: 'New track',
                        header: 'Assigned',
                        message: 'You have been assigned a new learning track.'
                      }),
                      _react2.default.createElement(
                        _trackInfo2.default,
                        (0, _extends3.default)({}, completeTrack, {
                          buttonText: 'View Track',
                          profileId: profileId,
                          trackId: trackId
                        })
                      ),
                      _react2.default.createElement(_footer2.default, null)
                    )
                  )
                );

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](0);
                throw _context.t0;

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        undefined,
        [[0, 9]]
      );
    })
  );

  return function trackAssignedBuilder(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

exports.default = trackAssignedBuilder;
