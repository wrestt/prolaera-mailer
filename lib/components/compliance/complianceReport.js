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

var _complianceRows = require('./complianceRows');

var _complianceRows2 = _interopRequireDefault(_complianceRows);

var _complianceHeader = require('./complianceHeader');

var _complianceHeader2 = _interopRequireDefault(_complianceHeader);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ComplianceReport = (function(_React$Component) {
  (0, _inherits3.default)(ComplianceReport, _React$Component);

  function ComplianceReport() {
    (0, _classCallCheck3.default)(this, ComplianceReport);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (ComplianceReport.__proto__ || (0, _getPrototypeOf2.default)(ComplianceReport)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(ComplianceReport, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          flatCompliance = _props.flatCompliance,
          compliance = _props.compliance,
          regulator = _props.regulator,
          index = _props.index;

        return _react2.default.createElement(
          _reactHtmlEmail.Item,
          { align: 'center', style: { backgroundColor: '#FFFFFF' } },
          _react2.default.createElement(
            'div',
            { style: { padding: '15px' } },
            _react2.default.createElement(_complianceHeader2.default, this.props),
            _react2.default.createElement(_complianceRows2.default, {
              regulator: regulator,
              flatCompliance: flatCompliance,
              compliance: compliance,
              reportIndex: index
            })
          )
        );
      }
    }
  ]);
  return ComplianceReport;
})(_react2.default.Component);

exports.default = ComplianceReport;
