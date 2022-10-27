import CustomBaseRestriction from './CustomBaseRestriction';

function ServerSideCallback() {
	CustomBaseRestriction.call( this );

	const { apiFetch }            = wp;
	const { validation_endpoint } = JetFormBuilderSettings;

	this.prevCurrent = null;
	this.prevResult  = null;

	this.getSlug         = function () {
		return 'ssr';
	};
	this.isServerSide    = function () {
		return true;
	};
	this.validatePromise = async function () {
		const current = this.getValue();

		if ( null !== this.prevResult && current === this.prevCurrent ) {
			return this.prevResult;
		}

		this.prevCurrent = current;
		this.prevResult  = await this._validatePromise( current );

		return this.prevResult;
	};

	this._validatePromise = async function ( current ) {
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

ServerSideCallback.prototype.prevCurrent = null;
ServerSideCallback.prototype.prevResult  = null;

export default ServerSideCallback;