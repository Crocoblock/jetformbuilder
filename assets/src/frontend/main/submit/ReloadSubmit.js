import BaseSubmit from './BaseSubmit';

function ReloadSubmit( form ) {
	BaseSubmit.call( this, form );

	this.submit = function () {
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
	};
}

ReloadSubmit.prototype = Object.create( BaseSubmit.prototype );

export default ReloadSubmit;