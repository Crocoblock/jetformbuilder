import initForm from './form';

function initCommon( $scope = false ) {
	let wrappers = jQuery( '.jet-fb-form-block', $scope );

	wrappers.each( function( index, value ) {
		initForm( jQuery( value ) );
	} );
}

export default initCommon;