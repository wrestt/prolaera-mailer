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

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var teamInfo = (function(_React$Component) {
  (0, _inherits3.default)(teamInfo, _React$Component);

  function teamInfo() {
    (0, _classCallCheck3.default)(this, teamInfo);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (teamInfo.__proto__ || (0, _getPrototypeOf2.default)(teamInfo)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(teamInfo, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          _props$name = _props.name,
          name = _props$name === undefined ? '' : _props$name,
          _props$description = _props.description,
          description = _props$description === undefined ? '' : _props$description,
          buttonText = _props.buttonText,
          buttonLink = _props.buttonLink;

        return _react2.default.createElement(
          'div',
          {
            style: {
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
              width: '500px',
              padding: '20px',
              fontFamily: 'Arial, sans-serif',
              marginBottom: '20px',
              backgroundColor: 'white'
            }
          },
          _react2.default.createElement(
            _reactHtmlEmail.Box,
            { className: 'teamInfo', align: 'center', width: '500px' },
            _react2.default.createElement(
              _reactHtmlEmail.Item,
              { align: 'center' },
              _react2.default.createElement('h3', { style: { marginTop: '0px' } }, 'Team Information:')
            ),
            _react2.default.createElement(
              _reactHtmlEmail.Item,
              { align: 'left' },
              _react2.default.createElement(
                'h4',
                { style: { marginTop: '0px' } },
                'Name: ',
                _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, name)
              ),
              _react2.default.createElement('h4', { style: { marginBottom: '0px' } }, 'Description:'),
              _react2.default.createElement('p', { style: { marginTop: '10px' } }, description)
            ),
            _react2.default.createElement(
              _reactHtmlEmail.Item,
              { align: 'left' },
              _react2.default.createElement(
                'p',
                null,
                'More information about your team can be found by navigating to the Prolaera website.'
              ),
              buttonLink
                ? _react2.default.createElement(_button2.default, {
                    text: buttonText,
                    link: 'https://app.prolaera.com/#/admin/' + buttonLink + '/dashboard'
                  })
                : _react2.default.createElement('span', { className: 'buttonSpan' })
            )
          )
        );
      }
    }
  ]);
  return teamInfo;
})(_react2.default.Component);

exports.default = teamInfo;
