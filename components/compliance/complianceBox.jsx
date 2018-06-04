import React from 'react';

class ComplianceBox extends React.Component {
  render() {
    const { text, hours, color } = this.props;
    const colors = [
      '#c0392b',
      '#eea303',
      '#f1c40f',
      '#64bb5d',
      '#16a085',
      '#0e83cd',
      '#702fa8'
    ];
    const style = {
      fontFamily: 'arial',
      color: '#ffffff',
      backgroundColor: colors[color % 7],
      padding: '26px 14px',
      borderLeft: '5px solid #FFFFFF',
      textAlign: 'center'
    };
    return (
      <td style={{ ...style }}>
        <div style={{ fontSize: '14px' }}> {text} </div>
        <div style={{ fontSize: '36px' }}> {hours} </div>
      </td>
    );
  }
}

export default ComplianceBox;
