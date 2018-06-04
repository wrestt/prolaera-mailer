import * as React from 'react';
import { Email } from 'react-html-email';
import Footer from '../components/footer';
import Header from '../components/header';
import ComplianceReports from '../components/compliance/complianceReports';

const css = `
@media 
only screen and (max-width: 600px),
(min-device-width: 600px) and (max-device-width: 1024px)  {

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
		
	.report td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
    position: relative;
    text-align: center;
	}
	
	.report td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}`.trim();

const email = (completeCompliance, logoUrl) => (
  <Email title="Compliance Report" headCSS={css}>
    <Header src={logoUrl} text="View My Compliance" />
    <ComplianceReports {...completeCompliance} />
    <Footer />
  </Email>
);

export default email;
