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
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ showModal ],
	);
	// label={  }
	return <>
		{/* eslint-disable-next-line @wordpress/no-base-control-with-label-without-id */ }
		<BaseControl
			label={ __( 'Render State', 'jet-form-builder' ) }
			className={ 'control-flex' }
		>

			<div>
				{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
				<label className={ 'jet-fb label mb-05-em' }>
					{ __( 'Add render state', 'jet-form-builder' ) }
				</label>
				<div className={ 'jet-fb with-button clear-label' }>
					<FormTokenField
						value={ currentItem.render_state }
						suggestions={ renderStates }
						onChange={ val => changeCurrentItem(
							{ render_state: val },
						) }
						tokenizeOnSpace
						__experimentalExpandOnFocus
					/>
					<Button
						label={ __( 'New render state', 'jet-form-builder' ) }
						variant={ 'secondary' }
						icon={ 'plus-alt2' }
						onClick={ () => setShowModal( true ) }
					/>
				</div>
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