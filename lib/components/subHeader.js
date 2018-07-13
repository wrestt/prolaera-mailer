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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SubHeader = (function(_React$Component) {
  (0, _inherits3.default)(SubHeader, _React$Component);

  function SubHeader() {
    (0, _classCallCheck3.default)(this, SubHeader);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (SubHeader.__proto__ || (0, _getPrototypeOf2.default)(SubHeader)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(SubHeader, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          profile_uid = _props.profile_uid,
          _props$subText = _props.subText,
          subText = _props$subText === undefined ? '' : _props$subText,
          _props$header = _props.header,
          header = _props$header === undefined ? '' : _props$header,
          first = _props.first,
          _props$message = _props.message,
          message = _props$message === undefined ? '' : _props$message,
          _props$certMessage = _props.certMessage,
          certMessage =
            _props$certMessage === undefined
              ? 'Congratulations ' +
                ('' + first) +
                '! ' +
                "You've been issued a new certificate of completion. Please take a few moments to complete an evaluation to help us improve by clicking the Complete Evaluation button below."
              : _props$certMessage;

        return _react2.default.createElement(
          'div',
          {
            id: 'subHeaderWrapper',
            style: {
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '20px',
              marginBottom: '20px',
              maxWidth: '500px',
              fontFamily: 'Arial, sans-serif',
              borderRadius: '5px',
              backgroundColor: 'white'
            }
          },
          _react2.default.createElement(
            _reactHtmlEmail.Box,
            { className: 'subHeader', align: 'center', width: '100%' },
            _react2.default.createElement(
              _reactHtmlEmail.Item,
              null,
              _react2.default.createElement(
                'table',
                { id: 'subHeaderTable', style: { textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' } },
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'p',
                      { style: { color: 'gray', fontStyle: 'italic', marginBottom: '5px' } },
                      subText
                    )
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'h2',
                      { style: { fontSize: '35px', marginTop: '0px', marginBottom: '5px' } },
                      header
                    )
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement('p', null, message),
                    _react2.default.createElement(
                      'div',
                      null,
                      profile_uid
                        ? _react2.default.createElement('p', null, certMessage)
                        : _react2.default.createElement('div', null)
                    )
                  )
                )
              )
            )
          )
        );
      }
    }
  ]);
  return SubHeader;
})(_react2.default.Component);

exports.default = SubHeader;
