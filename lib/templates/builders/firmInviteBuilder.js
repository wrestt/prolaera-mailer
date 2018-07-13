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

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _footer = require('../../components/footer');

var _footer2 = _interopRequireDefault(_footer);

var _genericInfo = require('../../components/generic/genericInfo');

var _genericInfo2 = _interopRequireDefault(_genericInfo);

var _header = require('../../components/header');

var _header2 = _interopRequireDefault(_header);

var _subHeader = require('../../components/subHeader');

var _subHeader2 = _interopRequireDefault(_subHeader);

var _templateCSS = require('../templateCSS.js');

var _templateCSS2 = _interopRequireDefault(_templateCSS);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var firmInviteBuilder = (function() {
  var _ref = (0, _asyncToGenerator3.default)(
    /*#__PURE__*/ _regenerator2.default.mark(function _callee(completeUser, completeCompany, imageUrl) {
      var headerText, bodyText, footerText, Header;
      return _regenerator2.default.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.prev = 0;
                headerText = '';
                bodyText = _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    'Your account is waiting for you and there are only a couple quick steps to complete.'
                  ),
                  _react2.default.createElement(
                    'ol',
                    null,
                    _react2.default.createElement('li', null, 'Click the button below to register your account.'),
                    _react2.default.createElement(
                      'li',
                      null,
                      'On the registration page simply enter a password for your new account and click "Register".'
                    )
                  )
                );
                footerText = _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    "That's it! You're ready to explore the new tools and resources you have access to."
                  ),
                  _react2.default.createElement(_button2.default, {
                    text: 'Create Your Account',
                    link: 'https://app.prolaera.com/#/registration?email=${' + completeUser.email + '}' + "'"
                  })
                );
                _context.next = 6;
                return (0, _header2.default)(imageUrl);

              case 6:
                Header = _context.sent;
                return _context.abrupt(
                  'return',
                  (0, _reactHtmlEmail.renderEmail)(
                    _react2.default.createElement(
                      _reactHtmlEmail.Email,
                      {
                        title: "You've been added to " + ('' + completeCompany.company_name) + 'on Prolaera',
                        headCSS: _templateCSS2.default
                      },
                      _react2.default.createElement(Header, {
                        text: 'Create Account',
                        link: 'https://app.prolaera.com/#/registration?email=${' + completeUser.email + '}' + "'"
                      }),
                      _react2.default.createElement(_subHeader2.default, {
                        subText: "You've been",
                        header: 'Added',
                        message:
                          'You have been added to ' + ('' + completeCompany.company_name) + "'s team on Prolaera."
                      }),
                      _react2.default.createElement(_genericInfo2.default, {
                        header: headerText,
                        body: bodyText,
                        footer: footerText
                      }),
                      _react2.default.createElement(_footer2.default, null)
                    )
                  )
                );

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](0);
                throw _context.t0;

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        undefined,
        [[0, 10]]
      );
    })
  );

  return function firmInviteBuilder(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

exports.default = firmInviteBuilder;
