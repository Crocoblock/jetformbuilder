import { name } from './index';
import useCheckedChoiceState from '../choice/useCheckedChoiceState';

const { __ } = wp.i18n;

const {
	      useBlockProps,
	      RichText,
      } = wp.blockEditor;

const {
	      useInstanceId,
      } = wp.compose;

export default function EditChoiceCheck( props ) {
	const {
		      context,
		      setAttributes,
		      attributes,
	      } = props;

	const {
		      'jet-forms/choices-field--multiple': isMultiple,
		      'jet-forms/choices-field--name': fieldName,
	      } = context;

	const blockProps = useBlockProps( {
		className: 'jet-form-builder-choice--item-control',
	} );

	const instanceId = useInstanceId( EditChoiceCheck, fieldName );

	const [ isChecked, toggleChecked ] = useCheckedChoiceState();

	//
	return <>
		<span { ...blockProps }>
			<input
				id={ instanceId }
				type={ isMultiple ? 'checkbox' : 'radio' }
				checked={ isChecked }
				onChange={ () => toggleChecked() }
			/>
			<RichText
				tagName={ 'label' }
				value={ attributes.label }
				onChange={ label => setAttributes( { label } ) }
				placeholder={ __( 'Label for input...', 'jet-form-builder' ) }
				//htmlFor={ instanceId }
			/>
		</span>
	</>;
}