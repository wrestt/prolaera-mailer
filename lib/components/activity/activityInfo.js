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

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ActivityInfo = (function(_React$Component) {
  (0, _inherits3.default)(ActivityInfo, _React$Component);

  function ActivityInfo() {
    (0, _classCallCheck3.default)(this, ActivityInfo);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (ActivityInfo.__proto__ || (0, _getPrototypeOf2.default)(ActivityInfo)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(ActivityInfo, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          _props$name = _props.name,
          name = _props$name === undefined ? '' : _props$name,
          _props$author = _props.author,
          author = _props$author === undefined ? '' : _props$author,
          profile_uid = _props.profile_uid,
          activity_id = _props.activity_id,
          _props$header = _props.header,
          header = _props$header === undefined ? 'You have been assigned to a new Activity:' : _props$header,
          _props$buttonText = _props.buttonText,
          buttonText = _props$buttonText === undefined ? 'View Details' : _props$buttonText,
          _props$button1Link = _props.button1Link,
          button1Link =
            _props$button1Link === undefined
              ? 'https://app.prolaera.com/#/users/' + ('' + profile_uid) + '/activities' + ('' + activity_id)
              : _props$button1Link;

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
              _react2.default.createElement('h4', null, header),
              _react2.default.createElement(
                'div',
                {
                  style: {
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '15px',
                    border: '1px solid lightgray',
                    boxShadow: '1px 1px 8px darkgray',
                    maxWidth: '300px'
                  }
                },
                _react2.default.createElement(
                  'h3',
                  { style: { marginBottom: '0px' } },
                  _react2.default.createElement('em', null, name)
                ),
                _react2.default.createElement(
                  'h4',
                  { style: { marginTop: '7px' } },
                  'By: ',
                  _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, author)
                )
              )
            ),
            _react2.default.createElement(
              _reactHtmlEmail.Item,
              null,
              _react2.default.createElement(_button2.default, { text: buttonText, link: button1Link })
            )
          )
        );
      }
    }
  ]);
  return ActivityInfo;
})(_react2.default.Component);

exports.default = ActivityInfo;
