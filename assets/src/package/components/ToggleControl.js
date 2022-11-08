const {
	      ToggleControl: CoreToggleControl,
      } = wp.components;

function ToggleControl( {
	checked = false,
	onChange = () => {},
	children = null,
} ) {

	return <div className={ 'jet-fb-control flex' }>
		<CoreToggleControl
			checked={ checked }
			onChange={ onChange }
		/>
		<div className={ 'jet-fb-control--label' }>
			{ children }
		</div>
	</div>;
}

export default ToggleControl;