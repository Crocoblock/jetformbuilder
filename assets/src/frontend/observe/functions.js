import NoListenData from './NoListenData';
import ChangeData from './ChangeData';
import CheckboxData from './CheckboxData';
import RadioData from './RadioData';
import RepeaterData from './RepeaterData';
import InputData from './InputData';
import CalculatedData from './CalculatedData';
import MultiSelectData from './MultiSelectData';
import FileData from './FileData';
import WysiwygData from './WysiwygData';
import InputMaskedData from './InputMaskedData';

import BrowserReporting from '../reporting/BrowserReporting';
import AdvancedReporting from '../reporting/AdvancedReporting';

/**
 * @type {(InputData)[]}
 */
const dataTypes = [
	WysiwygData,
	FileData,
	MultiSelectData,
	ChangeData,
	CheckboxData,
	RadioData,
	RepeaterData,
	CalculatedData,
	NoListenData,
	InputMaskedData,
	InputData,
];

const reportTypes = [
	AdvancedReporting,
	BrowserReporting,
];

/**
 * @param node
 * @param observable {Observable}
 * @returns {*}
 */
function createInput( node, observable ) {
	for ( const dataType of dataTypes ) {
		const current = new dataType();

		if ( !current.isSupported( node ) ) {
			continue;
		}
		current.setNode( node );
		current.setRoot( observable );

		return current;
	}

	console.error( 'Something went wrong', node );
}

function appendNodes( container, nodes ) {
	for ( const child of container.children ) {
		if ( nodes.some( node => node.isEqualNode( child ) ) ) {
			continue;
		}
		child.remove();
	}
	for ( const index in nodes ) {
		if ( !nodes.hasOwnProperty( index ) ) {
			continue;
		}
		const node = nodes[ index ];

		if ( node.isConnected ) {
			continue;
		}

		container.appendChild( node );
	}
}

function getParsedName( name ) {
	const regexps = [
		// multiple fields (checkbox[])
		/^(\w+)\[\]$/,
		// fields inside repeater (rep_name[1][content_field])
		/^\w+\[\d+\]\[([\w\-]+)\]\[?\]?$/,
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
 * @param inputFileArray
 * @returns {FileList}
 */
function createFileList( inputFileArray ) {
	const transfer = new DataTransfer();

	for ( const file of inputFileArray ) {
		transfer.items.add( file );
	}

	return transfer.files;
}

/**
 * @param node {HTMLElement}
 */
function isRequired( node ) {
	return node.required ?? !!node.dataset.required?.length;
}

/**
 * @param input {InputData}
 * @return {AdvancedReporting|BrowserReporting}
 */
function createReport( input ) {
	for ( const reportType of reportTypes ) {
		const current = new reportType();

		if ( !current.isSupported( input.nodes[ 0 ], input ) ) {
			continue;
		}
		current.setInput( input );

		return current;
	}

	throw new Error( 'Something went wrong' );
}

export {
	createInput,
	getParsedName,
	createFileList,
	appendNodes,
	isRequired,
	createReport,
};