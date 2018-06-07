import React from 'react';
import categoryName from '../../lib/categoryName';
import ComplianceBox from './complianceBox';

class CategoryRow extends React.Component {
  render() {
    const { flatCompliance, regulator, reportIndex, category } = this.props;
    const hoursEarned = flatCompliance.applied[category];
    const hoursRequired = regulator.cycle_limiter.min[category] ? regulator.cycle_limiter.min[category] : 'N/A';
    const hoursRemaining = hoursRequired !== 'N/A' && hoursRequired - hoursEarned > 0 ? hoursRequired - hoursEarned : 0;
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
            <span>{categoryName(category)}</span>
          </td>
          <ComplianceBox text="Hours Earned" hours={hoursEarned} color={reportIndex} />
          <ComplianceBox text="Hours Required" hours={hoursRequired} color={reportIndex} />
          <ComplianceBox text="Remaining" hours={hoursRemaining} color={reportIndex} />
        </tr>
        <tr>
          <td colSpan="4" style={{ borderBottom: '1px #333333 solid', paddingTop: '4px' }} />
        </tr>
        <tr>
          <td colSpan="4" style={{ paddingBottom: '3px' }} />
        </tr>
      </div>
    );
  }
}

export default CategoryRow;
