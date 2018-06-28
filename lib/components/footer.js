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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FooterText = {
  fontFamily: 'Helvetica',
  color: '#ffffff'
};

exports.default = function() {
  return _react2.default.createElement(
    _reactHtmlEmail.Box,
    { align: 'center', width: '100%', cellSpacing: 20, style: { backgroundColor: '#333333' } },
    _react2.default.createElement(
      _reactHtmlEmail.Item,
      { align: 'center', style: _extends({ fontSize: '19px' }, FooterText) },
      'Something not right?',
      ' '
    ),
    _react2.default.createElement(
      _reactHtmlEmail.Item,
      { align: 'center', style: _extends({ fontSize: '12px' }, FooterText) },
      'You can contact us at',
      ' ',
      _react2.default.createElement(
        _reactHtmlEmail.A,
        {
          href: 'https://www.prolaera.com/contact/',
          style: _extends({ fontSize: '12px' }, FooterText),
          target: '_blank'
        },
        'Prolaera.com'
      ),
      '\n',
      'or email us directly at',
      ' ',
      _react2.default.createElement(
        _reactHtmlEmail.A,
        { href: 'mailto:Support@Prolaera.com', style: _extends({ fontSize: '12px' }, FooterText) },
        'Support@Prolaera.com.'
      )
    ),
    _react2.default.createElement(
      _reactHtmlEmail.Item,
      { align: 'center', style: _extends({ fontSize: '12px' }, FooterText) },
      'Powered By'
    ),
    _react2.default.createElement(
      _reactHtmlEmail.Item,
      { align: 'center' },
      _react2.default.createElement(_reactHtmlEmail.Image, {
        src: 'https://gallery.mailchimp.com/eb930e30a15249a18d658c183/images/196fa069-3113-464c-a304-a1aa9f99fe22.png',
        alt: 'react',
        height: 23,
        width: 100
      })
    ),
    _react2.default.createElement(
      _reactHtmlEmail.Item,
      { align: 'center', style: _extends({ fontSize: '12px' }, FooterText) },
      '\xA9 Prolaera 2017'
    )
  );
};
