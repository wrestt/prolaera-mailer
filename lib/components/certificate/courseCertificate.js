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

var _deliveryHelper = require('../../helpers/deliveryHelper');

var _deliveryHelper2 = _interopRequireDefault(_deliveryHelper);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var CourseCertificate = (function(_React$Component) {
  (0, _inherits3.default)(CourseCertificate, _React$Component);

  function CourseCertificate() {
    (0, _classCallCheck3.default)(this, CourseCertificate);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (CourseCertificate.__proto__ || (0, _getPrototypeOf2.default)(CourseCertificate)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(CourseCertificate, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          _props$name = _props.name,
          name = _props$name === undefined ? '' : _props$name,
          _props$by = _props.by,
          by = _props$by === undefined ? '' : _props$by,
          _props$delivery_metho = _props.delivery_method,
          delivery_method = _props$delivery_metho === undefined ? 1 : _props$delivery_metho,
          _props$first = _props.first,
          first = _props$first === undefined ? '' : _props$first,
          _props$header = _props.header,
          header = _props$header === undefined ? 'Congratulations' : _props$header,
          _props$body = _props.body,
          body = _props$body === undefined ? '' : _props$body,
          profile_uid = _props.profile_uid,
          course_id = _props.course_id,
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
              ? 'https://app.prolaera.com/#/users/' + ('' + profile_uid) + '/courses/' + ('' + course_id) + '/review'
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
                _react2.default.createElement('h3', { style: { marginBottom: '5px' } }, name),
                _react2.default.createElement(
                  'h6',
                  { style: { marginTop: '0px' } },
                  'Instructor: ',
                  by,
                  ' (',
                  (0, _deliveryHelper2.default)(delivery_method),
                  ')'
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
  return CourseCertificate;
})(_react2.default.Component);

exports.default = CourseCertificate;
