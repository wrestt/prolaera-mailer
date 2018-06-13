import * as React from 'react';
import { Email, renderEmail } from 'react-html-email';
import ComplianceReports from '../components/compliance/complianceReports';
import Footer from '../components/footer';
import buildHeader from '../components/header';
import css from './templateCSS.js';

const email = async (completeCompliance, imageUrl) => {
  try {
    const Header = await buildHeader(imageUrl);
    return renderEmail(
      <Email title="Compliance Report" headCSS={css}>
        <Header text="compliance report" />
        <ComplianceReports {...completeCompliance} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default email;
