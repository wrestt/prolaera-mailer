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

var _categoryName = require('../../helpers/categoryName');

var _categoryName2 = _interopRequireDefault(_categoryName);

var _complianceBox = require('./complianceBox');

var _complianceBox2 = _interopRequireDefault(_complianceBox);

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

var CategoryRow = (function(_React$Component) {
  _inherits(CategoryRow, _React$Component);

  function CategoryRow() {
    _classCallCheck(this, CategoryRow);

    return _possibleConstructorReturn(
      this,
      (CategoryRow.__proto__ || Object.getPrototypeOf(CategoryRow)).apply(this, arguments)
    );
  }

  _createClass(CategoryRow, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          flatCompliance = _props.flatCompliance,
          regulator = _props.regulator,
          reportIndex = _props.reportIndex,
          category = _props.category;

        var hoursEarned = flatCompliance.actual[category];
        var hoursApplied = flatCompliance.applied[category];
        var hoursRequired = regulator.cycle_limiter.min[category] ? regulator.cycle_limiter.min[category] : 'N/A';
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
              _react2.default.createElement('span', null, (0, _categoryName2.default)(category))
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
            hoursRequired == 'N/A'
              ? _react2.default.createElement(_complianceBox2.default, { text: ' ', hours: ' ', color: 'white' })
              : _react2.default.createElement(_complianceBox2.default, {
                  text: 'Hours Required',
                  hours: hoursRequired,
                  color: reportIndex
                }),
            hoursRequired == 'N/A'
              ? _react2.default.createElement(_complianceBox2.default, { text: ' ', hours: ' ', color: 'white' })
              : _react2.default.createElement(_complianceBox2.default, {
                  text: 'Remaining',
                  hours: hoursRemaining,
                  color: reportIndex
                })
          )
        );
      }
    }
  ]);

  return CategoryRow;
})(_react2.default.Component);

exports.default = CategoryRow;
