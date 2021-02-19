/*import * as text from './text-field';
import * as hidden from './hidden-field';
import * as select from './select-field';
import * as radio from './radio-field';
import * as checkbox from './checkbox-field';
import * as number from './number-field';
import * as date from './date-field';
import * as time from './time-field';
import * as media from './media-field';
import * as wysiwyg from './wysiwyg-field';
import * as range from './range-field';
import * as textarea from './textarea-field';
import * as submit from './submit-field';
import * as repeater from './repeater-field';
import * as formBreak from './form-break-field';
import * as groupBreak from './group-break-field';
import * as conditional from './conditional-block';
import * as datetime from './datetime-block';*/
import * as calculated from './calculated-field';
import './text-field/edit';
import './text-field/save';

import './hidden-field/edit';
import './hidden-field/save';

import './select-field/edit';
import './select-field/save';

import './radio-field/edit';
import './radio-field/save';

import './checkbox-field/edit';
import './checkbox-field/save';

import './number-field/edit';
import './number-field/save';

import './date-field/edit';
import './date-field/save';

import './time-field/edit';
import './time-field/save';

import './media-field/edit';
import './media-field/save';

import './wysiwyg-field/edit';
import './wysiwyg-field/save';

import './range-field/edit';
import './range-field/save';

import './heading-field/edit';
import './heading-field/save';

import './textarea-field/edit';
import './textarea-field/save';

import './submit-field/edit';
import './submit-field/save';

import './repeater-field/edit';
import './repeater-field/save';

import './form-break-field/edit';
import './form-break-field/save';

import './group-break-field/edit';
import './group-break-field/save';

import './conditional-block/edit';
import './conditional-block/save';

import './datetime-field/edit';
import './datetime-field/save';

import baseMetaData from "./base-block.json";
import * as wrappers from "./block-wrappers";
import { jfbHooks } from "../helpers/hooks-helper";

const {
	registerBlockType
} = wp.blocks;

const fields = jfbHooks.applyFilters( 'jet.fb.register.fields', [
	calculated,
	/*text,
	hidden,
	select,
	radio,
	checkbox,
	number,
	date,
	time,
	media,
	wysiwyg,
	range,
	textarea,
	submit,
	repeater,
	formBreak,
	groupBreak,
	conditional,
	datetime*/
] );

const registerFormField = block => {
	if ( ! block ) {
		return;
	}
	const { metadata, settings, name } = block;
	const { edit, _additional = {} } = settings;
	const { attributes } = baseMetaData;

	metadata.attributes = {
		...attributes,
		...metadata.attributes
	};

	settings.edit = wrappers.withCustomProps( edit, _additional );

	registerBlockType( name, {
		...metadata,
		...settings
	} );
};


export const registerFormFields = ( blocks = fields ) => {
	blocks.forEach( jfbHooks.applyFilters( 'jfb.fb.custom.register.fields', registerFormField ) );
}

registerFormFields();
