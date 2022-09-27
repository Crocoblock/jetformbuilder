import BaseReactiveProperty from './BaseReactiveProperty';

function ReactiveMaxAttr() {
	this.attrName = 'max';

	this.observe = function ( input, formula ) {
		const [ node ] = input.nodes;

		formula.setResult = () => {
			node.max = formula.calculate();
		};
		formula.setResult();
	};
}

ReactiveMaxAttr.prototype = Object.create( BaseReactiveProperty.prototype );

export default ReactiveMaxAttr;