import BaseHelp from './BaseHelp';

const {
	      FormToggle,
	      BaseControl,
	      Flex,
      } = wp.components;

const {
	      useInstanceId,
      } = wp.compose;

function ToggleControl( {
	checked = false,
	disabled = false,
	onChange = () => {},
	children = null,
	help = null,
} ) {
	const Help = help;

	const instanceId = useInstanceId( ToggleControl );
	const id         = `inspector-jfb-toggle-control-${ instanceId }`;

	return <BaseControl id={ id }>
		<Flex direction="column">
			<Flex gap={ 3 } align="flex-start">
				<FormToggle
					id={ id }
					checked={ checked }
					onChange={ ( event ) => onChange( event.target.checked ) }
					disabled={ disabled }
				/>
				<label htmlFor={ id } style={ { width: '100%' } }>
					{ children }
				</label>
			</Flex>
			{ 'string' === typeof Help
			  ? <BaseHelp>{ Help }</BaseHelp>
			  : Help && <Help/> }
		</Flex>
	</BaseControl>;
}

export default ToggleControl;