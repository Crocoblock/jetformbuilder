import toBulk from './toBulk';
import fromBulk from './fromBulk';
import {
	Help,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import {
	TextareaControl,
	SelectControl,
	Flex,
} from '@wordpress/components';
import { styled } from '@linaria/react';

const {
	      useScopedAttributesContext,
		  useOnUpdateModal
      } = JetFBHooks;

const StyledFlex = styled( Flex )`
    justify-content: flex-start !important;
	padding: 0 0 13px 0;

	.jet-form-edit-modal & {
		.components-base-control__field  {
			padding: 0;
			margin: 0;
			border-top: none;
		}
	}
`;

function optionsToBulk( options ) {
	if ( options?.length ) {
		return options
			.map( option => {
				const parts = [];

				parts.push( option.label || '' );
				parts.push( option.value || '' );

				if ( option.calculate ) {
					parts.push( option.calculate );
				}

				return parts.join(' : ');
			} )
			.join( '\n' );
	}

	return [];
}

function BulkOptions( { setModalContent } ) {
	const {
		attributes,
		setAttributes,
		setRealAttributes,
	} = useScopedAttributesContext();

	const [ bulkSelect, setBulkSelect ]         = useState( 'jfb_current_select' );
	const [ currentOptions, setCurrentOptions ] = useState( [] );

	const optionsList  = [ { label: 'Select...', value: 'jfb_current_select' } ].concat( window.JetFBBulkOptions.list ) || [];
	const bulkSource   = window.JetFBBulkOptions.sources;

	const [ bulk, setBulk ] = useState(
		() => toBulk( attributes.field_options )
	);

	useEffect( () => {
        if ( attributes.field_options?.length ) {
			setCurrentOptions( optionsToBulk( attributes.field_options ) );
			setBulk( toBulk( attributes.field_options ) );
        }
    }, [] );

	const replaceOptions = ( val = bulk ) => {
		setAttributes( {
			field_options: [
				...fromBulk( val ),
			],
		} );
	};

	const handleSelectChange = ( value ) => {
		setBulkSelect( value );

		if ( 'jfb_current_select' === value ) {
			setBulk( currentOptions );
			replaceOptions( currentOptions );
		} else {
			const newBulk = toBulk( bulkSource[value] );
			setBulk( newBulk );
			replaceOptions( newBulk );
		}
	};

	useOnUpdateModal( () => {
			setRealAttributes( attributes );
			setModalContent( false );
		}
	);

	return <>
		<StyledFlex>
			<label>{ __( 'Options preset:', 'jet-form-builder' ) }</label>
			<SelectControl
				value={ bulkSelect }
				onChange={ handleSelectChange }
				options={ optionsList }
			/>
		</StyledFlex>
		<TextareaControl
			className="jet-control-clear"
			value={ bulk }
			onChange={ ( val ) => {
				setBulk(toBulk( val ));
				replaceOptions( val );
			}}
			rows={ 16 }
		/>
		<Help>
			{ __(
				`You can specify a different value and value 
for the calculator field by separating them with a colon character`,
				'jet-form-builder',
			) }
			<br/>
			<br/>
			Book #1 : book_1 : 100
		</Help>
	</>;
}

export default BulkOptions;