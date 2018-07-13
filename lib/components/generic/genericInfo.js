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

var _reactHtmlEmail = require('react-html-email');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var GenericInfo = (function(_React$Component) {
  (0, _inherits3.default)(GenericInfo, _React$Component);

  function GenericInfo() {
    (0, _classCallCheck3.default)(this, GenericInfo);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (GenericInfo.__proto__ || (0, _getPrototypeOf2.default)(GenericInfo)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(GenericInfo, [
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
