import CustomBaseRestriction from './CustomBaseRestriction';
import apiFetch from '@wordpress/api-fetch';

function ServerSideCallback() {
	CustomBaseRestriction.call( this );

	this.getSlug         = function () {
		return 'ssr';
	};
	this.isServerSide    = function () {
		return true;
	};
	this.validatePromise = async function ( signal = null ) {
		const current = this.getValue();

		if ( !current ) {
			return Promise.resolve();
		}

		const body = this.getFormData();
		const { rootNode } = this.reporting.input.getRoot();
		const ssrValidationMethod = rootNode.getAttribute('ssr_validation_method') || 'rest';

		switch (ssrValidationMethod) {
			case 'admin_ajax':
				return this.validateViaAdminAjax(body, signal);

			case 'self':
				return this.validateViaSelfRequest(body, signal);

			default:
				return this.validateViaRest(body, signal);
		}

	};

	this.validateViaRest = async function (body, signal) {
		try {
			const response = await apiFetch({
				path: '/jet-form-builder/v1/validate-field',
				method: 'POST',
				body,
				signal
			});

			return response?.result ? Promise.resolve() : Promise.reject();
		} catch (error) {
			throw error;
		}
	};

	this.validateViaAdminAjax = async function (body, signal) {
		try {
			const response = await fetch(window.JetFormBuilderSettings.adminajaxurl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams({
					action: 'jet_fb_ssr_validation_ajax',
					data: JSON.stringify(Object.fromEntries(body)),
				}),
				signal,
			}).then(res => res.json());

			return response?.result ? Promise.resolve() : Promise.reject();
		} catch (error) {
			throw error;
		}
	};

	this.validateViaSelfRequest = async function (body, signal) {
		try {
			const url = new URL(window.location.href);
			url.searchParams.set('jet_fb_ssr_self_validation', '1');

			for (const [key, value] of body.entries()) {
				url.searchParams.append(key, value);
			}

			const response = await fetch(url.toString(), {
				method: 'GET',
				signal,
			}).then(res => res.json());

			return response?.result ? Promise.resolve() : Promise.reject();
		} catch (error) {
			throw error;
		}
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