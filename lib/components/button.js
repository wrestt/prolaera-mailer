'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Button = (function(_React$Component) {
  (0, _inherits3.default)(Button, _React$Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(Button, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          _props$text = _props.text,
          text = _props$text === undefined ? '' : _props$text,
          link = _props.link;

        return _react2.default.createElement(
          'div',
          {
            className: 'customButton',
            align: 'center',
            style: { maxWidth: '100%', textAlign: 'center', padding: '20px 0px 20px 0px' }
          },
          _react2.default.createElement(
            'a',
            {
              href: link,
              style: {
                width: '200px',
                backgroundColor: '#72C02C',
                padding: '14px 14px 14px 14px',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '10px',
                boxShadow: '1px 1px 8px darkgray'
              }
            },
            text
          )
        );
      }
    }
  ]);
  return Button;
})(_react2.default.Component);

exports.default = Button;
