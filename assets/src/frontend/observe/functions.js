import NoListenData from './NoListenData';
import ChangeData from './ChangeData';
import CheckboxData from './CheckboxData';
import RadioData from './RadioData';
import RepeaterData from './RepeaterData';
import InputData from './InputData';
import CalculatedData from './CalculatedData';
import MultiSelectData from './MultiSelectData';
import FileData from './FileData';

/**
 * @type {(InputData)[]}
 */
const dataTypes = [
	FileData,
	MultiSelectData,
	ChangeData,
	CheckboxData,
	RadioData,
	RepeaterData,
	CalculatedData,
	NoListenData,
	InputData,
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

function getParsedName( name ) {
	const regexps = [
		// multiple fields (checkbox[])
		new RegExp( /^(\w+)\[\]$/ ),
		// fields inside repeater (rep_name[1][content_field])
		new RegExp( /^\w+\[\d+\]\[([\w\-]+)\]$/ ),
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

export { createInput, getParsedName, createFileList };