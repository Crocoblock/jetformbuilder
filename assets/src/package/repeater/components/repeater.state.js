import RepeaterStateContext from '../context/repeater.state';
import useRepeaterState from '../../hooks/useRepeaterState';

function RepeaterState( { state, children } ) {
	const functions = useRepeaterState( state );

	return <RepeaterStateContext.Provider value={ functions }>
		{ children }
	</RepeaterStateContext.Provider>;
}

export default RepeaterState;