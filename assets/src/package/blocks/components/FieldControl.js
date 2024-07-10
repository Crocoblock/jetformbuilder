import ControlsSettings from '../helpers/ControlsSettings';

const {
	      useBlockProps,
      } = wp.blockEditor;
const {
	      TextControl,
	      SelectControl,
	      ToggleControl,
	      BaseControl,
	      __experimentalNumberControl,

      } = wp.components;

let { NumberControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

// eslint-disable-next-line max-lines-per-function
function useControls( {
	type,
	attributes,
	attrsSettings = {},
} ) {
	const blockProps = useBlockProps();
	const blockName  = blockProps[ 'data-type' ];
	const controls   = ControlsSettings();

	if ( !controls[ type ] ) {
		return [];
	}

	const currentControl = controls[ type ];

	// eslint-disable-next-line max-lines-per-function
	const isValidCondition = ( attr ) => {
		if ( !attr.condition ) {
			return true;
		}

		if ( blockName && attr.condition.blockName ) {
			if ( 'string' === typeof attr.condition.blockName && blockName !==
				attr.condition.blockName ) {
				return false;
			}
			if ( 'object' === typeof attr.condition.blockName
				&& attr.condition.blockName.length
				&& !attr.condition.blockName.includes( blockName )
			) {
				return false;
			}
		}

		const objectNotMatch = (
			function () {
				if ( 'object' !== typeof attr.condition.attr ) {
					return true;
				}
				const { operator = 'and', items = {} } = attr.condition.attr;

				if ( 'or' === operator.toLowerCase() ) {
					for ( const attrToCompare in items ) {
						const valueCompare = items[ attrToCompare ];

						// eslint-disable-next-line max-depth
						if ( valueCompare === attributes[ attrToCompare ] ) {
							return true;
						}
					}
				}

				if ( 'and' === operator.toLowerCase() ) {
					return (
						function () {
							for ( const attrToCompare in items ) {
								if ( items[ attrToCompare ] !==
									attributes[ attrToCompare ] ) {
									return false;
								}
							}
							return true;
						}
					)();
				}

				return true;
			}
		)();

		if ( !objectNotMatch
			|| (
				'string' === typeof attr.condition.attr
				&& attr.condition.attr
				&& !attributes[ attr.condition.attr ]
			)
			|| (
				'string' === typeof attr.condition
				&& !attributes[ attr.condition ]
			)
		) {
			return false;
		}

		return true;
	};

	return currentControl.attrs.filter(
		( { attrName, label, ...attr } ) => {
			const isRegisterAttribute = (
				attrName in attributes
			);
			const validCondition      = isValidCondition( attr );
			const isHidden            = (
				attrName in attrsSettings
				&& 'show' in attrsSettings[ attrName ]
				&& false === attrsSettings[ attrName ].show
			);

			return (
				isRegisterAttribute && validCondition && !isHidden
			);
		} );
}

/**
 * @deprecated 3.0.0
 *
 * @param  props
 * @return {unknown[]}
 * @class
 */
// eslint-disable-next-line max-lines-per-function
function FieldControl( props ) {
	const {
		      setAttributes,
		      attributes,
	      } = props;

	const fieldControls = useControls( props );

	const onChangeValue = ( value, key ) => {
		setAttributes( { [ key ]: value } );
	};

	// eslint-disable-next-line max-lines-per-function
	return fieldControls.map( ( { help = '', attrName, label, ...attr } ) => {
		switch ( attr.type ) {
			case 'text':
				return <TextControl
					key={ `${ attr.type }-${ attrName }-TextControl` }
					label={ label }
					help={ help }
					value={ attributes[ attrName ] }
					onChange={ newVal => onChangeValue( newVal, attrName ) }
				/>;

			case 'select':
				return <SelectControl
					key={ `${ attr.type }-${ attrName }-SelectControl` }
					label={ label }
					help={ help }
					value={ attributes[ attrName ] }
					options={ attr.options }
					onChange={ newVal => {
						onChangeValue( newVal, attrName );
					} }
				/>;
			case 'toggle':
				return <ToggleControl
					key={ `${ attr.type }-${ attrName }-ToggleControl` }
					label={ label }
					help={ help }
					checked={ attributes[ attrName ] }
					onChange={ newVal => {
						onChangeValue( newVal, attrName );
					} }
				/>;
			case 'number':
				/* eslint-disable-next-line
				 @wordpress/no-base-control-with-label-without-id
				 */
				return <BaseControl
					key={ `${ attr.type }-${ attrName }-BaseControl` }
					label={ label }
				>
					<NumberControl
						key={ `${ attr.type }-${ attrName }-NumberControl` }
						value={ attributes[ attrName ] }
						onChange={ newVal => {
							onChangeValue( Number( newVal ), attrName );
						} }
					/>
					<p className={ 'components-base-control__help' }
					   style={ {
						   color: 'rgb(117, 117, 117)',
					   } }>{ help }</p>
				</BaseControl>;
			default:
				return null;
		}

	} );

}

export default FieldControl;