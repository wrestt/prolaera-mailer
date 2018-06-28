import React from 'react';
import ComplianceBox from './complianceBox';

class TotalRow extends React.Component {
  render() {
    const { flatCompliance, regulator, reportIndex } = this.props;
    const hoursEarned = flatCompliance.applied.total;
    const hoursApplied = flatCompliance.applied.hours ? flatCompliance.applied.hours : 'N/A';
    const hoursRequired = regulator.cycle_total ? regulator.cycle_total : 'N/A';
    const hoursRemaining = hoursRequired !== 'N/A' && hoursRequired - hoursEarned > 0 ? hoursRequired - hoursEarned : 0;
    return (
      <div>
        <tr>
          <td style={{ fontSize: '16px', fontFamily: 'verdana,geneva,sans-serif', verticalAlign: 'top' }}>
            <span>
              <strong>Total</strong>
            </span>
          </td>
          <ComplianceBox text="Hours Earned" hours={hoursEarned} color={reportIndex} />
          {hoursApplied == 'N/A' ? (
            <ComplianceBox text=" " hours=" " color="white" />
          ) : (
            <ComplianceBox text="Hours Applied" hours={hoursApplied} color={reportIndex} />
          )}
          {hoursRequired == 'N/A' ? (
            <ComplianceBox text=" " hours=" " color="white" />
          ) : (
            <ComplianceBox text="Hours Required" hours={hoursRequired} color={reportIndex} />
          )}
          <ComplianceBox text="Remaining" hours={hoursRemaining} color={reportIndex} />
        </tr>
        <tr>
          <td colSpan="5" style={{ borderBottom: '1px #333333 solid', paddingTop: '4px' }} />
        </tr>
        <tr>
          <td colSpan="5" style={{ paddingBottom: '3px' }} />
        </tr>
      </div>
    );
  }
}

export default TotalRow;
