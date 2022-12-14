import ValueItem from './ValueItem';

const {
	      CalculatedFormula,
      } = JetFormBuilderAbstract;

function MultipleValueItem( ...props ) {
	ValueItem.call( this, ...props );
}

MultipleValueItem.prototype = Object.create( ValueItem.prototype );

MultipleValueItem.prototype.isSupported     = function ( input ) {
	return input.isArray();
};
MultipleValueItem.prototype.observeSetValue = function ( conditions, input ) {
	let toSet = [];

	if ( !Array.isArray( this.to_set ) ) {
		toSet = this.to_set.split( ',' ).map( item => item.trim() );
	}
	this.to_set = {};

	for ( const [ index, toSetElement ] of Object.entries( toSet ) ) {
		const formula = new CalculatedFormula( input );

		formula.observe( toSetElement );
		formula.setResult = () => {
			this.to_set[ index ] = '' + formula.calculate();

			this.to_set = Object.values( this.to_set );
		};

		formula.setResult();
	}
};

export default MultipleValueItem;