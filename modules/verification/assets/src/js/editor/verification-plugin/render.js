const {
	      __,
      } = wp.i18n;

const {
	      useMetaState,
      } = JetFBHooks;

const {} = wp.components;

let {
	    __experimentalToggleGroupControl,
	    __experimentalToggleGroupControlOption,
	    ToggleGroupControl,
	    ToggleGroupControlOption,
	    ToggleControl,
	    TextControl,
    } = wp.components;

ToggleGroupControl       = (
	ToggleGroupControl || __experimentalToggleGroupControl
);
ToggleGroupControlOption = (
	ToggleGroupControlOption || __experimentalToggleGroupControlOption
);

function PluginVerification() {
	const [ args, setArgs ] = useMetaState( '_jf_verification' );

	return <>
		<ToggleControl
			label={ __( 'Enable verification by email', 'jet-form-builder' ) }
			checked={ args.enable }
			help={ __(
				`Enable this option if you need to post all, 
or individual actions after verification using a mailing address`,
				'jet-form-builder',
			) }
			onChange={ enable => setArgs( prev => (
				{ ...prev, enable }
			) ) }
		/>
		{ args.enable && <>
			<ToggleControl
				label={ __( 'Custom verification availability duration',
					'jet-form-builder' ) }
				checked={ args.lifetime }
				help={ __(
					`By default, you can pass verification in the next 
4 hours after submitting the form`,
					'jet-form-builder',
				) }
				onChange={ lifetime => setArgs( prev => (
					{ ...prev, lifetime }
				) ) }
			/>
			{ args.lifetime && <>
				<TextControl
					value={ args.duration }
					onChange={ duration => setArgs( prev => (
						{ ...prev, duration }
					) ) }
					label={ __( 'Duration', 'jet-form-builder' ) }
					help={ __(
						`Specify the number of hours during which the 
user can pass verification. Leave this field empty to 
make life expectancy no end.`,
						'jet-form-builder',
					) }
				/>
			</> }
		</> }
	</>;
}

export default PluginVerification;
