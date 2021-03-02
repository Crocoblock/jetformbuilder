const { __ } = wp.i18n;

const MEDIA = 'jet-forms/media-field';
const FORM_BREAK = 'jet-forms/form-break-field';
const DATE = 'jet-forms/date-field';
const DATETIME = 'jet-forms/datetime-field';
const RADIO = 'jet-forms/radio-field';
const CHECKBOX = 'jet-forms/checkbox-field';
const SELECT = 'jet-forms/select-field';
const RANGE = 'jet-forms/range-field';
const REPEATER = 'jet-forms/repeater-field';
const TEXT = 'jet-forms/text-field';
const TIME = 'jet-forms/time-field';


const messagesConfig = [
	{
		attribute: 'is_timestamp',
		to: [ DATE, DATETIME ],
		message: __( `Check this if you want to send value of this 
		field as timestamp instead of plain datetime` )
	},
	{
		attribute: 'default',
		to: [ DATE ],
		message: __( 'Plain date should be in yyyy-mm-dd format' )
	},
	{
		attribute: 'default',
		to: [ DATETIME ],
		message: __( 'Plain datetime should be in yyyy-MM-ddThh:mm format' )
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
		attribute: 'calculated_value_from_key',
		to: [ RADIO, CHECKBOX, SELECT ],
		message: __( `Here you can set meta field name to use its value 
		as calculated value for current form field` )
	},
	{
		attribute: 'generator_field',
		to: [ RADIO, CHECKBOX, SELECT ],
		message: __( `For Numbers range generator set field with max range value` ),
		conditions: {
			generator_function: 'num_range'
		}
	},
	{
		attribute: 'switch_on_change',
		to: [ SELECT ],
		message: __( `Check this to switch page to next on current value change` )
	},
	{
		attribute: 'prefix_suffix',
		to: [ RANGE ],
		message: __( 'For space before or after text use: &nbsp;' )
	},
	{
		attribute: 'calc_hidden',
		to: [ REPEATER ],
		message: __( 'Check this to hide calculated field' )
	},
	{
		attribute: 'input_mask_default',
		to: [ TEXT ],
		message: __( `Examples: (999) 999-9999 - static mask, 9-a{1,3}9{1,3} - mask with dynamic syntax 
		Default masking definitions: 9 - numeric, a - alphabetical, * - alphanumeric` )
	},
	{
		attribute: 'input_mask_datetime_link',
		to: [ TEXT ],
		message: __( `https://github.com/RobinHerbots/Inputmask/blob/5.x/README_date.md` )
	},
	{
		attribute: 'default',
		to: [ TIME ],
		message: __( 'Plain time should be in hh:mm:ss format' )
	}
];


export { messagesConfig };