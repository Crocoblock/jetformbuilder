import { getWrapper, isChoicesField } from './functions';

const {
	      InputData,
	      ReactiveSet,
	      ReactiveHook,
      } = JetFormBuilderAbstract;

const {
	      getParsedName,
      } = JetFormBuilderFunctions;

/**
 * @property {ReactiveSet} value
 *
 * @constructor
 */
function ChoicesData() {
	InputData.call( this );

	this.isSupported = isChoicesField;

	this.setNode = function ( node ) {
		node.jfbSync   = this;
		this.nodes     = Array.from(
			node.querySelectorAll( '.jet-form-builder-choice--item input' ),
		);
		this.rawName   = this.nodes[ 0 ].name;
		this.name      = getParsedName( this.rawName );
		this.inputType = 'choice';
	};

	this.setValue = function () {
		this.value.current = this.isArray()
		                     ? this.getMultipleValue()
		                     : this.getSingleValue();
	};

	this.addListeners = function () {
		for ( const node of this.nodes ) {
			node.addEventListener( 'change', () => this.setValue() );

			this.addListenerForChoice( node );
		}

		if ( !this.isArray() ) {
			return;
		}

		this.sanitize(
			value => Array.isArray( value ) ? value : [ value ],
		);
	};

	this.getMultipleValue = function () {
		return Array.from( this.nodes ).
			filter( item => item.checked ).
			map( item => item.value );
	};

	this.getSingleValue = function () {
		for ( const node of this.nodes ) {
			if ( node.checked ) {
				return node.value;
			}
		}

		return '';
	};

	this.addListenerForChoice = function ( node ) {

		const wrapperChoice = getWrapper( node );

		wrapperChoice.addEventListener(
			'click',
			event => this.toggleChoice( node, event ),
		);

		this.enterKey = new ReactiveHook();

		/**
		 * if it visible input,
		 * we don't need accessibility for the wrapper element.
		 */
		if ( this.isNativeControl( node ) ) {
			node.addEventListener(
				'keydown',
				this.handleEnterKey.bind( this ),
			);

			return;
		}

		wrapperChoice.addEventListener( 'keydown', event => {
			// handle enter for submit form of switch page
			this.handleEnterKey( event );

			// for space
			this.handleSpaceKey( event, node );

			// for next or up keys
			this.handleNextKey( event, node );

			// for prev or down keys
			this.handlePrevKey( event, node );
		} );

	};

	this.toggleChoice = function ( node, event ) {
		/**
		 * We should skip event, if it triggered via element,
		 * which inside <label> element.
		 *
		 * Because click on <label> triggers another event with connected
		 * input as target.
		 */
		if ( event.target.closest(
			'.jet-form-builder-choice--item-control label',
		) ) {
			return;
		}
		if ( this.isArray() ) {
			this.value.toggle( node.value );

			return;
		}

		if ( this.value.current === node.value ) {
			this.onClear();

			return;
		}
		this.value.current = node.value;
	};

	this.hasAutoScroll = function () {
		return this.isNativeControl( this.nodes[ 0 ] );
	};

	this.focusRaw = function () {
		const [ node ] = this.nodes;

		if ( this.isNativeControl( node ) ) {
			InputData.prototype.focusRaw.call( this );

			return;
		}

		const wrapper = getWrapper( node );

		wrapper.focus( { preventScroll: true } );
	};
}

ChoicesData.prototype = Object.create( InputData.prototype );

ChoicesData.prototype.getReactive = function () {
	return new ReactiveSet();
};

/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
ChoicesData.prototype.isNativeControl = function ( node ) {
	return node.classList.contains(
		'jet-form-builder-choice--item-control-input',
	);
};

/**
 * @param event {Event}
 * @param node {HTMLElement}
 */
ChoicesData.prototype.handleNextKey = function ( event, node ) {
	if ( ![ 'ArrowRight', 'ArrowDown' ].includes( event.key ) ) {
		return;
	}
	event.preventDefault();

	const nextNode = this.nextNode( node );

	this.switchChoice( nextNode );
};

/**
 * @param event {Event}
 * @param node {HTMLElement}
 */
ChoicesData.prototype.handlePrevKey = function ( event, node ) {
	if ( ![ 'ArrowUp', 'ArrowLeft' ].includes( event.key ) ) {
		return;
	}
	event.preventDefault();

	const prevNode = this.prevNode( node );

	this.switchChoice( prevNode );
};

/**
 * @param event {Event}
 * @param node {HTMLElement}
 */
ChoicesData.prototype.handleSpaceKey = function ( event, node ) {
	if ( ![ 'Spacebar', ' ' ].includes( event.key ) ) {
		return;
	}
	event.preventDefault();

	this.toggleChoice( node );
};

ChoicesData.prototype.switchChoice = function ( node ) {
	const wrapper = getWrapper( node );

	this.toggleChoice( node );
	wrapper.focus( { preventScroll: true } );
};

ChoicesData.prototype.nextNode = function ( baseNode ) {
	for ( const [ index, node ] of this.nodes.entries() ) {
		if ( node !== baseNode ) {
			continue;
		}

		return this.nodes.hasOwnProperty( +index + 1 )
		       ? this.nodes[ +index + 1 ]
		       : this.nodes[ 0 ];
	}
};

ChoicesData.prototype.prevNode = function ( baseNode ) {
	for ( const [ index, node ] of this.nodes.entries() ) {
		if ( node !== baseNode ) {
			continue;
		}

		return this.nodes.at( index - 1 );
	}
};

export default ChoicesData;