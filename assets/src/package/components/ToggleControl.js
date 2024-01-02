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
	flexLabelProps = {},
	outsideLabel = null,
} ) {
	const Help = help;

	const instanceId = useInstanceId( ToggleControl );
	const id         = `inspector-jfb-toggle-control-${ instanceId }`;

	return <BaseControl id={ id }>
		<Flex direction="column">
			<Flex
				gap={ 3 }
				align="flex-start"
				justify="flex-start"
				{ ...flexLabelProps }
			>
				<FormToggle
					id={ id }
					checked={ checked }
					onChange={ ( event ) => onChange( event.target.checked ) }
					disabled={ disabled }
				/>
				<label htmlFor={ id }>
					{ children }
				</label>
				{ outsideLabel }
			</Flex>
			{ 'string' === typeof Help
			  ? <BaseHelp>{ Help }</BaseHelp>
			  : Help && <Help/> }
		</Flex>
	</BaseControl>;
}

export default ToggleControl;