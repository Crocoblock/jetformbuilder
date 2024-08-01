import getCaptchaProviders from '../helpers/getCaptchaProviders';
import { sprintf, __ } from '@wordpress/i18n';

const {
	      useMetaState,
      } = JetFBHooks;

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ canAddBlock ] );

	return <>
		<div style={ { marginBottom: '1.5em' } }>
			<Tip>
				{ __(
					`By default, the captcha is added before the submit button of the form. However, you can determine its location yourself using the block.`,
					'jet-form-builder',
				) }
			</Tip>
		</div>
		<Button
			variant={ 'secondary' }
			disabled={ !canAddBlock }
			onClick={ insertCaptchaBlock }
		>
			{ sprintf(
				// translators: %s - selected captcha label
				__( `Add %s block`, 'jet-form-builder' ),
				buttonLabel
			) }
		</Button>
	</>;
}

export default CaptchaBlockTip;