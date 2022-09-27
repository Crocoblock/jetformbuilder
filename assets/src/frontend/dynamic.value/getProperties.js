import ReactiveValue from './ReactiveValue';
import ReactiveMinAttr from './ReactiveMinAttr';
import ReactiveMaxAttr from './ReactiveMaxAttr';

/**
 * @type {BaseReactiveProperty[]}
 */
const reactProperties = [
	new ReactiveValue(),
	new ReactiveMinAttr(),
	new ReactiveMaxAttr(),
];

/**
 * @param input {InputData}
 * @return {Generator<BaseReactiveProperty>}
 */
function* getProperties( input ) {
	const [ node ]   = input.nodes;
	const properties = Object.keys( node.dataset );

	for ( const reactProperty of reactProperties ) {
		if (
			reactProperty.hasOwnProperty( 'isSupported' ) &&
			reactProperty.isSupported( input )
		) {
			yield reactProperty;
		}
	}

	for ( const property of properties ) {
		for ( const reactProperty of reactProperties ) {
			if ( !reactProperty.hasOwnProperty( 'attrName' ) ) {
				continue;
			}

			if ( property === reactProperty.attrName ) {
				yield reactProperty;
			}
		}
	}
}

export default getProperties;