const {
	      ToggleControl: CoreToggleControl,
      } = wp.components;

function ToggleControl( {
	checked = false,
	onChange = () => {},
	children = null,
} ) {

	return <div className={ 'jet-fb flex' }>
		<CoreToggleControl
			checked={ checked }
			onChange={ onChange }
		/>
		<div className={ 'jet-fb--label' }>
			{ children }
		</div>
	</div>;
}

export default ToggleControl;