import React from 'react';
import ComplianceBox from './complianceBox';

class TotalRow extends React.Component {
  render() {
    const { flatCompliance, regulator, reportIndex } = this.props;
    const hoursEarned = flatCompliance.actual.total;
    const hoursApplied = flatCompliance.applied.total;
    const hoursRequired = regulator.cycle_total ? regulator.cycle_total : 'N/A';
    const hoursRemaining =
      hoursRequired !== 'N/A' && hoursRequired - hoursApplied > 0 ? hoursRequired - hoursApplied : 0;

    return (
      <div>
        <tr>
          <td style={{ fontSize: '16px', fontFamily: 'verdana,geneva,sans-serif', verticalAlign: 'top' }}>
            <span>
              <strong>Cycle</strong>
            </span>
          </td>
          <ComplianceBox text="Hours Earned" hours={hoursEarned} color={reportIndex} />
          <ComplianceBox text="Hours Applied" hours={hoursApplied} color={reportIndex} />
          {hoursRequired == 'N/A' ? (
            <ComplianceBox text=" " hours=" " color="white" />
          ) : (
            <ComplianceBox text="Hours Required" hours={hoursRequired} color={reportIndex} />
          )}
          {hoursRequired == 'N/A' ? (
            <ComplianceBox text=" " hours=" " color="white" />
          ) : (
            <ComplianceBox text="Remaining" hours={hoursRemaining} color={reportIndex} />
          )}
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
