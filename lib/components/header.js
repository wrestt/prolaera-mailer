'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Header = undefined;

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

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _probeImageSize = require('probe-image-size');

var _probeImageSize2 = _interopRequireDefault(_probeImageSize);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHtmlEmail = require('react-html-email');

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass);
}

var Header = (function(_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [
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
  var _ref = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(imageUrl) {
      var _ref2, url, height, width, image;

      return regeneratorRuntime.wrap(
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
                  return _react2.default.createElement(Header, _extends({}, props, image));
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
