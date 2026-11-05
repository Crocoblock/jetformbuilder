import Filter from './Filter';

function IsConditionalHiddenFilter() {
	Filter.call( this );

	this.input = null;

	this.setInput = function ( input ) {
		this.input = input;
	};

	this.getSlug = function () {
		return 'isConditionalHidden';
	};

	this.getBlocks = function () {
		const blocks = [];
		let node = this.input?.nodes?.[ 0 ];

		while ( node ) {
			const parent = node.closest( '.jet-form-builder__conditional' );
			if ( !parent ) {
				break;
			}
			const block = parent.jfbConditional;
			if ( block ) {
				blocks.push( block );
			}

			// Removed blocks retain a comment at their original DOM position.
			node = parent.parentElement ?? block?.comment?.parentElement;
		}

		return blocks;
	};

	this.apply = function ( value, fallback = '' ) {
		const isHidden = this.getBlocks().some( block =>
			( block.function === 'show' && block.isRight.current === false ) ||
			( block.function === 'hide' && block.isRight.current === true ),
		);

		return isHidden ? fallback : value;
	};
}

IsConditionalHiddenFilter.prototype = Object.create( Filter.prototype );

export default IsConditionalHiddenFilter;
