import SendEmailRender from './render';

const {
	      addAction,
      } = JetFBActions;

addAction( 'send_email', SendEmailRender );
