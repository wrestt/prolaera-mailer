import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { CycleDates, PrettyDate } from '../../helpers/dateHelpers';

class ComplianceHeader extends React.Component {
  render() {
    const {
      flatCompliance: { cycle_date, issue_date, expiration_date },
      regulator: { cycle, name }
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
          {name}
        </div>
        <div style={{ textAlign: 'center', lineHeight: '25px' }}>
          <strong>Reporting Period: </strong> {CycleDates(cycle_date, cycle, issue_date)}
        </div>
        <div style={{ textAlign: 'center', paddingBottom: '10px' }}>
          <strong>License Expiration Date: </strong> {PrettyDate(expiration_date)}
        </div>
      </div>
    );
  }
}

export default ComplianceHeader;
