import ReportingInterface from './ReportingInterface';

class BrowserReporting extends ReportingInterface {

	isSupported( node, input ) {
		return true;
	}

	report( validationErrors ) {
		this.getNode().reportValidity();
	}

	isValid() {
		if ( !this.getNode()?.checkValidity ) {
			return [];
		}
		return this.getNode().checkValidity() ? [] : [ true ];
	}

	clearReport() {
		// browser automatically hide tooltip messages
	}

}

export default BrowserReporting;