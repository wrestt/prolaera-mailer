import React from 'react';
import CategoryRow from './categoryRow';
import TotalRow from './totalRow';
import YearRow from './yearRow';

class ComplianceRows extends React.Component {
  render() {
    const { flatCompliance } = this.props;
    const categories = Object.keys(flatCompliance.applied).filter(key => key !== 'total');
    return (
      <table className={'report'}>
        <TotalRow {...this.props} />
        <YearRow {...this.props} />
        {categories.map((category, index) => (
          <CategoryRow category={category} index={index} key={index} {...this.props} />
        ))}
      </table>
    );
  }
}

export default ComplianceRows;
