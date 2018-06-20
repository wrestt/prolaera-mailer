import React from 'react';

class Button extends React.Component {
  render() {
    const { text = '' } = this.props;
    return (
      <div className="customButton" style={{ width: '100%', textAlign: 'center', padding: '20px 0px 20px 0px' }}>
        <a
          style={{
            maxWidth: '200px',
            backgroundColor: '#72C02C',
            padding: '14px 14px 14px 14px',
            color: 'white',
            textDecoration: 'none'
          }}
        >
          {text}
        </a>
      </div>
    );
  }
}

export default Button;
