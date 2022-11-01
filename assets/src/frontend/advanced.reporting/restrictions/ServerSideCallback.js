import CustomBaseRestriction from './CustomBaseRestriction';

function ServerSideCallback() {
	CustomBaseRestriction.call( this );

	const { apiFetch }            = wp;
	const { validation_endpoint } = JetFormBuilderSettings;

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

		const { rootNode } = this.reporting.input.getRoot();
		const formData     = new FormData( rootNode );

		const response = await apiFetch( {
			...validation_endpoint,
			data: {
				callback: this.attrs.value,
				formData,
				current,
			},
		} );

		return response?.result ? Promise.resolve() : Promise.reject();
	};
}

ServerSideCallback.prototype = Object.create(
	CustomBaseRestriction.prototype,
);

export default ServerSideCallback;