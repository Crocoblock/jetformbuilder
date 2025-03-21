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

const {
	      ActionModalFooterSlotFill,
      } = JetFBComponents;

const baseBulk = window.JetFBBulkOptions.sources[
	Object.keys( window.JetFBBulkOptions.sources )[ 0 ]
	];

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

	const [ bulkSelect, setBulkSelect ]   = useState( 'base' );
	const [ optionsList, setOptionsList ] = useState( window.JetFBBulkOptions.list || [] );

	const bulkSource = window.JetFBBulkOptions.sources;

	const [ bulk, setBulk ] = useState(
		() => toBulk( baseBulk ),
	);

	useEffect( () => {
        if ( attributes.field_options?.length ) {
            setOptionsList( [ { label: 'Select...', value: 'jfb_current_select' } ].concat( optionsList ) );
            setBulkSelect( 'jfb_current_select' );
        }
    }, [] );

    useEffect( () => {
        if ( 'jfb_current_select' !== bulkSelect ) {
            setBulk( toBulk( bulkSource[bulkSelect] ) );
        } else  {
			setBulk( optionsToBulk( attributes.field_options ) );
		}
    }, [ bulkSelect ] );

	const replaceOptions = ( val = bulk ) => {
		setAttributes( {
			field_options: [
				...fromBulk( val ),
			],
		} );
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
				onChange={ setBulkSelect }
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