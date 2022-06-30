(
	function ( $ ) {
		'use strict';

		window.JetFBReactive = {};

		function onInitForm( event, scope ) {
			const form = scope[ 0 ].querySelector( 'form' );
			JetFBReactive[ form.dataset.formId ] = new Observable( form );
		}

		$( document ).on( 'jet-form-builder/init', onInitForm );

		class Observable {
			constructor( scope ) {
				/**
				 * {
				 *     [field_name]: callable
				 * }
				 */
				this.signals = {};
				this.signalTypes = {
					text: [ this.signalText ],
					array: [ this.signalArray ],
				};
				/**
				 * {
				 *     [field_name]: array|string
				 * }
				 */
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
				 * [ ...{
				 *     node,
				 *     conditions
				 * } ]
				 */
				this.conditionalBlocks = [];
				this.root = scope;

				this.parseDOM( scope );
				this.observeData( this.data );
			}

			observeData( obj ) {
				for ( let key in obj ) {
					if ( obj.hasOwnProperty( key ) ) {
						this.makeReactive( obj, key );
					}
				}
			}

			makeReactive( obj, key ) {
				let val = obj[ key ];
				const self = this;

				Object.defineProperty( obj, key, {
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
				const signal = this.signals[ property ] ?? false;

				if ( false === signal ) {
					console.error( `Can\'t find the signal of ${ property }` );

					return;
				}
				signal();
			}

			parseDOM( root ) {
				for ( const formElement of root.querySelectorAll( '[data-jfb-sync]' ) ) {
					this.pushOrSet( 'data', formElement.name, formElement.value );
					this.pushOrSet( 'attachedElements', formElement.name, formElement );
				}

				for ( const node of root.querySelectorAll( `[data-jfb-conditional]` ) ) {
					const conditions = JSON.parse( node.dataset.jfbConditional ).filter(
						condition => this.data.hasOwnProperty( condition.field ),
					);
					this.conditionalBlocks.push( {
						node,
						conditions,
						functionType: node.dataset.jfbFunc,
					} );

					for ( const { field } of conditions ) {
						this.addListener( field, 'conditional', this.conditionalBlocks.length - 1 );
					}
				}

				for ( const name in this.data ) {
					if ( ! this.data.hasOwnProperty( name ) ) {
						continue;
					}
					this.observe( name );
				}
			}

			observe( property ) {
				const value = this.data[ property ] ?? false;
				const type = this.getTypeOf( value );
				const elements = this.attachedElements[ property ] ?? false;

				const signals = this.signalTypes[ type ] ?? [];
				const listeners = this.listeners[ property ] ?? {};
				const conditionalIndexes = listeners?.conditional ?? [];

				const blocks = [];

				for ( const index in this.conditionalBlocks ) {
					if ( ! this.conditionalBlocks.hasOwnProperty( index ) || ! conditionalIndexes.includes( index ) ) {
						continue;
					}
					blocks.push( this.conditionalBlocks[ index ] );
				}

				this.signals[ property ] = () => {
					const newValue = this.data[ property ] ?? false;

					signals.forEach( func => func.call( this, property, elements, newValue ) );
					this.handleConditions( blocks );
				};
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

			handleConditions( blocks ) {

			}

			pushOrSet( prop, name, value ) {
				const parsedName = name.replace( '[]', '' );

				if ( name.includes( '[]' ) && ! Array.isArray( this[ prop ][ parsedName ] ) ) {
					this[ prop ][ parsedName ] = [];
				}

				if ( Array.isArray( this[ prop ][ parsedName ] ) ) {
					this[ prop ][ parsedName ].push( value );
				} else {
					this[ prop ][ parsedName ] = value;
				}
			}
		}
	}
)( jQuery );