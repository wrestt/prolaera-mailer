import React from 'react';
import categoryName from '../../lib/categoryName';
import ComplianceBox from './complianceBox';

class CategoryRow extends React.Component {
  render() {
    const { flatCompliance, regulator, reportIndex, category } = this.props;
    const hoursEarned = flatCompliance.applied[category];
    const hoursApplied = flatCompliance.applied[category];
    const hoursRequired = regulator.cycle_limiter.min[category] ? regulator.cycle_limiter.min[category] : 'N/A';
    const hoursRemaining = hoursRequired !== 'N/A' && hoursRequired - hoursEarned > 0 ? hoursRequired - hoursEarned : 0;
    return (
      <div>
        <tr>
          <td style={{ fontSize: '16px', fontFamily: 'verdana,geneva,sans-serif', verticalAlign: 'top' }}>
            <span>{categoryName(category)}</span>
          </td>
          <ComplianceBox text="Hours Earned" hours={hoursEarned} color={reportIndex} />
          <ComplianceBox text="Hours Applied" hours={hoursApplied} color={reportIndex} />
          {hoursRequired == 'N/A' ? (
            <ComplianceBox text=" " hours=" " color="white" />
          ) : (
            <ComplianceBox text="Hours Required" hours={hoursRequired} color={reportIndex} />
          )}
          <ComplianceBox text="Remaining" hours={hoursRemaining} color={reportIndex} />
        </tr>
      </div>
    );
  }
}

export default CategoryRow;
