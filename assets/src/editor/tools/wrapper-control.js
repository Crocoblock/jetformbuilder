import Tools from "./tools";

export default function WrapperControl( { attributes, block, children } ) {
    const {
        BaseControl,
    } = wp.components;

    const {
        useSelect,
    } = wp.data;

    const meta = useSelect( ( select ) => {
        return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
    } );

    const label = Tools.getLabel( meta, attributes );

    return (
        <BaseControl key={ `place_holder_block_${ block }_label` } className={ 'jet-form-builder__field-wrap' }>
            <BaseControl.VisualLabel>
                <div className={ 'jet-form-builder__label-text' }>
                    { label.name }
                    <span className={'jet-form-builder__required'}> { label.mark }</span>
                </div>
            </BaseControl.VisualLabel>
            { children }
            <BaseControl key={ 'custom_help_description' } className={ 'jet-form-builder__desc' }>
                <div className={ 'components-base-control__help' } style={ { marginTop: '0px' } }>{ attributes.desc }</div>
            </BaseControl>
        </BaseControl>
    );
}