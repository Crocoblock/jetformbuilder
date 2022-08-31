const { __ } = wp.i18n;

const base = {
	name: 'jf-args-panel',
	title: __( 'Form Settings' )
};

const {
	      lazy,
	      Suspense,
      } = wp.element;

const PluginArgs = lazy( () => import('./render') );

const settings = {
	render: () => <Suspense fallback={ 'Loading...' }>
		<PluginArgs/>
	</Suspense>,
	icon: 'admin-settings'
};

export default {
	base,
	settings
};