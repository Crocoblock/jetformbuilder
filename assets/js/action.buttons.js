(
	function ( $ ) {
		'use strict';

		window.JetFBReactive = {};

		function onInitForm( event, scope ) {
			const form = scope[ 0 ].querySelector( 'form' );
			JetFBReactive[ form.dataset.formId ] = new Observable( form );
		}

		$( document ).on( 'jet-form-builder/init', onInitForm );

		class ConditionalBlock {
			constructor( node ) {
				this.node = node;

				this.conditions = false;
			}

			/**
			 * @returns {array}
			 */
			getConditions() {
				if ( false !== this.conditions ) {
					return this.conditions;
				}
				this.conditions = JSON.parse( this.node.dataset.jfbConditional );

				return this.conditions;
			}

			/**
			 * @returns {string}
			 */
			getFunction() {
				return this.node.dataset.jfbFunc;
			}
		}

		class InputData {
			constructor( inputNode ) {
				this.rawName = inputNode.name;
				this.name = this.rawName.replace( '[]', '' );

				this.setValue( inputNode.value );
				this.setNode( inputNode );
			}

			/**
			 * @param inputData {InputData}
			 */
			merge( inputData ) {
				if ( ! this.isArray() ) {
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
			 * @returns {object}
			 */
			getNode() {
				return this.node;
			}

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
				 *     [field_name]: callable
				 * }
				 */
				this.signals = {};
				this.signalTypes = {
					text: this.signalText,
					array: this.signalArray,
				};
				/**
				 * {
				 *     [field_name]: array|string
				 * }
				 */
				this.dataInputs = {};
				this.data = {};
				/**
				 * {
				 *     [field_name]: [...nodes]
				 * }
				 */
				this.attachedElements = {};
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
				this.observeData();
			}

			observeData() {
				for ( let key in this.dataInputs ) {
					if ( this.dataInputs.hasOwnProperty( key ) ) {
						this.makeReactive( key );
					}
				}
			}

			makeReactive( key ) {
				let val = this.dataInputs[ key ].value;
				const self = this;

				Object.defineProperty( this.data, key, {
					get() {
						return val;
					},
					set( newVal ) {
						val = newVal;
						self.notify( key );
					},
				} );
			}

			notify( property ) {
				const signals = this.signals[ property ] ?? false;

				if ( ! signals?.length ) {
					console.error( `Can\'t find the signal of ${ property }` );

					return;
				}

				signals.forEach( signal => signal( property ) );
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
					this.observe( name );
					this.watch( name, this.handleConditions );
				}
			}

			observe( property ) {
				const inputData = this.dataInputs[ property ];
				const signalType = this.signalTypes[ inputData.getType() ] ?? (
					() => {
					}
				);

				this.watch( property, () => {
					const newValue = this.data[ property ] ?? false;
					const elements = inputData.getNode();

					signalType.call( this, property, elements, newValue );
				} );
			}

			watch( fieldName, callable ) {
				this.signals[ fieldName ] = this.signals[ fieldName ] ?? [];

				this.signals[ fieldName ].push( callable.bind( this ) );
			}

			addListener( property, type, index ) {
				this.listeners[ property ] = this.listeners[ property ] ?? {};
				const list = this.listeners[ property ][ type ] ?? [];

				list.push( index );

				this.listeners[ property ][ type ] = [
					...new Set( list ),
				];
			}

			getTypeOf( value ) {
				return Array.isArray( value ) ? 'array' : 'text';
			}

			signalText( property, node, value ) {
				node.value = value;
			}

			signalArray( property, nodes, values ) {
				if ( ! values.length ) {
					for ( const [ index, node ] of Object.entries( nodes ) ) {
						node.remove();
						nodes.splice( index, 1 );
					}
					return;
				}

				for ( const [ index, node ] of Object.entries( nodes ) ) {
					const valueIndex = values.findIndex( value => value === node.value );
					if ( - 1 !== valueIndex ) {
						values.splice( valueIndex, 1 );
					} else {
						node.remove();
						nodes.splice( index, 1 );
					}
				}

				for ( const value of values ) {
					const newElement = document.createElement( 'input' );
					newElement.type = 'hidden';
					newElement.value = value;
					newElement.name = property;

					nodes.push( newElement );
					this.root.prepend( newElement );
				}
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
	}
)( jQuery );