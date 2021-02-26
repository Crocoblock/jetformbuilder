const { __ } = wp.i18n;


const MEDIA = 'jet-forms/media-field';
const FORM_BREAK = 'jet-forms/form-break-field';
const DATE = 'jet-forms/date-field';
const DATETIME = 'jet-forms/datetime-field';
const RADIO = 'jet-forms/radio-field';
const CHECKBOX = 'jet-forms/checkbox-field';
const SELECT = 'jet-forms/select-field';


const messagesConfig = [
	{
		attribute: 'is_timestamp',
		to: [ DATE, DATETIME ],
		message: __( `Check this if you want to send value of this 
		field as timestamp instead of plain datetime` )
	},
	{
		attribute: 'page_break_disabled',
		to: [ FORM_BREAK ],
		message: __( `Text to show if next page button is disabled. 
		For example - "Fill required fields" etc.` )
	},
	{
		attribute: 'insert_attachment',
		to: [ MEDIA ],
		message: __( `If checked new attachment will be inserted for uploaded file. 
		Note: work only for logged-in users!` )
	},
	{
		attribute: 'max_files',
		to: [ MEDIA ],
		message: __( 'If not set allow to upload 1 file' )
	},
	{
		attribute: 'max_size',
		to: [ MEDIA ],
		message: __( 'Mb' )
	},
	{
		attribute: 'allowed_mimes',
		to: [ MEDIA ],
		message: __( `If no MIME type selected will allow all types. 
		Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.` )
	},
	{
		attribute: 'value_from_meta',
		to: [ RADIO, CHECKBOX, SELECT ],
		message: __( `By default post/term ID is used as value. Here you can 
		set meta field name to use its value as form field value` )
	},
	{
		attribute: 'calc_value_from_meta',
		to: [ RADIO, CHECKBOX, SELECT ],
		message: __( `Here you can set meta field name to use its value 
		as calculated value for current form field` )
	},
	{
		attribute: 'num_range',
		to: [ RADIO, CHECKBOX, SELECT ],
		message: __( `For Numbers range generator set field with max range value` )
	},
	{
		attribute: 'switch_on_change',
		to: [ SELECT ],
		message: __( `Check this to switch page to next on current value change` )
	}
];

const getHelpInstance = block => {
	const messages = {};

	messagesConfig.forEach( msg => {
		if ( msg.to.includes( block.name ) && msg.message ) {
			messages[ msg.attribute ] = msg.message;
		}
	} );

	return attribute => ( attribute in messages ) ? messages[ attribute ] : 'Undefined help';
};

export { getHelpInstance };