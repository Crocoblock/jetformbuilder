import humanReadableRule from '../helpers/humanReadableRule';

const {
	      __,
      } = wp.i18n;

function HumanReadableRule( { rule } ) {
	return rule.type ? <>
		<span
			data-title={ __( 'Rule:', 'jet-form-builder' ) }
			dangerouslySetInnerHTML={ {
				__html: humanReadableRule( rule ),
			} }
		/>
		{ Boolean( rule.message ) && <span
			data-title={ __( 'Message:', 'jet-form-builder' ) }
			dangerouslySetInnerHTML={ {
				__html: rule.message,
			} }
		/> }
	</> : <span
		       data-title={ __(
			       'The rule is not fully configured.',
			       'jet-form-builder',
		       ) }
	       />;
}

export default HumanReadableRule;