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

var _Email = require('react-html-email/lib/components/Email');

var _Email2 = _interopRequireDefault(_Email);

var _courseCertificate = require('../../components/certificate/courseCertificate');

var _courseCertificate2 = _interopRequireDefault(_courseCertificate);

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

var courseCertificateEmail = (function() {
  var _ref = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(course, user, certificate, imageUrl) {
      var Header;
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
                return _context.abrupt(
                  'return',
                  (0, _reactHtmlEmail.renderEmail)(
                    _react2.default.createElement(
                      _Email2.default,
                      { title: 'You have completed a course', headCSS: _templateCSS2.default },
                      _react2.default.createElement(
                        Header,
                        _extends({ text: 'Complete Evaluation' }, certificate, course)
                      ),
                      _react2.default.createElement(
                        _SubHeader2.default,
                        _extends({}, user, { subText: 'You have received a', header: 'Certificate' })
                      ),
                      _react2.default.createElement(
                        _courseCertificate2.default,
                        _extends({}, certificate, course, user)
                      ),
                      _react2.default.createElement(_courseInfo2.default, course),
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

  return function courseCertificateEmail(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
})();

exports.default = courseCertificateEmail;
