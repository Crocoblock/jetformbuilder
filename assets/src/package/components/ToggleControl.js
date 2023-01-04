import BaseHelp from './BaseHelp';

const {
	      ToggleControl: CoreToggleControl,
      } = wp.components;

function ToggleControl( {
	checked = false,
	onChange = () => {},
	children = null,
	help = null,
} ) {

	const main = <div className={ 'jet-fb flex' }>
		<CoreToggleControl
			checked={ checked }
			onChange={ onChange }
		/>
		<div className={ 'jet-fb--label' }>
			{ children }
		</div>
	</div>;

	const Help = help;

	return null === help ? main : <div>
		{ main }
		{ 'string' === typeof Help
		  ? <BaseHelp>{ Help }</BaseHelp>
		  : <Help/>
		}
	</div>;
}

export default ToggleControl;