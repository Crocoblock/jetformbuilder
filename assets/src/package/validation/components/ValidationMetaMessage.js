import getItemByName from '../helpers/getItemByName';

const {
	      TextControl,
      } = wp.components;

function ValidationMetaMessage( {
	message,
	update,
	value = null,
	help = null,
	...props
} ) {
	const current = getItemByName( message.id );

	return <div { ...props }>
		<label
			htmlFor={ message.id }
			className={ 'jet-fb flex jc-space-between' }
		>
			<span>{ current.label }</span>
			<span className={ 'jet-fb flex gap-1em' }>
			{ message.blocks.map( block => <span
				key={ 'message_block_item' + block.title }
				className="jet-fb-validation-messages-item-heading-pair__icon"
				title={ block.title }
			>
				{ block.icon }
			</span> ) }
		</span>
		</label>
		<TextControl
			id={ message.id }
			key={ 'validation_message_' + message.id }
			help={ help ?? current?.help }
			value={ value ?? current?.initial }
			onChange={ value => update( prev => (
				{
					...prev,
					[ message.id ]: value,
				}
			) ) }
		/>
	</div>;
}

export default ValidationMetaMessage;