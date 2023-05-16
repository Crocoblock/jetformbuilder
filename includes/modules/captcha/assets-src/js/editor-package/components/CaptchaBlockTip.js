import getCaptchaProviders from '../helpers/getCaptchaProviders';

const {
	      useMetaState,
      } = JetFBHooks;

const {
	      __,
      } = wp.i18n;

const {
	      useMemo,
	      useCallback,
      } = wp.element;

const {
	      useDispatch,
	      useSelect,
      } = wp.data;

const {
	      createBlock,
      } = wp.blocks;

const {
	      Tip,
	      Button,
      } = wp.components;

const getCaptchaLabel = current => {
	const provider = getCaptchaProviders().find(
		( { value } ) => value === current,
	);

	return provider?.label ?? __( 'captcha', 'jet-form-builder' );
};

const name = 'jet-forms/captcha-container';

function CaptchaBlockTip() {
	const [ args ] = useMetaState( '_jf_recaptcha' );

	const buttonLabel = useMemo(
		() => getCaptchaLabel( args.captcha ),
		[ args.captcha ],
	);

	const { insertBlock } = useDispatch( 'core/block-editor' );

	const canAddBlock = useSelect(
		select => {
			const captchaBlock = select( 'jet-forms/fields' ).getBlock( name );

			return !captchaBlock;
		},
	);

	const insertCaptchaBlock = useCallback( () => {
		if ( !canAddBlock ) {
			return;
		}
		const container = createBlock( name, { provider: args.captcha } );

		insertBlock( container );
	}, [ canAddBlock ] );

	return <>
		<div style={ { marginBottom: '1.5em' } }>
			<Tip>
				{ __(
					`By default, the captcha is added before the submit 
button of the form. However, you can determine its location 
yourself using the block.`,
					'jet-form-builder',
				) }
			</Tip>
		</div>
		<Button
			variant={ 'secondary' }
			disabled={ !canAddBlock }
			onClick={ insertCaptchaBlock }
		>
			{ __( `Add`, 'jet-form-builder' ) + ' ' }
			{ `${ buttonLabel } ` + __( 'block', 'jet-form-builder' ) }
		</Button>
	</>;
}

export default CaptchaBlockTip;