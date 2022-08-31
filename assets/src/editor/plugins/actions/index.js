const {
	      __,
      } = wp.i18n;
const base = {
	name: 'jf-actions-panel',
	title: __( 'Post Submit Actions', 'jet-form-builder' ),
};

const {
	      lazy,
	      Suspense,
      } = wp.element;

const PluginActions = lazy( () => import('./render') );

const settings = {
	render: () => <Suspense fallback={ 'Loading...' }>
		<PluginActions/>
	</Suspense>,
	icon: 'admin-plugins',
};

export default {
	base,
	settings,
};