import RegisterUserRender from './render';
import RegisterUserDetails from './details';

const {
	      addAction,
	      addDetail,
      } = JetFBActions;

addAction( 'register_user', RegisterUserRender );
addDetail( 'register_user', RegisterUserDetails );
