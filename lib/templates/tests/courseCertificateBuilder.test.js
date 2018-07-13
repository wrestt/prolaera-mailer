'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _writeFileHelper = require('../../helpers/writeFileHelper');

var _writeFileHelper2 = _interopRequireDefault(_writeFileHelper);

var _completeCourse = require('../../templates/tests/json/completeCourse');

var _completeCourse2 = _interopRequireDefault(_completeCourse);

var _completeUser = require('../../templates/tests/json/completeUser');

var _completeUser2 = _interopRequireDefault(_completeUser);

var _completeCertificate = require('../../templates/tests/json/completeCertificate');

var _completeCertificate2 = _interopRequireDefault(_completeCertificate);

var _courseCertificateBuilder = require('../builders/courseCertificateBuilder');

var _courseCertificateBuilder2 = _interopRequireDefault(_courseCertificateBuilder);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('eventCertificateBuilder', function() {
  var logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';

  it(
    'checks snapshot',
    (0, _asyncToGenerator3.default)(
      /*#__PURE__*/ _regenerator2.default.mark(function _callee() {
        var emailHtml, emailComponent, certificateJSON;
        return _regenerator2.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.next = 2;
                  return (0, _courseCertificateBuilder2.default)(
                    _completeCourse2.default,
                    _completeUser2.default,
                    _completeCertificate2.default,
                    logoUrl
                  );

                case 2:
                  emailHtml = _context.sent;
                  emailComponent = _reactTestRenderer2.default.create(emailHtml);
                  certificateJSON = emailComponent.toJSON();

                  expect(certificateJSON).toMatchSnapshot();

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
    'writes an HTML file',
    (0, _asyncToGenerator3.default)(
      /*#__PURE__*/ _regenerator2.default.mark(function _callee2() {
        var email, saved;
        return _regenerator2.default.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.next = 2;
                  return (0, _courseCertificateBuilder2.default)(
                    _completeCourse2.default,
                    _completeUser2.default,
                    _completeCertificate2.default,
                    logoUrl
                  );

                case 2:
                  email = _context2.sent;
                  _context2.next = 5;
                  return (0, _writeFileHelper2.default)(email, 'courseCertificateTest.html');

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
