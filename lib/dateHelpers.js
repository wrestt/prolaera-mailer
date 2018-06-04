import moment from 'moment';

function CycleDates(cycle_date, cycle, issue_date) {
  const date = moment(cycle_date)
    .add(1, 'day')
    .toString();
  let startDate = RangeDate(date, cycle);
  if (
    issue_date &&
    new Date(issue_date).getTime() > new Date(startDate).getTime()
  )
    startDate = issue_date;
  return `${PrettyDate(startDate)} - ${PrettyDate(cycle_date)}`;
}

function RangeDate(date, range) {
  const startDate = new Date(date);
  return startDate.setFullYear(startDate.getFullYear() - range);
}

function PrettyDate(date) {
  if (new Date(date).toString().toLowerCase() === 'invalid date') return '';
  const prettyDate = moment.utc(date).format('LL');
  if (prettyDate.toLowerCase() === 'invalid date') return '';
  return prettyDate;
}

export { CycleDates, RangeDate, PrettyDate };
