import InsertTermRender from './render';
import { __ } from '@wordpress/i18n';

export default {
	type: 'insert_term',
	label: __( 'Insert/Update Term', 'jet-form-builder' ),
	edit: InsertTermRender,
	icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M26 4C28.2091 4 30 5.79086 30 8V26C30 28.2091 28.2091 30 26 30H8C5.79086 30 4 28.2091 4 26V8C4 5.79086 5.79086 4 8 4H26ZM8 6C6.89543 6 6 6.89543 6 8V26C6 27.1046 6.89543 28 8 28H26C27.1046 28 28 27.1046 28 26V8C28 6.89543 27.1046 6 26 6H8Z" fill="currentColor"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M56 4C58.2091 4 60 5.79086 60 8V26C60 28.2091 58.2091 30 56 30H38C35.7909 30 34 28.2091 34 26V8C34 5.79086 35.7909 4 38 4H56ZM38 6C36.8954 6 36 6.89543 36 8V26C36 27.1046 36.8954 28 38 28H56C57.1046 28 58 27.1046 58 26V8C58 6.89543 57.1046 6 56 6H38Z" fill="currentColor"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M26 34C28.2091 34 30 35.7909 30 38V56C30 58.2091 28.2091 60 26 60H8C5.79086 60 4 58.2091 4 56V38C4 35.7909 5.79086 34 8 34H26ZM8 36C6.89543 36 6 36.8954 6 38V56C6 57.1046 6.89543 58 8 58H26C27.1046 58 28 57.1046 28 56V38C28 36.8954 27.1046 36 26 36H8Z" fill="currentColor"/>
		<path d="M47 40C47.5523 40 48 40.4477 48 41V46H53C53.5523 46 54 46.4477 54 47C54 47.5523 53.5523 48 53 48H48V53C48 53.5523 47.5523 54 47 54C46.4477 54 46 53.5523 46 53V48H41C40.4477 48 40 47.5523 40 47C40 46.4477 40.4477 46 41 46H46V41C46 40.4477 46.4477 40 47 40Z" fill="currentColor"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M47 34C54.1797 34 60 39.8203 60 47C60 54.1797 54.1797 60 47 60C39.8203 60 34 54.1797 34 47C34 39.8203 39.8203 34 47 34ZM47 36C40.9249 36 36 40.9249 36 47C36 53.0751 40.9249 58 47 58C53.0751 58 58 53.0751 58 47C58 40.9249 53.0751 36 47 36Z" fill="currentColor"/>
	</svg>,
	category: 'content',
	validators: [
		( { settings } ) => {
			return settings?.taxonomy
			       ? false
			       : { type: 'empty', property: 'taxonomy' };
		},
	],
};
