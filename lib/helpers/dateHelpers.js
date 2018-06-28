'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.PrettyDate = exports.RangeDate = exports.CycleDates = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function CycleDates(cycle_date, cycle, issue_date) {
  var date = (0, _moment2.default)(cycle_date)
    .add(1, 'day')
    .toString();
  var startDate = RangeDate(date, cycle);
  if (issue_date && new Date(issue_date).getTime() > new Date(startDate).getTime()) startDate = issue_date;
  return PrettyDate(startDate) + ' - ' + PrettyDate(cycle_date);
}

function RangeDate(date, range) {
  var startDate = new Date(date);
  return startDate.setFullYear(startDate.getFullYear() - range);
}

function PrettyDate(date) {
  if (new Date(date).toString().toLowerCase() === 'invalid date') return '';
  var prettyDate = _moment2.default.utc(date).format('LL');
  if (prettyDate.toLowerCase() === 'invalid date') return '';
  return prettyDate;
}

exports.CycleDates = CycleDates;
exports.RangeDate = RangeDate;
exports.PrettyDate = PrettyDate;
