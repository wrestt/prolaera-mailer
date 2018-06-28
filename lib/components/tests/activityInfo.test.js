'use strict';

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHtmlEmail = require('react-html-email');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _activityInfo = require('../activity/activityInfo');

var _activityInfo2 = _interopRequireDefault(_activityInfo);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(
            function(value) {
              step('next', value);
            },
            function(err) {
              step('throw', err);
            }
          );
        }
      }
      return step('next');
    });
  };
}

_enzyme2.default.configure({
  adapter: new _enzymeAdapterReact2.default()
});

var activity = {
  name: 'Eloquent Javascript',
  author: 'Teagan Wrestt',
  buttonText: "I'm a button!",
  button1Link: '#'
};

describe('ActivityInfo component', function() {
  it(
    'provides default values if none are provided',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var activityInfo, emailString, containsDefaultInfo;
        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  activityInfo = _reactTestRenderer2.default.create(
                    _react2.default.createElement(_activityInfo2.default, null)
                  );
                  emailString = JSON.stringify(activityInfo.toJSON());
                  containsDefaultInfo = emailString.includes('View Details');

                  expect(containsDefaultInfo).toEqual(true);

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          undefined
        );
      })
    )
  );

  it(
    'checks all custom inputs',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
        var wrapper;
        return regeneratorRuntime.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_activityInfo2.default, activity));

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        _reactHtmlEmail.Item,
                        null,
                        _react2.default.createElement('h4', null, 'You have been assigned to a new Activity:'),
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
                            _react2.default.createElement('em', null, 'Eloquent Javascript')
                          ),
                          _react2.default.createElement(
                            'h4',
                            { style: { marginTop: '7px' } },
                            'By: ',
                            _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, 'Teagan Wrestt')
                          )
                        )
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        _reactHtmlEmail.Item,
                        null,
                        _react2.default.createElement(_button2.default, { text: "I'm a button!", link: '#' })
                      )
                    )
                  ).toBe(true);

                case 3:
                case 'end':
                  return _context2.stop();
              }
            }
          },
          _callee2,
          undefined
        );
      })
    )
  );
});
