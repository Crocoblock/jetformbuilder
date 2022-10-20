import CustomBaseRestriction from './AdvancedRestriction';

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

		return await apiFetch( {
			...validation_endpoint,
			data: {
				callback: this.attrs.value,
				formData,
				current,
			},
		} );
	};
}

ServerSideCallback.prototype = Object.create(
	CustomBaseRestriction.prototype,
);

export default ServerSideCallback;