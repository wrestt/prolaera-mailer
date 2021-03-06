'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _writeFileHelper = require('../../helpers/writeFileHelper');

var _writeFileHelper2 = _interopRequireDefault(_writeFileHelper);

var _activityAssignedBuilder = require('../builders/activityAssignedBuilder');

var _activityAssignedBuilder2 = _interopRequireDefault(_activityAssignedBuilder);

var _completeActivity = require('../tests/json/completeActivity');

var _completeActivity2 = _interopRequireDefault(_completeActivity);

var _completeUser = require('../tests/json/completeUser');

var _completeUser2 = _interopRequireDefault(_completeUser);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('Activity Assigned email', function() {
  var logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';

  it(
    'checks snapshot',
    (0, _asyncToGenerator3.default)(
      /*#__PURE__*/ _regenerator2.default.mark(function _callee() {
        var emailHtml, emailComponent, activityJson;
        return _regenerator2.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.next = 2;
                  return (0, _activityAssignedBuilder2.default)(
                    _completeActivity2.default,
                    _completeUser2.default,
                    logoUrl
                  );

                case 2:
                  emailHtml = _context.sent;
                  emailComponent = _reactTestRenderer2.default.create(emailHtml);
                  activityJson = emailComponent.toJSON();

                  expect(activityJson).toMatchSnapshot();

                case 6:
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

  it(
    'writes an html file',
    (0, _asyncToGenerator3.default)(
      /*#__PURE__*/ _regenerator2.default.mark(function _callee2() {
        var email, saved;
        return _regenerator2.default.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.next = 2;
                  return (0, _activityAssignedBuilder2.default)(
                    _completeActivity2.default,
                    _completeUser2.default,
                    logoUrl
                  );

                case 2:
                  email = _context2.sent;
                  _context2.next = 5;
                  return (0, _writeFileHelper2.default)(email, 'activityTest.html');

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
