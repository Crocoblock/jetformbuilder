import BaseHelp from './BaseHelp';

const {
	      FormToggle,
	      BaseControl,
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
		<div className={ 'jet-fb flex gap-default' }>
			<FormToggle
				id={ id }
				checked={ checked }
				onChange={ ( event ) => onChange( event.target.checked ) }
				disabled={ disabled }
			/>
			<label htmlFor={ id }>
				{ children }
			</label>
		</div>
		{ 'string' === typeof Help
		  ? <BaseHelp>{ Help }</BaseHelp>
		  : Help && <Help/>
		}
	</BaseControl>;
}

export default ToggleControl;