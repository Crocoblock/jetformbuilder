import Observable from '../Observable';

window.JetFormBuilder = window.JetFormBuilder ?? {};

function initForm( $scope ) {
	const form       = $scope[ 0 ].querySelector( 'form' );
	const observable = new Observable();

	JetFormBuilder[ form.dataset.formId ] = observable;

	jQuery( document ).trigger(
		'jet-form-builder/init',
		[ $scope, observable ],
	);

	observable.observe( form );

	jQuery( document ).trigger(
		'jet-form-builder/after-init',
		[ $scope, observable ],
	);
}

export default initForm;