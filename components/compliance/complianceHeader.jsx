import React from 'react';
import { CycleDates, PrettyDate } from '../../lib/dateHelpers';

class ComplianceReport extends React.Component {
  render() {
    const {
      flatCompliance: { cycle_date, issue_date, expiration_date },
      regulator: { cycle }
    } = this.props;
    return (
      <div>
        <div
          style={{
            fontSize: '28px',
            textAlign: 'center',
            lineHeight: '25px'
          }}
        >
          {' '}
          {regulator.name}
        </div>
        <div style={{ textAlign: 'center', lineHeight: '25px' }}>
          <strong>Reporting Period: </strong>{' '}
          {CycleDates(cycle_date, cycle, issue_date)}
        </div>
        <div style={{ textAlign: 'center', paddingBottom: '10px' }}>
          <strong>License Expiration Date: </strong>{' '}
          {PrettyDate(expiration_date)}
        </div>
      </div>
    );
  }
}

export default ComplianceReport;
