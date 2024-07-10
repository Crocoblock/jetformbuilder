import ChangeData from './ChangeData';
import RangeData from './RangeData';
import NoListenData from './NoListenData';
import RenderStateData from './RenderStateData';
import { setAttrs } from '../functions';

const {
	      applyFilters,
	      doAction,
      } = JetPlugins.hooks;

/**
 * @type {function(): *}
 */
const getDataTypes = () => applyFilters(
	'jet.fb.inputs',
	[
		RenderStateData,
		RangeData,
		ChangeData,
		NoListenData,
	],
);

let dataTypes = [];

/**
 * @param  node
 * @param  observable {Observable}
 * @return {*}
 */
function createInput( node, observable ) {
	if ( !dataTypes.length ) {
		dataTypes = getDataTypes();
	}
	for ( const dataType of dataTypes ) {
		const current = new dataType();

		if ( !current.isSupported( node ) ) {
			continue;
		}
		current.setRoot( observable );
		current.setNode( node );
		setAttrs( current );

		doAction( 'jet.fb.input.created', current );

		return current;
	}

	throw new Error( 'Something went wrong' );
}

function getParsedName( name ) {
	const regexps = [
		// multiple fields (checkbox[])
		/^([\w\-]+)\[\]$/,
		// fields inside repeater (rep_name[1][content_field])
		/^[\w\-]+\[\d+\]\[([\w\-]+)\]\[?\]?$/,
	];

	for ( const regExp of regexps ) {
		if ( !regExp.test( name ) ) {
			continue;
		}
		const matches = name.match( regExp );

		return matches[ 1 ];
	}

	return name;
}

/**
 * @param inputs {InputData[]}
 */
function populateInputs( inputs ) {
	const list = [];

	for ( const input of inputs ) {
		const inner = input.populateInner();

		// eslint-disable-next-line no-unused-expressions
		inner?.length && list.push( ...inner );

		list.push( input );
	}

	return list;
}

export { getParsedName, createInput, populateInputs };