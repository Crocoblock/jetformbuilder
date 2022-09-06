import RequestButton from './RequestButton';
import useStateValidClasses from '../../hooks/useStateValidClasses';

function ValidateButton( {
	initialValid,
	label,
	ajaxArgs = {},
	onValid = () => {},
	onInvalid = () => {},
} ) {

	const [
		      className,
		      setValidClass,
		      setInvalidClass,
		      setLoadingClass,
	      ] = useStateValidClasses( initialValid || false );

	const setValid = response => {
		setValidClass();
		onValid( response );
	};

	const setInvalid = () => {
		setInvalidClass();
		onInvalid();
	};

	return <RequestButton
		ajaxArgs={ ajaxArgs }
		label={ label }
		onLoading={ setLoadingClass }
		onSuccessRequest={ setValid }
		onFailRequest={ setInvalid }
		className={ className }
	>
		<i className="dashicons"/>
	</RequestButton>;
}

export default ValidateButton;