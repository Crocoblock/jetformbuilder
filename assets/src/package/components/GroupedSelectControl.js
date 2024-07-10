/* eslint-disable import/no-extraneous-dependencies */
import { isEmpty } from '../tools';
import { styled } from '@linaria/react';

const StyledSelect = styled.select`
    height: 40px;
    min-height: 40px;
    line-height: 1.5;
`;

function GroupedSelectControl( {
	id,
	label,
	onChange,
	options = [],
	value,
} ) {
	const onChangeValue = ( event ) => {
		onChange( event.target.value );
	};

	// Disable reason: A select with an onchange throws a warning

	/* eslint-disable jsx-a11y/no-onchange */
	return !isEmpty( options ) && (
		<StyledSelect
			id={ id }
			className="components-select-control__input"
			onChange={ onChangeValue }
			value={ value }
		>
			<option
				key={ `${ label }-placeholder` }
				value={ `` }
			>{ `--` }</option>
			{ options.map( ( optGroup, groupIndex ) => {
				return !isEmpty( optGroup.values ) && <optgroup
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
		</StyledSelect>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

export default GroupedSelectControl;