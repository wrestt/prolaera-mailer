'use strict';

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _courseInfo = require('../../components/course/courseInfo');

var _courseInfo2 = _interopRequireDefault(_courseInfo);

var _domHelpers = require('../../helpers/domHelpers');

var _domHelpers2 = _interopRequireDefault(_domHelpers);

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

var course = {
  by: 'John Doe',
  course_id: '1234-1234-1234-1234',
  courseAudience: 'Accountants',
  delivery_method: 1,
  hours: [
    {
      credits: 1,
      subject_area: 'Tax Preparation'
    }
  ],
  level: 'Basic',
  name: 'Tax Preparation 102',
  objectives: '<ol><li>Learn about tax planning</li><li>Apply skills</li><li>Review tax planning</li></ol>',
  prep: '<p>Read course introduction</p>',
  prerequisites: '<p>Tax Prep 101</p>',
  summary: '<p>This course is the second installation of Tax Prep focused on general tax planning.</p>',
  header: 'Your course Tax Preparation 101 is ready for review',
  footer: 'Log in below',
  buttonText: 'Test Button Text',
  adminProfileId: 'testAdminProfileId',
  buttonLink: 'testButtonLink'
};

describe('CourseInfo component custom input tests', function() {
  it(
    'creates and checks a snapshot of CourseInfo html',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var courseHtml, courseJson;
        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  courseHtml = _reactTestRenderer2.default.create(
                    _react2.default.createElement(_courseInfo2.default, course)
                  );
                  courseJson = courseHtml.toJSON();

                  expect(courseJson).toMatchSnapshot();

                case 3:
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
                  wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_courseInfo2.default, course));

                  expect(
                    wrapper.contains(_react2.default.createElement('em', null, 'Tax Preparation 102 (Group-Live)'))
                  ).toBe(true);
                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        'h4',
                        null,
                        'By: ',
                        _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, 'John Doe')
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        'li',
                        { style: { fontWeight: 'normal' } },
                        'Tax Preparation - 1 Hour(s)'
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        'h4',
                        null,
                        'Price: ',
                        _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, 'Free')
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        'h4',
                        null,
                        'Target Audience: ',
                        _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, 'Accountants')
                      )
                    )
                  ).toBe(true);
                  expect(
                    wrapper.contains(
                      _react2.default.createElement('div', {
                        className: 'innerHtmlStyles',
                        style: { fontWeight: 'normal' },
                        dangerouslySetInnerHTML: (0, _domHelpers2.default)('<p>Read course introduction</p>')
                      })
                    )
                  ).toBe(true);
                  expect(
                    wrapper.contains(
                      _react2.default.createElement('div', {
                        className: 'innerHtmlStyles',
                        style: { fontWeight: 'normal' },
                        dangerouslySetInnerHTML: (0, _domHelpers2.default)('<p>Tax Prep 101</p>')
                      })
                    )
                  ).toBe(true);
                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        'h4',
                        null,
                        'Level: ',
                        _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, 'Basic')
                      )
                    )
                  ).toBe(true);
                  expect(
                    wrapper.contains(
                      _react2.default.createElement('div', {
                        className: 'innerHtmlStyles',
                        style: { fontWeight: 'normal' },
                        dangerouslySetInnerHTML: (0, _domHelpers2.default)(
                          '<ol><li>Learn about tax planning</li><li>Apply skills</li><li>Review tax planning</li></ol>'
                        )
                      })
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement('div', {
                        className: 'innerHtmlStyles',
                        style: { fontWeight: 'normal' },
                        dangerouslySetInnerHTML: (0, _domHelpers2.default)(
                          '<p>This course is the second installation of Tax Prep focused on general tax planning.</p>'
                        )
                      })
                    )
                  ).toBe(true);
                  expect(
                    wrapper.contains(
                      _react2.default.createElement(_button2.default, {
                        text: 'Test Button Text',
                        link: 'https://app.prolaera.com/#/admin/testAdminProfileId/testButtonLink/review'
                      })
                    )
                  ).toBe(true);

                case 12:
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
