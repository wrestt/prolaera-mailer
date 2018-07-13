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

var SubFooter = (function(_React$Component) {
  (0, _inherits3.default)(SubFooter, _React$Component);

  function SubFooter() {
    (0, _classCallCheck3.default)(this, SubFooter);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (SubFooter.__proto__ || (0, _getPrototypeOf2.default)(SubFooter)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(SubFooter, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          text = _props.text,
          _props$subtext = _props.subtext,
          subtext = _props$subtext === undefined ? '' : _props$subtext;

        return _react2.default.createElement(
          'div',
          {
            style: {
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '20px',
              textAlign: 'center',
              fontFamily: 'Arial, sans-serif',
              borderRadius: '5px',
              padding: '20px',
              maxWidth: '500px',
              backgroundColor: 'white'
            }
          },
          _react2.default.createElement(
            _reactHtmlEmail.Box,
            { className: 'subFooter', align: 'center', width: '100%' },
            _react2.default.createElement(
              _reactHtmlEmail.Item,
              { align: 'left' },
              _react2.default.createElement('p', null, text),
              _react2.default.createElement('p', null, subtext)
            )
          )
        );
      }
    }
  ]);
  return SubFooter;
})(_react2.default.Component);

exports.default = SubFooter;
