'use strict';

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

describe('courseReview Email', function() {
  var logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  it(
    'returns courseReview email html',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var emailHtml;
        return regeneratorRuntime.wrap(
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
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
        var emailHtml, emailComponent, registrationJson;
        return regeneratorRuntime.wrap(
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
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee3() {
        var email, saved;
        return regeneratorRuntime.wrap(
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
