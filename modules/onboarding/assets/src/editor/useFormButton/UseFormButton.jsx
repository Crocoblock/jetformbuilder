import { PluginSidebar } from '@wordpress/edit-post';
import { next, copySmall, plus, edit } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { Modal, Flex } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';

function UseFormButton() {
	const { closeGeneralSidebar }   = useDispatch( 'core/edit-post' );
	const [ builder, setBuilder ]   = useState( '' );
	const [ pageType, setPageType ] = useState( '' );

	return <PluginSidebar
		icon={ next }
		name="sidebar"
		title={ __( 'Use the form', 'jet-form-builder' ) }
	>
		<Modal
			title={ __( 'Use the form', 'jet-form-builder' ) }
			onRequestClose={ closeGeneralSidebar }
		>
			<h3>
				{ __(
					'1. How you want to use the form?',
					'jet-form-builder',
				) }
			</h3>
			<p>
				{ __(
					'Please select the method how you planning to use the form - as element of page builder, as block or a plain shortcode',
					'jet-form-builder',
				) }
			</p>
			<Flex justify="flex-start" wrap>
				{/*<ButtonChoice
					onChange={ () => setBuilder( 'elementor' ) }
					icon={ copySmall }
					isActive={ 'elementor' === builder }
				>
					{ __(
						'Elementor Widget',
						'jet-form-builder',
					) }
				</ButtonChoice>
				<ButtonChoice
					onChange={ () => setBuilder( 'bricks' ) }
					icon={ copySmall }
					isActive={ 'bricks' === builder }
				>
					{ __(
						'Bricks Element',
						'jet-form-builder',
					) }
				</ButtonChoice>
				<ButtonChoice
					onChange={ () => setBuilder( 'blocks' ) }
					icon={ copySmall }
					isActive={ 'blocks' === builder }
				>
					{ __(
						'Block for Block Editor',
						'jet-form-builder',
					) }
				</ButtonChoice>
				<ButtonChoice
					onChange={ () => setBuilder( 'shortcode' ) }
					icon={ copySmall }
					isActive={ 'shortcode' === builder }
				>
					{ __(
						'Shortcode to use anywhere',
						'jet-form-builder',
					) }
				</ButtonChoice>*/}
			</Flex>
			<h3>
				{ __(
					'2. Where you want to use the form?',
					'jet-form-builder',
				) }
			</h3>
			<p>
				{ __(
					'Where you want to place the form',
					'jet-form-builder',
				) }
			</p>
			<Flex justify="flex-start" wrap>
				{/*<ButtonChoice
					onChange={ () => setPageType( 'select' ) }
					icon={ edit }
					isActive={ 'select' === pageType }
				>
					{ __(
						'Select page to add the form',
						'jet-form-builder',
					) }
				</ButtonChoice>
				<p>
					{ __( 'or', 'jet-form-builder' ) }
				</p>
				<ButtonChoice
					onChange={ () => setPageType( 'new' ) }
					icon={ plus }
					isActive={ 'new' === pageType }
				>
					{ __(
						'Create new page',
						'jet-form-builder',
					) }
				</ButtonChoice>*/}
			</Flex>
		</Modal>
	</PluginSidebar>;
}

export default UseFormButton;