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

var ComplianceBox = (function(_React$Component) {
  (0, _inherits3.default)(ComplianceBox, _React$Component);

  function ComplianceBox() {
    (0, _classCallCheck3.default)(this, ComplianceBox);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (ComplianceBox.__proto__ || (0, _getPrototypeOf2.default)(ComplianceBox)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(ComplianceBox, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          text = _props.text,
          hours = _props.hours,
          color = _props.color;

        var colors = ['#c0392b', '#eea303', '#f1c40f', '#64bb5d', '#16a085', '#0e83cd', '#702fa8'];
        var style = {
          fontFamily: 'arial',
          color: '#ffffff',
          backgroundColor: colors[color % 7],
          padding: '26px 14px',
          borderLeft: '5px solid #FFFFFF',
          textAlign: 'center'
        };
        return _react2.default.createElement(
          'td',
          style,
          _react2.default.createElement('div', { style: { fontSize: '14px' } }, ' ', text, ' '),
          _react2.default.createElement('div', { style: { fontSize: '36px' } }, ' ', hours, ' ')
        );
      }
    }
  ]);
  return ComplianceBox;
})(_react2.default.Component);

exports.default = ComplianceBox;
