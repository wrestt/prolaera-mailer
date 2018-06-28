'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactHtmlEmail = require('react-html-email');

var _complianceReports = require('../../components/compliance/complianceReports');

var _complianceReports2 = _interopRequireDefault(_complianceReports);

var _footer = require('../../components/footer');

var _footer2 = _interopRequireDefault(_footer);

var _header = require('../../components/header');

var _header2 = _interopRequireDefault(_header);

var _templateCSS = require('../templateCSS.js');

var _templateCSS2 = _interopRequireDefault(_templateCSS);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var email = (function() {
  var _ref = (0, _asyncToGenerator3.default)(
    /*#__PURE__*/ _regenerator2.default.mark(function _callee(completeCompliance, imageUrl) {
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
                    React.createElement(
                      _reactHtmlEmail.Email,
                      { title: 'Compliance Report', headCSS: _templateCSS2.default },
                      React.createElement(Header, { text: 'compliance report' }),
                      React.createElement(_complianceReports2.default, completeCompliance),
                      React.createElement(_footer2.default, null)
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

  return function email(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

exports.default = email;
