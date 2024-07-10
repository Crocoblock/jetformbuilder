const {
	      Flex,
      } = wp.components;

function BaseLabel( { label, children, ...props } ) {
	return <Flex
		align={ 'center' }
		justify={ 'flex-start' }
		style={ {
			marginBottom: '8px',
		} }
	>
		{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
		<label
			className={ 'jet-fb label' }
			{ ...props }
		>
			{ label }
		</label>
		{ children }
	</Flex>;
}

export default BaseLabel;