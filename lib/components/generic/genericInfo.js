'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHtmlEmail = require('react-html-email');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

var GenericInfo = (function(_React$Component) {
  _inherits(GenericInfo, _React$Component);

  function GenericInfo() {
    _classCallCheck(this, GenericInfo);

    return _possibleConstructorReturn(
      this,
      (GenericInfo.__proto__ || Object.getPrototypeOf(GenericInfo)).apply(this, arguments)
    );
  }

  _createClass(GenericInfo, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          _props$header = _props.header,
          header = _props$header === undefined ? '' : _props$header,
          _props$body = _props.body,
          body = _props$body === undefined ? '' : _props$body,
          _props$footer = _props.footer,
          footer = _props$footer === undefined ? '' : _props$footer;

        return _react2.default.createElement(
          'div',
          {
            style: {
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'left',
              borderRadius: '5px',
              maxWidth: '500px',
              padding: '20px',
              fontFamily: 'Arial, sans-serif',
              marginBottom: '20px',
              backgroundColor: 'white'
            }
          },
          _react2.default.createElement(
            _reactHtmlEmail.Box,
            { align: 'center', width: '100%' },
            _react2.default.createElement(
              _reactHtmlEmail.Item,
              null,
              _react2.default.createElement('div', null, header)
            ),
            _react2.default.createElement(_reactHtmlEmail.Item, null, _react2.default.createElement('div', null, body)),
            _react2.default.createElement(
              _reactHtmlEmail.Item,
              null,
              _react2.default.createElement('div', null, footer)
            )
          )
        );
      }
    }
  ]);

  return GenericInfo;
})(_react2.default.Component);

exports.default = GenericInfo;
