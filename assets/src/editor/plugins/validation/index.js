const { __ } = wp.i18n;

const base = {
	name: 'jf-validation-panel',
	title: __( 'Validation', 'jet-form-builder' )
};

const {
	      lazy,
	      Suspense,
      } = wp.element;

const ValidationPlugin = lazy( () => import('./render') );

const settings = {
	render: () => <Suspense fallback={ 'Loading...' }>
		<ValidationPlugin/>
	</Suspense>,
	icon: 'shield-alt'
};

export default {
	base,
	settings
};