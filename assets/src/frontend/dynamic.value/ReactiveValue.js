import BaseReactiveProperty from './BaseReactiveProperty';

function ReactiveValue() {
	this.attrName = 'value';

	this.observe = function ( input, formula ) {
		formula.setResult = () => {
			input.value.current = formula.calculate();
		};
		formula.setResult();
	};
}

ReactiveValue.prototype = Object.create( BaseReactiveProperty.prototype );

export default ReactiveValue;