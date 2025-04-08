import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function ToDayInMsFilter() {
	BaseFilter.call( this );

	this.label        = () => __( 'toDayInMs', 'jet-form-builder' );
	this.fullName     = () => '|toDayInMs';
	this.isClientSide = true;

	this.help = () => <>
		{ __(
			`Converts a number of days into milliseconds.`,
			'jet-form-builder',
		) }
	</>;
}

ToDayInMsFilter.prototype = Object.create( BaseFilter.prototype );

export default ToDayInMsFilter;