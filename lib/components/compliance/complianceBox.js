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

var _react = require('../../../../../Library/Caches/typescript/2.9/node_modules/@types/react');

var _react2 = _interopRequireDefault(_react);

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

var ComplianceBox = (function(_React$Component) {
  _inherits(ComplianceBox, _React$Component);

  function ComplianceBox() {
    _classCallCheck(this, ComplianceBox);

    return _possibleConstructorReturn(
      this,
      (ComplianceBox.__proto__ || Object.getPrototypeOf(ComplianceBox)).apply(this, arguments)
    );
  }

  _createClass(ComplianceBox, [
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
