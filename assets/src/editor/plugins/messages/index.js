const { __ } = wp.i18n;

const base = {
	name: 'jf-messages-panel',
	title: __( 'General Messages Settings' ),
};

const {
	      lazy,
	      Suspense,
      } = wp.element;

const PluginMessages = lazy( () => import('./render') );

const settings = {
	render: () => <Suspense fallback={ 'Loading...' }>
		<PluginMessages/>
	</Suspense>,
	icon: 'format-status'
};

export default {
	base,
	settings
};