import React from 'react';
import CategoryRow from './categoryRow';
import YearRow from './yearRow';
import TotalRow from './totalRow';

class ComplianceRows extends React.Component {
  render() {
    const { flatCompliance } = this.props;
    const categories = Object.keys(flatCompliance.applied).filter(
      key => key !== 'total'
    );
    return (
      <table className={'report'}>
        {categories.map((category, index) => (
          <CategoryRow
            category={category}
            index={index}
            key={index}
            {...this.props}
          />
        ))}
        <YearRow {...this.props} />
        <TotalRow {...this.props} />
      </table>
    );
  }
}

export default ComplianceRows;
