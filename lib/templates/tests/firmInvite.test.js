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

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _GenericInfo = require('../../components/generic/GenericInfo');

var _GenericInfo2 = _interopRequireDefault(_GenericInfo);

var _writeFileHelper = require('../../helpers/writeFileHelper');

var _writeFileHelper2 = _interopRequireDefault(_writeFileHelper);

var _firmInviteBuilder = require('../builders/firmInviteBuilder');

var _firmInviteBuilder2 = _interopRequireDefault(_firmInviteBuilder);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });
var user = { email: 'test@email.com' };
var company = { company_name: 'Test CPA Firm' };
var headerText = _react2.default.createElement(
  'p',
  null,
  "You've been added to ",
  company.company_name,
  ' on Prolaera'
);
var bodyText = _react2.default.createElement(
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
var footerText = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'p',
    null,
    "That's it! You're ready to explore the new tools and resources you have access to."
  ),
  _react2.default.createElement(_button2.default, {
    text: 'Create Your Account',
    link: 'https://app.prolaera.com/#/users/' + user.email
  })
);

describe('Firm Invite component', function() {
  it(
    'creates and checks snapshot of FirmInvite component html',
    (0, _asyncToGenerator3.default)(
      /*#__PURE__*/ _regenerator2.default.mark(function _callee() {
        var inviteHtml, inviteJson;
        return _regenerator2.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  inviteHtml = _reactTestRenderer2.default.create(
                    _react2.default.createElement(_GenericInfo2.default, {
                      header: headerText,
                      body: bodyText,
                      footer: footerText,
                      email: user.email
                    })
                  );
                  inviteJson = inviteHtml.toJSON();

                  expect(inviteJson).toMatchSnapshot();

                case 3:
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

describe('create html test file', function() {
  it(
    'writes an html file to firmInviteTest.html',
    (0, _asyncToGenerator3.default)(
      /*#__PURE__*/ _regenerator2.default.mark(function _callee2() {
        var firmInviteEmail, saved;
        return _regenerator2.default.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.next = 2;
                  return (0, _firmInviteBuilder2.default)(
                    user,
                    company,
                    'https://assets.prolaera.com/prolaeraLogo_fullText.png'
                  );

                case 2:
                  firmInviteEmail = _context2.sent;
                  _context2.next = 5;
                  return (0, _writeFileHelper2.default)(firmInviteEmail, 'firmInviteTest.html');

                case 5:
                  saved = _context2.sent;

                  expect(saved).toEqual(true);

                case 7:
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
