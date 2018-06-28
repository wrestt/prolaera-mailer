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

var _dateHelpers = require('../../helpers/dateHelpers');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ComplianceHeader = (function(_React$Component) {
  (0, _inherits3.default)(ComplianceHeader, _React$Component);

  function ComplianceHeader() {
    (0, _classCallCheck3.default)(this, ComplianceHeader);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (ComplianceHeader.__proto__ || (0, _getPrototypeOf2.default)(ComplianceHeader)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(ComplianceHeader, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          _props$flatCompliance = _props.flatCompliance,
          cycle_date = _props$flatCompliance.cycle_date,
          issue_date = _props$flatCompliance.issue_date,
          expiration_date = _props$flatCompliance.expiration_date,
          _props$regulator = _props.regulator,
          cycle = _props$regulator.cycle,
          name = _props$regulator.name;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            {
              style: {
                fontSize: '28px',
                textAlign: 'center',
                lineHeight: '25px'
              }
            },
            ' ',
            name
          ),
          _react2.default.createElement(
            'div',
            { style: { textAlign: 'center', lineHeight: '25px' } },
            _react2.default.createElement('strong', null, 'Reporting Period: '),
            ' ',
            (0, _dateHelpers.CycleDates)(cycle_date, cycle, issue_date)
          ),
          _react2.default.createElement(
            'div',
            { style: { textAlign: 'center', paddingBottom: '10px' } },
            _react2.default.createElement('strong', null, 'License Expiration Date: '),
            ' ',
            (0, _dateHelpers.PrettyDate)(expiration_date)
          )
        );
      }
    }
  ]);
  return ComplianceHeader;
})(_react2.default.Component);

exports.default = ComplianceHeader;
