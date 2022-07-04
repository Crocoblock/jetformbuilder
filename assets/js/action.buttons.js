(
	function ( $ ) {
		'use strict';

		window.JetFBReactive = {};

		function onInitForm( event, scope ) {
			const form = scope[ 0 ].querySelector( 'form' );
			const observable = new Observable();

			JetFBReactive[ form.dataset.formId ] = observable;

			observable.observe( form );
		}

		$( document ).on( 'jet-form-builder/init', onInitForm );

		class BaseSignal {
			/**
			 * @param inputData {InputData}
			 */
			isSupported( inputData ) {
				return false;
			}

			/**
			 * @param inputData {InputData}
			 */
			runSignal( inputData ) {
				// your code
			}
		}

		class SignalText extends BaseSignal {

			isSupported( inputData ) {
				return true;
			}

			runSignal( inputData ) {
				inputData.nodes[ 0 ].value = inputData.value;
			}
		}

		class SignalCheckbox extends BaseSignal {
			isSupported( inputData ) {
				return 'checkbox' === inputData.nodes[ 0 ]?.type;
			}

			runSignal( inputData ) {
				for ( const node of inputData.nodes ) {
					node.checked = inputData.value.includes( node.value );
				}
			}
		}

		class SignalRadio extends BaseSignal {
			isSupported( inputData ) {
				return 'radio' === inputData.nodes[ 0 ]?.type;
			}

			runSignal( inputData ) {
				for ( const node of inputData.nodes ) {
					node.checked = inputData.value === node.value;
				}
			}
		}

		class SignalHiddenArray extends BaseSignal {
			isSupported( inputData ) {
				const [ node ] = inputData.nodes;

				return 'hidden' === node.type && inputData.isArray();
			}

			runSignal( inputData ) {
				if ( ! inputData.value.length ) {
					for ( const node of inputData.nodes ) {
						node.remove();
					}

					inputData.nodes.splice( 0, inputData.nodes.length );
					return;
				}

				const saveNodes = [];

				for ( const value of inputData.value ) {
					const hasNodeWithSameValue = inputData.nodes.some( ( node, index ) => {
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
					newElement.name = inputData.rawName;

					inputData.nodes.push( newElement );
					saveNodes.push( inputData.nodes.length - 1 );

					inputData.comment.parentElement.insertBefore( newElement, inputData.comment.nextElementSibling );
				}

				inputData.nodes = inputData.nodes.filter( ( node, index ) => {
					if ( saveNodes.includes( index ) ) {
						return true;
					}
					node.remove();
					return false;
				} );
			}
		}

		class ConditionalBlock {
			constructor( node ) {
				this.node = node;
				this.formId = this.getFormId();

				this.setConditions();
			}

			setConditions() {
				this.conditions = JSON.parse( this.node.dataset.jfbConditional ).map(
					item => new ConditionItem( item ).setFormId( this.getFormId() ),
				);
			}

			calculate() {
				this.runFunction( this.getResult() );
			}

			getResult() {
				for ( const condition of this.getConditions() ) {
					if ( ! condition.isPassed( this.getFormId() ) ) {
						return false;
					}
				}

				return true;
			}

			/**
			 * @param result {boolean}
			 */
			runFunction( result ) {
				switch ( this.node.dataset.jfbFunc ) {
					case 'show':
						this.showBlockCss( result );
						break;
					case 'hide':
						this.showBlockCss( ! result );
						break;
				}
			}

			showBlockCss( result ) {
				this.node.style.display = result ? 'block' : 'none';
			}

			getFormId() {
				if ( this.formId ) {
					return this.formId;
				}
				const form = this.node.closest( 'form.jet-form-builder' );

				return + form.dataset.formId;
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
				this.formId = 0;
			}

			isPassed() {
				const input = this.getInput();

				if ( false === input ) {
					return false;
				}

				return input.checker.check( this, input );
			}

			setFormId( formId ) {
				this.formId = + formId;

				return this;
			}

			/**
			 * @returns {InputData|boolean}
			 */
			getInput() {
				return JetFBReactive[ this.formId ].dataInputs[ this.field ] ?? false;
			}
		}

		/**
		 * @type {(BaseSignal)[]}
		 */
		const signalTypes = [
			new SignalHiddenArray(),
			new SignalCheckbox(),
			new SignalRadio(),
			new SignalText(),
		];

		class ConditionChecker {

			/**
			 * @param condition {ConditionItem}
			 * @param input {InputData}
			 */
			check( condition, input ) {
				switch ( condition.operator ) {
					case 'equal':
						return input.value === condition.value;

					case 'greater':
						return parseFloat( input.value ) > parseFloat( condition.value );

					case 'less':
						return parseFloat( input.value ) < parseFloat( condition.value );

					case 'between':
						if ( 2 > condition.value?.length ) {
							return false;
						}

						const from = parseFloat( condition.value[ 0 ] ),
							to = parseFloat( condition.value[ 1 ] ),
							value = parseFloat( input.value );

						return (
							from <= value && value <= to
						);

					case 'one_of':
						if ( ! condition.value?.length ) {
							return false;
						}

						return 0 <= condition.value.indexOf( input.value );

					case 'contain':
						return 0 <= input.value.indexOf( condition.value );

					default:
						return false;
				}
			}
		}

		class CheckboxConditionChecker extends ConditionChecker {

			check( condition, input ) {
				switch ( condition.operator ) {
					case 'one_of':
						return condition.value.length && input.value.some(
							val => 0 <= condition.value.indexOf( val ),
						);
					case 'contain':
						return input.value.some( val => val.indexOf( condition.value ) !== - 1 );
					default:
						return false;
				}
			}

		}

		class InputData {
			constructor( inputNode ) {
				this.signals = [];
				this.rawName = inputNode.name;
				this.name = this.rawName.replace( '[]', '' );

				this.setNode( inputNode );

				this.checker = this.conditionChecker();
			}

			addListener() {
				const [ node ] = this.nodes;

				node.addEventListener( 'input', event => {
					this.value = event.target.value;
				} );
			}

			makeReactive() {
				this.addListener();
				this.setValue();
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
				const callable = signalTypes.find( ( type ) => type.isSupported( this ) );

				callable.runSignal( this );
			}

			notify() {
				if ( ! this.signals?.length ) {
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
				this.nodes.push( ...inputData.getNode() );
			}

			setValue() {
				if ( this.isArray() ) {
					this.value = Array.from( this.nodes ).map( ( { value } ) => value );
				} else {
					this.value = this.nodes[ 0 ].value;
				}
			}

			setNode( node ) {
				this.nodes = [ node ];
			}

			setComment() {
				this.comment = document.createComment( this.name );
				const [ node ] = this.nodes;

				node.parentElement.insertBefore( this.comment, node );
			}

			pushConditionalIndex( index ) {
				this.relatedConditional = this.relatedConditional ?? [];
				this.relatedConditional.push( + index );

				this.relatedConditional = [
					...new Set( this.relatedConditional ),
				];
			}

			getConditionalIndexes() {
				return this.relatedConditional ?? [];
			}

			/**
			 * @private
			 * @returns {ConditionChecker}
			 */
			conditionChecker() {
				return new ConditionChecker();
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
			 * @returns {array}
			 */
			getNode() {
				return this.nodes;
			}

			/**
			 * @returns {boolean}
			 */
			isArray() {
				return this.rawName.includes( '[]' );
			}
		}

		class CheckboxData extends InputData {

			addListener() {
				for ( const nodeElement of this.nodes ) {
					nodeElement.addEventListener( 'change', event => {
						this.setValue();
					} );
				}
			}

			conditionChecker() {
				return new CheckboxConditionChecker();
			}

			setValue() {
				this.value = this.getActiveValue();
			}

			getActiveValue() {
				return Array.from( this.nodes ).filter( item => item.checked ).map( item => item.value );
			}
		}

		class RadioData extends InputData {

			addListener() {
				for ( const nodeElement of this.nodes ) {
					nodeElement.addEventListener( 'change', event => {
						this.setValue();
					} );
				}
			}

			setValue() {
				this.value = this.getActiveValue();
			}

			getActiveValue() {
				for ( const node of this.nodes ) {
					if ( node.checked ) {
						return node.value;
					}
				}

				return '';
			}
		}

		class ChangeData extends InputData {
			addListener() {
				const [ node ] = this.nodes;

				node.addEventListener( 'change', event => {
					this.value = event.target.value;
				} );
			}
		}

		class NoListenData extends InputData {
			addListener() {
				// silence is golden
			}
		}

		class Observable {
			constructor() {
				/**
				 * {
				 *     [field_name]: {InputData}
				 * }
				 */
				this.dataInputs = {};
				this.data = {};
				/**
				 * [ ...ConditionalBlock ]
				 */
				this.conditionalBlocks = [];
			}

			observe( root ) {
				this.parseDOM( root );
				this.makeReactiveProxy();
				this.initConditionalBlocks();
			}

			parseDOM( root ) {
				for ( const formElement of root.querySelectorAll( '[data-jfb-sync]' ) ) {
					this.pushData( createInput( formElement ) );
				}

				for ( const node of root.querySelectorAll( `[data-jfb-conditional]` ) ) {
					const block = new ConditionalBlock( node );
					this.conditionalBlocks.push( block );

					for ( const { field } of block.getConditions() ) {
						this.addConditionalListener( field, this.conditionalBlocks.length - 1 );
					}
				}

				for ( const name in this.dataInputs ) {
					if ( ! this.dataInputs.hasOwnProperty( name ) ) {
						continue;
					}
					const current = this.dataInputs[ name ];

					current.watch( current.onChange.bind( current ) );
					current.watch( () => this.handleConditions( current ) );
				}
			}

			initConditionalBlocks() {
				this.conditionalBlocks.forEach( block => block.calculate() );
			}

			watch( fieldName, callable ) {
				if ( this.dataInputs.hasOwnProperty( fieldName ) ) {
					this.dataInputs[ fieldName ].watch( callable );
				} else {
					console.error( `dataInputs in Observable don\'t have ${ fieldName } field` );
				}
			}

			addConditionalListener( fieldName, index ) {
				if ( ! this.dataInputs.hasOwnProperty( fieldName ) ) {
					return;
				}
				this.dataInputs[ fieldName ].pushConditionalIndex( index );
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

			/**
			 * @param input {InputData}
			 */
			handleConditions( input ) {
				const blocks = this.getConditionalBlocks( input );

				for ( const block of blocks ) {
					block.calculate();
				}
			}

			/**
			 * @param input {InputData}
			 */
			getConditionalBlocks( input ) {
				const conditionalIndexes = input.getConditionalIndexes();
				const blocks = [];

				for ( let index in this.conditionalBlocks ) {
					if ( ! this.conditionalBlocks.hasOwnProperty( + index ) || ! conditionalIndexes.includes( + index ) ) {
						continue;
					}
					blocks.push( this.conditionalBlocks[ + index ] );
				}

				return blocks;
			}

			/**
			 * @param inputData {InputData}
			 */
			pushData( inputData ) {
				const findInput = this.dataInputs[ inputData.getName() ] ?? false;

				if ( false === findInput ) {
					this.dataInputs[ inputData.getName() ] = inputData;

					return;
				}

				const [ findNode ] = findInput.getNode();
				const [ inputNode ] = inputData.getNode();

				if ( findNode.type !== inputNode.type ) {
					return;
				}

				findInput.merge( inputData );
			}
		}

		/**
		 * @param node
		 * @returns {InputData}
		 */
		function createInput( node ) {
			switch ( node.type ) {
				case 'hidden':
					return new NoListenData( node );
				case 'select':
				case 'range':
					return new ChangeData( node );
				case 'checkbox':
					return new CheckboxData( node );
				case 'radio':
					return new RadioData( node );
				default:
					return new InputData( node );
			}
		}
	}
)( jQuery );