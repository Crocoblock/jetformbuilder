import {
	classnames,
} from '../../tools';
import useSelectPostMeta from '../../hooks/useSelectPostMeta';
import ChangeNameByLabel from '../helpers/ChangeNameByLabel';
import useUniqKey from '../hooks/useUniqKey';

const {
	      BaseControl,
      } = wp.components;

const {
	      RichText,
      } = wp.blockEditor;
let {
	    __experimentalUseFocusOutside,
	    useFocusOutside,
    }   = wp.compose;

useFocusOutside = useFocusOutside || __experimentalUseFocusOutside;

const { __ } = wp.i18n;

function RichDescription( content ) {
	return <small style={ {
		whiteSpace: 'nowrap',
		padding: '0.2em 0.8em 0 0',
		color: '#8e8a8a',
	} }>
		{ content }
	</small>;
}

// eslint-disable-next-line max-lines-per-function
function FieldWrapper( props ) {
	const {
		      attributes,
		      children,
		      wrapClasses       = [],
		      valueIfEmptyLabel = '',
		      setAttributes,
		      childrenPosition  = 'between',
	      } = props;

	const uniqKey = useUniqKey();

	const jfArgs = useSelectPostMeta( '_jf_args' );

	function onBlurLabel() {
		ChangeNameByLabel( attributes, setAttributes );
	}

	const ref = useFocusOutside( onBlurLabel );

	function renderLabel() {
		return <BaseControl.VisualLabel>
			{ RichDescription( __( 'input label:', 'jet-form-builder' ) ) }
			<div
				className="jet-form-builder__label"
			>
				<RichText
					key={ uniqKey( 'rich-label' ) }
					placeholder="Label..."
					allowedFormats={ [] }
					value={ attributes.label
					        ? attributes.label
					        : valueIfEmptyLabel }
					onChange={ newLabel => setAttributes(
						{ label: newLabel } ) }
					isSelected={ false }
					{ ...ref }
				/>
				{ attributes.required &&
				<span className={ 'jet-form-builder__required' }>
					{ jfArgs.required_mark ? jfArgs.required_mark : '*' }
				</span> }
			</div>
		</BaseControl.VisualLabel>;
	}

	function renderDescription() {
		return <div className="jet-form-builder__desc--wrapper">
			{ RichDescription(
				__( 'input description:', 'jet-form-builder' ) ) }
			<BaseControl key={ 'custom_help_description' }
			             className={ 'jet-form-builder__desc' }>
				<div className="components-base-control__help">
					<RichText
						key={ uniqKey( 'rich-description' ) }
						tagName="small"
						placeholder="Description..."
						allowedFormats={ [] }
						value={ attributes.desc }
						onChange={ desc => setAttributes( { desc } ) }
						style={ { marginTop: '0px' } }
					/>
				</div>
			</BaseControl>
		</div>;
	}

	if ( 'row' === jfArgs.fields_layout ) {
		wrapClasses.push( 'jet-form-builder-row__flex' );
	}

	return (
		<BaseControl
			key={ uniqKey( 'placeHolder_block' ) }
			className={ classnames(
				'jet-form-builder__field-wrap',
				'jet-form-builder-row',
				wrapClasses,
			) }
		>
			{ 'row' !== jfArgs.fields_layout && <>
				{ 'top' === childrenPosition && children }
				{ renderLabel() }
				{ 'between' === childrenPosition && children }
				{ renderDescription() }
				{ 'bottom' === childrenPosition && children }
			</> }
			{ 'row' === jfArgs.fields_layout && <>
				<div className="jet-form-builder-row__flex--label">
					{ renderLabel() }
					{ renderDescription() }
				</div>
				<div
					className="jet-form-builder-row__flex--content">{ children }</div>
			</> }
		</BaseControl>
	);
}

export default FieldWrapper;