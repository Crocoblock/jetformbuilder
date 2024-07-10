import * as calculated from './calculated-field';
import * as conditional from './conditional-block';
import * as date from './date-field';
import * as datetime from './datetime-field';
import * as formBreak from './form-break-field';
import * as groupBreak from './group-break-field';
import * as heading from './heading-field';
import * as hidden from './hidden-field';
import * as media from './media-field';
import * as number from './number-field';
import * as range from './range-field';
import * as submit from './submit-field';
import * as textarea from './textarea-field';
import * as time from './time-field';
import * as colorPicker from './color-picker-field';
import * as progressBar from './progress-bar';
import * as formBreakStart from './form-break-start';
import * as wrappers from './block-wrappers';

const {
	      registerBlockType,
      } = wp.blocks;

const {
	      applyFilters,
      } = wp.hooks;

const fields = applyFilters( 'jet.fb.register.fields', [
	calculated,
	conditional,
	datetime,
	date,
	formBreak,
	groupBreak,
	heading,
	hidden,
	media,
	number,
	range,
	submit,
	textarea,
	time,
	colorPicker,
	progressBar,
	formBreakStart,
] );

const registerFormField = block => {
	if ( !block ) {
		return;
	}
	const { metadata, settings, name } = block;

	settings.edit = wrappers.withCustomProps( block );

	/**
	 * @since 3.0.0
	 */
	if ( !settings.hasOwnProperty( 'jfbResolveBlock' ) ) {
		settings.jfbResolveBlock = function () {
			const base = {
				clientId: this.clientId,
				name: this.name,
			};

			if ( !this.attributes?.name ) {
				return base;
			}

			return {
				...base,
				fields: [
					{
						name: this.attributes.name,
						label: this.attributes.label || this.attributes.name,
						value: this.attributes.name,
					},
				],
			};
		};
	}

	if (
		!settings.hasOwnProperty( '__experimentalLabel' ) &&
		metadata.attributes.hasOwnProperty( 'name' )
	) {
		/**
		 * @param  attributes
		 * @param  root1         {Object}
		 * @param  root1.context {'accessibility'|'visual'|'list-view'}
		 * @return {*}
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
