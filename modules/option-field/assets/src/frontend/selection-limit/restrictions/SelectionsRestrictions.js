import { countSelected, getDefaultMessage, getLimits, validateMinSelections } from '../functions';

const { Restriction } = JetFormBuilderAbstract;

export function MinSelectionsRestriction() {
	Restriction.call( this );
	this.type = 'min_selections';

	this.isSupported = ( node, reporting ) => getLimits( reporting.input ).min > 0;
	this.getMessage = () => getDefaultMessage( this.reporting.input, 'min' );
	this.validate = () => validateMinSelections( this.reporting.input );
}

MinSelectionsRestriction.prototype = Object.create( Restriction.prototype );

export function MaxSelectionsRestriction() {
	Restriction.call( this );
	this.type = 'max_selections';

	this.isSupported = ( node, reporting ) => getLimits( reporting.input ).max > 0;
	this.getMessage = () => getDefaultMessage( this.reporting.input, 'max' );
	this.validate = () => {
		const input = this.reporting.input;
		return countSelected( input, 'max' ) <= getLimits( input ).max;
	};
}

MaxSelectionsRestriction.prototype = Object.create( Restriction.prototype );
