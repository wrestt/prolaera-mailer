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

var _deliveryHelper = require('../../helpers/deliveryHelper');

var _deliveryHelper2 = _interopRequireDefault(_deliveryHelper);

var _domHelpers = require('../../helpers/domHelpers');

var _domHelpers2 = _interopRequireDefault(_domHelpers);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

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

var CourseInfo = (function(_React$Component) {
  _inherits(CourseInfo, _React$Component);

  function CourseInfo() {
    _classCallCheck(this, CourseInfo);

    return _possibleConstructorReturn(
      this,
      (CourseInfo.__proto__ || Object.getPrototypeOf(CourseInfo)).apply(this, arguments)
    );
  }

  _createClass(CourseInfo, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          adminProfileId = _props.adminProfileId,
          buttonText = _props.buttonText,
          buttonLink = _props.buttonLink,
          _props$name = _props.name,
          name = _props$name === undefined ? '' : _props$name,
          _props$by = _props.by,
          by = _props$by === undefined ? '' : _props$by,
          _props$hours = _props.hours,
          hours = _props$hours === undefined ? [{ credits: '', subject_area: '' }] : _props$hours,
          _props$delivery_metho = _props.delivery_method,
          delivery_method = _props$delivery_metho === undefined ? 1 : _props$delivery_metho,
          _props$price = _props.price,
          price = _props$price === undefined ? 0 : _props$price,
          _props$courseAudience = _props.courseAudience,
          courseAudience = _props$courseAudience === undefined ? '' : _props$courseAudience,
          _props$prep = _props.prep,
          prep = _props$prep === undefined ? '' : _props$prep,
          _props$prerequisites = _props.prerequisites,
          prerequisites = _props$prerequisites === undefined ? '' : _props$prerequisites,
          _props$level = _props.level,
          level = _props$level === undefined ? '' : _props$level,
          _props$objectives = _props.objectives,
          objectives = _props$objectives === undefined ? '' : _props$objectives,
          _props$summary = _props.summary,
          summary = _props$summary === undefined ? '' : _props$summary;

        var newButtonLink = '';
        if (adminProfileId) {
          newButtonLink = 'admin/' + adminProfileId + '/' + buttonLink + '/review';
        } else {
          newButtonLink = 'courses/' + buttonLink;
        }

        return _react2.default.createElement(
          'div',
          {
            style: {
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
              borderRadius: '5px',
              maxWidth: '500px',
              padding: '20px',
              fontFamily: 'Arial, sans-serif',
              marginBottom: '20px',
              backgroundColor: 'white'
            }
          },
          _react2.default.createElement(
            _reactHtmlEmail.Box,
            { className: 'courseReview', align: 'center', width: '100%' },
            _react2.default.createElement(
              _reactHtmlEmail.Item,
              { align: 'left' },
              _react2.default.createElement(
                'h3',
                { align: 'center', style: { marginTop: '0px' } },
                'Course Information:'
              ),
              _react2.default.createElement(
                'h4',
                { align: 'center', style: { marginTop: '0px', marginBottom: '0px' } },
                _react2.default.createElement(
                  'em',
                  null,
                  name,
                  ' (',
                  (0, _deliveryHelper2.default)(delivery_method),
                  ')'
                )
              )
            ),
            _react2.default.createElement(
              _reactHtmlEmail.Item,
              { align: 'left' },
              _react2.default.createElement(
                'div',
                { style: { paddingLeft: '40px' } },
                _react2.default.createElement(
                  'h4',
                  null,
                  'By: ',
                  _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, by)
                ),
                _react2.default.createElement('h4', { style: { marginBottom: '0px' } }, 'Recommended CPE Credit(s):'),
                _react2.default.createElement(
                  'ul',
                  { style: { marginTop: '10px' } },
                  _react2.default.createElement(
                    'li',
                    { style: { fontWeight: 'normal' } },
                    hours[0].subject_area,
                    ' - ',
                    hours[0].credits,
                    ' Hour(s)'
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Price: ',
                  _react2.default.createElement(
                    'span',
                    { style: { fontWeight: 'normal' } },
                    { price: price } > 0 ? { price: price } : 'Free'
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Target Audience: ',
                  _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, courseAudience)
                ),
                _react2.default.createElement('h4', { style: { marginBottom: '0px' } }, 'Prep:'),
                _react2.default.createElement('div', {
                  className: 'innerHtmlStyles',
                  style: { fontWeight: 'normal' },
                  dangerouslySetInnerHTML: (0, _domHelpers2.default)(prep)
                }),
                _react2.default.createElement('h4', { style: { marginBottom: '0px' } }, 'Prerequisites:'),
                _react2.default.createElement('div', {
                  className: 'innerHtmlStyles',
                  style: { fontWeight: 'normal' },
                  dangerouslySetInnerHTML: (0, _domHelpers2.default)(prerequisites)
                }),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Level: ',
                  _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, level)
                ),
                _react2.default.createElement('h4', { style: { marginBottom: '0px' } }, 'Learning Objectives:'),
                _react2.default.createElement('div', {
                  className: 'innerHtmlStyles',
                  style: { fontWeight: 'normal' },
                  dangerouslySetInnerHTML: (0, _domHelpers2.default)(objectives)
                }),
                _react2.default.createElement('h4', { style: { marginBottom: '0px' } }, 'Description:'),
                _react2.default.createElement('div', {
                  className: 'innerHtmlStyles',
                  style: { fontWeight: 'normal' },
                  dangerouslySetInnerHTML: (0, _domHelpers2.default)(summary)
                })
              )
            ),
            _react2.default.createElement(
              _reactHtmlEmail.Item,
              { align: 'left' },
              _react2.default.createElement(
                'div',
                null,
                buttonLink
                  ? _react2.default.createElement(_button2.default, {
                      text: buttonText,
                      link: 'https://app.prolaera.com/#/' + newButtonLink
                    })
                  : _react2.default.createElement('span', { className: 'buttonSpan' })
              )
            )
          )
        );
      }
    }
  ]);

  return CourseInfo;
})(_react2.default.Component);

exports.default = CourseInfo;
