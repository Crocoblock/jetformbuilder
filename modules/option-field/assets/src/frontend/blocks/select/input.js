const {
	      InputData,
	      ReactiveHook,
      } = JetFormBuilderAbstract;

function MultiSelectData() {
	InputData.call( this );

	function sanitizeValue( value ) {
		if ( Array.isArray( value ) ) {

			if ( value.length === 1 && value[0] && value[0].includes(',') ) {
				value = value[0].split(',')
			}
			return value;
		}

		return [ value ].filter(
			Boolean,
		);
	}

	this.isSupported    = function ( node ) {
		return 'select-multiple' === node?.type;
	};
	this.addListeners   = function () {
		this.sanitize( value => Array.isArray( value ) ? value : [ value ] );

		/**
		 * convert string to array for setting dynamic multi value
		 *
		 * @see https://github.com/Crocoblock/issues-tracker/issues/8509
		 */
		this.sanitize( sanitizeValue );

		const [ node ] = this.nodes;

		node.addEventListener( 'change', () => this.setValue() );
		node.addEventListener( 'blur', () => this.reportOnBlur() );

		this.enterKey = new ReactiveHook();
		node.addEventListener( 'keydown', this.handleEnterKey.bind( this ) );
	};
	this.setValue       = function () {
		this.value.current = this.getActiveValue();
	};
	this.getActiveValue = function () {
		const [ node ] = this.nodes;

		return Array.from( node.options ).
			filter( item => item.selected ).
			map( item => item.value );
	};

	this.onClear = function () {
		this.silenceSet( [] );
	};
}

MultiSelectData.prototype = Object.create( InputData.prototype );

export default MultiSelectData;