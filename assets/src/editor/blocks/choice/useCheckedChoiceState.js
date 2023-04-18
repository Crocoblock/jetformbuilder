import ChoicesFieldContext from '../choices-field/context';
import ChoiceItemContext from './context';

const {
	      useBlockEditContext,
      } = wp.blockEditor;

const {
	      useContext,
      } = wp.element;

function useCheckedChoiceState() {
	const { clientId, name }         = useBlockEditContext();
	const { current, updateCurrent } = useContext( ChoicesFieldContext );

	const { clientId: parentId } = useContext( ChoiceItemContext );

	if ( 'jet-forms/choice' === name ) {
		return [
			current?.includes( clientId ),
			() => {
				updateCurrent( clientId );
			},
		];
	}

	return [
		current?.includes( parentId ),
		() => {
			updateCurrent( parentId );
		},
	];
}

export default useCheckedChoiceState;