'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var React = _interopRequireWildcard(_react);

var _reactHtmlEmail = require('react-html-email');

var _complianceReport = require('./complianceReport');

var _complianceReport2 = _interopRequireDefault(_complianceReport);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ComplianceReports = (function(_React$Component) {
  (0, _inherits3.default)(ComplianceReports, _React$Component);

  function ComplianceReports() {
    (0, _classCallCheck3.default)(this, ComplianceReports);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (ComplianceReports.__proto__ || (0, _getPrototypeOf2.default)(ComplianceReports)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(ComplianceReports, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          flatComplianceDict = _props.flatComplianceDict,
          complianceDict = _props.complianceDict,
          regulatorsDict = _props.regulatorsDict;

        return React.createElement(
          _reactHtmlEmail.Box,
          { width: '100%', height: '100%', style: { backgroundColor: '#F7F7F7' } },
          React.createElement(
            _reactHtmlEmail.Item,
            null,
            React.createElement(
              _reactHtmlEmail.Box,
              { cellSpacing: 20, align: 'center' },
              (0, _keys2.default)(complianceDict).map(function(key, index) {
                return React.createElement(_complianceReport2.default, {
                  key: index,
                  flatCompliance: flatComplianceDict[key][0],
                  compliance: complianceDict[key],
                  regulator: regulatorsDict[key],
                  index: index
                });
              })
            )
          )
        );
      }
    }
  ]);
  return ComplianceReports;
})(React.Component);

exports.default = ComplianceReports;
