import ReportingInterface from './ReportingInterface';

class BrowserReporting extends ReportingInterface {

	isSupported( node, input ) {
		return true;
	}

	report() {
		this.getNode().reportValidity();
	}

	isValid() {
		return this.getNode().checkValidity();
	}

}

export default BrowserReporting;