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

		const body = this.getFormData();

		const response = await apiFetch( {
			...validation_endpoint,
			body,
		} );

		return response?.result ? Promise.resolve() : Promise.reject();
	};

	this.getFormData = function () {
		const { input } = this.reporting;
		const formData  = this.getInitialFormData();

		formData.set( '_jfb_validation_field', input.name );
		formData.set( '_jfb_validation_callback', this.attrs.value );

		if ( !input.hasParent() ) {
			return formData;
		}
		formData.set( '_jfb_validation_parent', input.root.parent.name );
		const { rootNode: globalRootNode } = input.root.parent.root;

		const globalFormData = new FormData( globalRootNode );

		for ( const [ name, value ] of globalFormData.entries() ) {
			if ( name === input.root.parent.name ) {
				continue;
			}
			const nameParts = name.match( /([\w\-]+)(.*)?/ );

			if ( !nameParts?.length ) {
				console.error( 'Invalid field name', name );
				continue;
			}

			const [ , clearName, rightName ] = nameParts;

			formData.append(
				`_jfb_validation_root[${ clearName }]` + (
					rightName ?? ''
				),
				value,
			);
		}

		return formData;
	};

	this.getInitialFormData = function () {
		const { input }    = this.reporting;
		const { rootNode } = input.root;

		if ( !input.hasParent() ) {
			const formData = new FormData( rootNode );
			formData.delete( '_wpnonce' );

			return formData;
		}
		/**
		 * @type {Element}
		 */
		const formElement = document.createElement( 'form' );
		formElement.append( rootNode.cloneNode( true ) );

		return new FormData( formElement );
	};
}

ServerSideCallback.prototype = Object.create(
	CustomBaseRestriction.prototype,
);

export default ServerSideCallback;