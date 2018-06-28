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

var _button = require('../../components/button');

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

var teamInfo = (function(_React$Component) {
  _inherits(teamInfo, _React$Component);

  function teamInfo() {
    _classCallCheck(this, teamInfo);

    return _possibleConstructorReturn(
      this,
      (teamInfo.__proto__ || Object.getPrototypeOf(teamInfo)).apply(this, arguments)
    );
  }

  _createClass(teamInfo, [
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
