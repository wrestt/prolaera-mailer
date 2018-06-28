'use strict';

var writeFile = (function() {
  var _ref9 = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee9(emailHtml) {
      return regeneratorRuntime.wrap(
        function _callee9$(_context9) {
          while (1) {
            switch ((_context9.prev = _context9.next)) {
              case 0:
                return _context9.abrupt(
                  'return',
                  new Promise(function(resolve, reject) {
                    _fs2.default.writeFile(__dirname + '/test.html', emailHtml, function(err) {
                      if (err) {
                        console.log(err);
                        reject(err);
                      }
                      resolve(true);
                    });
                  })
                );

              case 1:
              case 'end':
                return _context9.stop();
            }
          }
        },
        _callee9,
        this
      );
    })
  );

  return function writeFile(_x) {
    return _ref9.apply(this, arguments);
  };
})();

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHtmlEmail = require('react-html-email');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _header = require('../header');

var _header2 = _interopRequireDefault(_header);

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

describe('buildHeader image resizing tests', function() {
  it(
    'it writes an html file to test.html',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var Header, headerHtml, saved;
        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.next = 2;
                  return (0, _header2.default)('http://assets.prolaera.com/NHHCo-lg.png');

                case 2:
                  Header = _context.sent;
                  headerHtml = (0, _reactHtmlEmail.renderEmail)(
                    _react2.default.createElement(Header, {
                      text: 'View My Compliance',
                      link: 'https://www.google.com/'
                    })
                  );
                  _context.next = 6;
                  return writeFile(headerHtml);

                case 6:
                  saved = _context.sent;

                  expect(saved).toEqual(true);

                case 8:
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
    'resizes image successfully NHHco Logo',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
        var Header, headerComponent, headerJson;
        return regeneratorRuntime.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.next = 2;
                  return (0, _header2.default)('http://assets.prolaera.com/NHHCo-lg.png');

                case 2:
                  Header = _context2.sent;
                  headerComponent = _reactTestRenderer2.default.create(_react2.default.createElement(Header, null));
                  headerJson = headerComponent.toJSON();

                  expect(headerJson).toMatchSnapshot();

                case 6:
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

  it(
    'resizes image successfully KRS logo',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee3() {
        var Header, headerComponent, headerJson;
        return regeneratorRuntime.wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  _context3.next = 2;
                  return (0, _header2.default)('http://assets.prolaera.com/KRS-lg.png');

                case 2:
                  Header = _context3.sent;
                  headerComponent = _reactTestRenderer2.default.create(_react2.default.createElement(Header, null));
                  headerJson = headerComponent.toJSON();

                  expect(headerJson).toMatchSnapshot();

                case 6:
                case 'end':
                  return _context3.stop();
              }
            }
          },
          _callee3,
          undefined
        );
      })
    )
  );

  it(
    'resizes image successfully a-lign logo',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee4() {
        var Header, headerComponent, headerJson;
        return regeneratorRuntime.wrap(
          function _callee4$(_context4) {
            while (1) {
              switch ((_context4.prev = _context4.next)) {
                case 0:
                  _context4.next = 2;
                  return (0, _header2.default)('http://assets.prolaera.com/a-lign-lg.png');

                case 2:
                  Header = _context4.sent;
                  headerComponent = _reactTestRenderer2.default.create(_react2.default.createElement(Header, null));
                  headerJson = headerComponent.toJSON();

                  expect(headerJson).toMatchSnapshot();

                case 6:
                case 'end':
                  return _context4.stop();
              }
            }
          },
          _callee4,
          undefined
        );
      })
    )
  );
});

describe('Header component tests', function() {
  it(
    'creates and checks snapshot of Header html',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee5() {
        var headerComponent, headerJson;
        return regeneratorRuntime.wrap(
          function _callee5$(_context5) {
            while (1) {
              switch ((_context5.prev = _context5.next)) {
                case 0:
                  headerComponent = _reactTestRenderer2.default.create(
                    _react2.default.createElement(_header.Header, null)
                  );
                  headerJson = headerComponent.toJSON();

                  expect(headerJson).toMatchSnapshot();

                case 3:
                case 'end':
                  return _context5.stop();
              }
            }
          },
          _callee5,
          undefined
        );
      })
    )
  );

  it(
    'checks default Header html',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee6() {
        var wrapper;
        return regeneratorRuntime.wrap(
          function _callee6$(_context6) {
            while (1) {
              switch ((_context6.prev = _context6.next)) {
                case 0:
                  wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_header.Header, null));

                  expect(
                    wrapper.contains(
                      _react2.default.createElement('a', { href: 'https://app.prolaera.com' }, 'prolaera.com')
                    )
                  ).toBe(true);

                case 2:
                case 'end':
                  return _context6.stop();
              }
            }
          },
          _callee6,
          undefined
        );
      })
    )
  );

  it(
    'checks custom link text in Header html',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee7() {
        var wrapper;
        return regeneratorRuntime.wrap(
          function _callee7$(_context7) {
            while (1) {
              switch ((_context7.prev = _context7.next)) {
                case 0:
                  wrapper = (0, _enzyme.shallow)(
                    _react2.default.createElement(_header.Header, { text: 'View My Compliance' })
                  );

                  expect(
                    wrapper.contains(
                      _react2.default.createElement('a', { href: 'https://app.prolaera.com' }, 'View My Compliance')
                    )
                  ).toBe(true);

                case 2:
                case 'end':
                  return _context7.stop();
              }
            }
          },
          _callee7,
          undefined
        );
      })
    )
  );

  it(
    'checks custom link url in Header html',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee8() {
        var wrapper;
        return regeneratorRuntime.wrap(
          function _callee8$(_context8) {
            while (1) {
              switch ((_context8.prev = _context8.next)) {
                case 0:
                  wrapper = (0, _enzyme.shallow)(
                    _react2.default.createElement(_header.Header, {
                      text: 'View My Compliance',
                      link: 'https://www.google.com/'
                    })
                  );

                  expect(
                    wrapper.contains(
                      _react2.default.createElement('a', { href: 'https://www.google.com/' }, 'View My Compliance')
                    )
                  ).toBe(true);

                case 2:
                case 'end':
                  return _context8.stop();
              }
            }
          },
          _callee8,
          undefined
        );
      })
    )
  );
});
