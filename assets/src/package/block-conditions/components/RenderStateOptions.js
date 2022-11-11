import EditCustomRenderStates from './EditCustomRenderStates';
import { column } from '../../tools';

const {
	      Button,
	      BaseControl,
	      FormTokenField,
      } = wp.components;

const { __ } = wp.i18n;

const {
	      useState,
      } = wp.element;

const {
	      useSelect,
      } = wp.data;

const RenderStateOptions = ( { currentItem, changeCurrentItem } ) => {
	const [ showModal, setShowModal ] = useState( false );

	const renderStates = useSelect(
		select => column(
			select( 'jet-forms/block-conditions' ).getRenderStates(),
			'value',
		),
		[ showModal ],
	);

	return <>
		<BaseControl
			label={ __( 'Render State', 'jet-form-builder' ) }
			className={ 'control-flex' }
		>
			<div className={ 'jet-fb-field-with-button' }>
				<FormTokenField
					label={ __( 'Add render state', 'jet-form-builder' ) }
					value={ currentItem.render_state }
					suggestions={ renderStates }
					onChange={ render_state => changeCurrentItem(
						{ render_state } ) }
					tokenizeOnSpace
					__experimentalExpandOnFocus
				/>
				<Button
					variant={ 'secondary' }
					icon={ 'plus-alt2' }
					onClick={ () => setShowModal( true ) }
				/>
			</div>
		</BaseControl>
		{ showModal && <EditCustomRenderStates
			setShowModal={ setShowModal }
			changeCurrentItem={ changeCurrentItem }
			currentItem={ currentItem }
		/> }
	</>;
};

export default RenderStateOptions;