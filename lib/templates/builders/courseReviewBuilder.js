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

var _courseInfo = require('../../components/course/courseInfo');

var _courseInfo2 = _interopRequireDefault(_courseInfo);

var _footer = require('../../components/footer');

var _footer2 = _interopRequireDefault(_footer);

var _header = require('../../components/header');

var _header2 = _interopRequireDefault(_header);

var _SubHeader = require('../../components/SubHeader');

var _SubHeader2 = _interopRequireDefault(_SubHeader);

var _templateCSS = require('../templateCSS');

var _templateCSS2 = _interopRequireDefault(_templateCSS);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var courseReviewBuilder = (function() {
  var _ref = (0, _asyncToGenerator3.default)(
    /*#__PURE__*/ _regenerator2.default.mark(function _callee(completeCourse, imageUrl) {
      var Header, adminProfileId;
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
                adminProfileId = 'exampleAdminProfileId';
                return _context.abrupt(
                  'return',
                  (0, _reactHtmlEmail.renderEmail)(
                    _react2.default.createElement(
                      _reactHtmlEmail.Email,
                      { title: 'New course review on Prolaera', headCSS: _templateCSS2.default },
                      _react2.default.createElement(Header, {
                        text: 'Review Course',
                        link:
                          'https://app.prolaera.com/#/admin/' +
                          adminProfileId +
                          '/' +
                          completeCourse.course_id +
                          '/review'
                      }),
                      _react2.default.createElement(_SubHeader2.default, {
                        subText: 'New course',
                        header: 'Review',
                        message:
                          'A new course has been submitted by one of your authors for review. Please click the review course button to review the course information and activate the course.'
                      }),
                      _react2.default.createElement(
                        _courseInfo2.default,
                        (0, _extends3.default)({}, completeCourse, {
                          buttonText: 'Review Course',
                          buttonLink: completeCourse.course_id,
                          adminProfileId: adminProfileId
                        })
                      ),
                      _react2.default.createElement(_footer2.default, null)
                    )
                  )
                );

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](0);
                throw _context.t0;

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        undefined,
        [[0, 8]]
      );
    })
  );

  return function courseReviewBuilder(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

exports.default = courseReviewBuilder;
