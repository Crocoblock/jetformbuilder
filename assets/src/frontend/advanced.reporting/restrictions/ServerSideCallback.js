import CustomBaseRestriction from './CustomBaseRestriction';

function ServerSideCallback() {
	CustomBaseRestriction.call( this );

	const { apiFetch } = wp;

	this.getSlug         = function () {
		return 'ssr';
	};
	this.isServerSide    = function () {
		return true;
	};
	this.validatePromise = async function () {
		const current = this.getValue();

		if ( !current ) {
			return Promise.resolve();
		}

		const body = this.getFormData();

		const response = await apiFetch( {
			path: '/jet-form-builder/v1/validate-field',
			method: 'POST',
			body,
		} );

		return response?.result ? Promise.resolve() : Promise.reject();
	};

	this.getFormData = function () {
		const { input }    = this.reporting;
		const { rootNode } = input.getRoot();

		const formData = new FormData( rootNode );
		formData.delete( '_wpnonce' );
		formData.set( '_jfb_validation_rule_index', this.attrs.index );
		for ( const pathElement of input.path ) {
			formData.append( '_jfb_validation_path[]', pathElement );
		}

		return formData;
	};

}

ServerSideCallback.prototype = Object.create(
	CustomBaseRestriction.prototype,
);

export default ServerSideCallback;