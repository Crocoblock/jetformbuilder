( function( $ ) {

	'use strict';

	const { addAction, doAction, applyFilters } = wp.hooks;

	const JetFormBuilderDev = {
		isActive: function() {
			return Boolean( window.JetFormBuilderSettings.devmode );
		},
		log: function( label = '', params = {} ) {
			if ( ! this.isActive() || ! params ) {
				return;
			}
			console.group( label );
			for ( const key in params ) {
				console.log( `${ key }: ${ params[ key ] }` );
			}
			console.groupEnd();
		},
		hardLog: function( label = '', params = {} ) {
			this.log( label, params );
			if ( this.isActive() ) {
				debugger;
			}
		},
	}

	window.JetFormBuilderMain = {

		filters: ( function() {

			var callbacks = {};

			return {

				addFilter: function( name, callback ) {

					if ( ! callbacks.hasOwnProperty( name ) ) {
						callbacks[ name ] = [];
					}

					callbacks[ name ].push( callback );

				},

				applyFilters: function( name, value, args ) {

					if ( ! callbacks.hasOwnProperty( name ) ) {
						return value;
					}

					if ( args === undefined ) {
						args = [];
					}

					var container = callbacks[ name ];
					var cbLen = container.length;

					for ( var i = 0; i < cbLen; i++ ) {
						if ( typeof container[ i ] === 'function' ) {
							value = container[ i ]( value, args );
						}
					}

					return value;
				},

			};

		} )(),

	};

	$.fn.jetFormBuilderConditional = function( options ) {

		var settings = $.extend( {
			hideJS: true,
		}, options );

		var checkValue = function( $listenTo, listenFor, operator ) {

			var val = '';
			var checkResult = false;
			var controlType = 'plain';

			operator = operator || 'equal';

			if ( $listenTo.is( 'input[type=checkbox]' ) ) {
				controlType = 'checkbox';
			} else if ( $listenTo.is( 'input[type=radio]' ) ) {
				controlType = 'radio';
			}

			if ( 'checkbox' === controlType ) {
				val = [];
			}

			if ( 'plain' === controlType ) {
				val = $listenTo.val();
			} else {

				$listenTo.each( function() {

					var $control = $( this );

					if ( $control.is( ':checked' ) ) {
						if ( 'checkbox' === controlType ) {
							val.push( $control.val() );
						} else {
							val = $control.val();
						}
					}

				} );
			}

			switch ( operator ) {
				case 'equal':
					if ( val && val.constructor === Array ) {
						checkResult = false;
					} else {
						checkResult = ( val == listenFor );
					}
					break;

				case 'greater':
					if ( val && val.constructor === Array ) {
						checkResult = false;
					} else {
						checkResult = ( parseFloat( val ) > parseFloat( listenFor ) );
					}
					break;

				case 'less':
					if ( val && val.constructor === Array ) {
						checkResult = false;
					} else {
						checkResult = ( parseFloat( val ) < parseFloat( listenFor ) );
					}
					break;

				case 'between':

					if ( val && val.constructor === Array ) {
						checkResult = false;
					} else {
						if ( 2 <= listenFor.length ) {
							let from = parseFloat( listenFor[ 0 ] );
							let to = parseFloat( listenFor[ 1 ] );
							val = parseFloat( val );
							checkResult = ( from <= val && val <= to );
						} else {
							checkResult = false;
						}
					}

					break;

				case 'one_of':
					if ( val && val.constructor === Array ) {
						checkResult = val.includes( listenFor );

					} else if ( ! val ) {
						checkResult = false;
					} else {
						if ( listenFor.length ) {
							checkResult = 0 <= listenFor.indexOf( val );
						} else {
							checkResult = false;
						}
					}

					break;

				case 'contain':
					if ( val && val.constructor === Array ) {

						var intersect = val.filter( function( n ) {
							return n.indexOf( listenFor ) !== -1;
						} );

						checkResult = 0 < intersect.length;

					} else if ( ! val ) {
						checkResult = false;
					} else {
						checkResult = 0 <= val.indexOf( listenFor );
					}

					break;
			}

			return checkResult;
		};

		var checkVisibilityCond = function( listenTo, listenFor, $section, operator, type ) {

			var checked = $section.data( 'checked' );
			var $listenTo = $( listenTo );
			var checkResult = checkValue( $listenTo, listenFor, operator );

			type = type || 'show';

			if ( ! checked ) {
				checked = {};
			}

			if ( 'show' === type ) {
				checked[ listenTo ] = checkResult;
			} else {
				checked[ listenTo ] = ! checkResult;
			}

			$section.data( 'checked', checked );

		};

		var checkSetValueCond = function( listenTo, listenFor, $section, operator, value, type ) {

			var currentVal = $section.data( 'result_' + type );
			var $listenTo = $( listenTo );
			var checkResult = checkValue( $listenTo, listenFor, operator );

			if ( checkResult ) {
				currentVal = value;
			}

			$section.data( 'result_' + type, currentVal );

		};

		var setValue = function( $section ) {

			var setVal = false;
			var setCalcVal = false;
			var $field;
			var triggered = false;

			if ( $section.data( 'result_set_value' ) ) {
				setVal = $section.data( 'result_set_value' );
			}

			if ( $section.data( 'result_set_calculated_value' ) ) {
				setCalcVal = $section.data( 'result_set_calculated_value' );
			}

			if ( ! setVal && ! setCalcVal ) {
				return;
			}

			$field = $section.find( '.jet-form-builder__field' );

			if ( ! $field.length ) {
				return;
			}

			if ( $field.is( 'select' ) ) {

				$field.find( ':selected' ).removeAttr( 'selected' );

				if ( setVal ) {
					$field.find( 'option[value="' + setVal + '"]' ).attr( 'selected', 'selected' ).trigger( 'change.JetFormBuilderMain' );
					triggered = true;
				}

				if ( setCalcVal ) {
					$field.find( 'option[data-calculate="' + setCalcVal + '"]' ).attr( 'selected', 'selected' );
					if ( ! triggered ) {
						$field.trigger( 'change.JetFormBuilderMain' );
						triggered = true;
					}
				}

			} else if ( $field.is( ':not( input[type=checkbox], input[type=radio] )' ) ) {

				if ( setVal ) {
					$field.val( setVal ).trigger( 'change.JetFormBuilderMain' );
					triggered = true;
				}

				if ( setCalcVal ) {
					$field.data( 'calculate', setCalcVal );
					if ( ! triggered ) {
						$field.trigger( 'change.JetFormBuilderMain' );
						triggered = true;
					}
				}

			} else {

				$field.each( function() {

					var $this = $( this );

					if ( $this.is( ':checked' ) ) {
						$this.removeAttr( 'checked' );
					}

					if ( setVal && setVal == $this.val() ) {
						$this.attr( 'checked', 'checked' ).trigger( 'change.JetFormBuilderMain' );
						triggered = true;
					}

					if ( setCalcVal && setCalcVal == $this.data( 'calculate' ) ) {
						$this.attr( 'checked', 'checked' );
						if ( ! triggered ) {
							$this.trigger( 'change.JetFormBuilderMain' );
							triggered = true;
						}
					}

				} );

			}

		};

		var setVisibility = function( $section ) {

			var checked = $section.data( 'checked' );
			//var $row = $section.closest( '.jet-form-builder-row' );
			var res = true;

			if ( ! checked ) {
				return;
			}

			for ( var check in checked ) {
				if ( ! checked[ check ] ) {
					res = false;
				}
			}

			if ( res ) {

				$section.show();
				//$row.show();

				$section.find( '*[data-initial-type]' ).each( function() {
					var $this = $( this );

					$this.attr( 'type', $this.data( 'initial-type' ) );
				} );

				$section.find( 'select option[data-is-hidden="1"]' ).remove();

				$section
					.find( '*[data-required="1"]' )
					.attr( 'required', 'required' );

			} else {

				$section.hide();

				$section.find( '*[type="date"],*[type="time"],*[type="email"],*[type="url"]' ).each( function() {
					var $this = $( this ),
						type  = $this.attr( 'type' );

					$this.attr( 'data-initial-type', type );
					$this.attr( 'type', 'text' );
				} );

				var $select = $section.find( 'select' );

				if ( $select.length ) {
					$select.append( '<option value="" data-is-hidden="1"></option>' );
				}

				$section.find( '*[required]' )
					.removeAttr( 'required' )
					.attr( 'data-required', 1 );

				/*var $hiddenItems = $row.find( '>*' ).filter( function() {
					return $( this ).css( 'display' ) === 'none';
				} );

				if ( $row.find( '>*' ).length === $hiddenItems.length ) {
					$row.hide();
				}*/
			}

		};

		return this.each( function() {

			var $section = $( this );
			var conditions = $section.data( 'conditional' );

			if ( ! conditions || ! conditions.length ) {
				return;
			}

			for ( var i = 0; i < conditions.length; i++ ) {

				let condition = conditions[ i ];

				if ( ! condition.field ) {
					continue;
				}

				let listenTo = '[data-field-name=' + condition.field + ']';
				let listenFor = condition.value;
				let operator = condition.operator;
				let type = condition.type;
				let valueToSet = condition.set_value;

				//Set up event listener
				$( document ).on( 'change.JetFormBuilderMain', listenTo, function() {

					if ( 'show' === type || 'hide' === type ) {
						checkVisibilityCond( listenTo, listenFor, $section, operator, type );
					} else {
						checkSetValueCond( listenTo, listenFor, $section, operator, valueToSet, type );
					}

					setValue( $section );
					setVisibility( $section );

				} );

				//If setting was chosen, hide everything first...
				if ( settings.hideJS && ( 'show' === type || 'hide' === type ) ) {
					$section.hide();
				}

				//Show based on current value on page load
				if ( 'show' === type || 'hide' === type ) {
					checkVisibilityCond( listenTo, listenFor, $section, operator, type );
				} else {
					checkSetValueCond( listenTo, listenFor, $section, operator, valueToSet, type );
				}

			}

			setValue( $section );
			setVisibility( $section );
		} );
	};

	var JetFormBuilder = {

		pages: {},
		calcFields: {},
		repeaterCalcFields: {},
		childrenCalcFields: {},
		currentFieldWithError: {
			length: 0,
		},
		installed: [],

		notSafeInit: function() {
			const wrappers = $( '.jet-form-builder__form-wrapper' );

			wrappers.each( function( index, value ) {
				JetFormBuilder.widgetBookingForm( $( value ) );
			} );
		},
		initCommon: function( $scope = false ) {
			let wrappers = $( '.jet-form-builder__form-wrapper', $scope );

			wrappers.each( function( index, value ) {
				JetFormBuilder.widgetBookingForm( $( value ) );
			} );
		},

		initElementor: function() {
			const widgets = {
				'jet-engine-booking-form.default': JetFormBuilder.widgetBookingForm,
				'jet-form-builder-form.default': JetFormBuilder.widgetBookingForm,
			};

			$.each( widgets, function( widget, callback ) {
				window.elementorFrontend.hooks.addAction( 'frontend/element_ready/' + widget, callback );
			} );
		},

		addHandlersInit: function() {
			var self = JetFormBuilder;

			$( document )
				.on( 'click.JetFormBuilderMain', '.jet-form-builder__submit.submit-type-ajax', self.ajaxSubmitForm )
				.on( 'submit.JetFormBuilderMain', 'form.jet-form-builder.submit-type-reload', self.reloadSubmitForm )
				.on( 'click.JetFormBuilderMain', '.jet-form-builder__next-page', self.nextFormPage )
				.on( 'click.JetFormBuilderMain', '.jet-form-builder__prev-page', self.prevFormPage )
				.on( 'focus.JetFormBuilderMain', '.jet-form-builder__field', self.clearFieldErrors )
				.on( 'click.JetFormBuilderMain', '.jet-form-builder__field-template', self.simLabelClick )
				.on( 'change.JetFormBuilderMain', '.jet-form-builder__field', self.recalcFields )
				.on( 'change.JetFormBuilderMain', '.jet-form-builder__field', self.maybeInitSinglePage )
				.on( 'jet-form-builder/repeater-changed', '.jet-form-builder-repeater', self.recalcFields )
				.on( 'change.JetFormBuilderMain', '.jet-form-builder__field.checkboxes-group-required', self.requiredCheckboxGroup )
				.on( 'change.JetFormBuilderMain', '.checkradio-field', self.changeActiveTemplateClass )
				.on( 'input.JetFormBuilderMain/range', '.jet-form-builder__field.range-field', self.updateRangeField )
				.on( 'click.JetFormBuilderMain', '.jet-form-builder-repeater__new', self.newRepeaterItem )
				.on( 'click.JetFormBuilderMain', '.jet-form-builder-repeater__remove', self.removeRepeaterItem )
				.on( 'jet-form-builder/page/field-changed', self.maybeSwitchPage )
				.on( 'jet-form-builder/switch-page', self.updateProgress )
				.on( 'input.JetFormBuilderMain', '.jet-form-builder__field.text-field, .jet-form-builder__field.textarea-field', self.inputTextFields )
		},

		maybeInitSinglePage: function () {
			const self = $( this ),
				$page = self.closest( '.jet-form-builder-page' );

			if ( ! $page.length ) {
			    return
            }
			const $form = self.closest( 'form.jet-form-builder' );

			JetFormBuilder.initSingleFormPage( $page, $form, self );
		},

		inputTextFields: function() {
			$( this ).trigger( 'change.JetFormBuilderMain' );
		},

		updateProgress: function( event, $fromPage, $toPage, $progress ) {
			if ( ! $progress || 'default' !== $progress.data( 'type' ) ) {
				return;
			}
			const [ from, to ] = [ $fromPage.data( 'page' ), $toPage.data( 'page' ) ];

			const prevItem = $progress.find( `.jet-form-builder-progress-pages__item--wrapper[data-page="${ from }"]` );
			const currentItem = $progress.find( `.jet-form-builder-progress-pages__item--wrapper[data-page="${ to }"]` );

			prevItem.removeClass( 'active-page' );
			currentItem.addClass( 'active-page' );
			currentItem.removeClass( 'passed-page' );

			if ( from < to ) {
				prevItem.addClass( 'passed-page' );
			} else {
				prevItem.removeClass( 'passed-page' );
			}
		},

		removeRepeaterItem: function() {

			let $this         = $( this ),
				$repeater     = $this.closest( '.jet-form-builder-repeater' ),
				$repeaterItem = $this.closest( '.jet-form-builder-repeater__row' ),
				$editor       = $repeaterItem.find( '.wp-editor-area' );

			$this.trigger( 'jet-form-builder/on-remove-repeater-item' );

			if ( $editor.length && window.wp && window.wp.editor ) {
				window.wp.editor.remove( $editor.attr( 'id' ) );
			}

			$repeaterItem.remove();
			$repeater.trigger( 'jet-form-builder/repeater-changed' );

		},

		newRepeaterItem: function() {
			var $this     = $( this ),
				$repeater = $this.closest( '.jet-form-builder-repeater' ),
				$initial  = $repeater.find( '.jet-form-builder-repeater__initial' ),
				$items    = $repeater.find( '.jet-form-builder-repeater__items' ),
				$newVal   = $initial.html(),
				index     = 0;

			if ( $items.find( '.jet-form-builder-repeater__row' ).length ) {
				$items.find( '.jet-form-builder-repeater__row' ).each( function() {
					var $this        = $( this ),
						currentIndex = parseInt( $this.data( 'index' ), 10 );

					if ( currentIndex > index ) {
						index = currentIndex;
					}
				} );
				index++;
			}

			$newVal = $newVal.replace( /__i__/g, index );
			$newVal = $( $newVal );
			$newVal.data( 'index', index );
			$newVal.attr( 'data-index', index );

			JetFormBuilder.initRangeFields( $newVal );

			$items.append( $newVal );

			var $editors = $newVal.find( '.wp-editor-area' );

			if ( $editors.length && window.wp && window.wp.editor ) {
				$editors.each( function() {
					JetFormBuilder.wysiwygInitWithTriggers( this, true );
				} );
			}

			if ( $.fn.inputmask ) {
				$newVal.find( '.jet-form-builder__masked-field' ).inputmask();
			}

			$repeater.trigger( 'jet-form-builder/repeater-changed' );
			$this.trigger( 'jet-form-builder/repeater-add-new', [ index ] );

			JetFormBuilder.calculateRowValue( $newVal );

		},

		updateRepeaterItems: function( $repeater, $field ) {

			var val = JetFormBuilder.getFieldValue( $field );

			if ( ! val ) {
				return;
			}

			for ( var i = 0; i < val; i++ ) {

				var $item = $repeater.find( '.jet-form-builder-repeater__row[data-index="' + i + '"]' );

				if ( ! $item.length ) {
					JetFormBuilder.newRepeaterItem.call( $repeater );
				}

			}

			var $rows = $repeater.find( '.jet-form-builder-repeater__row' );

			if ( $rows.length ) {
				$rows.each( function() {
					var $row  = $( this ),
						index = parseInt( $row.data( 'index' ), 10 );

					index++;

					if ( index > val ) {
						$row.remove();
						$repeater.trigger( 'jet-form-builder/repeater-changed' );
					}

				} );
			}

			$repeater.trigger( 'change' );

		},

		calculateRowValue: function( $row ) {

			var val = JetFormBuilder.calculateValue( $row );

			$row.data( 'value', val );
			JetFormBuilder.calculateFieldsInRow( $row );

		},

		calculateFieldsInRow: function( $row ) {

			$row.find( '.jet-form-builder__calculated-field--child' ).each( function() {

				var $childCalculatedField = $( this ),
					val                   = JetFormBuilder.calculateValue( $childCalculatedField )

				if ( ! val ) {
					val = 0;
				}

				JetFormBuilder.setCalculatedValue( val, $childCalculatedField );
			} );

		},

		initRepeaterListener: function( $scope ) {

			var $repeater = $scope.find( '.jet-form-builder-repeater' );

			if ( ! $repeater.length ) {
				return;
			}

			$repeater.each( function() {

				var $this    = $( this ),
					settings = $this.data( 'settings' );

				if ( 'dynamically' === settings.manageItems && settings.itemsField ) {
					var $itemsField = $scope.find( '[data-field-name="' + settings.itemsField + '"]' );

					JetFormBuilder.updateRepeaterItems( $this, $itemsField );

					$itemsField.on( 'change', function() {
						JetFormBuilder.updateRepeaterItems( $this, $itemsField );
					} );
				}

				if ( 'custom' === settings.calcType ) {

					var calculated = null;

					JetFormBuilder.repeaterCalcFields[ $this.data( 'field-name' ) ] = {
						'el': $this,
						'listenTo': $this.data( 'listen_fields' ),
					};

					calculated = JetFormBuilder.calculateValue( $this );

					$this.data( 'value', calculated.toFixed( 0 ) );

				}

				var $initial = $this.find( '.jet-form-builder-repeater__initial' );
				$initial = $( $initial.html() );

				var $calcFields = $initial.find( '.jet-form-builder__calculated-field--child' );

				if ( $calcFields.length ) {

					$calcFields.each( function() {

						var $childField = $( this );

						JetFormBuilder.childrenCalcFields[ $childField.data( 'name' ) ] = {
							'el': $childField,
							'parentEl': $this,
							'listenTo': $childField.data( 'listen_to' ),
						};

						$this.find( '.jet-form-builder-repeater__row' ).each( function() {
							JetFormBuilder.calculateRowValue( $( this ), $childField.data( 'precision' ) );
						} );

					} );
				}

			} );

		},

		simLabelClick: function( event ) {
			$( this ).next( '.jet-form-builder__field-label' ).trigger( 'click' );
		},

		maybeSwitchPage: function( event, $field, $page, disabled ) {

			var $item    = $field[ 0 ],
				isSwitch = $field.data( 'switch' ),
				value    = null,
				$toPage  = null;

			if ( ! isSwitch ) {
				return;
			}

			if ( disabled ) {
				return;
			}

			value = $item.value;

			if ( ! value ) {
				return;
			}

			$toPage = $page.next();

			if ( ! $page || ! $page.length ) {
				return;
			}

			if ( ! $toPage || ! $toPage.length ) {
				return;
			}

			JetFormBuilder.switchFormPage( $page, $toPage );

		},

		changeActiveTemplateClass: function( event ) {

			var $this     = $( this ),
				$template = $this.closest( '.jet-form-builder__field-wrap' ).find( '.jet-form-builder__field-template' );

			if ( ! $template.length ) {
				return;
			}

			if ( 'radio' === $this[ 0 ].type ) {
				$template
					.closest( '.jet-form-builder__fields-group' )
					.find( '.jet-form-builder__field-template--checked' )
					.removeClass( 'jet-form-builder__field-template--checked' );
			}

			$template.toggleClass( 'jet-form-builder__field-template--checked', $this[ 0 ].checked );

		},

		initConditions: function( $scope ) {
			$scope.find( '.jet-form-builder__conditional' ).jetFormBuilderConditional();
		},

		widgetBookingForm: function( $scope ) {
			var $editors = $scope.find( '.jet-form-builder__field .wp-editor-area' );

			if ( $editors.length && window.wp && window.wp.editor ) {
				$editors.each( function() {
					JetFormBuilder.wysiwygInitWithTriggers( this, true );
				} );
			}
			JetFormBuilder.initRequiredCheckboxGroup( $scope );

			$( document ).trigger( 'jet-form-builder/init', [ $scope ] );

			JetFormBuilder.initFormPager( $scope );
			JetFormBuilder.initRangeFields( $scope );
			JetFormBuilder.initRepeaterListener( $scope );
			JetFormBuilder.initConditions( $scope );

			if ( $.fn.inputmask ) {
				$scope.find( '.jet-form-builder__masked-field' ).inputmask();
			}
			JetFormBuilder.initCalcFields( $scope );
			JetFormBuilder.initReplaceValues( $scope );
		},

		initCalcFields: function( $scope ) {
			const $calcFields = $scope.find( '.jet-form-builder__calculated-field' );

			if ( ! $calcFields.length ) {
				return;
			}

			$( $calcFields ).each( function() {

				var $this      = $( this ),
					calculated = null;

				JetFormBuilder.calcFields[ $this.data( 'name' ) ] = {
					'el': $this,
					'listenTo': $this.data( 'listen_to' ),
				};

				calculated = JetFormBuilder.calculateValue( $this );

				JetFormBuilder.setCalculatedValue( calculated, $this );
			} );
		},

		initReplaceValues: function( $scope ) {
			const $form = $scope.find( 'form.jet-form-builder' );

			const macrosPrefix = ( suffix = '' ) => 'JFB_FIELD::' + suffix;

			const replaceAttrs = window.JetFormBuilderSettings.replaceAttrs || [];
			JetFormBuilder.replaceStack = JetFormBuilder.replaceStack || {};

			const getAllComments = rootElem => {
				const comments = [];
				// Fourth argument, which is actually obsolete according to the DOM4 standard, is required in IE 11
				const iterator = document.createNodeIterator( rootElem, NodeFilter.SHOW_COMMENT, () => NodeFilter.FILTER_ACCEPT, false );
				let curNode;

				const timestamp = Date.now();
				let counter = 0;

				const uniqId = () => {
					return ++counter + '_' + timestamp;
				}

				while ( curNode = iterator.nextNode() ) {
					if ( curNode.textContent.includes( macrosPrefix() ) ) {
						curNode.nodeValue = curNode.nodeValue.trim();

						comments.push( { id: uniqId(), node: curNode } );
					}
				}
				const querySelector = [];

				for ( let i = 0; i < replaceAttrs.length; i++ ) {
					querySelector.push( `[${ replaceAttrs[ i ] }*="${ macrosPrefix() }"]` );
				}

				const elements = Array.from( rootElem.querySelectorAll( querySelector.join( ', ' ) ) );

				elements.forEach( elem => {
					for ( let i = 0; i < replaceAttrs.length; i++ ) {
						const attr = elem[ replaceAttrs[ i ] ] || "";

						if ( ! attr.toLowerCase().includes( macrosPrefix().toLowerCase() ) ) {
							continue;
						}

						comments.push( {
							id: uniqId(),
							attr: replaceAttrs[ i ],
							value: decodeURIComponent( attr ),
							node: elem,
						} );
					}
				} )

				return comments;
			}

			const isRadio = function( $field ) {
				if ( 'INPUT' !== $field.prop( 'tagName' ) ) {
					return false;
				}

				return [ 'checkbox', 'radio' ].includes( $field.attr( 'type' ) );
			}

			const getFieldNamesWithBrackets = macrosValue => {
				const matches = macrosValue.match( /(?:<!\-{2}\s*JFB_FIELD::)([\w\-]+)\s*(?:\-{2}>)/gi );

				if ( ! matches ) {
					return [];
				}

				return matches.map(
					match => match.replace( /<!\-{2}\s*JFB_FIELD::/gi, '' ).replace( /\-{2}>/gi, '' )
				)
			};

			const getFieldNamesWithOutBrackets = macrosValue => {
				const matches = macrosValue.match( /(?:\s*JFB_FIELD::)([\w\-]+)\s*/gi );

				if ( ! matches ) {
					return [];
				}

				return matches.map(
					match => match.replace( /\s*JFB_FIELD::/gi, '' )
				)
			};

			const getFieldNames = ( macrosValue, withBrackets = true ) => {
				return withBrackets
					? getFieldNamesWithBrackets( macrosValue )
					: getFieldNamesWithOutBrackets( macrosValue );
			};

			const replaceMacros = ( replaceFrom, fieldName, fieldValue, withBrackets = true ) => {
				const regExp = withBrackets
					? new RegExp( `<!--\\s*JFB_FIELD::${ fieldName }\\s*-->`, 'gi' )
					: new RegExp( `\\s*JFB_FIELD::${ fieldName }\\s*`, 'gi' );

				return replaceFrom.replace( regExp, fieldValue );
			};

			const getValueFromField = field => {
				const is_radio = isRadio( field );

				if ( ! is_radio ) {
					return field.val();
				}

				const checked = [];
				for ( const radioInput of Array.from( field ) ) {
					if ( radioInput.checked ) {
						checked.push( radioInput.value );
					}
				}

				return checked.join( ', ' );
			}

			const prepareValueFromMacros = function( scope, initialValue, withBrackets = true ) {
				const fieldNames = getFieldNames( initialValue, withBrackets );

				fieldNames.forEach( name => {
					const fieldElement = scope.find( `[data-field-name="${ name }"]` );
					
					let fieldValue = applyFilters(
						'jet.fb.macro.field.value',
						false,
						fieldElement,
						scope,
					)

					if ( false === fieldValue ) {
						fieldValue = getValueFromField( fieldElement );
					}

					initialValue = replaceMacros( initialValue, name, fieldValue, withBrackets );
				} );

				return initialValue;
			}

			const replaceAttr = ( macros, scope ) => {
				const replacement = prepareValueFromMacros( scope, macros.value );

				if ( replacement !== macros.node[ macros.attr ] ) {
					macros.node[ macros.attr ] = replacement;
				}
			};

			const insertText = ( macros, scope ) => {
				let currentValue = prepareValueFromMacros( scope, macros.node.nodeValue, false );

				let prevSibling = Array.from( macros.node.parentNode.childNodes ).find(
					node => node.JFB_macros_id === macros.id,
				);

				if ( ! prevSibling ) {
					let wrapper = document.createElement( 'div' );
					wrapper.innerHTML = currentValue;

					prevSibling = macros.node.parentNode.insertBefore( wrapper, macros.node );
					prevSibling.JFB_macros_id = macros.id;

					return;
				}

				if ( prevSibling.innerHTML === currentValue ) {
					return;
				}

				prevSibling.innerHTML = currentValue;
			};

			const replaceFieldValues = scope => {
				const currentFormId = scope.data( 'form-id' );

				for ( const formID in JetFormBuilder.replaceStack ) {
					if ( +formID !== currentFormId ) {
						continue;
					}
					const multiMacros = JetFormBuilder.replaceStack[ currentFormId ].macros;

					multiMacros.forEach( macros => {
						if ( macros.attr ) {
							replaceAttr( macros, scope );
						} else if ( macros.node.nodeName === '#comment' ) {
							insertText( macros, scope );
						}
					} );
				}
			};

			const initRepeater = function( e ) {
				const repeater = $( e.target ).closest( '.jet-form-builder-repeater' );
				const $form = $( e.target ).closest( 'form.jet-form-builder' );

				const formID = $form.data( 'form-id' );
				const repeaterName = repeater.data( 'field-name' );

				let repeaterRowsList = JetFormBuilder.replaceStack[ formID ].repeaters[ repeaterName ] || [];
				let [ scope ] = $( '.jet-form-builder-repeater__row:last', repeater );

				if ( ! repeaterRowsList.includes( +scope.dataset.index ) ) {
					pushRepeaterRowIndex( formID, repeaterName, +scope.dataset.index );
					pushStack( formID, getAllComments( scope ) );
				}

				replaceFieldValues( $form );
			}

			const pushStack = function( formId, stack ) {
				JetFormBuilder.replaceStack[ formId ].macros.push( ...stack );
			};

			const pushRepeaterRowIndex = function( formId, repeaterName, index ) {
				const repeater = JetFormBuilder.replaceStack[ formId ].repeaters[ repeaterName ] || [];
				repeater.push( index );

				JetFormBuilder.replaceStack[ formId ].repeaters[ repeaterName ] = repeater;
			}

			$( document ).on( 'change.JetFormBuilderMain', 'form.jet-form-builder .jet-form-builder__field', function() {
				replaceFieldValues( $( this ).closest( 'form.jet-form-builder' ) );
			} );

			if ( $form.length ) {
				JetFormBuilder.replaceStack[ $form.data( 'form-id' ) ] = {
					macros: [],
					repeaters: {},
				};
				pushStack( $form.data( 'form-id' ), getAllComments( $form[ 0 ] ) );
				replaceFieldValues( $form );
			}

			$( document ).on(
				'jet-form-builder/repeater-add-new',
				'.jet-form-builder-repeater__new',
				e => initRepeater( e ),
			);
		},

		initFormPager: function( $scope ) {
			var $pages = $scope.find( '.jet-form-builder-page' ),
				$form  = $scope.find( '.jet-form-builder' );

			if ( ! $pages.length ) {
				return;
			}

			$pages.each( function() {

				var $page = $( this );

				if ( ! $page.hasClass( '.jet-form-builder-page--hidden' ) ) {
					JetFormBuilder.initSingleFormPage( $page, $form, false );
				}

			} );

		},

		initSingleFormPage: function( $page, $form, $changedField ) {

			var $button        = $page.find( '.jet-form-builder__next-page' ),
				$msg           = $page.find( '.jet-form-builder__next-page-msg' ),
				requiredFields = $page[ 0 ].querySelectorAll( '.jet-form-builder__field[required]' ),
				pageNum        = parseInt( $page.data( 'page' ), 10 ),
				disabled       = false,
				radioFields    = {};

			$changedField = $changedField || false;

			if ( requiredFields.length ) {
				for ( var i = 0; i < requiredFields.length; i++ ) {

					var $field = $( requiredFields[ i ] );
					var val = null;
					var isRadio = false;

					if ( 'INPUT' === $field[ 0 ].nodeName ) {

						if ( $field.length > 1 ) {
							for ( var j = 0; j < $field.length; j++ ) {
								if ( $field[ j ].checked ) {
									val = $field[ j ].value;
								}
							}
						} else if ( 'radio' === $field[ 0 ].type ) {

							isRadio = true;

							if ( $field[ 0 ].checked ) {
								radioFields[ $field[ 0 ].name ] = $field[ 0 ].value;
							}

						} else {
							val = $field.val();
						}
					}

					if ( 'TEXTAREA' === $field[ 0 ].nodeName ) {
						val = $field.val();
					}

					if ( 'SELECT' === $field[ 0 ].nodeName ) {
						val = $field.find( 'option:selected' ).val();
					}

					if ( ! val ) {
						disabled = true;
					}

					if ( isRadio && radioFields[ $field[ 0 ].name ] ) {
						disabled = false;
					}

				}
			}

			if ( disabled ) {

				if ( $msg.length ) {
					$msg.addClass( 'jet-form-builder__next-page-msg--visible' );
				}

				$button.attr( 'disabled', true );
			} else {

				if ( $msg.length ) {
					$msg.removeClass( 'jet-form-builder__next-page-msg--visible' );
				}

				$button.attr( 'disabled', false );
			}

			if ( ! JetFormBuilder.pages[ pageNum ] ) {
				JetFormBuilder.pages[ pageNum ] = {
					page: $page,
					disabled: disabled,
				};
			} else {
				JetFormBuilder.pages[ pageNum ].disabled = disabled;
			}

			if ( $changedField ) {
				$( document ).trigger( 'jet-form-builder/page/field-changed', [ $changedField, $page, disabled ] );
			}
		},

		nextFormPage: function() {

			var $button     = $( this ),
				$fromPage   = $button.closest( '.jet-form-builder-page' ),
				$pageFields = $fromPage.find( '.jet-form-builder__field' ).filter( ':input' ),
				$toPage     = $fromPage.next();

			if ( ! JetFormBuilder.isFieldsValid( $pageFields ) ) {
				return;
			}

			JetFormBuilder.switchFormPage( $fromPage, $toPage );

		},

		prevFormPage: function() {

			var $button   = $( this ),
				$fromPage = $button.closest( '.jet-form-builder-page' ),
				$toPage   = $fromPage.prev();

			JetFormBuilder.switchFormPage( $fromPage, $toPage );
		},

		isFieldsValid: function( $fields ) {
			var isValid = true;

			$fields.each( function( ind, field ) {
				if ( ! field.checkValidity() ) {
					field.reportValidity();
					isValid = false;
					return false;
				}
			} );

			return isValid;
		},

		switchFormPage: function( $fromPage, $toPage ) {
			const $form = $fromPage.closest( '.jet-form-builder' );
			const $conditional = $fromPage.closest( '.jet-form-builder__conditional' );
			let $progress = null;

			if ( ! $conditional.length ) {
				$progress = $form.find( '.jet-form-builder-progress-pages--global' );
			}

			$fromPage.addClass( 'jet-form-builder-page--hidden' );
			$toPage.removeClass( 'jet-form-builder-page--hidden' );

			window.scrollTo( 0, $toPage.offset().top + ( +JetFormBuilderSettings.scrollOffset ) );

			JetFormBuilder.initSingleFormPage( $toPage, $form, false );

			$( '.jet-form-builder-messages-wrap[data-form-id="' + $form.data( 'form-id' ) + '"]' ).html( '' );
			$( document ).trigger( 'jet-form-builder/switch-page', [ $fromPage, $toPage, $progress ] );
		},

		getFieldValue: function( $field ) {

			var val = 0;

			if ( $field.length ) {

				if ( 'INPUT' === $field[ 0 ].nodeName ) {
					if ( $field.length > 1 ) {

						for ( var i = 0; i < $field.length; i++ ) {
							if ( $field[ i ].checked ) {

								var itemVal = 0;

								if ( undefined !== $field[ i ].dataset.calculate ) {
									itemVal = $field[ i ].dataset.calculate;
								} else {
									itemVal = $field[ i ].value;
								}

								if ( 'checkbox' === $field[ i ].type ) {
									val += parseFloat( itemVal );
								} else {
									val = itemVal;
								}

							}
						}

					} else {
						if ( 'checkbox' === $field[ 0 ].type ) {
							if ( $field[ 0 ].checked ) {
								if ( undefined !== $field[ 0 ].dataset.calculate ) {
									val = $field[ 0 ].dataset.calculate;
								} else {
									val = $field[ 0 ].value;
								}
							}
						} else {
							val = $field.val();
						}
					}
				}

				if ( 'SELECT' === $field[ 0 ].nodeName ) {

					var selectedOption = $field.find( 'option:selected' ),
						calcValue      = selectedOption.data( 'calculate' );

					if ( undefined !== calcValue ) {
						val = calcValue;
					} else {
						val = $field.find( 'option:selected' ).val();
					}

				}

				if ( 'DIV' === $field[ 0 ].nodeName ) {

					if ( $field.hasClass( 'jet-form-builder-repeater' ) ) {
						var repeaterSettings = $field.data( 'settings' );
						if ( repeaterSettings && 'custom' === repeaterSettings.calcType ) {
							$field.find( '.jet-form-builder-repeater__row' ).each( function() {
								var $row   = $( this ),
									rowVal = JetFormBuilder.calculateValue( $row );

								$row.data( 'value', rowVal );

								val += rowVal;
							} );

						} else {
							val = $field.find( '.jet-form-builder-repeater__row' ).length;
						}
					}

				}

			}

			if ( ! val ) {
				val = '0';
			}

			val = JetFormBuilderMain.filters.applyFilters( 'forms/calculated-field-value', val, $field );

			return val;

		},

		calculateValue: function( $scope ) {

			var formula = String( $scope.data( 'formula' ) ),
				//listenTo = $( '[name^="' + $scope.data( 'listen_to' ) + '"]', $scope.closest( 'form' ) ),
				regexp  = /%([a-zA-Z0-9-_]+)%/g,
				func    = null,
				$form   = $scope.closest( 'form' );

			if ( typeof formula === 'undefined' || ! $form.length ) {
				return 0;
			}

			const getGlobalObj = name => {
				return $form.find( '[name="' + name + '"], [name="' + name + '[]"]' )
			};

			formula = JetFormBuilderMain.filters.applyFilters( 'forms/calculated-formula-before-value', formula, $scope );

			formula = formula.replace( regexp, function( match1, match2 ) {

				var object = null;

				if ( $scope.data( 'repeater' ) ) {
					object = $scope;
				} else if ( $scope.hasClass( 'jet-form-builder__calculated-field--child' ) ) {
					object = $scope.closest( '.jet-form-builder-repeater__row' ).find( '[data-field-name="' + match2 + '"]' );

					if ( ! object.length ) {
						object = getGlobalObj( match2 );
					}

				} else if ( $scope.data( 'repeater-row' ) ) {
					object = $scope.find( '[data-field-name="' + match2 + '"]' );
				} else {
					object = getGlobalObj( match2 );
				}

				return JetFormBuilder.getFieldValue( object );

			} );

			formula = JetFormBuilderMain.filters.applyFilters( 'forms/calculated-formula-after-value', formula, $scope );

			func = new Function( 'return ' + formula );

			return func();

		},

		convertCalcValue: function( value, sepDecimal, sepThousands ) {
			const parts = value.toString().split( '.' );
			parts[ 0 ] = parts[ 0 ].replace( /\B(?=(\d{3})+(?!\d))/g, sepThousands );

			return parts.join( sepDecimal );
		},

		setCalculatedValue: function( calculatedValue, calcField ) {
			const fieldPrecision = calcField.data( 'precision' );
			const number = calculatedValue.toFixed( fieldPrecision );

			const visibleNumber = JetFormBuilder.convertCalcValue(
				number,
				calcField.data( 'sep-decimal' ) || '.',
				calcField.data( 'sep-thousands' ) || '',
			);

			calcField.find( '.jet-form-builder__calculated-field-val' ).text( visibleNumber );
			calcField.find( '.jet-form-builder__calculated-field-input' ).val( number ).trigger( 'change.JetFormBuilderMain' );
		},

		recalcFields: function( event ) {

			var $this      = $( this ),
				fieldName  = $this.attr( 'name' ),
				calculated = null;

			if ( $this.data( 'field-name' ) ) {
				fieldName = $this.data( 'field-name' );
			}

			if ( ! fieldName ) {
				return;
			}
			fieldName = fieldName.replace( '[]', '' );

			$.each( JetFormBuilder.calcFields, function( calcFieldName, field ) {

				if ( 0 <= $.inArray( fieldName, field.listenTo ) ) {
					calculated = JetFormBuilder.calculateValue( $( field.el ) );

					JetFormBuilder.setCalculatedValue( calculated, $( field.el ) )
				}
			} );

			if ( 'jet-form-builder/repeater-changed' !== event.type ) {
				$.each( JetFormBuilder.repeaterCalcFields, function( calcFieldName, field ) {
					if ( 0 <= $.inArray( fieldName, field.listenTo ) ) {
						field.el.trigger( 'jet-form-builder/repeater-changed' );
					}
				} );
			}

			$.each( JetFormBuilder.childrenCalcFields, function( calcFieldName, field ) {

				if ( 0 <= $.inArray( fieldName, field.listenTo ) ) {
					field.parentEl.find( '.jet-form-builder-repeater__row' ).each( function() {
						const $row = $( this );

						JetFormBuilder.calculateFieldsInRow( $row )
					} );
				}
			} );

		},

		initRequiredCheckboxGroup: function( $scope ) {
			var $group = $scope.find( '.jet-form-builder__fields-group' );

			$group.each( function() {
				var $this       = $( this ),
					$checkboxes = $( '.checkboxes-group-required', $this );

				if ( $checkboxes.length ) {
					var isChecked = $checkboxes.is( ':checked' );

					$checkboxes.prop( 'required', ! isChecked );
				}
			} );
		},

		requiredCheckboxGroup: function( event ) {
			var $this       = $( event.target ),
				$group      = $this.closest( '.jet-form-builder__fields-group' ),
				$checkboxes = $( '.checkboxes-field', $group );

			if ( $checkboxes.length < 2 ) {
				return;
			}

			var isChecked = $checkboxes.is( ':checked' );

			$checkboxes.prop( 'required', ! isChecked );
		},

		initRangeFields: function( $scope ) {
			var $rangeFields = $scope.find( '.jet-form-builder__field.range-field' );

			if ( ! $rangeFields.length ) {
				return;
			}

			$rangeFields.each( function() {
				JetFormBuilder.updateRangeField( { target: $( this ), firstInit: true } );
			} );
		},

		updateRangeField: function( event ) {
			var $target = $( event.target ),
				$wrap   = $target.closest( '.jet-form-builder__field-wrap' ),
				$number = $wrap.find( '.jet-form-builder__field-value-number' ),
				max     = $target.attr( 'max' ) || 100,
				val     = $target.val();

			if ( event.firstInit ) {
				$number.text( max );
			}

			$number.text( val );
		},

		reloadSubmitForm: function( event ) {
			const $target = $( event.target );
			const $maskedFields = $target.find( '.jet-form-builder__masked-field' );

			if ( $maskedFields && $maskedFields.length ) {
				$maskedFields.each( function() {
					const $maskedField = $( this );

					// Remove mask if empty value
					if ( ! $maskedField.val() && $maskedField.inputmask ) {
						$maskedField.inputmask( 'remove' );
					}
				} );
			}
			$target.addClass( 'is-loading' );
			$target.find( '.jet-form-builder__submit' ).attr( 'disabled', true );
			event.preventDefault();

			Promise.all(
				applyFilters( 'jet.fb.submit.reload.promises', [ true ], event )
			).then( () => event.target.submit() ).catch( () => {
				$target.removeClass( 'is-loading' );
				$target.find( '.jet-form-builder__submit' ).attr( 'disabled', false );

				doAction( 'jet.fb.on.prevented.submit.reload', event );
			} );
		},

		ajaxSubmitForm: function() {

			var $this  = $( this ),
				$form  = $this.closest( '.jet-form-builder' ),
				formID = $form.data( 'form-id' ),
				data   = {
					action: JetFormBuilderSettings.form_action,
				};

			if ( 'undefined' !== typeof $form[ 0 ].checkValidity && 'undefined' !== typeof $form[ 0 ].reportValidity && ! $form[ 0 ].checkValidity() ) {
				$form[ 0 ].reportValidity();
				return;
			}

			if ( window.tinyMCE ) {
				window.tinyMCE.triggerSave();
			}

			JetFormBuilder.clearFieldErrors( formID );

			const onSuccess = function( response ) {

				$form.removeClass( 'is-loading' );
				$this.attr( 'disabled', false );

				switch ( response.status ) {

					case 'validation_failed':

						Object.entries( response.fields ).forEach( function( [ fieldName, fieldData ] ) {
							var $field = JetFormBuilder.findFieldByName( $form, fieldName );

							const afterMessage = `<div class="error-message">${ fieldData.message }</div>`;

							$field.addClass( 'field-has-error' );

							if ( $field.hasClass( 'checkradio-field' ) ) {
								$field.closest( '.jet-form-builder__field-wrap' ).after( afterMessage );
							} else {
								$field.after( afterMessage );
							}

							JetFormBuilder.currentFieldWithError = {
								length: 0,
							};
						} );

						break;

					case 'success':
						$( document ).trigger( 'jet-form-builder/ajax/on-success', [ response, $form, data ] );
						break;
				}

				if ( response.redirect ) {
					window.location = response.redirect;
				} else if ( response.reload ) {
					window.location.reload();
				}

				$( '.jet-form-builder-messages-wrap[data-form-id="' + formID + '"]' ).html( response.message );

			};

			const onError = function ( jqXHR, textStatus, errorThrown ) {
				console.error( jqXHR.responseText, errorThrown );

				removeLoading();
			}

			const removeLoading = () => {
				$form.removeClass( 'is-loading' );
				$this.attr( 'disabled', false );
			};

			const runAjaxForm = callbacks => {
				data.values = $form.serializeArray();
				data._jet_engine_booking_form_id = formID;

				$.ajax( {
					url: JetFormBuilderSettings.ajaxurl,
					type: 'POST',
					dataType: 'json',
					data: data,
				} ).done( response => {
					onSuccess( response );
					callbacks.forEach( cb => {
						if ( 'function' === typeof cb ) {
							cb.call( $form, response )
						}
					} );

				} ).fail( onError );
			};

			$form.addClass( 'is-loading' );
			$this.attr( 'disabled', true );

			Promise.all(
				applyFilters( 'jet.fb.submit.ajax.promises', [ true ], $form, $this, data )
			).then( runAjaxForm ).catch( () => {
				removeLoading();
				doAction( 'jet.fb.on.prevented.submit.ajax', $this, $form, data );
			} );
		},

		clearFieldErrors: function( formID ) {
			var $this = $( this );

			$this.closest( '.jet-form-builder-col' ).find( '.jet-form-builder__field-error' ).remove();

			$( '.jet-form-builder__field.field-has-error' ).each( ( index, elem ) => {
				$( elem ).removeClass( 'field-has-error' );
				$( elem ).siblings( '.error-message' ).remove();
			} );

			$( '.jet-form-builder-messages-wrap[data-form-id="' + formID + '"]' ).html( '' );

		},

		findFieldByName: function( form, fieldName ) {
			const callbackFinders = [
				'findInputDefault',
				'findWysiwyg',
			];

			callbackFinders.forEach( function( callback ) {
				if ( ! JetFormBuilder.currentFieldWithError || ! JetFormBuilder.currentFieldWithError.length ) {
					JetFormBuilder.currentFieldWithError = JetFormBuilder[ callback ]( form, fieldName );
				}
			} );

			return JetFormBuilder.currentFieldWithError;
		},

		findInputDefault: function( form, fieldName ) {
			return form.find( `.jet-form-builder-row [data-field-name="${ fieldName }"]:last` );
		},

		findWysiwyg: function( form, fieldName ) {
			let field;

			form.find( '.jet-form-builder__field[data-editor]' ).each( function( index, editor ) {

				if ( fieldName === $( editor ).data( 'editor' ).textarea_name ) {
					field = $( editor );
				}
			} );

			return field;
		},

		addTriggersWysiwyg: function( field, editorId ) {
			const callable = function( e ) {
				field.trigger( 'change.JetFormBuilderMain', [ this ] );
			};

			const editor = tinymce.get( editorId );

			editor
				.on( 'input', callable )
				.on( 'change', callable );
		},
		wysiwygInit: function( closure, replace = false ) {
			const self     = $( closure ),
				  editorID = self.attr( 'id' ),
				  field    = self.closest( '.jet-form-builder__field' );

			if ( replace && window.tinymce && window.tinymce.get( editorID ) ) {
				window.tinymce.get( editorID ).remove();
			}

			window.wp.editor.initialize(
				editorID,
				field.data( 'editor' ),
			);

			return { editorID, field };
		},
		wysiwygInitWithTriggers: function( closure, replace = false ) {
			const { editorID, field } = JetFormBuilder.wysiwygInit( closure, replace );

			JetFormBuilder.addTriggersWysiwyg( field, editorID );
		},

	};

	window.JetFormBuilderDev = JetFormBuilderDev;
	window.JetFormBuilder = JetFormBuilder;

	$( () => JetFormBuilder.initCommon() );
	$( window ).on( 'elementor/frontend/init', JetFormBuilder.initElementor );

	$( document ).on( 'elementor/popup/show', function( event, id, instance ) {
		const $modal = $( '#elementor-popup-modal-' + id );

		JetFormBuilder.initCommon( $modal );
	} );

	document.addEventListener( 'jet-fb.render.form-block', JetFormBuilder.notSafeInit )

	JetFormBuilder.addHandlersInit();
} )( jQuery );
