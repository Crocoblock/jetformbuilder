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
const { Fragment, useMemo } = wp.element;
const { select } = wp.data;
/**
 * Get data fields from block editor (excludes structural and button blocks).
 *
 * @return {Array} Array of { name, label, type } objects.
 */
function getFormFields() {
	const blocks = select( 'core/block-editor' )?.getBlocks() ?? [];
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

/**
 * Get action buttons (jet-forms/submit-field) excluding action_type="submit".
 *
 * The rendered HTML exposes action_type via data-type on the wrapper div.
 * We store action_type as the value so the frontend can find the button via
 * [data-type="next"] selector on the wrapper element.
 *
 * @return {Array} Array of { actionType, label } objects.
 */
function getActionButtons() {
	const blocks  = select( 'core/block-editor' )?.getBlocks() ?? [];
	const buttons = [];

	const extractButtons = ( blocksList ) => {
		blocksList.forEach( ( block ) => {
			if ( block.name === 'jet-forms/submit-field' ) {
				const actionType = block.attributes?.action_type ?? 'submit';

				if ( actionType !== 'submit' ) {
					buttons.push( {
						actionType,
						label: block.attributes?.label || actionType,
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
function AutoUpdateControls( { attributes, setAttributes, supportsUpdate, contextFields = [] } ) {
	if ( ! supportsUpdate ) {
		return null;
	}

	const {
		generator_auto_update: autoUpdate = false,
		generator_listen_field: listenField = '',
		generator_require_all_filled: requireAllFilled = false,
		generator_update_on_button: updateOnButton = '',
		generator_cache_timeout: cacheTimeout = 60,
	} = attributes;

	// Normalize listen_field to array for consistent handling
	const listenFieldArray = Array.isArray( listenField )
		? listenField
		: ( listenField ? [ listenField ] : [] );

	// If any context hint declares single: true, restrict "Watch These Fields" to single select.
	const singleListenField = contextFields.some( ( hint ) => hint.single );

	const dataFields    = useMemo( () => getFormFields(), [] );
	const actionButtons = useMemo( () => getActionButtons(), [] );

	const fieldOptions = useMemo( () => {
		const opts = dataFields.map( ( field ) => ( {
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
	}, [ dataFields, singleListenField ] );

	const buttonOptions = useMemo( () => {
		return [
			{ value: '', label: __( '— Select button —', 'jet-form-builder' ) },
			...actionButtons.map( ( btn ) => ( {
				value: btn.actionType,
				label: `${ btn.label } (${ btn.actionType })`,
			} ) ),
		];
	}, [ actionButtons ] );

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
					label={ __( 'Watch These Fields', 'jet-form-builder' ) }
					help={ singleListenField
						? __( 'Choose the field whose value will be passed to the generator as a filter.', 'jet-form-builder' )
						: __( 'Choose which fields trigger a refresh when their value changes. Hold Ctrl (Windows) or Cmd (Mac) to select multiple.', 'jet-form-builder' )
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
							: __( 'When enabled, the options will not refresh if the watched field is empty. The list stays blank until the user picks a value.', 'jet-form-builder' )
					}
					checked={ requireAllFilled }
					onChange={ ( value ) => setAttributes( {
						generator_require_all_filled: value,
						...( value && { generator_update_on_button: '' } ),
					} ) }
				/>
			) }

			{ autoUpdate && ! requireAllFilled && (
				<SelectControl
					label={ __( 'Refresh on Button Click', 'jet-form-builder' ) }
					help={ __(
						'Instead of refreshing automatically, options update only when a selected JetFormBuilder action button is clicked. Supported action types: Update Field, Next Page, Prev Page, Change Render State (submit is not supported). Regular HTML buttons are not supported here. Leave empty to refresh instantly on watched field change.',
						'jet-form-builder'
					) }
					value={ updateOnButton }
					onChange={ ( value ) => setAttributes( {
						generator_update_on_button: value,
						...( value && { generator_require_all_filled: false } ),
					} ) }
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
