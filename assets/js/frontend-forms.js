( function ( $ ) {

	"use strict";

	const JetFormBuilderDev = {
		isActive: function () {
			return Boolean( window.JetFormBuilderSettings.devmode );
		},
		log: function ( label = '', params = {} ) {
			if ( ! this.isActive() || ! params ) {
				return;
			}
			console.group( label );
			for ( const key in params ) {
				console.log( `${ key }: ${ params[ key ] }` );
			}
			console.groupEnd();
		},
		hardLog: function ( label = '', params = {} ) {
			this.log( label, params );
			if ( this.isActive() ) {
				debugger;
			}
		}
	}

	window.JetFormBuilderMain = {

		filters: ( function () {

			var callbacks = {};

			return {

				addFilter: function ( name, callback ) {

					if ( ! callbacks.hasOwnProperty( name ) ) {
						callbacks[ name ] = [];
					}

					callbacks[ name ].push( callback );

				},

				applyFilters: function ( name, value, args ) {

					if ( ! callbacks.hasOwnProperty( name ) ) {
						return value;
					}

					if ( args === undefined ) {
						args = [];
					}

					var container = callbacks[ name ];
					var cbLen = container.length;

					for ( var i = 0; i < cbLen; i ++ ) {
						if ( typeof container[ i ] === 'function' ) {
							value = container[ i ]( value, args );
						}
					}

					return value;
				}

			};

		} )()

	};

	$.fn.jetFormConditional = function ( options ) {

		var settings = $.extend( {
			hideJS: true
		}, options );

		var checkValue = function ( $listenTo, listenFor, operator ) {

			var val = '';
			var checkResult = false;
			var controlType = 'plain';

			operator = operator || 'equal';

			if ( $listenTo.is( 'input[type=checkbox]' ) ) {
				controlType = 'checkbox';
			}
			else if ( $listenTo.is( 'input[type=radio]' ) ) {
				controlType = 'radio';
			}

			if ( 'checkbox' === controlType ) {
				val = [];
			}

			if ( 'plain' === controlType ) {
				val = $listenTo.val();
			}
			else {

				$listenTo.each( function () {

					var $control = $( this );

					if ( $control.is( ':checked' ) ) {
						if ( 'checkbox' === controlType ) {
							val.push( $control.val() );
						}
						else {
							val = $control.val();
						}
					}

				} );
			}

			JetFormBuilderDev.log( 'Conditional', {
				val,
				listenFor,
				operator
			} );

			switch ( operator ) {
				case 'equal':
					if ( val && val.constructor === Array ) {
						checkResult = false;
					}
					else {
						checkResult = ( val == listenFor );
					}
					break;

				case 'greater':
					if ( val && val.constructor === Array ) {
						checkResult = false;
					}
					else {
						checkResult = ( parseFloat( val ) > parseFloat( listenFor ) );
					}
					break;

				case 'less':
					if ( val && val.constructor === Array ) {
						checkResult = false;
					}
					else {
						checkResult = ( parseFloat( val ) < parseFloat( listenFor ) );
					}
					break;

				case 'between':

					if ( val && val.constructor === Array ) {
						checkResult = false;
					}
					else {
						if ( 2 <= listenFor.length ) {
							let from = parseFloat( listenFor[ 0 ] );
							let to = parseFloat( listenFor[ 1 ] );
							val = parseFloat( val );
							checkResult = ( from <= val && val <= to );
						}
						else {
							checkResult = false;
						}
					}

					break;

				case 'one_of':
					if ( val && val.constructor === Array ) {
						checkResult = val.includes( listenFor );

					}
					else if ( ! val ) {
						checkResult = false;
					}
					else {
						if ( listenFor.length ) {
							checkResult = 0 <= listenFor.indexOf( val );
						}
						else {
							checkResult = false;
						}
					}

					break;

				case 'contain':
					if ( val && val.constructor === Array ) {

						var intersect = val.filter( function ( n ) {
							return n.indexOf( listenFor ) !== - 1;
						} );

						checkResult = 0 < intersect.length;

					}
					else if ( ! val ) {
						checkResult = false;
					}
					else {
						checkResult = 0 <= val.indexOf( listenFor );
					}

					break;
			}

			return checkResult;
		};

		var checkVisibilityCond = function ( listenTo, listenFor, $section, operator, type ) {

			var checked = $section.data( 'checked' );
			var $listenTo = $( listenTo );
			var checkResult = checkValue( $listenTo, listenFor, operator );

			type = type || 'show';

			if ( ! checked ) {
				checked = {};
			}

			if ( 'show' === type ) {
				checked[ listenTo ] = checkResult;
			}
			else {
				checked[ listenTo ] = ! checkResult;
			}

			$section.data( 'checked', checked );

		};

		var checkSetValueCond = function ( listenTo, listenFor, $section, operator, value, type ) {

			var currentVal = $section.data( 'result_' + type );
			var $listenTo = $( listenTo );
			var checkResult = checkValue( $listenTo, listenFor, operator );

			if ( checkResult ) {
				currentVal = value;
			}

			$section.data( 'result_' + type, currentVal );

		};

		var setValue = function ( $section ) {

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

			}
			else if ( $field.is( ':not( input[type=checkbox], input[type=radio] )' ) ) {

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

			}
			else {

				$field.each( function () {

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

		var setVisibility = function ( $section ) {

			var checked = $section.data( 'checked' );
			var $row = $section.closest( '.jet-form-builder-row' );
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
				$row.show();

				$section.find( '*[data-initial-type]' ).each( function () {
					var $this = $( this );

					$this.attr( 'type', $this.data( 'initial-type' ) );
				} );

				$section.find( 'select option[data-is-hidden="1"]' ).remove();

				$section
				.find( '*[data-required="1"]' )
				.val( '' )
				.attr( 'required', true );

			}
			else {

				$section.hide();

				$section.find( '*[type="date"],*[type="time"],*[type="email"]' ).each( function () {
					var $this = $( this ),
						type = $this.attr( 'type' );

					$this.attr( 'data-initial-type', type );
					$this.attr( 'type', 'text' );
				} );

				var $select = $section.find( 'select' );
				var val = 'is-hidden';

				if ( $select.length ) {

					var defaultVal = $select.data( 'default-val' );

					if ( defaultVal || 0 === defaultVal ) {
						val = defaultVal;
					}

					$select.append( '<option value="' + val + '" data-is-hidden="1"></option>' );

				}

				$section.find( '*[required="required"]' )
				.val( val )
				.removeAttr( 'required' )
				.attr( 'data-required', 1 );

				var $hiddenItems = $row.find( '>*' ).filter( function () {
					return $( this ).css( 'display' ) === 'none';
				} );

				if ( $row.find( '>*' ).length === $hiddenItems.length ) {
					$row.hide();
				}
			}

		};

		return this.each( function () {

			var $section = $( this );
			var conditions = $section.data( 'conditional' );

			if ( ! conditions || ! conditions.length ) {
				return;
			}

			for ( var i = 0; i < conditions.length; i ++ ) {

				let condition = conditions[ i ];

				if ( ! condition.field ) {
					continue;
				}

				let listenTo = "[data-field-name=" + condition.field + "]";
				let listenFor = condition.value;
				let operator = condition.operator;
				let type = condition.type;
				let valueToSet = condition.set_value;

				//Set up event listener
				$( document ).on( 'change.JetFormBuilderMain', listenTo, function () {

					if ( 'show' === type || 'hide' === type ) {
						checkVisibilityCond( listenTo, listenFor, $section, operator, type );
					}
					else {
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
				}
				else {
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
			length: 0
		},

		initCommon: function () {
			$( '.jet-form-builder' ).each( function ( index, value ) {
				JetFormBuilder.widgetBookingForm( $( value ) );
			} );
		},

		initElementor: function () {

			const widgets = {
				'jet-engine-booking-form.default': JetFormBuilder.widgetBookingForm,
				'jet-form-builder-form.default': JetFormBuilder.widgetBookingForm,
			};

			$.each( widgets, function ( widget, callback ) {
				window.elementorFrontend.hooks.addAction( 'frontend/element_ready/' + widget, callback );
			} );
		},

		addHandlersInit: function () {
			var self = JetFormBuilder;

			$( document )
			.on( 'click.JetFormBuilderMain', '.jet-form-builder__submit.submit-type-ajax', self.ajaxSubmitForm )
			.on( 'submit.JetFormBuilderMain', '.jet-form-builder__submit.submit-type-reload', self.reloadSubmitForm )
			.on( 'click.JetFormBuilderMain', '.jet-form-builder__next-page', self.nextFormPage )
			.on( 'click.JetFormBuilderMain', '.jet-form-builder__prev-page', self.prevFormPage )
			.on( 'focus.JetFormBuilderMain', '.jet-form-builder__field', self.clearFieldErrors )
			.on( 'click.JetFormBuilderMain', '.jet-form-builder__field-template', self.simLabelClick )
			.on( 'change.JetFormBuilderMain', '.jet-form-builder__field', self.recalcFields )
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

		inputTextFields: function() {
			$( this ).trigger( 'change.JetFormBuilderMain' );
		},

		updateProgress: function ( event, $progress, $fromPage, $toPage ) {
			const prevItem = $progress.find( `.jet-form-builder-progress-pages__item--wrapper[data-page="${ $fromPage }"]` );
			const currentItem = $progress.find( `.jet-form-builder-progress-pages__item--wrapper[data-page="${ $toPage }"]` );

			prevItem.removeClass( 'active-page' );
			currentItem.addClass( 'active-page' );
			currentItem.removeClass( 'passed-page' );

			if ( $fromPage < $toPage ) {
				prevItem.addClass( 'passed-page' );
			}
			else {
				prevItem.removeClass( 'passed-page' );
			}
		},

		removeRepeaterItem: function () {

			let $this = $( this ),
				$repeater = $this.closest( '.jet-form-builder-repeater' ),
				$repeaterItem = $this.closest( '.jet-form-builder-repeater__row' ),
				$editor = $repeaterItem.find( '.wp-editor-area' );

			if ( $editor.length && window.wp && window.wp.editor ) {
				window.wp.editor.remove( $editor.attr( 'id' ) );
			}

			$repeaterItem.remove();
			$repeater.trigger( 'jet-form-builder/repeater-changed' );

		},

		newRepeaterItem: function () {
			var $this = $( this ),
				$repeater = $this.closest( '.jet-form-builder-repeater' ),
				$initial = $repeater.find( '.jet-form-builder-repeater__initial' ),
				$items = $repeater.find( '.jet-form-builder-repeater__items' ),
				$newVal = $initial.html(),
				index = 0;

			if ( $items.find( '.jet-form-builder-repeater__row' ).length ) {
				$items.find( '.jet-form-builder-repeater__row' ).each( function () {
					var $this = $( this ),
						currentIndex = parseInt( $this.data( 'index' ), 10 );

					if ( currentIndex > index ) {
						index = currentIndex;
					}
				} );
				index ++;
			}

			$newVal = $newVal.replace( /__i__/g, index );
			$newVal = $( $newVal );
			$newVal.data( 'index', index );
			$newVal.attr( 'data-index', index );

			JetFormBuilder.initRangeFields( $newVal );

			$items.append( $newVal );

			var $editor = $newVal.find( '.wp-editor-area' );

			if ( $editor.length && window.wp && window.wp.editor ) {

				var res = window.wp.editor.initialize(
					$editor.attr( 'id' ),
					$editor.closest( '.jet-form-builder__field' ).data( 'editor' )
				);

			}

			$repeater.trigger( 'jet-form-builder/repeater-changed' );

			JetFormBuilder.calculateRowValue( $newVal );

		},

		updateRepeaterItems: function ( $repeater, $field ) {

			var val = JetFormBuilder.getFieldValue( $field );

			if ( ! val ) {
				return;
			}

			for ( var i = 0; i < val; i ++ ) {

				var $item = $repeater.find( '.jet-form-builder-repeater__row[data-index="' + i + '"]' );

				if ( ! $item.length ) {
					JetFormBuilder.newRepeaterItem.call( $repeater );
				}

			}
			;

			var $rows = $repeater.find( '.jet-form-builder-repeater__row' );

			if ( $rows.length ) {
				$rows.each( function () {
					var $row = $( this ),
						index = parseInt( $row.data( 'index' ), 10 );

					index ++;

					if ( index > val ) {
						$row.remove();
						$repeater.trigger( 'jet-form-builder/repeater-changed' );
					}

				} );
			}

			$repeater.trigger( 'change' );

		},

		calculateRowValue: function ( $row ) {

			var val = JetFormBuilder.calculateValue( $row );

			$row.data( 'value', val );
			JetFormBuilder.calculateFieldsInRow( $row );

		},

		calculateFieldsInRow: function ( $row ) {

			$row.find( '.jet-form-builder__calculated-field--child' ).each( function () {

				var $childCalculatedField = $( this ),
					val = JetFormBuilder.calculateValue( $childCalculatedField )

				if ( ! val ) {
					val = 0;
				}

				$childCalculatedField.find( '.jet-form-builder__calculated-field-val' ).text( val.toFixed( $childCalculatedField.data( 'precision' ) ) );
				$childCalculatedField.find( '.jet-form-builder__calculated-field-input' ).val( val.toFixed( $childCalculatedField.data( 'precision' ) ) ).trigger( 'change.JetFormBuilderMain' );

			} );

		},

		initRepeaterListener: function ( $scope ) {

			var $repeater = $scope.find( '.jet-form-builder-repeater' );

			if ( ! $repeater.length ) {
				return;
			}

			$repeater.each( function () {

				var $this = $( this ),
					settings = $this.data( 'settings' );

				if ( 'dynamically' === settings.manageItems && settings.itemsField ) {
					var $itemsField = $scope.find( '[data-field-name="' + settings.itemsField + '"]' );

					JetFormBuilder.updateRepeaterItems( $this, $itemsField );

					$itemsField.on( 'change', function () {
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

					$calcFields.each( function () {

						var $childField = $( this );

						JetFormBuilder.childrenCalcFields[ $childField.data( 'name' ) ] = {
							'el': $childField,
							'parentEl': $this,
							'listenTo': $childField.data( 'listen_to' ),
						};

						$this.find( '.jet-form-builder-repeater__row' ).each( function () {
							JetFormBuilder.calculateRowValue( $( this ), $childField.data( 'precision' ) );
						} );

					} );
				}

			} );

		},

		simLabelClick: function ( event ) {
			$( this ).next( '.jet-form-builder__field-label' ).trigger( 'click' );
		},

		maybeSwitchPage: function ( event, $field, $page, disabled ) {

			var $item = $field[ 0 ],
				isSwitch = $field.data( 'switch' ),
				value = null,
				$toPage = null;

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

		changeActiveTemplateClass: function ( event ) {

			var $this = $( this ),
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

		initConditions: function ( $scope ) {
			$scope.find( '.jet-form-builder__conditional' ).jetFormConditional();
		},

		widgetBookingForm: function ( $scope ) {

			var $calcFields = $.find( '.jet-form-builder__calculated-field' );

			$( document ).trigger( 'jet-form-builder/init', [ $scope ] );

			JetFormBuilder.initFormPager( $scope );
			JetFormBuilder.initRangeFields( $scope );
			JetFormBuilder.initRepeaterListener( $scope );
			JetFormBuilder.initRequiredCheckboxGroup( $scope );
			JetFormBuilder.initConditions( $scope );

			if ( $.fn.inputmask ) {
				$scope.find( '.jet-form-builder__masked-field' ).inputmask( {
					removeMaskOnSubmit: true,
				} );
			}

			var $editor = $scope.find( '.wp-editor-area' );

			if ( $editor.length && window.wp && window.wp.editor ) {

				var editorID = $editor.attr( 'id' ),
					editorDefaults = $editor.closest( '.jet-form-builder__field' ).data( 'editor' );

				/*wp.editor.getDefaultSettings = function() {
					return editorDefaults;
				}*/

				if ( window.tinymce && window.tinymce.get( editorID ) ) {
					window.wp.editor.remove( editorID );
				}

				var res = window.wp.editor.initialize(
					editorID,
					editorDefaults
				);

			}

			if ( ! $calcFields.length ) {
				return;
			}

			$( $calcFields ).each( function () {

				var $this = $( this ),
					calculated = null;

				JetFormBuilder.calcFields[ $this.data( 'name' ) ] = {
					'el': $this,
					'listenTo': $this.data( 'listen_to' ),
				};

				calculated = JetFormBuilder.calculateValue( $this );

				$this.find( '.jet-form-builder__calculated-field-val' ).text( calculated.toFixed( $this.data( 'precision' ) ) );
				$this.find( '.jet-form-builder__calculated-field-input' ).val( calculated.toFixed( $this.data( 'precision' ) ) ).trigger( 'change.JetFormBuilderMain' );

			} );

		},

		initFormPager: function ( $scope ) {
			var $pages = $scope.find( '.jet-form-page' ),
				$form = $scope.find( '.jet-form-builder' );

			if ( ! $pages.length ) {
				return;
			}

			$pages.each( function () {

				var $page = $( this );

				if ( ! $page.hasClass( '.jet-form-page--hidden' ) ) {
					JetFormBuilder.initSingleFormPage( $page, $form, false );
				}

			} );

		},

		initSingleFormPage: function ( $page, $form, $changedField ) {

			var $button = $page.find( '.jet-form-builder__next-page' ),
				$msg = $page.find( '.jet-form-builder__next-page-msg' ),
				requiredFields = $page[ 0 ].querySelectorAll( '.jet-form-builder__field[required]' ),
				pageNum = parseInt( $page.data( 'page' ), 10 ),
				disabled = false,
				radioFields = {};

			$changedField = $changedField || false;

			if ( requiredFields.length ) {
				for ( var i = 0; i < requiredFields.length; i ++ ) {

					var $field = $( requiredFields[ i ] );
					var val = null;
					var isRadio = false;

					if ( 'INPUT' === $field[ 0 ].nodeName ) {

						if ( $field.length > 1 ) {
							for ( var j = 0; j < $field.length; j ++ ) {
								if ( $field[ j ].checked ) {
									val = $field[ j ].value;
								}
							}
						}
						else if ( 'radio' === $field[ 0 ].type ) {

							isRadio = true;

							if ( $field[ 0 ].checked ) {
								radioFields[ $field[ 0 ].name ] = $field[ 0 ].value;
							}

						}
						else {
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
			}
			else {

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
			}
			else {
				JetFormBuilder.pages[ pageNum ].disabled = disabled;
			}

			if ( $changedField ) {
				$( document ).trigger( 'jet-form-builder/page/field-changed', [ $changedField, $page, disabled ] );
			}

			if ( $page.hasClass( 'jet-form-page--initialized' ) ) {
				return;
			}

			$page.on( 'change.JetFormBuilderMain', '.jet-form-builder__field', function () {
				JetFormBuilder.initSingleFormPage( $page, $form, $( this ) );
			} );

			$page.addClass( 'jet-form-page--initialized' );

		},

		nextFormPage: function () {

			var $button = $( this ),
				$fromPage = $button.closest( '.jet-form-page' ),
				$pageFields = $fromPage.find( '.jet-form-builder__field' ).filter( ':input' ),
				$toPage = $fromPage.next();

			if ( ! JetFormBuilder.isFieldsValid( $pageFields ) ) {
				return;
			}

			JetFormBuilder.switchFormPage( $fromPage, $toPage );

		},

		prevFormPage: function () {

			var $button = $( this ),
				$fromPage = $button.closest( '.jet-form-page' ),
				$toPage = $fromPage.prev();

			JetFormBuilder.switchFormPage( $fromPage, $toPage );
		},

		isFieldsValid: function ( $fields ) {
			var isValid = true;

			$fields.each( function ( ind, field ) {
				if ( ! field.checkValidity() ) {
					field.reportValidity();
					isValid = false;
					return false;
				}
			} );

			return isValid;
		},

		switchFormPage: function ( $fromPage, $toPage ) {

			var $form = $fromPage.closest( '.jet-form-builder' );

			const $progress = $form.find( '.jet-form-builder-progress-pages' );

			$fromPage.addClass( 'jet-form-page--hidden' );
			$toPage.removeClass( 'jet-form-page--hidden' );

			JetFormBuilder.initSingleFormPage( $toPage, $form, false );

			$( '.jet-form-builder-messages-wrap[data-form-id="' + $form.data( 'form-id' ) + '"]' ).html( '' );
			$( document ).trigger( 'jet-form-builder/switch-page', [ $progress, $fromPage.data( 'page' ), $toPage.data( 'page' ) ] );
		},

		getFieldValue: function ( $field ) {

			var val = 0;

			if ( $field.length ) {

				if ( 'INPUT' === $field[ 0 ].nodeName ) {
					if ( $field.length > 1 ) {

						for ( var i = 0; i < $field.length; i ++ ) {
							if ( $field[ i ].checked ) {

								var itemVal = 0;

								if ( undefined !== $field[ i ].dataset.calculate ) {
									itemVal = $field[ i ].dataset.calculate;
								}
								else {
									itemVal = $field[ i ].value;
								}

								if ( 'checkbox' === $field[ i ].type ) {
									val += parseInt( itemVal, 10 );
								}
								else {
									val = itemVal;
								}

							}
						}

					}
					else {
						if ( 'checkbox' === $field[ 0 ].type ) {
							if ( $field[ 0 ].checked ) {
								if ( undefined !== $field[ 0 ].dataset.calculate ) {
									val = $field[ 0 ].dataset.calculate;
								}
								else {
									val = $field[ 0 ].value;
								}
							}
						}
						else {
							val = $field.val();
						}
					}
				}

				if ( 'SELECT' === $field[ 0 ].nodeName ) {

					var selectedOption = $field.find( 'option:selected' ),
						calcValue = selectedOption.data( 'calculate' );

					if ( undefined !== calcValue ) {
						val = calcValue;
					}
					else {
						val = $field.find( 'option:selected' ).val();
					}

				}

				if ( 'DIV' === $field[ 0 ].nodeName ) {

					if ( $field.hasClass( 'jet-form-builder-repeater' ) ) {
						var repeaterSettings = $field.data( 'settings' );
						if ( repeaterSettings && 'custom' === repeaterSettings.calcType ) {
							$field.find( '.jet-form-builder-repeater__row' ).each( function () {
								var $row = $( this ),
									rowVal = JetFormBuilder.calculateValue( $row );

								$row.data( 'value', rowVal );

								val += rowVal;
							} );

						}
						else {
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

		calculateValue: function ( $scope ) {

			var formula = String( $scope.data( 'formula' ) ),
				listenTo = $( '[name^="' + $scope.data( 'listen_to' ) + '"]', $scope.closest( 'form' ) ),
				regexp = /%([a-zA-Z0-9-_]+)%/g,
				func = null;

			if ( typeof formula === 'undefined' ) {
				return null;
			}

			formula = JetFormBuilderMain.filters.applyFilters( 'forms/calculated-formula-before-value', formula, $scope );

			formula = formula.replace( regexp, function ( match1, match2 ) {

				var object = null;

				if ( $scope.data( 'repeater' ) ) {
					object = $scope;
				}
				else if ( $scope.hasClass( 'jet-form-builder__calculated-field--child' ) ) {
					object = $scope.closest( '.jet-form-builder-repeater__row' ).find( '[data-field-name="' + match2 + '"]' );
				}
				else if ( $scope.data( 'repeater-row' ) ) {
					object = $scope.find( '[data-field-name="' + match2 + '"]' );
				}
				else {
					object = $scope.closest( 'form' ).find( '[name="' + match2 + '"], [name="' + match2 + '[]"]' );
				}

				return JetFormBuilder.getFieldValue( object );

			} );

			formula = JetFormBuilderMain.filters.applyFilters( 'forms/calculated-formula-after-value', formula, $scope );

			func = new Function( 'return ' + formula );

			return func();

		},

		recalcFields: function ( event ) {

			var $this = $( this ),
				fieldName = $this.attr( 'name' ),
				fieldPrecision = 2,
				calculated = null,
				done = false;

			if ( $this.data( 'field-name' ) ) {
				fieldName = $this.data( 'field-name' );
			}

			if ( ! fieldName ) {
				return;
			}

			$.each( JetFormBuilder.calcFields, function ( calcFieldName, field ) {

				fieldName = fieldName.replace( '[]', '' );

				if ( 0 <= $.inArray( fieldName, field.listenTo ) ) {

					calculated = JetFormBuilder.calculateValue( field.el );
					fieldPrecision = field.el.data( 'precision' );

					field.el.find( '.jet-form-builder__calculated-field-val' ).text( calculated.toFixed( fieldPrecision ) );
					field.el.find( '.jet-form-builder__calculated-field-input' ).val( calculated.toFixed( fieldPrecision ) ).trigger( 'change.JetFormBuilderMain' );

				}

			} );

			if ( 'jet-form-builder/repeater-changed' !== event.type ) {

				$.each( JetFormBuilder.repeaterCalcFields, function ( calcFieldName, field ) {

					fieldName = fieldName.replace( '[]', '' );

					if ( 0 <= $.inArray( fieldName, field.listenTo ) ) {

						field.el.trigger( 'jet-form-builder/repeater-changed' );

					}

				} );

			}

			$.each( JetFormBuilder.childrenCalcFields, function ( calcFieldName, field ) {

				fieldName = fieldName.replace( '[]', '' );

				if ( 0 <= $.inArray( fieldName, field.listenTo ) ) {
					var $row = $this.closest( '.jet-form-builder-repeater__row' );
					JetFormBuilder.calculateFieldsInRow( $row );
				}

			} );

		},

		initRequiredCheckboxGroup: function ( $scope ) {
			var $group = $scope.find( '.jet-form-builder__fields-group' );

			$group.each( function () {
				var $this = $( this ),
					$checkboxes = $( '.checkboxes-group-required', $this );

				if ( $checkboxes.length ) {
					var isChecked = $checkboxes.is( ':checked' );

					$checkboxes.prop( 'required', ! isChecked );
				}
			} );
		},

		requiredCheckboxGroup: function ( event ) {
			var $this = $( event.target ),
				$group = $this.closest( '.jet-form-builder__fields-group' ),
				$checkboxes = $( '.checkboxes-field', $group );

			if ( $checkboxes.length < 2 ) {
				return;
			}

			var isChecked = $checkboxes.is( ':checked' );

			$checkboxes.prop( 'required', ! isChecked );
		},

		initRangeFields: function ( $scope ) {
			var $rangeFields = $scope.find( '.jet-form-builder__field.range-field' );

			if ( ! $rangeFields.length ) {
				return;
			}

			$rangeFields.each( function () {
				JetFormBuilder.updateRangeField( { target: $( this ), firstInit: true } );
			} );
		},

		updateRangeField: function ( event ) {
			var $target = $( event.target ),
				$wrap = $target.closest( '.jet-form-builder__field-wrap' ),
				$number = $wrap.find( '.jet-form-builder__field-value-number' ),
				max = $target.attr( 'max' ) || 100,
				val = $target.val();

			if ( event.firstInit ) {
				$number.text( max );
			}

			$number.text( val );
		},

		reloadSubmitForm: function ( event ) {
			$( this ).find( '.jet-form-builder__submit' ).attr( 'disabled', true );
		},

		ajaxSubmitForm: function () {

			var $this = $( this ),
				$form = $this.closest( '.jet-form-builder' ),
				formID = $form.data( 'form-id' ),
				data = {
					action: JetFormBuilderSettings.form_action,
				};

			if ( 'undefined' !== typeof $form[ 0 ].checkValidity && 'undefined' !== typeof $form[ 0 ].reportValidity && ! $form[ 0 ].checkValidity() ) {
				$form[ 0 ].reportValidity();
				return;
			}

			if ( window.tinyMCE ) {
				window.tinyMCE.triggerSave();
			}

			data.values = $form.serializeArray();
			data._jet_engine_booking_form_id = formID;

			$form.addClass( 'is-loading' );
			$this.attr( 'disabled', true );

			JetFormBuilder.clearFieldErrors( formID );

			$.ajax( {
				url: JetFormBuilderSettings.ajaxurl,
				type: 'POST',
				dataType: 'json',
				data: data,
			} ).done( function ( response ) {

				$form.removeClass( 'is-loading' );
				$this.attr( 'disabled', false );

				switch ( response.status ) {

					case 'validation_failed':

						Object.entries( response.fields ).forEach( function ( [ fieldName, fieldData ] ) {
							var $field = JetFormBuilder.findFieldByName( $form, fieldName );

							const afterMessage = `<div class="error-message">${ fieldData.message }</div>`;

							$field.addClass( 'field-has-error' );

							if ( $field.hasClass( 'checkradio-field' ) ) {
								$field.closest( '.jet-form-builder__field-wrap' ).after( afterMessage );
							}
							else {
								$field.after( afterMessage );
							}

							JetFormBuilder.currentFieldWithError = {
								length: 0
							};
						} );

						break;

					case 'success':

						if ( response.redirect ) {
							window.location = response.redirect;
						}
						else if ( response.reload ) {
							window.location.reload();
						}

						$( document ).trigger( 'jet-form-builder/ajax/on-success', [ response, $form, data ] );

						break;
				}

				$( '.jet-form-builder-messages-wrap[data-form-id="' + formID + '"]' ).html( response.message );

			} );

		},

		clearFieldErrors: function ( formID ) {
			var $this = $( this );

			$this.closest( '.jet-form-builder-col' ).find( '.jet-form-builder__field-error' ).remove();

			$( '.jet-form-builder__field.field-has-error' ).each( ( index, elem ) => {
				$( elem ).removeClass( 'field-has-error' );
				$( elem ).siblings( '.error-message' ).remove();
			} );

			$( '.jet-form-builder-messages-wrap[data-form-id="' + formID + '"]' ).html( '' );

		},

		findFieldByName: function ( form, fieldName ) {
			const callbackFinders = [
				'findInputDefault',
				'findWysiwyg',
			];

			callbackFinders.forEach( function ( callback ) {
				if ( ! JetFormBuilder.currentFieldWithError.length ) {
					JetFormBuilder[ callback ]( form, fieldName );
				}
			} )

			return JetFormBuilder.currentFieldWithError;
		},

		findInputDefault: function ( form, fieldName ) {
			JetFormBuilder.currentFieldWithError = form.find( '.jet-form-builder__field[name="' + fieldName + '"]:last' );
		},

		findWysiwyg: function ( form, fieldName ) {

			$( '.jet-form-builder__field[data-editor]' ).each( function ( index, editor ) {

				if ( fieldName === $( editor ).data( 'editor' ).textarea_name ) {
					JetFormBuilder.currentFieldWithError = $( editor );
				}
			} );
		},

	};

	window.JetFormBuilderDev = JetFormBuilderDev;
	window.JetFormBuilder = JetFormBuilder;

	$( document ).ready( JetFormBuilder.initCommon );
	$( window ).on( 'elementor/frontend/init', JetFormBuilder.initElementor );

	JetFormBuilder.addHandlersInit();

} )( jQuery );
