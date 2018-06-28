'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

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

var courseReviewBuilder = (function() {
  var _ref = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(completeCourse, imageUrl) {
      var Header, adminProfileId;
      return regeneratorRuntime.wrap(
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
                        _extends({}, completeCourse, {
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
