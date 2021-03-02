import { RequestButton } from "./request-button";
import { useStateClasses } from "../helpers/hooks-helper";
import { saveGlobalComponent } from "./manager";


export const ValidateButton = ( {
									initialValid,
									label,
									ajaxArgs = {},
									onValid = () => {
									},
									onInvalid = () => {
									},
								} ) => {

	const [
		className,
		setValidClass,
		setInvalidClass,
		setLoadingClass
	] = useStateClasses( initialValid || false );

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
};

saveGlobalComponent( 'JetFBComponents', { RequestButton, ValidateButton } );