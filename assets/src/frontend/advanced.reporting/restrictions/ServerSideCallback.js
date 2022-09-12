import AdvancedRestriction from './AdvancedRestriction';

function ServerSideCallback() {
	AdvancedRestriction.call( this );

	const { apiFetch }            = wp;
	const { validation_endpoint } = JetFormBuilderSettings;

	this.getSlug         = function () {
		return 'ssr';
	};
	this.isServerSide    = function () {
		return true;
	};
	this.validatePromise = async function () {
		const { rootNode } = this.reporting.input.getRoot();
		const formData     = new FormData( rootNode );
		const current      = this.getValue();

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
	AdvancedRestriction.prototype,
);

export default ServerSideCallback;