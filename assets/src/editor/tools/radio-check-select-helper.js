import WrapperControl from './wrapper-control';

const {
	CheckboxControl,
	SelectControl,
	RadioControl,
	BaseControl,
} = wp.components;

const DELIMITER = ' - ';

const {
	useEffect,
	useState
} = wp.element;


export function GetFieldPlaceholder( { blockName, scriptData, source } ) {

	const getCheckbox = ( label, index = 1 ) => {
		return <CheckboxControl
			className={ 'jet-form-builder__field-wrap' }
			key={ `place_holder_block_${ label + index }` }
			label={ label }
			onChange={ () => {} }
		/>;
	}

	const getSelect = ( { options, index } ) => {
		return <SelectControl
			className={ 'jet-form-builder__field-wrap' }
			key={ `place_holder_block_${ source.name + index }` }
			//label={ source.label }
			options={ options }
			//help={ source.desc }
			onChange={ () => {} }
		/>;
	}

	const getRadio = ( { options, label, index } ) => {
		return <RadioControl
			key={ `place_holder_block_${ label + index }` }
			//label={ source.label }
			options={ options }
			//help={ source.desc }
			onChange={ () => {} }
		/>;
	}

	const getFullLabel = () => {

		const {
			field_options_from,
			field_options_post_type,
			field_options_tax,
			field_options_key,
			generator_function,
			generator_field
		} = source;

		let full_label = [];
		let value = [];
		switch ( field_options_from ) {
			case 'posts':
				if ( field_options_post_type ) {
					value.push( scriptData.post_types_list.find(
						option => option.value === field_options_post_type
					).label );
				}
				break;

			case 'terms':
				if ( field_options_tax ) {
					value.push( scriptData.taxonomies_list.find(
						option => option.value === field_options_tax
					).label )
				}
				break;

			case 'meta_field':
				if ( field_options_key ) {
					value.push( field_options_key );
				}
				break;

			case 'generate':
				if ( generator_function ) {
					value.push( scriptData.generators_list.find(
						option => option.value === generator_function
					).label )
				}
				if ( generator_field ) {
					value.push( generator_field );
				}
				break;

		}
		full_label.push( scriptData.options_from.find( option => option.value === field_options_from ).label );

		if ( value.length ) {
			full_label.push( value.join( DELIMITER ) );
		}

		return full_label.join( DELIMITER );
	}

	const getManualField = ( label = '' ) => {
		if ( blockName.includes( 'checkbox' ) ) {
			if ( label ) {
				return getCheckbox( label );
			}
			return source.field_options.map( ( { label: checkLabel } ) => {
				return getCheckbox( checkLabel )
			} );

		} else if ( blockName.includes( 'select' ) ) {
			if ( label ) {
				return getSelect( {
					source,
					options: [{ label }]
				} );
			}
			return getSelect( {
				source,
				options: source.field_options
			} );
		} else if ( blockName.includes( 'radio' ) ) {
			if ( label ) {
				return getRadio( {
					source,
					options: [{ label }]
				} );
			}
			return getRadio( {
				source,
				options: source.field_options
			} );
		}
	}

	return <WrapperControl
			key={ 'jet-form-builder-field-wrapper' }
			attributes={ source }
			block={ blockName }
		>
		<div className={ 'jet-form-builder__fields-group' }>
			{ ( 'manual_input' !== source.field_options_from || ! source.field_options.length ) &&
				getManualField( getFullLabel( scriptData, source ) ) || null
			}
			{ 'manual_input' === source.field_options_from && source.field_options.length &&
				getManualField() || null
			}
		</div>
	</WrapperControl>;


}


