/*import * as text from './text-field';
import * as select from './select-field';
import * as radio from './radio-field';
import * as time from './time-field';
import * as wysiwyg from './wysiwyg-field';
import * as range from './range-field';
import * as textarea from './textarea-field';
import * as submit from './submit-field';
import * as repeater from './repeater-field';
*/
import * as calculated from './calculated-field';
import * as checkbox from './checkbox-field';
import * as conditional from './conditional-block';
import * as date from './date-field';
import * as datetime from './datetime-field';
import * as formBreak from './form-break-field';
import * as groupBreak from './group-break-field';
import * as heading from './heading-field';
import * as hidden from './hidden-field';
import * as media from './media-field';
import * as number from './number-field';

import * as wrappers from "./block-wrappers";
import { jfbHooks } from "../helpers/hooks-helper";

const {
	registerBlockType
} = wp.blocks;

const fields = jfbHooks.applyFilters( 'jet.fb.register.fields', [
	calculated,
	checkbox,
	conditional,
	datetime,
	date,
	formBreak,
	groupBreak,
	heading,
	hidden,
	media,
	number,

	/*
	text,
	select,
	radio,
	time,
	wysiwyg,
	range,
	textarea,
	submit,
	repeater,
	*/
] );

const registerFormField = block => {
	if ( ! block ) {
		return;
	}
	const { metadata, settings, name } = block;

	settings.edit = wrappers.withCustomProps( block );

	registerBlockType( name, {
		...metadata,
		...settings
	} );
};


export const registerFormFields = ( blocks = fields ) => {
	blocks.forEach( jfbHooks.applyFilters( 'jet.fb.register.fields.handler', registerFormField ) );
}

registerFormFields();
