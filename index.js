import email from './template';

const build = completeCompliance => {
  const logoUrl =
    'https://gallery.mailchimp.com/eb930e30a15249a18d658c183/images/8913446e-ebf0-42fc-9518-3422589d5ed8.png';
  return email(logoUrl, completeCompliance);
};

export default build;
