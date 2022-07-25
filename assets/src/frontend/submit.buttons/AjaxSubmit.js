import BaseSubmit from './BaseSubmit';

class AjaxSubmit extends BaseSubmit {

	onSubmit( event ) {
		event.preventDefault();

		const { rootNode: form } = this.root;

		if ( form.checkValidity && form.reportValidity && ! form.checkValidity() ) {
			form.reportValidity();

			return;
		}
	}
}