import RequestButton from './RequestButton';
import useStateValidClasses from '../../hooks/useStateValidClasses';

const {
	      useState,
      } = wp.element;

function ValidateButton( {
	initialValid = null,
	label,
	ajaxArgs = {},
	onValid = () => {},
	onInvalid = () => {},
} ) {

	const [ buttonProps, setButtonProps ] = useState( {} );

	const [
		      className,
		      setValidClass,
		      setInvalidClass,
		      setLoadingClass,
	      ] = useStateValidClasses( initialValid || null );

	const setValid = response => {
		setValidClass();
		onValid( response );
		setButtonProps( {} );
	};

	const setInvalid = () => {
		setInvalidClass();
		onInvalid();
		setButtonProps( { isDestructive: true } );
	};

	return <RequestButton
		ajaxArgs={ ajaxArgs }
		label={ label }
		onLoading={ setLoadingClass }
		onSuccessRequest={ setValid }
		onFailRequest={ setInvalid }
		className={ className }
		{ ...buttonProps }
	>
		<i className="dashicons"/>
	</RequestButton>;
}

export default ValidateButton;