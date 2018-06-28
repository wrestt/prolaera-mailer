'use strict';

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _domHelpers = require('../../helpers/domHelpers');

var _domHelpers2 = _interopRequireDefault(_domHelpers);

var _event = require('../../templates/tests/json/event');

var _event2 = _interopRequireDefault(_event);

var _eventInfo = require('../event/eventInfo');

var _eventInfo2 = _interopRequireDefault(_eventInfo);

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

var event = {
  course_name: 'Fraud in the Digital Age',
  courseAudience: 'CPAs',
  delivery_date: '2018-06-14T09:24:00.000Z',
  delivery_end_date: '2018-06-15T04:24:00.000Z',
  delivery_location: 'The White House, 1600 Pennsylvania Avenue Northwest, Washington, DC, USA',
  delivery_method: 1,
  event_id: 'd342572d-e149-48fa-83c5-e2730bbb1b76',
  hours: [
    {
      credits: 12,
      subject_area: 'Auditing'
    },
    {
      credits: 4,
      subject_area: 'Uncategorized'
    },
    {
      credits: 0.1,
      subject_area: 'Other'
    }
  ],
  level: 'Advanced',
  objectives: '<ul><li>Objective 1</li><li>Objective 2</li><li>Objective 3</li><li>Objective 3 + 1</li></ul>',
  prep: '<div><u>None needed.&nbsp;</u></div>',
  prerequisites:
    '<ul><li>Familiarity with fraud detection methods</li><li>Deep-seated hatred for fraud</li><li>Love of avoiding fraud</li><li>Two hundred thousand dollars</li></ul>',
  price: 200000,
  summary:
    '<p><b>This course is about</b>&nbsp;detecting fraud. On top of that, this course is also about many other things. Here is a list of some of the things that will be covered in this course.&nbsp;</p><ul><li>Stuff</li><li>Things</li><li>Topics</li></ul><p>Please bring a pen and paper, and laptop. If you dont have any of those, tough luck. < /p><div><span style="background-color: rgb(85, 98, 113); color: rgb(123, 136, 152); font-family: &quot;Mercury SSm A&quot;, &quot;Mercury SSm B&quot;, Georgia, Times, &quot;Times New Roman&quot;, &quot;Microsoft YaHei New&quot;, &quot;Microsoft Yahei&quot;, 微软雅黑, 宋体, SimSun, STXihei, 华文细黑, serif; font-size: 1.1875em;"><br></span > < /div>'
};

describe('EventInfo Component', function() {
  it(
    'provides default email output values if none are provided',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var eventInfo, emailString, containsDefaultInfo;
        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  eventInfo = _reactTestRenderer2.default.create(
                    _react2.default.createElement(_eventInfo2.default, null)
                  );
                  emailString = JSON.stringify(eventInfo.toJSON());
                  containsDefaultInfo = emailString.includes('Summary:', ' ');

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
    'successfully parses Event JSON data',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
        var eventInfo, eventInfoString, containsCourseName;
        return regeneratorRuntime.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  eventInfo = _reactTestRenderer2.default.create(
                    _react2.default.createElement(_eventInfo2.default, { course_name: _event2.default.course_name })
                  );
                  eventInfoString = JSON.stringify(eventInfo.toJSON());
                  containsCourseName = eventInfoString.includes('ASC 606 Update Training');

                  expect(containsCourseName).toEqual(true);

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

  it(
    'checks all custom inputs',
    _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee3() {
        var wrapper;
        return regeneratorRuntime.wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_eventInfo2.default, event));

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        'h4',
                        { align: 'center' },
                        _react2.default.createElement('em', null, 'Fraud in the Digital Age (Group-Live)')
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        'h4',
                        null,
                        'Start Time: ',
                        _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, 'June 14, 2018')
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        'h4',
                        null,
                        'End Time: ',
                        _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, 'June 15, 2018')
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        'ul',
                        { style: { marginTop: '10px' } },
                        _react2.default.createElement('li', { style: { padding: '5px' } }, 'Auditing - 12 Hour(s)'),
                        _react2.default.createElement('li', { style: { padding: '5px' } }, 'Uncategorized - 4 Hour(s)'),
                        _react2.default.createElement('li', { style: { padding: '5px' } }, 'Other - 0.1 Hour(s)')
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        'span',
                        { style: { fontWeight: 'normal' } },
                        'The White House, 1600 Pennsylvania Avenue Northwest, Washington, DC, USA'
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        'h4',
                        null,
                        'Delivery Method: ',
                        _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, 'Group-Live')
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        'h4',
                        null,
                        'Price: ',
                        _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, '$200000.00')
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement(
                        'h4',
                        null,
                        'Target Audience: ',
                        _react2.default.createElement('span', { style: { fontWeight: 'normal' } }, 'CPAs')
                      )
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement('div', {
                        className: 'innerHtmlStyles',
                        dangerouslySetInnerHTML: (0, _domHelpers2.default)('<div><u>None needed.&nbsp;</u></div>')
                      })
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement('div', {
                        className: 'innerHtmlStyles',
                        dangerouslySetInnerHTML: (0, _domHelpers2.default)(
                          '<ul><li>Familiarity with fraud detection methods</li><li>Deep-seated hatred for fraud</li><li>Love of avoiding fraud</li><li>Two hundred thousand dollars</li></ul>'
                        )
                      })
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement('div', {
                        className: 'innerHtmlStyles',
                        dangerouslySetInnerHTML: (0, _domHelpers2.default)(
                          '<ul><li>Objective 1</li><li>Objective 2</li><li>Objective 3</li><li>Objective 3 + 1</li></ul>'
                        )
                      })
                    )
                  ).toBe(true);

                  expect(
                    wrapper.contains(
                      _react2.default.createElement('div', {
                        className: 'innerHtmlStyles',
                        dangerouslySetInnerHTML: (0, _domHelpers2.default)(
                          '<p><b>This course is about</b>&nbsp;detecting fraud. On top of that, this course is also about many other things. Here is a list of some of the things that will be covered in this course.&nbsp;</p><ul><li>Stuff</li><li>Things</li><li>Topics</li></ul><p>Please bring a pen and paper, and laptop. If you dont have any of those, tough luck. < /p><div><span style="background-color: rgb(85, 98, 113); color: rgb(123, 136, 152); font-family: &quot;Mercury SSm A&quot;, &quot;Mercury SSm B&quot;, Georgia, Times, &quot;Times New Roman&quot;, &quot;Microsoft YaHei New&quot;, &quot;Microsoft Yahei&quot;, 微软雅黑, 宋体, SimSun, STXihei, 华文细黑, serif; font-size: 1.1875em;"><br></span > < /div>'
                        )
                      })
                    )
                  ).toBe(true);

                case 13:
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
});
