import RequestButton from "./request-button";
import { useStateLoadingClasses } from "../helpers/hooks/hooks-helper";

function RequestLoadingButton( {
								   label,
								   ajaxArgs = {},
								   onSuccessRequest = () => {},
								   onFailRequest = () => {},
							   } ) {

	const [
		className,
		setLoadingClass,
		clearLoadingClass
	] = useStateLoadingClasses();

	return <RequestButton
		ajaxArgs={ ajaxArgs }
		label={ label }
		onLoading={ setLoadingClass }
		onSuccessRequest={ () => {
			clearLoadingClass();
			onSuccessRequest()
		} }
		onFailRequest={ () => {
			clearLoadingClass();
			onFailRequest();
		} }
		className={ className }
	>
		<i className="dashicons"/>
	</RequestButton>;
}

export default RequestLoadingButton;