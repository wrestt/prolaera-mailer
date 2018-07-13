'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHtmlEmail = require('react-html-email');

var _eventInfo = require('../../components/event/eventInfo');

var _eventInfo2 = _interopRequireDefault(_eventInfo);

var _footer = require('../../components/footer');

var _footer2 = _interopRequireDefault(_footer);

var _header = require('../../components/header');

var _header2 = _interopRequireDefault(_header);

var _subFooter = require('../../components/subFooter');

var _subFooter2 = _interopRequireDefault(_subFooter);

var _SubHeader = require('../../components/SubHeader');

var _SubHeader2 = _interopRequireDefault(_SubHeader);

var _templateCSS = require('../templateCSS.js');

var _templateCSS2 = _interopRequireDefault(_templateCSS);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var registrationEmail = (function() {
  var _ref = (0, _asyncToGenerator3.default)(
    /*#__PURE__*/ _regenerator2.default.mark(function _callee(event, imageUrl) {
      var Header;
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
                return _context.abrupt(
                  'return',
                  (0, _reactHtmlEmail.renderEmail)(
                    _react2.default.createElement(
                      _reactHtmlEmail.Email,
                      { title: 'Registration Successful!', headCSS: _templateCSS2.default },
                      _react2.default.createElement(Header, null),
                      _react2.default.createElement(_SubHeader2.default, {
                        subText: 'You have been',
                        header: 'Registered'
                      }),
                      _react2.default.createElement(_eventInfo2.default, event),
                      _react2.default.createElement(_subFooter2.default, {
                        text:
                          "More information about this event can be found by navigating to the Prolaera website. Don't have an account with us? No problem. It only takes a few seconds to get one started.",
                        subtext: 'We hope you enjoy your event!'
                      }),
                      _react2.default.createElement(_footer2.default, null)
                    )
                  )
                );

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);
                throw _context.t0;

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        undefined,
        [[0, 7]]
      );
    })
  );

  return function registrationEmail(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

exports.default = registrationEmail;
