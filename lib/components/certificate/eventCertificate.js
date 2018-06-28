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

var _reactHtmlEmail = require('react-html-email');

var _dateHelpers = require('../../helpers/dateHelpers');

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

var EventCertificate = (function(_React$Component) {
  _inherits(EventCertificate, _React$Component);

  function EventCertificate() {
    _classCallCheck(this, EventCertificate);

    return _possibleConstructorReturn(
      this,
      (EventCertificate.__proto__ || Object.getPrototypeOf(EventCertificate)).apply(this, arguments)
    );
  }

  _createClass(EventCertificate, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          _props$course_name = _props.course_name,
          course_name = _props$course_name === undefined ? '' : _props$course_name,
          _props$delivery_date = _props.delivery_date,
          delivery_date = _props$delivery_date === undefined ? '' : _props$delivery_date,
          _props$delivery_end_d = _props.delivery_end_date,
          delivery_end_date = _props$delivery_end_d === undefined ? '' : _props$delivery_end_d,
          _props$first = _props.first,
          first = _props$first === undefined ? '' : _props$first,
          _props$header = _props.header,
          header = _props$header === undefined ? 'Congratulations' : _props$header,
          body = _props.body,
          profile_uid = _props.profile_uid,
          event_id = _props.event_id,
          pdf = _props.pdf,
          _props$button1Text = _props.button1Text,
          button1Text = _props$button1Text === undefined ? 'View Certificate' : _props$button1Text,
          _props$button2Text = _props.button2Text,
          button2Text = _props$button2Text === undefined ? 'Complete Evaluation' : _props$button2Text,
          _props$button1Link = _props.button1Link,
          button1Link = _props$button1Link === undefined ? '' + pdf : _props$button1Link,
          _props$button2Link = _props.button2Link,
          button2Link =
            _props$button2Link === undefined
              ? 'https://app.prolaera.com/#/users/' + ('' + profile_uid) + '/events/' + ('' + event_id) + '/review'
              : _props$button2Link;

        return _react2.default.createElement(
          'div',
          {
            style: {
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '20px',
              textAlign: 'center',
              borderRadius: '5px',
              maxWidth: '500px',
              padding: '20px',
              fontFamily: 'Arial, sans-serif',
              backgroundColor: 'white'
            }
          },
          _react2.default.createElement(
            _reactHtmlEmail.Box,
            { align: 'center', width: '100%' },
            _react2.default.createElement(
              _reactHtmlEmail.Item,
              null,
              _react2.default.createElement(
                'div',
                {
                  style: {
                    maxWidth: '300px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    border: '1px solid lightgray',
                    borderRadius: '8px',
                    background: 'linear-gradient(to bottom right, #ffd11a, #fff0b3, #ffd633)',
                    boxShadow: '1px 1px 8px darkgray'
                  }
                },
                _react2.default.createElement('h3', { style: { marginBottom: '5px' } }, course_name),
                _react2.default.createElement(
                  'h6',
                  { style: { marginTop: '0px' } },
                  (0, _dateHelpers.PrettyDate)(delivery_date),
                  ' - ',
                  (0, _dateHelpers.PrettyDate)(delivery_end_date)
                )
              )
            ),
            _react2.default.createElement(_reactHtmlEmail.Item, null, _react2.default.createElement('p', null, body)),
            _react2.default.createElement(
              _reactHtmlEmail.Item,
              null,
              _react2.default.createElement(_button2.default, { text: button1Text, link: button1Link }),
              _react2.default.createElement('hr', { style: { width: '45px' } }),
              _react2.default.createElement(_button2.default, { text: button2Text, link: button2Link })
            )
          )
        );
      }
    }
  ]);

  return EventCertificate;
})(_react2.default.Component);

exports.default = EventCertificate;
