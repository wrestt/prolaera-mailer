import * as React from 'react';
import { Box, Item } from 'react-html-email';
import ComplianceReport from './complianceReport';

class ComplianceReports extends React.Component {
  render() {
    const { flatComplianceDict, complianceDict, regulatorsDict } = this.props;

    return (
      <Box width="100%" height="100%" style={{ backgroundColor: '#F7F7F7' }}>
        <Item>
          <Box cellSpacing={20} align="center">
            {Object.keys(complianceDict).map((key, index) => {
              return (
                <ComplianceReport
                  key={index}
                  flatCompliance={flatComplianceDict[key][0]}
                  compliance={complianceDict[key]}
                  regulator={regulatorsDict[key]}
                  index={index}
                />
              );
            })}
          </Box>
        </Item>
      </Box>
    );
  }
}

export default ComplianceReports;
