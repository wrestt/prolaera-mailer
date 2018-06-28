'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Header = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _probeImageSize = require('probe-image-size');

var _probeImageSize2 = _interopRequireDefault(_probeImageSize);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHtmlEmail = require('react-html-email');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Header = (function(_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(Header, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          event_id = _props.event_id,
          course_id = _props.course_id,
          _props$link = _props.link,
          link = _props$link === undefined ? 'https://app.prolaera.com' : _props$link,
          _props$text = _props.text,
          text = _props$text === undefined ? 'prolaera.com' : _props$text,
          _props$url = _props.url,
          url = _props$url === undefined ? 'https://assets.prolaera.com/prolaeraLogo_fullText.png' : _props$url,
          _props$width = _props.width,
          width = _props$width === undefined ? 200 : _props$width,
          _props$height = _props.height,
          height = _props$height === undefined ? 47 : _props$height;

        var resizedWidth = width * (47 / height);
        var resizedHeight = 47;

        return _react2.default.createElement(
          _reactHtmlEmail.Box,
          { className: 'emailHeader', align: 'center', width: '100%', style: { backgroundColor: '#F7F7F7' } },
          _react2.default.createElement(
            _reactHtmlEmail.Item,
            { align: 'center' },
            _react2.default.createElement(
              'table',
              { align: 'center', cellSpacing: 0, style: { padding: '15px', maxWidth: '584px' } },
              _react2.default.createElement(
                'tr',
                { align: 'left' },
                _react2.default.createElement(
                  'td',
                  { width: '292px' },
                  _react2.default.createElement(_reactHtmlEmail.Image, {
                    className: 'headerLogo',
                    alt: 'logo',
                    src: url,
                    width: resizedWidth,
                    height: resizedHeight
                  })
                ),
                _react2.default.createElement(
                  'td',
                  { width: '252px', style: { textAlign: 'center' } },
                  _react2.default.createElement(
                    'div',
                    null,
                    event_id && course_id
                      ? _react2.default.createElement(
                          'a',
                          { href: 'https://app.prolaera.com/#/events/' + ('' + event_id) },
                          'View Event'
                        )
                      : _react2.default.createElement('div', null),
                    ' '
                  ),
                  _react2.default.createElement(
                    'div',
                    null,
                    !event_id && course_id
                      ? _react2.default.createElement(
                          'a',
                          { href: 'https://app.prolaera.com/#/courses/' + ('' + course_id) },
                          'View Course'
                        )
                      : _react2.default.createElement('div', null),
                    ' '
                  ),
                  _react2.default.createElement(
                    'div',
                    null,
                    !event_id && !course_id
                      ? _react2.default.createElement('a', { href: link }, text)
                      : _react2.default.createElement('div', null),
                    ' '
                  )
                )
              )
            )
          )
        );
      }
    }
  ]);
  return Header;
})(_react2.default.Component);

var buildHeader = (function() {
  var _ref = (0, _asyncToGenerator3.default)(
    /*#__PURE__*/ _regenerator2.default.mark(function _callee(imageUrl) {
      var _ref2, url, height, width, image;

      return _regenerator2.default.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _probeImageSize2.default)(imageUrl);

              case 3:
                _ref2 = _context.sent;
                url = _ref2.url;
                height = _ref2.height;
                width = _ref2.width;
                image = { url: url, height: height, width: width };
                return _context.abrupt('return', function(props) {
                  return _react2.default.createElement(Header, (0, _extends3.default)({}, props, image));
                });

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](0);
                throw _context.t0;

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        undefined,
        [[0, 11]]
      );
    })
  );

  return function buildHeader(_x) {
    return _ref.apply(this, arguments);
  };
})();

exports.default = buildHeader;
exports.Header = Header;
