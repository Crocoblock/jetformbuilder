const { __ } = wp.i18n;

const base = {
	name: 'jf-captcha-panel',
	title: __( 'Captcha Settings', 'jet-form-builder' )
};

const {
	      lazy,
	      Suspense,
      } = wp.element;

const PluginCaptcha = lazy( () => import('./render') );

const settings = {
	render: () => <Suspense fallback={ 'Loading...' }>
		<PluginCaptcha/>
	</Suspense>,
	icon: 'filter'
};

export default {
	base,
	settings
};