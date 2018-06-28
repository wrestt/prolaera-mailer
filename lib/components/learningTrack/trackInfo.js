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

var TrackInfo = (function(_React$Component) {
  (0, _inherits3.default)(TrackInfo, _React$Component);

  function TrackInfo() {
    (0, _classCallCheck3.default)(this, TrackInfo);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (TrackInfo.__proto__ || (0, _getPrototypeOf2.default)(TrackInfo)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(TrackInfo, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          _props$name = _props.name,
          name = _props$name === undefined ? '' : _props$name,
          _props$author = _props.author,
          author = _props$author === undefined ? '' : _props$author,
          _props$description = _props.description,
          description = _props$description === undefined ? '' : _props$description,
          buttonText = _props.buttonText,
          profileId = _props.profileId,
          trackId = _props.trackId;

        return _react2.default.createElement(
          'div',
          {
            style: {
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
              borderRadius: '5px',
              width: '500px',
              padding: '20px',
              fontFamily: 'Arial, sans-serif',
              marginBottom: '20px',
              backgroundColor: 'white'
            }
          },
          _react2.default.createElement(
            _reactHtmlEmail.Box,
            { className: 'trackInfo', align: 'center', width: '500px' },
            _react2.default.createElement(
              _reactHtmlEmail.Item,
              null,
              _react2.default.createElement('h3', { style: { marginTop: '0px' } }, 'Learning Track Information:')
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
              _react2.default.createElement(
                'h4',
                null,
                'Author: ',
                _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, author)
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
                'More information about this track can be found by navigating to the Prolaera website.'
              ),
              profileId
                ? _react2.default.createElement(_button2.default, {
                    text: buttonText,
                    link: 'https://app.prolaera.com/#/users/' + profileId + '/learning/track?track=' + trackId
                  })
                : _react2.default.createElement('span', { className: 'buttonSpan' })
            )
          )
        );
      }
    }
  ]);
  return TrackInfo;
})(_react2.default.Component);

exports.default = TrackInfo;
