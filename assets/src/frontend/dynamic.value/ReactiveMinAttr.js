import BaseReactiveProperty from './BaseReactiveProperty';

function ReactiveMinAttr() {
	this.attrName = 'min';

	this.observe = function ( input, formula ) {
		const [ node ] = input.nodes;

		formula.setResult = () => {
			node.min = formula.calculate();
		};
		formula.setResult();
	};
}

ReactiveMinAttr.prototype = Object.create( BaseReactiveProperty.prototype );

export default ReactiveMinAttr;