import ConditionOptions from './condition.options';
import { options } from './options';

const {
	SelectControl,
} = wp.components;

const {
	RepeaterWithState,
	ActionModal,
} = JetFBComponents;

const {
	useBlockConditions,
	useUniqKey,
} = JetFBHooks;

const { __ } = wp.i18n;

export default function ConditionsModal( props ) {
	const {
		setShowModal,
		attributes,
		setAttributes,
	} = props;

	const { operators, functions } = useBlockConditions();
	const uniqKey = useUniqKey();

	return <ActionModal
		classNames={ [ 'width-60' ] }
		onRequestClose={ () => setShowModal( false ) }
		title="Conditional Logic"
	>
		{ ( { actionClick, onRequestClose } ) => <RepeaterWithState
			key={ uniqKey( 'RepeaterWithState' ) }
			items={ attributes.conditions }
			isSaveAction={ actionClick }
			onUnMount={ onRequestClose }
			newItem={ options.condition }
			onSaveItems={ conditions => setAttributes( { conditions } ) }
			addNewButtonLabel={ __( 'New Condition', 'jet-form-builder' ) }
		>
			{ ( { currentItem, changeCurrentItem } ) => <>
				<SelectControl
					key={ uniqKey( 'SelectControl-type' ) }
					label="Type"
					labelPosition="side"
					value={ currentItem.type }
					options={ functions }
					onChange={ newValue => {
						changeCurrentItem( { type: newValue } );
					} }
				/>
				<SelectControl
					key={ uniqKey( 'SelectControl-operator' ) }
					label="Operator"
					labelPosition="side"
					value={ currentItem.operator }
					options={ operators }
					onChange={ newValue => {
						changeCurrentItem( { operator: newValue } );
					} }
				/>
				<ConditionOptions
					currentItem={ currentItem }
					changeCurrentItem={ changeCurrentItem }
				/>
			</> }
		</RepeaterWithState> }
	</ActionModal>;
}