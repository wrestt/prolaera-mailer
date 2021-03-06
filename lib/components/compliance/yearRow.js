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

var _complianceBox = require('./complianceBox');

var _complianceBox2 = _interopRequireDefault(_complianceBox);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var YearRow = (function(_React$Component) {
  (0, _inherits3.default)(YearRow, _React$Component);

  function YearRow() {
    (0, _classCallCheck3.default)(this, YearRow);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (YearRow.__proto__ || (0, _getPrototypeOf2.default)(YearRow)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(YearRow, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          compliance = _props.compliance,
          regulator = _props.regulator,
          reportIndex = _props.reportIndex;

        if (!regulator.cycle_limiter.annual || !regulator.cycle_limiter.annual.hours) return null;
        var hoursEarned = compliance.total;
        var hoursApplied = compliance.total;
        var hoursRequired = regulator.cycle_limiter.annual.hours;
        var hoursRemaining =
          hoursRequired !== 'N/A' && hoursRequired - hoursApplied > 0 ? hoursRequired - hoursApplied : 0;
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { style: { fontSize: '16px', fontFamily: 'verdana,geneva,sans-serif', verticalAlign: 'top' } },
              _react2.default.createElement('span', null, 'Annual')
            ),
            _react2.default.createElement(_complianceBox2.default, {
              text: 'Hours Earned',
              hours: hoursEarned,
              color: reportIndex
            }),
            _react2.default.createElement(_complianceBox2.default, {
              text: 'Hours Applied',
              hours: hoursApplied,
              color: reportIndex
            }),
            _react2.default.createElement(_complianceBox2.default, {
              text: 'Hours Required',
              hours: hoursRequired,
              color: reportIndex
            }),
            _react2.default.createElement(_complianceBox2.default, {
              text: 'Remaining',
              hours: hoursRemaining,
              color: reportIndex
            })
          )
        );
      }
    }
  ]);
  return YearRow;
})(_react2.default.Component);

exports.default = YearRow;
