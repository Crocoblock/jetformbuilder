import BaseReactiveProperty from './BaseReactiveProperty';

const { CalculatedFormula } = JetFormBuilderAbstract;

function ReactiveValue() {

	this.isSupported = function ( input ) {
		const [ node ] = input.nodes;

		return node.dataset.hasOwnProperty( 'value' );
	};

	this.runObserve = function ( input ) {
		const [ node ] = input.nodes;

		const formula = new CalculatedFormula(
			node.dataset.value,
			input,
		);

		formula.setResult = () => {
			input.value.current = formula.calculate();
		};
		formula.setResult();
	};
}

ReactiveValue.prototype = Object.create( BaseReactiveProperty.prototype );

export default ReactiveValue;