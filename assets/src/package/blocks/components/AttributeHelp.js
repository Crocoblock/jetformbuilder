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

function AttributeHelp( { name = false, children = null } ) {
	const { name: blockName } = useBlockEditContext();

	const settings = useSelect( select => {
		if ( false === name ) {
			return false;
		}
		const block = select( 'core/blocks' ).getBlockType( blockName );

		return block.attributes[ name ]?.jfb ?? false;
	}, [ blockName, name ] );

	if ( !settings ) {
		return Boolean( children ) && <BaseHelp className="jet-fb mb-24">
			{ children }
		</BaseHelp>;
	}

	return <BaseHelp className="jet-fb mb-24">
		{ children && <>{ children }&nbsp;</> }
		{ (
			settings?.shortcode && !settings.rich && !children
		) && (
			__(
				'You can use shortcodes here.',
				'jet-form-builder',
			)
		) }
		{ (
			settings?.shortcode && !settings.rich && children
		) && (
			__(
				'You can also use shortcodes here.',
				'jet-form-builder',
			)
		) }
	</BaseHelp>;
}

export default AttributeHelp;