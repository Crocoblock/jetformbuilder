import BaseHelp from '../../components/BaseHelp';

const {
	      useBlockEditContext,
      } = wp.blockEditor;

const {
	      useSelect,
      } = wp.data;

const {
	      __,
      } = wp.i18n;

function AttributeHelp( { name, children = null } ) {
	const { name: blockName } = useBlockEditContext();

	const settings = useSelect( select => {
		const block = select( 'core/blocks' ).getBlockType( blockName );

		return block.attributes[ name ]?.jfb ?? false;
	} );

	if ( !settings ) {
		return null;
	}

	return <BaseHelp className="jet-fb mb-24">
		{ children }
		{ settings?.shortcode && (
			<span>&nbsp;{ __(
				'You could use shortcodes here.',
				'jet-form-builder',
			) }</span>
		) }
	</BaseHelp>;
}

export default AttributeHelp;