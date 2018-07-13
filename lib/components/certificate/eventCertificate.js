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

var _dateHelpers = require('../../helpers/dateHelpers');

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var EventCertificate = (function(_React$Component) {
  (0, _inherits3.default)(EventCertificate, _React$Component);

  function EventCertificate() {
    (0, _classCallCheck3.default)(this, EventCertificate);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (EventCertificate.__proto__ || (0, _getPrototypeOf2.default)(EventCertificate)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(EventCertificate, [
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
