import { useContext, useEffect, useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { useInstanceId } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import {
	CurrentActionEditContext,
	SingleValueAsArrayToggle,
	useActionValidatorProvider,
} from 'jet-form-builder-actions';
import {
	ControlWithErrorStyle,
	IconText,
	StyledSelectControl,
	StyledTextControl,
} from 'jet-form-builder-components';

const {
	ActionFieldsMapContext,
	CurrentPropertyMapContext,
	MacrosFields,
} = JetFBComponents;

function PostMetaControl( { options, reservedKeys, value, onChange } ) {
	const [ wasEdited, setWasEdited ] = useState( false );
	const fieldId = useInstanceId( PostMetaControl, 'jfb-post-meta-key' );
	const isReserved = key => {
		const normalized = key.trim();

		return normalized.includes( 'jet_tax__' ) ||
			reservedKeys.includes( normalized );
	};
	const choices = [ ...new Set(
		options.map( option => option.value ).filter( key => key && ! isReserved( key ) )
	) ];
	const isReservedEdit = wasEdited && isReserved( value );
	const { setEditorFieldError } = useDispatch( 'jet-forms/actions' );
	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: error => error.property === fieldId,
	} );

	useEffect( () => {
		if ( !isReservedEdit ) {
			return;
		}

		setEditorFieldError( fieldId, { property: fieldId, blocking: true } );

		return () => setEditorFieldError( fieldId );
	}, [ isReservedEdit, fieldId, setEditorFieldError ] );

	const updateKey = key => {
		setWasEdited( true );
		onChange( key );
	};

	const showKeyError = hasError && isReservedEdit;

	return <div
		className={ showKeyError ? ControlWithErrorStyle : undefined }
		style={ {
			display: 'grid',
			gridTemplateColumns: 'auto minmax(0, 1fr)',
			columnGap: choices.length ? 8 : 0,
			alignItems: 'center',
		} }
	>
		{ choices.length > 0 && <MacrosFields
			label={ __( 'Choose a form field', 'jet-form-builder' ) }
			macroScope="insert-post.meta-key"
			fields={ choices.map( key => ( { value: key, label: key } ) ) }
			onClick={ ( macro, field ) => {
				if ( choices.includes( field?.value ) ) {
					updateKey( field.value );
				}
			} }
		/> }
		<div style={ { gridColumn: 2, gridRow: 1 } }>
			<StyledTextControl
				aria-label={ __( 'Post meta key', 'jet-form-builder' ) }
				aria-invalid={ showKeyError || undefined }
				autoComplete="off"
				value={ value }
				onBlur={ () => setShowError( true ) }
				onChange={ updateKey }
			/>
		</div>
		{ showKeyError && <div style={ { gridColumn: 2, gridRow: 2 } }>
			<IconText>
				{ __( 'This key is reserved. Enter a different key to save this action.', 'jet-form-builder' ) }
			</IconText>
		</div> }
	</div>;
}

function PostPropertySelect( { metaKeyOptions, reservedKeys } ) {
	const { FieldSelect, property } = useContext(CurrentPropertyMapContext);
	const { source, setMapField, getMapField } = useContext(CurrentActionEditContext);
	const { name, index } = useContext(ActionFieldsMapContext);

	const mapValue = getMapField({ name }) ?? '';

	const setMapValue = value => setMapField({
		nameField: name,
		value,
	});

	switch (property) {
		case 'meta_input':
			return (
				<div className="components-base-control jet-margin-bottom-wrapper">
					{FieldSelect}

					<PostMetaControl
						options={metaKeyOptions}
						reservedKeys={reservedKeys}
						value={mapValue}
						onChange={setMapValue}
					/>

					<SingleValueAsArrayToggle
						fieldName={name}
						getMapField={getMapField}
						setMapField={setMapField}
						showHelp={true}
					/>
				</div> 
			);

		case 'post_terms':
			return (
				<div className="components-base-control jet-margin-bottom-wrapper">
					{FieldSelect}
					<StyledSelectControl
						key={name + index + '_select'}
						value={mapValue}
						onChange={setMapValue}
						options={source.taxonomies}
					/>
				</div>
			);

		default:
			return FieldSelect;
	}
}

export default PostPropertySelect;
