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

var ActivityInfo = (function(_React$Component) {
  _inherits(ActivityInfo, _React$Component);

  function ActivityInfo() {
    _classCallCheck(this, ActivityInfo);

    return _possibleConstructorReturn(
      this,
      (ActivityInfo.__proto__ || Object.getPrototypeOf(ActivityInfo)).apply(this, arguments)
    );
  }

  _createClass(ActivityInfo, [
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
