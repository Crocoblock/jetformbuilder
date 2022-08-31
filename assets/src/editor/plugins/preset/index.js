const { __ } = wp.i18n;

const base = {
	name: 'jf-preset-panel',
	title: __( 'Preset Settings', 'jet-form-builder' ),
};

const {
	      lazy,
	      Suspense,
      } = wp.element;

const PluginPreset = lazy( () => import('./render') );

const settings = {
	render: () => <Suspense fallback={ 'Loading...' }>
		<PluginPreset/>
	</Suspense>,
	icon: 'database-import'
};

export default {
	base,
	settings
};