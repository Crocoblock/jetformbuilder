const {
	      __,
      } = wp.i18n;

const {
	      RangeControl,
	      CheckboxControl,
      } = wp.components;

// eslint-disable-next-line max-lines-per-function
function RandomStringControls( DefaultComponent ) {
	// eslint-disable-next-line max-lines-per-function
	return props => {
		const { attributes, setAttributes } = props;

		if ( 'random_string' !== attributes.field_value ) {
			return <DefaultComponent { ...props }/>;
		}

		const countChecked = Object.values( {
			...attributes.random,
			length: undefined,
		} ).filter( Boolean ).length;

		const updateCheckbox = ( localProps ) => {
			const [ name ] = Object.keys( localProps );

			if ( attributes.random[ name ] && 1 === countChecked ) {
				return;
			}

			setAttributes( {
				random: {
					...attributes.random,
					...localProps,
				},
			} );
		};

		return <>
			<RangeControl
				label={ __( 'String length', 'jet-form-builder' ) }
				value={ attributes.random?.length ?? 10 }
				onChange={ length => setAttributes( {
					random: {
						...attributes.random,
						length,
					},
				} ) }
				allowReset
				resetFallbackValue={ 10 }
				min={ 1 }
				max={ 50 }
			/>
			<CheckboxControl
				label={ __( 'Uppercase', 'jet-form-builder' ) }
				checked={ attributes.random.upper }
				onChange={ upper => updateCheckbox( { upper } ) }
			/>
			<CheckboxControl
				label={ __( 'Lowercase', 'jet-form-builder' ) }
				checked={ attributes.random.lower }
				onChange={ lower => updateCheckbox( { lower } ) }
			/>
			<CheckboxControl
				label={ __( 'Numbers', 'jet-form-builder' ) }
				checked={ attributes.random.numbers }
				onChange={ numbers => updateCheckbox( { numbers } ) }

			/>
			<CheckboxControl
				label={ __( 'Symbols', 'jet-form-builder' ) }
				checked={ attributes.random.symbols }
				onChange={ symbols => updateCheckbox( { symbols } ) }
			/>
		</>;
	};
}

export default RandomStringControls;