'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react2 = _interopRequireDefault(_react);

var _categoryRow = require('./categoryRow');

var _categoryRow2 = _interopRequireDefault(_categoryRow);

var _totalRow = require('./totalRow');

var _totalRow2 = _interopRequireDefault(_totalRow);

var _yearRow = require('./yearRow');

var _yearRow2 = _interopRequireDefault(_yearRow);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ComplianceRows = (function(_React$Component) {
  (0, _inherits3.default)(ComplianceRows, _React$Component);

  function ComplianceRows() {
    (0, _classCallCheck3.default)(this, ComplianceRows);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (ComplianceRows.__proto__ || (0, _getPrototypeOf2.default)(ComplianceRows)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(ComplianceRows, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var flatCompliance = this.props.flatCompliance;

        var categories = (0, _keys2.default)(flatCompliance.applied).filter(function(key) {
          return key !== 'total';
        });
        return _react2.default.createElement(
          'table',
          { className: 'report' },
          _react2.default.createElement(_totalRow2.default, this.props),
          _react2.default.createElement(_yearRow2.default, this.props),
          categories.map(function(category, index) {
            return _react2.default.createElement(
              _categoryRow2.default,
              (0, _extends3.default)({ category: category, index: index, key: index }, _this2.props)
            );
          })
        );
      }
    }
  ]);
  return ComplianceRows;
})(_react2.default.Component);

exports.default = ComplianceRows;
