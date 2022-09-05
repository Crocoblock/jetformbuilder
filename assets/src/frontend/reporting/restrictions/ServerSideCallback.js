import AdvancedRestriction from './AdvancedRestriction';

const { apiFetch }            = wp;
const { validation_endpoint } = JetFormBuilderSettings;

class ServerSideCallback extends AdvancedRestriction {

	getSlug() {
		return 'ssr';
	}

	isServerSide() {
		return true;
	}

	async validatePromise() {
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
	}

}

export default ServerSideCallback;