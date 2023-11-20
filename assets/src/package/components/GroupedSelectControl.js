import { isEmpty } from '../tools';

/**
 * WordPress dependencies
 */
const { withInstanceId } = window.wp.compose;

/**
 * Internal dependencies
 */
const BaseControl = window.wp.components.BaseControl;

function GroupedSelectControl( {
								   help,
								   instanceId,
								   label,
								   multiple = false,
								   onChange,
								   options = [],
								   className,
								   value,
								   hideLabelFromVision,
							   } ) {
	const id = `inspector-select-control-${ instanceId }`;
	const onChangeValue = ( event ) => {
		onChange( event.target.value );
	};

	// Disable reason: A select with an onchange throws a warning

	/* eslint-disable jsx-a11y/no-onchange */
	return ! isEmpty( options ) && (
		<BaseControl label={ label } hideLabelFromVision={ hideLabelFromVision } id={ id } help={ help }
					 className={ className }>
			<select
				id={ id }
				className="components-select-control__input"
				onChange={ onChangeValue }
				value={ value }
				aria-describedby={ !! help ? `${ id }__help` : undefined }
			>
				<option
					key={ `${ label }-placeholder` }
					value={ `` }
				>{ `--` }</option>
				{ options.map( ( optGroup, groupIndex ) => {
					return ! isEmpty( optGroup.values ) && <optgroup
						key={ `${ optGroup.label }-${ groupIndex }` }
						label={ optGroup.label }
					>
						{ optGroup.values.map( ( option, index ) =>
							<option
								key={ `${ option.value }-${ index }-${ groupIndex }` }
								value={ option.value }
								disabled={ option.disabled }
							>
								{ option.label }
							</option>,
						) }
					</optgroup>;
				} ) }
			</select>
		</BaseControl>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

export default withInstanceId( GroupedSelectControl );