'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _writeFileHelper = require('../../helpers/writeFileHelper');

var _writeFileHelper2 = _interopRequireDefault(_writeFileHelper);

var _courseReviewBuilder = require('../builders/courseReviewBuilder');

var _courseReviewBuilder2 = _interopRequireDefault(_courseReviewBuilder);

var _completeCourse = require('./json/completeCourse.json');

var _completeCourse2 = _interopRequireDefault(_completeCourse);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('courseReview Email', function() {
  var logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  it(
    'returns courseReview email html',
    (0, _asyncToGenerator3.default)(
      /*#__PURE__*/ _regenerator2.default.mark(function _callee() {
        var emailHtml;
        return _regenerator2.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.next = 2;
                  return (0, _courseReviewBuilder2.default)(_completeCourse2.default, logoUrl);

                case 2:
                  emailHtml = _context.sent;

                  expect(emailHtml).toBeDefined();

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

  it(
    'checks snapshot',
    (0, _asyncToGenerator3.default)(
      /*#__PURE__*/ _regenerator2.default.mark(function _callee2() {
        var emailHtml, emailComponent, registrationJson;
        return _regenerator2.default.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.next = 2;
                  return (0, _courseReviewBuilder2.default)(_completeCourse2.default, logoUrl);

                case 2:
                  emailHtml = _context2.sent;
                  emailComponent = _reactTestRenderer2.default.create(emailHtml);
                  registrationJson = emailComponent.toJSON();

                  expect(registrationJson).toMatchSnapshot();

                case 6:
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

  it(
    'writes an html file',
    (0, _asyncToGenerator3.default)(
      /*#__PURE__*/ _regenerator2.default.mark(function _callee3() {
        var email, saved;
        return _regenerator2.default.wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  _context3.next = 2;
                  return (0, _courseReviewBuilder2.default)(_completeCourse2.default, logoUrl);

                case 2:
                  email = _context3.sent;
                  _context3.next = 5;
                  return (0, _writeFileHelper2.default)(email, 'courseReviewTest.html');

                case 5:
                  saved = _context3.sent;

                  expect(saved).toEqual(true);

                case 7:
                case 'end':
                  return _context3.stop();
              }
            }
          },
          _callee3,
          undefined
        );
      })
    )
  );
});
