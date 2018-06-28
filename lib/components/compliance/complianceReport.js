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

var _complianceRows = require('./complianceRows');

var _complianceRows2 = _interopRequireDefault(_complianceRows);

var _complianceHeader = require('./complianceHeader');

var _complianceHeader2 = _interopRequireDefault(_complianceHeader);

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

var ComplianceReport = (function(_React$Component) {
  _inherits(ComplianceReport, _React$Component);

  function ComplianceReport() {
    _classCallCheck(this, ComplianceReport);

    return _possibleConstructorReturn(
      this,
      (ComplianceReport.__proto__ || Object.getPrototypeOf(ComplianceReport)).apply(this, arguments)
    );
  }

  _createClass(ComplianceReport, [
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
