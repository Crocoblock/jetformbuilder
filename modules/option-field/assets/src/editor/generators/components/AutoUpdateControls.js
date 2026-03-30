/**
 * Auto-Update Controls Component.
 *
 * Renders controls for enabling cascading/auto-update behavior when a generator
 * supports dynamic updates based on other field values.
 *
 * @package JetFormBuilder
 */

import './auto-update-controls.pcss';

const { ToggleControl, SelectControl, TextControl, Notice } = wp.components;
const { __ } = wp.i18n;
const { Fragment, useEffect, useMemo } = wp.element;
const { useSelect } = wp.data;
/**
 * Get data fields from block editor (excludes structural and button blocks).
 *
 * @param {Array} blocks Block list from editor store.
 *
 * @return {Array} Array of { name, label, type } objects.
 */
function getFormFields( blocks = [] ) {
	const fields = [];

	const excludedBlocks = [
		'jet-forms/conditional-block',
		'jet-forms/submit-field',
		'jet-forms/form-break-field',
		'jet-forms/form-break-start',
		'jet-forms/group-break-field',
		'jet-forms/heading-field',
		'jet-forms/progress-bar',
		'jet-forms/captcha-container',
		'jet-forms/form-block',
	];

	const extractFields = ( blocksList ) => {
		blocksList.forEach( ( block ) => {
			if ( block.attributes?.name && ! excludedBlocks.includes( block.name ) ) {
				fields.push( {
					name: block.attributes.name,
					label: block.attributes.label || block.attributes.name,
					type: block.name,
					multiple: Boolean( block.attributes?.multiple ),
					allowMultiple: Boolean( block.attributes?.allow_multiple ),
				} );
			}

			if ( block.innerBlocks?.length ) {
				extractFields( block.innerBlocks );
			}
		} );
	};

	extractFields( blocks );
	return fields;
}

function isMultiValueField( field ) {
	if ( ! field ) {
		return false;
	}

	return [
		'jet-forms/checkbox-field',
	].includes( field.type )
		|| field.multiple
		|| field.allowMultiple;
}

function isUnsupportedAutoUpdateField( field ) {
	if ( ! field ) {
		return true;
	}

	return [
		'jet-forms/repeater-field',
		'jet-forms/media-field',
		'jet-forms/signature-field',
		'jet-forms/drag-and-drop-file-upload',
		'jet-forms/check-in-out',
	].includes( field.type );
}

function supportsValueType( field, updateValueType = 'scalar' ) {
	if ( isUnsupportedAutoUpdateField( field ) ) {
		return false;
	}

	if ( 'scalar_or_array' === updateValueType ) {
		return true;
	}

	return ! isMultiValueField( field );
}

/**
 * Get action buttons (jet-forms/submit-field) excluding action_type="submit".
 *
 * The rendered HTML exposes action_type via data-type on the wrapper div.
 * We store action_type as the value so the frontend can find the button via
 * [data-type="next"] selector on the wrapper element.
 *
 * @param {Array} blocks Block list from editor store.
 *
 * @return {Array} Array of { actionType, label } objects.
 */
function getActionButtons( blocks = [] ) {
	const buttons = [];

	const extractButtons = ( blocksList ) => {
		blocksList.forEach( ( block ) => {
			if ( block.name === 'jet-forms/submit-field' ) {
				const actionType     = block.attributes?.action_type ?? 'submit';
				const rawButtonClass = block.attributes?.class_name || block.attributes?.className || '';
				const buttonClass    = rawButtonClass.trim();

				if ( actionType !== 'submit' ) {
					buttons.push( {
						id: block.clientId,
						actionType,
						label: block.attributes?.label || actionType,
						buttonClass,
					} );
				}
			}

			if ( block.innerBlocks?.length ) {
				extractButtons( block.innerBlocks );
			}
		} );
	};

	extractButtons( blocks );
	return buttons;
}

/**
 * Auto-Update Controls.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Function to update attributes.
 * @param {boolean}  props.supportsUpdate Whether generator supports auto-update.
 * @param {Array}    props.contextFields  Context field hints from generator's get_auto_update_context_fields().
 *
 * @return {JSX.Element|null} Controls or null if not supported.
 */
function AutoUpdateControls( {
	attributes,
	setAttributes,
	supportsUpdate,
	contextFields = [],
	updateValueType = 'scalar',
} ) {
	if ( ! supportsUpdate ) {
		return null;
	}

	const {
		generator_auto_update: autoUpdate = false,
		generator_listen_field: listenField = '',
		generator_require_all_filled: requireAllFilled = false,
		generator_update_on_button: updateOnButton = '',
		generator_update_on_button_class: updateOnButtonClass = '',
		generator_cache_timeout: cacheTimeout = 60,
	} = attributes;

	// Normalize listen_field to array for consistent handling
	const listenFieldArray = Array.isArray( listenField )
		? listenField
		: ( listenField ? [ listenField ] : [] );

	// If any context hint declares single: true, restrict "Watch These Fields" to single select.
	const singleListenField = contextFields.some( ( hint ) => hint.single );

	const blocks = useSelect(
		( selectStore ) => selectStore( 'core/block-editor' )?.getBlocks() ?? [],
		[]
	);
	const dataFields    = useMemo( () => getFormFields( blocks ), [ blocks ] );
	const actionButtons = useMemo( () => getActionButtons( blocks ), [ blocks ] );
	const currentFieldName = attributes?.name || '';
	const availableFields = useMemo(
		() => dataFields.filter(
			( field ) => field.name !== currentFieldName && supportsValueType( field, updateValueType )
		),
		[ currentFieldName, dataFields, updateValueType ]
	);

	const fieldOptions = useMemo( () => {
		const opts = availableFields.map( ( field ) => ( {
			value: field.name,
			label: `${ field.label } (${ field.name })`,
		} ) );

		// For single-select mode add an empty placeholder option.
		if ( singleListenField ) {
			return [
				{ value: '', label: __( '— Select field —', 'jet-form-builder' ) },
				...opts,
			];
		}

		return opts;
	}, [ availableFields, singleListenField ] );

	const selectedButtonId = useMemo( () => {
		if ( ! updateOnButton ) {
			return '';
		}

		const exactMatch = actionButtons.find(
			( button ) => button.actionType === updateOnButton
				&& ( button.buttonClass || '' ) === ( updateOnButtonClass || '' )
		);

		if ( exactMatch ) {
			return exactMatch.id;
		}

		return actionButtons.find(
			( button ) => button.actionType === updateOnButton
		)?.id || '';
	}, [ actionButtons, updateOnButton, updateOnButtonClass ] );

	const buttonOptions = useMemo( () => {
		return [
			{ value: '', label: __( '— Select button —', 'jet-form-builder' ) },
			...actionButtons.map( ( btn ) => ( {
				value: btn.id,
				label: btn.buttonClass
					? `${ btn.label } (${ btn.actionType }, ${ btn.buttonClass })`
					: `${ btn.label } (${ btn.actionType })`,
			} ) ),
		];
	}, [ actionButtons ] );

	useEffect( () => {
		if ( ! updateOnButton ) {
			return;
		}

		const buttonStillExists = actionButtons.some(
			( button ) => button.actionType === updateOnButton
				&& ( updateOnButtonClass
					? button.buttonClass === updateOnButtonClass
					: true )
		);

		if ( buttonStillExists ) {
			return;
		}

		setAttributes( {
			generator_update_on_button: '',
			generator_update_on_button_class: '',
		} );
	}, [ actionButtons, setAttributes, updateOnButton, updateOnButtonClass ] );

	useEffect( () => {
		if ( ! autoUpdate || ! listenFieldArray.length ) {
			return;
		}

		const allowedNames = new Set( availableFields.map( ( field ) => field.name ) );
		const nextListenFields = listenFieldArray.filter( ( fieldName ) => allowedNames.has( fieldName ) );

		if ( nextListenFields.length === listenFieldArray.length ) {
			return;
		}

		setAttributes( {
			generator_listen_field: singleListenField
				? ( nextListenFields[ 0 ] ?? '' )
				: ( nextListenFields.length <= 1 ? ( nextListenFields[ 0 ] ?? '' ) : nextListenFields ),
		} );
	}, [ autoUpdate, availableFields, listenFieldArray, setAttributes, singleListenField ] );

	return (
		<Fragment>
			<ToggleControl
				label={ __( 'Enable Auto-Update', 'jet-form-builder' ) }
				help={ __(
					'When enabled, the list of options will automatically refresh whenever a selected field changes its value.',
					'jet-form-builder'
				) }
				checked={ autoUpdate }
				onChange={ ( value ) => {
					setAttributes( {
						generator_auto_update: value,
						...( ! value && {
							generator_listen_field: '',
							generator_require_all_filled: false,
							generator_update_on_button: '',
							generator_update_on_button_class: '',
						} ),
					} );
				} }
				className="jfb-auto-update-toggle"
			/>

			{ autoUpdate && contextFields.length > 0 && (
				<Notice
					status="info"
					isDismissible={ false }
					className="jfb-auto-update-context-hints"
				>
					{ contextFields.map( ( hint, i ) => (
						<p key={ i } className="components-base-control__help">
							{ hint.description }
							{ hint.example && (
								<>
									<br />
									<p>{ hint.example }</p>
								</>
							) }
						</p>
					) ) }
				</Notice>
			) }

			{ autoUpdate && (
				<SelectControl
					label={ singleListenField
						? __( 'Trigger Field', 'jet-form-builder' )
						: __( 'Trigger Fields', 'jet-form-builder' )
					}
					help={ singleListenField
						? __( 'Select the field that controls this generator.', 'jet-form-builder' )
						: __( 'Select the fields that control this generator. Hold Ctrl (Windows) or Cmd (Mac) to select multiple.', 'jet-form-builder' )
					}
					{ ...( ! singleListenField && { multiple: true } ) }
					value={ singleListenField ? ( listenFieldArray[ 0 ] ?? '' ) : listenFieldArray }
					onChange={ ( values ) => {
						if ( singleListenField ) {
							setAttributes( { generator_listen_field: values || '' } );
							return;
						}

						if ( ! values || values.length === 0 ) {
							setAttributes( { generator_listen_field: '' } );
							return;
						}

						setAttributes( {
							generator_listen_field: values.length === 1 ? values[ 0 ] : values,
						} );
					} }
					options={ fieldOptions }
					className={ singleListenField ? '' : 'jfb-auto-update-field-selector' }
				/>
			) }

			{ autoUpdate && listenFieldArray.length > 0 && ! updateOnButton && (
				<ToggleControl
					label={
						listenFieldArray.length > 1
							? __( 'Wait for All Fields', 'jet-form-builder' )
							: __( 'Skip if Field is Empty', 'jet-form-builder' )
					}
					help={
						listenFieldArray.length > 1
							? __( 'When enabled, the options refresh only after every watched field has a value. Useful when multiple fields are needed together to filter results.', 'jet-form-builder' )
							: __( 'When enabled, empty Trigger Field values use the generator-specific empty-state behavior. Generators with static fallback keep using their static settings; generators without fallback keep the list empty.', 'jet-form-builder' )
					}
					checked={ requireAllFilled }
					onChange={ ( value ) => setAttributes( {
						generator_require_all_filled: value,
						...( value && {
							generator_update_on_button: '',
							generator_update_on_button_class: '',
						} ),
					} ) }
				/>
			) }

			{ autoUpdate && ! requireAllFilled && (
				<SelectControl
					label={ __( 'Refresh on Button Click', 'jet-form-builder' ) }
					help={ __(
						'Instead of refreshing automatically, options update only when a selected JetFormBuilder action button is clicked. Supported action types: Update Field, Next Page, Prev Page, Change Render State (submit is not supported). If the selected button has a CSS Class Name, auto-update first tries to match that exact button and falls back to the button type if no exact class match is found. If no CSS Class Name is set, the first matching button of the selected action type is used. In multi-step forms, "Next Page" is matched on the previous step and "Prev Page" is matched on the next step. Regular HTML buttons are not supported here. Leave empty to refresh instantly on watched field change.',
						'jet-form-builder'
					) }
					value={ selectedButtonId }
					onChange={ ( value ) => {
						const selectedButton = actionButtons.find(
							( button ) => button.id === value
						);

						setAttributes( {
							generator_update_on_button: selectedButton?.actionType || '',
							generator_update_on_button_class: selectedButton?.buttonClass || '',
							...( selectedButton && { generator_require_all_filled: false } ),
						} );
					} }
					options={ buttonOptions }
				/>
			) }

			{ autoUpdate && (
				<TextControl
					label={ __( 'Cache Duration (seconds)', 'jet-form-builder' ) }
					help={ __(
						'Repeat requests with the same values will reuse the cached result for this many seconds. Set to 0 to always fetch fresh data.',
						'jet-form-builder'
					) }
					type="number"
					min={ 0 }
					value={ cacheTimeout }
					onChange={ ( value ) => {
						setAttributes( {
							generator_cache_timeout: parseInt( value ) || 0,
						} );
					} }
				/>
			) }
		</Fragment>
	);
}

export default AutoUpdateControls;
