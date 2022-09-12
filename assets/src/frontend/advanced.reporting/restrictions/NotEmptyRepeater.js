import NotEmptyRestriction from './NotEmptyRestriction';

function NotEmptyRepeater() {
	NotEmptyRestriction.call( this );

	this.isSupported = function ( node, reporting ) {
		return 1 === +node.dataset.repeater;
	};
	this.validate    = function () {
		const value = this.getValue();

		if ( null === value || !value.length ) {
			return false;
		}

		for ( const observable of value ) {
			if ( !observable.inputsAreValid() ) {
				return false;
			}
		}

		return true;
	};
}

NotEmptyRepeater.prototype = Object.create( NotEmptyRestriction.prototype );

export default NotEmptyRepeater;