import RandomStringControls from './RandomStringControls';
import DisableRawValueControl from './DisableRawValueControl';

const {
	      addFilter,
      } = wp.hooks;

addFilter(
	'jfb.hidden-field.field-value.controls',
	'jet-form-builder/random-string-controls',
	RandomStringControls,
);

addFilter(
	'jfb.hidden-field.header.controls',
	'jet-form-builder/disable-raw-value-control',
	DisableRawValueControl,
);