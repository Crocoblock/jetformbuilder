import BaseSubmit from './BaseSubmit';

class ReloadSubmit extends BaseSubmit {

	submit() {
		const { rootNode }     = this.form.observable;
		const { applyFilters } = wp.hooks;

		Promise.all(
			applyFilters(
				'jet.fb.submit.reload.promises',
				this.getPromises(),
				{ target: rootNode },
			),
		).then(
			() => rootNode.submit(),
		).catch(
			() => this.form.toggle(),
		);
	}
}

export default ReloadSubmit;