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

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _eventCertificate = require('../certificate/eventCertificate');

var _eventCertificate2 = _interopRequireDefault(_eventCertificate);

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

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

var certificate = {
  course_name: 'Shoe-Tying 101',
  delivery_date: '2018-07-18T22:00:00.000Z',
  delivery_end_date: '2018-07-19T00:00:00.000Z',
  first: 'Jeff',
  body: 'This is a test body! It should match.',
  button1Text: 'View Certificate',
  button2Text: 'Complete Evaluation',
  button1Link: '#',
  button2Link: '#'
};

describe('eventCertificate component', function() {
  it(
    'should return default values if none provided',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var certificate, certString, containsDefault;
        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  certificate = _reactTestRenderer2.default.create(
                    _react2.default.createElement(_eventCertificate2.default, null)
                  );
                  certString = JSON.stringify(certificate.toJSON());
                  containsDefault = certString.includes('');

                  expect(containsDefault).toEqual(true);

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
                  wrapper = (0, _enzyme.shallow)(
                    _react2.default.createElement(_eventCertificate2.default, certificate)
                  );

                  expect(
                    wrapper.contains(
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
                          _react2.default.createElement('h3', { style: { marginBottom: '5px' } }, 'Shoe-Tying 101'),
                          _react2.default.createElement(
                            'h6',
                            { style: { marginTop: '0px' } },
                            'July 18, 2018 - July 19, 2018'
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
                        _react2.default.createElement('p', null, 'This is a test body! It should match.')
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        _reactHtmlEmail.Item,
                        null,
                        _react2.default.createElement(_button2.default, { text: 'View Certificate', link: '#' }),
                        _react2.default.createElement('hr', { style: { width: '45px' } }),
                        _react2.default.createElement(_button2.default, { text: 'Complete Evaluation', link: '#' })
                      )
                    )
                  ).toBe(true);

                case 4:
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
