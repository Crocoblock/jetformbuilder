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
import * as radio from './radio-field';
import * as range from './range-field';
import * as repeater from './repeater-field';
import * as select from './select-field';
import * as submit from './submit-field';
import * as text from './text-field';
import * as textarea from './textarea-field';
import * as time from './time-field';
import * as wysiwyg from './wysiwyg-field';
import * as colorPicker from './color-picker-field';
import * as progressBar from './progress-bar';
import * as formBreakStart from './form-break-start';
import * as map from './map-field';
import * as wrappers from './block-wrappers';
import * as captchaContainer from './captcha-container';
import * as choicesField from './choices-field';
import * as choice from './choice';

const {
	      registerBlockType,
      } = wp.blocks;

const {
	      applyFilters,
      } = wp.hooks;

const fields = applyFilters( 'jet.fb.register.fields', [
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
	radio,
	range,
	repeater,
	select,
	submit,
	text,
	textarea,
	time,
	wysiwyg,
	colorPicker,
	progressBar,
	formBreakStart,
	map,
	captchaContainer,
	choicesField,
	choice,
] );

const registerFormField = block => {
	if ( !block ) {
		return;
	}
	const { metadata, settings, name } = block;

	settings.edit = wrappers.withCustomProps( block );

	if ( !settings.hasOwnProperty( 'jfbGetFields' ) ) {
		settings.jfbGetFields = function ( context = 'default' ) {
			if ( !this.attributes?.name ) {
				return [];
			}

			return [
				{
					name: this.attributes.name,
					label: this.attributes.label || this.attributes.name,
					value: this.attributes.name,
				},
			];
		};
	}

	if (
		!settings.hasOwnProperty( '__experimentalLabel' ) &&
		metadata.attributes.hasOwnProperty( 'name' )
	) {
		/**
		 * @param attributes
		 * @param context {{|'accessibility'|'visual'|'list-view'}}
		 * @returns {*}
		 * @private
		 */
		settings.__experimentalLabel = ( attributes, { context } ) => {
			switch ( context ) {
				case 'list-view':
					return attributes.name || metadata.title;
				case 'accessibility':
					return !!attributes.name?.length
					       ? `${ metadata.title } (${ attributes.name })`
					       : metadata.title;
				default:
					return metadata.title;
			}
		};
	}

	registerBlockType( name, {
		...metadata,
		...settings,
	} );
};

function sortBlocks( first, next ) {
	let { metadata: { title: a } } = first;
	let { metadata: { title: b } } = next;

	a = a ? a : first.settings?.title;
	b = b ? b : next.settings?.title;

	try {
		return a.localeCompare( b );
	}
	catch ( e ) {
		return 0;
	}
}

export default function RegisterFormFields( blocks = fields ) {
	blocks.sort( sortBlocks );
	blocks.forEach(
		applyFilters( 'jet.fb.register.fields.handler', registerFormField ) );
}
