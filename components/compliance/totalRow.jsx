import React from 'react';
import ComplianceBox from './complianceBox';

class TotalRow extends React.Component {
  render() {
    const { flatCompliance, regulator, reportIndex } = this.props;
    const hoursEarned = flatCompliance.applied.total;
    const hoursRequired = regulator.cycle_total ? regulator.cycle_total : 'N/A';
    const hoursRemaining =
      hoursRequired !== 'N/A' && hoursRequired - hoursEarned > 0
        ? hoursRequired - hoursEarned
        : 0;
    return (
      <tr>
        <td
          style={{
            fontSize: '16px',
            fontFamily: 'verdana,geneva,sans-serif',
            verticalAlign: 'top'
          }}
        >
          <span>
            <strong>Total</strong>
          </span>
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
    );
  }
}

export default TotalRow;
