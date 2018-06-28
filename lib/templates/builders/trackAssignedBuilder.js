'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHtmlEmail = require('react-html-email');

var _footer = require('../../components/footer');

var _footer2 = _interopRequireDefault(_footer);

var _header = require('../../components/header');

var _header2 = _interopRequireDefault(_header);

var _trackInfo = require('../../components/learningTrack/trackInfo');

var _trackInfo2 = _interopRequireDefault(_trackInfo);

var _subHeader = require('../../components/subHeader');

var _subHeader2 = _interopRequireDefault(_subHeader);

var _templateCSS = require('../templateCSS.js');

var _templateCSS2 = _interopRequireDefault(_templateCSS);

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

var trackAssignedBuilder = (function() {
  var _ref = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(completeTrack, imageUrl) {
      var Header, profileId, trackId;
      return regeneratorRuntime.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _header2.default)(imageUrl);

              case 3:
                Header = _context.sent;
                profileId = 'testProfileId';
                trackId = 'testTrackId';
                return _context.abrupt(
                  'return',
                  (0, _reactHtmlEmail.renderEmail)(
                    _react2.default.createElement(
                      _reactHtmlEmail.Email,
                      { title: "You've been assigned a new learning track", headCSS: _templateCSS2.default },
                      _react2.default.createElement(Header, {
                        text: 'View Track',
                        link: 'https://app.prolaera.com/#/users/' + profileId + '/learning/track?track=' + trackId
                      }),
                      _react2.default.createElement(_subHeader2.default, {
                        subText: 'New track',
                        header: 'Assigned',
                        message: 'You have been assigned a new learning track.'
                      }),
                      _react2.default.createElement(
                        _trackInfo2.default,
                        _extends({}, completeTrack, {
                          buttonText: 'View Track',
                          profileId: profileId,
                          trackId: trackId
                        })
                      ),
                      _react2.default.createElement(_footer2.default, null)
                    )
                  )
                );

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](0);
                throw _context.t0;

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        undefined,
        [[0, 9]]
      );
    })
  );

  return function trackAssignedBuilder(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

exports.default = trackAssignedBuilder;
