import CallWebHookRender from './render';

const {
	      addAction,
      } = JetFBActions;

addAction( 'call_webhook', CallWebHookRender );
