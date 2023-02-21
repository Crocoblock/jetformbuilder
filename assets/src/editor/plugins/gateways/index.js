const { __ } = wp.i18n;

const base = {
	name: 'jf-gateways-panel',
	title: __( 'Gateways Settings' ),
	condition: window.JetFormEditorData.gateways.allowed,
};

const {
	      lazy,
	      Suspense,
      } = wp.element;

const PluginGateways = lazy( () => import('./render') );

const settings = {
	render: () => <Suspense fallback={ 'Loading...' }>
		<PluginGateways/>
	</Suspense>,
	icon: 'money-alt',
};

export default {
	base,
	settings,
};