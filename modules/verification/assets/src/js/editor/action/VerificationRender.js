import fetchPages from '../fetchPages';
import useSearchPages from './useSearchPages';
import { FAILED_EVENT, SUCCESS_EVENT } from '../constants';
import SendEmailFlowRaw from '@root/actions/send.email.flow.json';

let {
	    __experimentalToggleGroupControl,
	    __experimentalToggleGroupControlOption,
	    ToggleGroupControl,
	    ToggleGroupControlOption,
	    TextControl,
	    BaseControl,
	    ComboboxControl,
	    Button,
	    Flex,
	    SelectControl,
	    PanelBody,
    } = wp.components;

ToggleGroupControl = (
	ToggleGroupControl || __experimentalToggleGroupControl
);

ToggleGroupControlOption = (
	ToggleGroupControlOption || __experimentalToggleGroupControlOption
);

const {
	      __,
      } = wp.i18n;

const {
	      useState,
	      useEffect,
	      useMemo,
      } = wp.element;

const {
	      addQueryArgs,
      } = wp.url;

const {
	      useDispatch,
      } = wp.data;

const {
	      BaseHelp,
	      BaseAction,
	      ToggleControl,
      } = JetFBComponents;

const {
	      useActions,
	      useFields,
      } = JetFBHooks;

const {
	      Tools,
	      convertFlow,
      } = JetFBActions;

const SendEmailFlow = convertFlow( SendEmailFlowRaw );

/**
 * @param prevPages {Array}
 * @param newPages {Array}
 * @returns {*[]}
 */
const mergePages = ( prevPages, newPages ) => {
	const prevIds    = new Set( prevPages.map( ( { value } ) => value ) );
	const pagesToAdd = [];

	for ( const current of newPages ) {
		if ( prevIds.has( current.value ) ) {
			continue;
		}
		pagesToAdd.push( current );
	}

	return [ ...prevPages, ...pagesToAdd ];
};

/**
 * TODO:
 * - control for success verification page
 * - control for failed verification page
 *
 * @param onChangeSettingObj
 * @param settings
 * @returns {JSX.Element}
 */
function VerificationRender( { onChangeSettingObj, settings } ) {
	const [ actions, setActions ] = useActions( [] );

	const fields = useFields( { withInner: false }, [] );

	const emailField = useMemo(
		() => fields.find( field => 'email' === field?.attributes?.field_type ),
		[],
	);

	const [ hasSuggested, setHasSuggested ] = useState(
		Boolean( settings.mail_to ),
	);

	const separateSuccessRedirectIdx = useMemo( () => actions.findIndex(
		( { events = [], type } ) => (
			-1 !== events.indexOf( SUCCESS_EVENT ) &&
			'redirect_to_page' === type
		),
	), [] );

	const separateFailedRedirectIdx = useMemo( () => actions.findIndex(
		( { events = [], type } ) => (
			-1 !== events.indexOf( FAILED_EVENT ) &&
			'redirect_to_page' === type
		),
	), [] );

	const separateSuccessRedirect = actions[ separateSuccessRedirectIdx ] ?? {};
	const separateFailedRedirect  = actions[ separateFailedRedirectIdx ] ?? {};

	const [ defaultPages, setDefaultPages ]     = useState( [] );
	const [ successPages, setInputSuccessPage ] = useSearchPages(
		defaultPages,
	);
	const [ failedPages, setInputFailedPage ]   = useSearchPages(
		defaultPages,
	);

	const { openActionSettings } = useDispatch( 'jet-forms/actions' );

	const addRedirectToPageAction = ( pageId, event ) => {
		const redirect = new BaseAction( {
			type: 'redirect_to_page',
		} );

		redirect.events = [ event ];

		if ( pageId ) {
			redirect.selfSettings = {
				redirect_type: 'static_page',
				redirect_page: pageId,
			};
		}

		setActions( [
			...actions,
			redirect,
		] );

		return redirect;
	};

	const addSendEmailAction = () => {
		const { list: [ sendEmail ] } = SendEmailFlow;

		sendEmail.selfSettings = {
			...sendEmail.selfSettings,
			from_field: settings.mail_to,
		};

		setActions( [
			...actions,
			{ ...sendEmail },
		] );

		return sendEmail;
	};

	useEffect( () => {

		// fetch base pages
		fetchPages( { path: '/wp/v2/pages' } ).then(
			pages => setDefaultPages( prev => mergePages( prev, pages ) ),
		);

		const include = [
			settings.success_page,
			settings.failed_page,
		].filter( Boolean );

		if ( !include.length ) {
			return;
		}

		// fetch pages, which was saved previously
		fetchPages(
			{ path: addQueryArgs( '/wp/v2/pages', { include } ) },
		).then(
			pages => setDefaultPages( prev => mergePages( prev, pages ) ),
		);
	}, [] );

	return <>
		<BaseControl
			label={ __( 'Link Lifespan', 'jet-form-builder' ) }
			className="jet-fb label-reset-margin"
		>
			<div style={ { flex: 3 } }>
				<TextControl
					value={ settings.lifespan ?? 4 }
					onChange={ lifespan => onChangeSettingObj( { lifespan } ) }
				/>
				<BaseHelp style={ { marginTop: '-4px' } }>
					{ __(
						`How long verification link will be active and available to check`,
						'jet-form-builder',
					) }
				</BaseHelp>
			</div>
		</BaseControl>
		<BaseControl
			label={ __( 'Email Field', 'jet-form-builder' ) }
			className="jet-fb label-reset-margin"
		>
			<div className="jet-control-clear-full">
				<SelectControl
					value={ settings.mail_to }
					onChange={ mail_to => onChangeSettingObj(
						{ mail_to } ) }
					options={ Tools.withPlaceholder( fields ) }
					hideLabelFromVision
				/>
				<BaseHelp>
					{ __(
						`Send verification link to email address from this field.`,
						'jet-form-builder',
					) }
				</BaseHelp>
				{ (
					!hasSuggested && Boolean( emailField )
				) && <BaseHelp>
					<Flex justify="flex-start" gap={ 1 }>
						{ __( '(Suggestion) Choose the:', 'jet-form-builder' ) }
						<Button
							isLink
							onClick={ () => {
								setHasSuggested( true );
								onChangeSettingObj(
									{ mail_to: emailField.value },
								);
							} }
						>
							{ emailField.label }
						</Button>
						{ __( 'field', 'jet-form-builder' ) }
					</Flex>
				</BaseHelp> }
			</div>
		</BaseControl>
		{ settings.mail_to && <ToggleControl
			checked={ Boolean( settings.custom_email ) }
			onChange={ custom_email => onChangeSettingObj( { custom_email } ) }
			help={ __(
				`If disabled - standard verification email will be sent. 
If enabled - you can create your own verification email with 
a separate Send Email action`,
				'jet-form-builder',
			) }
		>
			<Flex
				gap={ 3 }
				justify="flex-start"
			>
				{ __( 'Create custom verification email', 'jet-form-builder' ) }
				{ settings.custom_email && <Button
					isLink
					onClick={ () => {
						const actionSendEmail = addSendEmailAction();

						openActionSettings( {
							index: actions.length,
							item: actionSendEmail,
						} );
					} }
				>
					{ __( '+ Add Send Email action', 'jet-form-builder' ) }
				</Button> }
			</Flex>
		</ToggleControl> }
		<BaseControl
			label={ __( 'Success Page', 'jet-form-builder' ) }
			className="control-flex"
		>
			<Flex style={ { flex: 3.1 } } direction="column">
				{ -1 !== separateSuccessRedirectIdx
				  ? <>
					  <BaseHelp>
						  { __(
							  `You have already configured 
Redirect to Page action with event:`,
							  'jet-form-builder',
						  ) }
						  <code>{ SUCCESS_EVENT }</code>
					  </BaseHelp>
					  <Flex>
						  <Button
							  icon={ <svg xmlns="http://www.w3.org/2000/svg"
							              viewBox="0 0 24 24" width="24"
							              height="24"
							              aria-hidden="true"
							              focusable="false">
								  <path
									  d="m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"/>
							  </svg> }
							  onClick={ () => {
								  openActionSettings( {
									  index: separateSuccessRedirectIdx,
									  item: separateSuccessRedirect,
								  } );
							  } }
						  >
							  { __(
								  'Edit success Redirect to Page',
								  'jet-form-builder',
							  ) }
						  </Button>
						  <Button
							  isDestructive
							  style={ { boxShadow: 'unset' } }
							  icon={ <svg xmlns="http://www.w3.org/2000/svg"
							              viewBox="0 0 24 24" width="24"
							              height="24" aria-hidden="true"
							              focusable="false">
								  <path
									  d="M20 5h-5.7c0-1.3-1-2.3-2.3-2.3S9.7 3.7 9.7 5H4v2h1.5v.3l1.7 11.1c.1 1 1 1.7 2 1.7h5.7c1 0 1.8-.7 2-1.7l1.7-11.1V7H20V5zm-3.2 2l-1.7 11.1c0 .1-.1.2-.3.2H9.1c-.1 0-.3-.1-.3-.2L7.2 7h9.6z"/>
							  </svg> }
						  >
							  { __(
								  'Or delete that',
								  'jet-form-builder',
							  ) }
						  </Button>
					  </Flex>
				  </>
				  : <>
					  <ComboboxControl
						  value={ settings.success_page }
						  onChange={ success_page => onChangeSettingObj(
							  { success_page } ) }
						  options={ successPages }
						  hideLabelFromVision
						  onFilterValueChange={ setInputSuccessPage }
					  />
					  <BaseHelp style={ { marginTop: '-1em' } }>
						  { __(
							  `Select a page for the redirect after successful 
verification. By default, you will be redirected to the form page. Or`,
							  'jet-form-builder',
						  ) }
						  &nbsp;
						  <Button
							  isLink
							  onClick={ () => {
								  const redirect = addRedirectToPageAction(
									  settings.success_page,
									  SUCCESS_EVENT,
								  );

								  openActionSettings( {
									  index: actions.length,
									  item: { ...redirect },
								  } );
							  } }
						  >
							  { __(
								  'configure a separate Redirect to Page action',
								  'jet-form-builder',
							  ) }
						  </Button>
					  </BaseHelp>
				  </> }
			</Flex>
		</BaseControl>
		<BaseControl
			label={ __( 'Failed Page', 'jet-form-builder' ) }
			className="control-flex"
		>
			<Flex style={ { flex: 3.1 } } direction="column">
				{ -1 !== separateFailedRedirectIdx
				  ? <>
					  <BaseHelp>
						  { __(
							  `You have already configured 
Redirect to Page action with event:`,
							  'jet-form-builder',
						  ) }

					  </BaseHelp>
					  &nbsp;
					  <code>{ FAILED_EVENT }</code>
					  <Flex>
						  <Button
							  icon={ <svg xmlns="http://www.w3.org/2000/svg"
							              viewBox="0 0 24 24" width="24"
							              height="24"
							              aria-hidden="true"
							              focusable="false">
								  <path
									  d="m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"/>
							  </svg> }
							  onClick={ () => {
								  openActionSettings( {
									  index: separateFailedRedirectIdx,
									  item: separateFailedRedirect,
								  } );
							  } }
						  >
							  { __(
								  'Edit failed Redirect to Page',
								  'jet-form-builder',
							  ) }
						  </Button>
						  <Button
							  isDestructive
							  style={ { boxShadow: 'unset' } }
							  icon={ <svg xmlns="http://www.w3.org/2000/svg"
							              viewBox="0 0 24 24" width="24"
							              height="24" aria-hidden="true"
							              focusable="false">
								  <path
									  d="M20 5h-5.7c0-1.3-1-2.3-2.3-2.3S9.7 3.7 9.7 5H4v2h1.5v.3l1.7 11.1c.1 1 1 1.7 2 1.7h5.7c1 0 1.8-.7 2-1.7l1.7-11.1V7H20V5zm-3.2 2l-1.7 11.1c0 .1-.1.2-.3.2H9.1c-.1 0-.3-.1-.3-.2L7.2 7h9.6z"/>
							  </svg> }
						  >
							  { __(
								  'Or delete that',
								  'jet-form-builder',
							  ) }
						  </Button>
					  </Flex>
				  </>
				  : <>
					  <ComboboxControl
						  value={ settings.failed_page }
						  onChange={ failed_page => onChangeSettingObj(
							  { failed_page },
						  ) }
						  options={ failedPages }
						  hideLabelFromVision
						  onFilterValueChange={ setInputFailedPage }
					  />
					  <BaseHelp style={ { marginTop: '-1em' } }>
						  { __(
							  `Select a page for the redirect after a failed 
redirect attempt. By default, you will be redirected to the form page. Or`,
							  'jet-form-builder',
						  ) }
						  &nbsp;
						  <Button
							  isLink
							  onClick={ () => {
								  const redirect = addRedirectToPageAction(
									  settings.failed_page,
									  FAILED_EVENT,
								  );

								  openActionSettings( {
									  index: actions.length,
									  item: { ...redirect },
								  } );
							  } }
						  >
							  { __(
								  'configure a separate Redirect to Page action',
								  'jet-form-builder',
							  ) }
						  </Button>
					  </BaseHelp>
				  </> }
			</Flex>
		</BaseControl>
	</>;
}

export default VerificationRender;