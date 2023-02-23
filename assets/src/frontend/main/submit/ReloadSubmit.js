import BaseSubmit from './BaseSubmit';

function ReloadSubmit( form ) {
	BaseSubmit.call( this, form );

	this.failPromises = [];

	this.submit = function () {
		const { rootNode }     = this.form.observable;
		const { applyFilters } = JetPlugins.hooks;

		Promise.all(
			applyFilters(
				'jet.fb.submit.reload.promises',
				this.getPromises(),
				{ target: rootNode },
			),
		).then(
			() => rootNode.submit(),
		).catch( () => {
			this.failPromises.forEach( current => current() );

			this.form.toggle();
		} );
	};

	this.onFailSubmit = function ( callable ) {
		if ( 'function' !== typeof callable ) {
			return;
		}
		this.failPromises.push( callable );
	};
}

ReloadSubmit.prototype = Object.create( BaseSubmit.prototype );

export default ReloadSubmit;