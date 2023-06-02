function removeForm( $scope ) {
	const form       = $scope[ 0 ].querySelector( 'form' );

	if ( ! JetFormBuilder.hasOwnProperty( form.dataset.formId ) ) {
		return;
	}
	/**
	 * @type {Observable}
	 */
	const observable = JetFormBuilder[ form.dataset.formId ];

	observable.remove();
}

export default removeForm;