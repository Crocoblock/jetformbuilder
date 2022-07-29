import { useBlockAttributes, useUniqKey } from '../../helpers/hooks/blocks';

const {
	      __experimentalToggleGroupControl: ToggleGroupControl,
	      __experimentalToggleGroupControlOption: ToggleGroupControlOption,
      } = wp.components;

const { __ } = wp.i18n;

let { formats } = window.jetFormValidation;

function ValidationToggleGroup( { excludeBrowser = false } ) {
	const [ attributes, setAttributes ] = useBlockAttributes();
	const uniqKey                       = useUniqKey();

	formats = formats.filter(
		( { value } ) => value !== 'browser' || !excludeBrowser,
	);

	return <ToggleGroupControl
		onChange={ type => setAttributes( prev => (
			{
				...prev,
				validation: {
					...attributes.validation,
					type,
				},
			}
		) ) }
		value={ attributes.validation?.type ?? '' }
		label={ __( 'Validation type', 'jet-form-builder' ) }
		isBlock={ true }
		isAdaptiveWidth={ false }
	>
		<ToggleGroupControlOption
			label={ __( 'Inherit', 'jet-form-builder' ) }
			value={ '' }
			aria-label={ __( 'Inherit from form\'s args', 'jet-form-builder' ) }
			showTooltip
		/>
		{ formats.map(
			current => <ToggleGroupControlOption
				key={ uniqKey( current.value + '_key' ) }
				label={ current.label }
				value={ current.value }
				aria-label={ current.title }
				showTooltip
			/> ) }
	</ToggleGroupControl>;
}

export default ValidationToggleGroup;