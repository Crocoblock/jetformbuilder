const {
	      useTriggerPopover,
      } = JetFBHooks;

const {
	      Button,
	      Popover,
	      ExternalLink,
      } = wp.components;

const {
	      __,
      } = wp.i18n;

function ProSinglePattern( { pattern } ) {
	const {
		      ref,
		      showPopover,
		      setShowPopover,
		      popoverProps,
	      } = useTriggerPopover();

	return <li>
		<Button
			ref={ ref }
			icon={ <span
				dangerouslySetInnerHTML={ { __html: pattern.icon } }
			/> }
			onClick={ () => setShowPopover( prev => !prev ) }
			label={ pattern.description || pattern.title }
			variant="secondary"
			iconSize={ 48 }
			className="block-editor-block-variation-picker__variation is-pro"
		/>
		<span
			className="block-editor-block-variation-picker__variation-label"
		>
			{ pattern.title }
		</span>
		{ showPopover && (
			<Popover
				position={ 'top-start' }
				noArrow={ false }
				isAlternate
				{ ...popoverProps }
			>
				<div
					style={ {
						padding: '0.5em',
						width: 'max-content',
					} }
				>
					<span>{ __(
						'This is paid addon. You can buy it here:',
						'jet-form-builder',
					) }</span>
					&nbsp;
					<ExternalLink
						href="https://jetformbuilder.com/pricing/"
					>
						{ __( 'jetformbuilder.com', 'jet-form-builder' ) }
					</ExternalLink>
				</div>
			</Popover>
		) }
	</li>;
}

export default ProSinglePattern;