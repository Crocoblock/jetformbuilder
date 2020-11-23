import Tools from "./tools";

const { __ } = wp.i18n;

export function getFormFieldsList() {

	let formFieldsList = [{
		value: '',
		label: __( '--' )
	}];
	const fields = Tools.getFormFieldsBlocks();

	fields.forEach( field => {
		let label = field.label ? field.label : field.name;
		let value = field.name;

		formFieldsList.push( { value, label } );
	} );

	return formFieldsList;
}