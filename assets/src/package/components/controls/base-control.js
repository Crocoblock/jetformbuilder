import { classnames } from '../../helpers/tools';
import BaseHelp from './base-help';

function BaseControl( {
						  id = '',
						  label = '',
						  help = '',
						  helpPosition = 'after',
						  className = '',
						  children,
						  styleHelp = {},
						  labelProps = {},
						  ...baseProps
					  } ) {

	if ( id ) {
		labelProps.htmlFor = id;
	}

	const renderHelp = () => <BaseHelp
		style={ styleHelp }
	>
		{ help }
	</BaseHelp>;

	return <div
		className={ classnames( 'jet-fb-base-control', className ) }
		{ ...baseProps }
	>
		{ label && <label
			className={ 'jet-fb-base-control__label' }
			{ ...labelProps }
		>
			{ label }
		</label> }
		{ ( help &&'before' === helpPosition ) && renderHelp() }
		{ children }
		{ ( help && 'after' === helpPosition ) && renderHelp() }
	</div>
}

export default BaseControl;