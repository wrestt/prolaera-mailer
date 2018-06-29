import activityAssignedEmail from './templates/builders/activityAssignedBuilder';
import courseApprovedBuilder from './templates/builders/courseApprovedBuilder';
import courseAssignedBuilder from './templates/builders/courseAssignedBuilder';
import courseCertificateBuilder from './templates/builders/courseCertificateBuilder';
import courseReviewBuilder from './templates/builders/courseReviewBuilder';
import eventCertificateBuilder from './templates/builders/eventCertificateBuilder';
import eventInvitationBuilder from './templates/builders/eventInvitationBuilder';
import eventRegistrationBuilder from './templates/builders/eventRegistrationBuilder';
import firmInviteBuilder from './templates/builders/firmInviteBuilder';
import trackAssignedBuilder from './templates/builders/trackAssignedBuilder';
import userCompliance from './templates/builders/userCompliance';

const engine = async event => {
  const { body } = event;
  let email;
  switch (body.template) {
    case 'userCompliance':
      email = await userCompliance(body.completeCompliance, body.imageUrl);
      return email;

    case 'activityAssigned':
      email = await activityAssignedEmail(body.activity, body.user, body.imageUrl);
      return email;

    case 'courseApproved':
      email = await courseApprovedBuilder(body.course, body.imageUrl);
      return email;

    case 'courseAssigned':
      email = await courseAssignedBuilder(body.course, body.imageUrl);
      return email;

    case 'courseCertificate':
      email = await courseCertificateBuilder(body.course, body.user, body.certificate, body.imageUrl);
      return email;

    case 'courseReview':
      email = await courseReviewBuilder(body.course, body.imageUrl);
      return email;

    case 'eventCertificate':
      email = await eventCertificateBuilder(body.event, body.user, body.certificate, body.imageUrl);
      return email;

    case 'eventInvitation':
      email = await eventInvitationBuilder(body.event, body.imageUrl);
      return email;

    case 'eventRegistration':
      email = await eventRegistrationBuilder(body.event, body.imageUrl);
      return email;

    case 'firmInvite':
      email = await firmInviteBuilder(body.user, body.company, body.imageUrl);
      return email;

    case 'trackAssigned':
      email = await trackAssignedBuilder(body.track, body.imageUrl);
      return email;

    case 'teamLeaderAssigned':
      email = await teamLeadBuilder(body.track, body.imageUrl);
      return email;

    default:
      throw new Error('Not a valid template');
  }
};

export default engine;
