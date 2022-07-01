(
	function ( $ ) {
		'use strict';

		window.JetFBReactive = {};

		const signalTypes = {
			text: signalText,
			array: signalArray,
		};

		function onInitForm( event, scope ) {
			const form = scope[ 0 ].querySelector( 'form' );
			JetFBReactive[ form.dataset.formId ] = new Observable( form );
		}

		$( document ).on( 'jet-form-builder/init', onInitForm );

		class ConditionalBlock {
			constructor( node ) {
				this.funcType = node.dataset.jfbFunc;

				this.setConditions( node );
			}

			setConditions( node ) {
				this.conditions = JSON.parse(
					node.dataset.jfbConditional,
				).map( item => new ConditionItem( item ) );
			}

			/**
			 * @returns {string}
			 */
			getFunction() {
				return this.funcType;
			}

			/**
			 * @returns {array<ConditionItem>}
			 */
			getConditions() {
				return this.conditions;
			}
		}

		class ConditionItem {
			constructor( { field, operator, value, render_state } ) {
				this.field = field;
				this.operator = operator;
				this.value = value;
				this.render_state = render_state;
			}
		}

		class InputData {
			constructor( inputNode ) {
				this.signals = [];
				this.rawName = inputNode.name;
				this.name = this.rawName.replace( '[]', '' );

				this.setValue( inputNode.value );
				this.setNode( inputNode );
			}

			makeReactive() {
				this.setComment();

				let val = this.value;
				const self = this;

				Object.defineProperty( this, 'value', {
					get() {
						return val;
					},
					set( newVal ) {
						val = newVal;
						self.notify();
					},
				} );
			}

			onChange() {
				const callable = signalTypes[ this.getType() ] ?? false;

				if ( false === callable ) {
					console.error( `There is no callback for \`${ this.getType() }\` type` );

					return;
				}

				callable.call( this, this.name, this.getNode(), this.getValue() );
			}

			notify() {
				if ( ! this.signals?.length ) {
					console.error( `Can\'t find the signal of ${ this.name }` );

					return;
				}

				this.signals.forEach( signal => signal( this.name ) );
			}

			watch( callable ) {
				this.signals.push( callable.bind( this ) );
			}

			/**
			 * @param inputData {InputData}
			 */
			merge( inputData ) {
				if ( ! this.isArray() ) {
					this.value = inputData.getValue();
					this.node = inputData.getNode();

					return;
				}

				this.value.push( ...inputData.getValue() );
				this.node.push( ...inputData.getNode() );
			}

			setValue( value ) {
				this.value = this.isArray() ? [ value ] : value;
			}

			setNode( node ) {
				this.node = this.isArray() ? [ node ] : node;
			}

			setComment() {
				this.comment = document.createComment( this.name );
				const node = this.isArray() ? this.node[ 0 ] : this.node;

				node.parentElement.insertBefore( this.comment, node );
			}

			/**
			 * @returns {string}
			 */
			getName() {
				return this.name;
			}

			/**
			 * @returns {array|string}
			 */
			getValue() {
				return this.value;
			}

			/**
			 * @returns {object|array}
			 */
			getNode() {
				return this.node;
			}

			/**
			 * @returns {string}
			 */
			getType() {
				return this.rawName.includes( '[]' ) ? 'array' : 'text';
			}

			isArray() {
				return 'array' === this.getType();
			}
		}

		class Observable {
			constructor( scope ) {
				/**
				 * {
				 *     [field_name]: array|string
				 * }
				 */
				this.dataInputs = {};
				this.data = {};
				/**
				 * {
				 *     [field_name]: {
				 *         conditional: [...indexes of conditional nodes in this.conditionalBlocks]
				 *     }
				 * }
				 */
				this.listeners = {};
				/**
				 * [ ...ConditionalBlock ]
				 */
				this.conditionalBlocks = [];
				this.root = scope;

				this.parseDOM( scope );
				this.makeReactiveProxy();
			}

			parseDOM( root ) {
				for ( const formElement of root.querySelectorAll( '[data-jfb-sync]' ) ) {
					this.pushData( new InputData( formElement ) );
				}

				for ( const node of root.querySelectorAll( `[data-jfb-conditional]` ) ) {
					const block = new ConditionalBlock( node );
					this.conditionalBlocks.push( block );

					for ( const { field } of block.getConditions() ) {
						this.addListener( field, 'conditional', this.conditionalBlocks.length - 1 );
					}
				}

				for ( const name in this.dataInputs ) {
					if ( ! this.dataInputs.hasOwnProperty( name ) ) {
						continue;
					}
					const current = this.dataInputs[ name ];

					current.watch( current.onChange.bind( current ) );
					//current.watch( this.handleConditions.bind( this ) );
				}
			}

			makeReactiveProxy() {
				for ( const fieldName in this.dataInputs ) {
					if ( ! this.dataInputs.hasOwnProperty( fieldName ) ) {
						continue;
					}
					const current = this.dataInputs[ fieldName ];
					current.makeReactive();

					Object.defineProperty( this.data, fieldName, {
						get() {
							return current.value;
						},
						set( newValue ) {
							current.value = newValue;
						},
					} );
				}
			}

			watch( fieldName, callable ) {
				if ( this.dataInputs.hasOwnProperty( fieldName ) ) {
					this.dataInputs[ fieldName ].watch( callable );
				} else {
					console.error( `dataInputs in Observable don\'t have ${ fieldName } field` );
				}
			}

			addListener( property, type, index ) {
				this.listeners[ property ] = this.listeners[ property ] ?? {};
				const list = this.listeners[ property ][ type ] ?? [];

				list.push( index );

				this.listeners[ property ][ type ] = [
					...new Set( list ),
				];
			}

			handleConditions( property ) {
				const blocks = this.getConditionalBlocks( property );

			}

			getConditionalBlocks( property ) {
				const listeners = this.listeners[ property ] ?? {};
				const conditionalIndexes = listeners?.conditional ?? [];

				const blocks = [];

				for ( const index in this.conditionalBlocks ) {
					if ( ! this.conditionalBlocks.hasOwnProperty( index ) || ! conditionalIndexes.includes( index ) ) {
						continue;
					}
					blocks.push( this.conditionalBlocks[ index ] );
				}

				return blocks;
			}

			/**
			 * @param inputData {InputData}
			 */
			pushData( inputData ) {
				const findInput = this.dataInputs[ inputData.getName() ] ?? false;

				if ( false !== findInput ) {
					findInput.merge( inputData );

					return;
				}

				this.dataInputs[ inputData.getName() ] = inputData;
			}
		}

		function signalText() {
			this.node.value = this.value;
		}

		/**
		 * @this InputData
		 */
		function signalArray() {
			if ( ! this.value.length ) {
				for ( const node of this.node ) {
					node.remove();
				}

				this.node.splice( 0, this.node.length );
				return;
			}

			const saveNodes = [];

			for ( const value of this.value ) {
				const hasNodeWithSameValue = this.node.some( ( node, index ) => {
					if ( node.value !== value ) {
						return false;
					}
					saveNodes.push( index );
					return true;
				} );

				if ( hasNodeWithSameValue ) {
					continue;
				}

				const newElement = document.createElement( 'input' );
				newElement.type = 'hidden';
				newElement.value = value;
				newElement.name = this.rawName;

				this.node.push( newElement );
				saveNodes.push( this.node.length - 1 );

				this.comment.parentElement.insertBefore( newElement, this.comment.nextElementSibling );
			}

			this.node = this.node.filter( ( node, index ) => {
				if ( saveNodes.includes( index ) ) {
					return true;
				}
				node.remove();
				return false;
			} );
		}
	}
)( jQuery );