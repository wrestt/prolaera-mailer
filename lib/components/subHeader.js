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

var _react = require('../../../../Library/Caches/typescript/2.9/node_modules/@types/react');

var _react2 = _interopRequireDefault(_react);

var _reactHtmlEmail = require('react-html-email');

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

var SubHeader = (function(_React$Component) {
  _inherits(SubHeader, _React$Component);

  function SubHeader() {
    _classCallCheck(this, SubHeader);

    return _possibleConstructorReturn(
      this,
      (SubHeader.__proto__ || Object.getPrototypeOf(SubHeader)).apply(this, arguments)
    );
  }

  _createClass(SubHeader, [
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
