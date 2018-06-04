import React from 'react';
import ComplianceBox from './complianceBox';

class YearRow extends React.Component {
  render() {
    const { compliance, regulator, reportIndex } = this.props;
    if (
      !regulator.cycle_limiter.annual ||
      !regulator.cycle_limiter.annual.hours
    )
      return null;
    const hoursEarned = compliance.total;
    const hoursRequired = regulator.cycle_limiter.annual.hours;
    const hoursRemaining =
      hoursRequired !== 'N/A' && hoursRequired - hoursEarned > 0
        ? hoursRequired - hoursEarned
        : 0;
    return (
      <div>
        <tr>
          <td
            style={{
              fontSize: '16px',
              fontFamily: 'verdana,geneva,sans-serif',
              verticalAlign: 'top'
            }}
          >
            <span>Year</span>
          </td>
          <ComplianceBox
            text="Hours Earned"
            hours={hoursEarned}
            color={reportIndex}
          />
          <ComplianceBox
            text="Hours Required"
            hours={hoursRequired}
            color={reportIndex}
          />
          <ComplianceBox
            text="Remaining"
            hours={hoursRemaining}
            color={reportIndex}
          />
        </tr>
        <tr>
          <td
            colSpan="4"
            style={{ borderBottom: '1px #333333 solid', paddingTop: '4px' }}
          />
        </tr>
        <tr>
          <td colSpan="4" style={{ paddingBottom: '3px' }} />
        </tr>
      </div>
    );
  }
}

export default YearRow;
