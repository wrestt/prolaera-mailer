import * as React from 'react';
import { renderEmail } from 'react-html-email';
import userComplaince from './templates/userCompliance';

const handler = (event, context) => {
  const { body } = event;
  switch (body.template) {
    case 'userComplaince':
      const email = renderEmail(userComplaince(body.completeCompliance, body.logoUrl));
      return context.succed(email);
    default:
      context.fail('Invaild Template');
      break;
  }
};

export default handler;
