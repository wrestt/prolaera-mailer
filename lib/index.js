'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _activityAssignedBuilder = require('./templates/builders/activityAssignedBuilder');

var _activityAssignedBuilder2 = _interopRequireDefault(_activityAssignedBuilder);

var _courseApprovedBuilder = require('./templates/builders/courseApprovedBuilder');

var _courseApprovedBuilder2 = _interopRequireDefault(_courseApprovedBuilder);

var _courseAssignedBuilder = require('./templates/builders/courseAssignedBuilder');

var _courseAssignedBuilder2 = _interopRequireDefault(_courseAssignedBuilder);

var _courseCertificateBuilder = require('./templates/builders/courseCertificateBuilder');

var _courseCertificateBuilder2 = _interopRequireDefault(_courseCertificateBuilder);

var _courseReviewBuilder = require('./templates/builders/courseReviewBuilder');

var _courseReviewBuilder2 = _interopRequireDefault(_courseReviewBuilder);

var _eventCertificateBuilder = require('./templates/builders/eventCertificateBuilder');

var _eventCertificateBuilder2 = _interopRequireDefault(_eventCertificateBuilder);

var _eventInvitationBuilder = require('./templates/builders/eventInvitationBuilder');

var _eventInvitationBuilder2 = _interopRequireDefault(_eventInvitationBuilder);

var _eventRegistrationBuilder = require('./templates/builders/eventRegistrationBuilder');

var _eventRegistrationBuilder2 = _interopRequireDefault(_eventRegistrationBuilder);

var _firmInviteBuilder = require('./templates/builders/firmInviteBuilder');

var _firmInviteBuilder2 = _interopRequireDefault(_firmInviteBuilder);

var _trackAssignedBuilder = require('./templates/builders/trackAssignedBuilder');

var _trackAssignedBuilder2 = _interopRequireDefault(_trackAssignedBuilder);

var _userCompliance = require('./templates/builders/userCompliance');

var _userCompliance2 = _interopRequireDefault(_userCompliance);

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

var engine = (function() {
  var _ref = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(event) {
      var body, email;
      return regeneratorRuntime.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                body = event.body;
                email = void 0;
                _context.t0 = body.template;
                _context.next =
                  _context.t0 === 'userComplaince'
                    ? 5
                    : _context.t0 === 'activityAssigned'
                      ? 9
                      : _context.t0 === 'courseApproved'
                        ? 13
                        : _context.t0 === 'courseAssigned'
                          ? 17
                          : _context.t0 === 'courseCertificate'
                            ? 21
                            : _context.t0 === 'courseReview'
                              ? 25
                              : _context.t0 === 'eventCertificate'
                                ? 29
                                : _context.t0 === 'eventInvitation'
                                  ? 33
                                  : _context.t0 === 'eventRegistration'
                                    ? 37
                                    : _context.t0 === 'firmInvite'
                                      ? 41
                                      : _context.t0 === 'trackAssigned'
                                        ? 45
                                        : 49;
                break;

              case 5:
                _context.next = 7;
                return (0, _userCompliance2.default)(body.completeCompliance, body.imageUrl);

              case 7:
                email = _context.sent;
                return _context.abrupt('return', email);

              case 9:
                _context.next = 11;
                return (0, _activityAssignedBuilder2.default)(body.activity, body.user, body.imageUrl);

              case 11:
                email = _context.sent;
                return _context.abrupt('return', email);

              case 13:
                _context.next = 15;
                return (0, _courseApprovedBuilder2.default)(body.course, body.imageUrl);

              case 15:
                email = _context.sent;
                return _context.abrupt('return', email);

              case 17:
                _context.next = 19;
                return (0, _courseAssignedBuilder2.default)(body.course, body.imageUrl);

              case 19:
                email = _context.sent;
                return _context.abrupt('return', email);

              case 21:
                _context.next = 23;
                return (0, _courseCertificateBuilder2.default)(body.course, body.user, body.certificate, body.imageUrl);

              case 23:
                email = _context.sent;
                return _context.abrupt('return', email);

              case 25:
                _context.next = 27;
                return (0, _courseReviewBuilder2.default)(body.course, body.imageUrl);

              case 27:
                email = _context.sent;
                return _context.abrupt('return', email);

              case 29:
                _context.next = 31;
                return (0, _eventCertificateBuilder2.default)(body.event, body.user, body.certificate, body.imageUrl);

              case 31:
                email = _context.sent;
                return _context.abrupt('return', email);

              case 33:
                _context.next = 35;
                return (0, _eventInvitationBuilder2.default)(body.event, body.imageUrl);

              case 35:
                email = _context.sent;
                return _context.abrupt('return', email);

              case 37:
                _context.next = 39;
                return (0, _eventRegistrationBuilder2.default)(body.event, body.imageUrl);

              case 39:
                email = _context.sent;
                return _context.abrupt('return', email);

              case 41:
                _context.next = 43;
                return (0, _firmInviteBuilder2.default)(body.user, body.company, body.imageUrl);

              case 43:
                email = _context.sent;
                return _context.abrupt('return', email);

              case 45:
                _context.next = 47;
                return (0, _trackAssignedBuilder2.default)(body.track, body.imageUrl);

              case 47:
                email = _context.sent;
                return _context.abrupt('return', email);

              case 49:
                throw new Error('Not a valid template');

              case 50:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        undefined
      );
    })
  );

  return function engine(_x) {
    return _ref.apply(this, arguments);
  };
})();

exports.default = engine;
