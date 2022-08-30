class DynamicMacro {

	constructor() {
		this.inputs = [];
	}

	setRoot( root ) {
		this.root = root;
	}

	setInitial( initial ) {
		this.initial = initial;
	}

	/**
	 * @param input {InputData}
	 * @returns {boolean}
	 */
	isSupported( input ) {
		return true;
	}

	/**
	 * @param input {InputData}
	 * @param comment {Node}
	 */
	observeComment( input, comment ) {
		this.setInitial( comment.nodeValue );
		this.setInputs();

		const wrapper     = document.createElement( 'span' );
		wrapper.innerHTML = this.getTemplate();

		let prevSibling = comment.parentNode.insertBefore(
			wrapper,
			comment,
		);

		input.watch( () => {
			prevSibling.innerHTML = this.getTemplate();
		} );
	}

	observeMacroAttr( node, attrName ) {
		this.setInitial( node[ attrName ] ?? '' );
		this.setInputs();

		for ( const input of this.inputs ) {
			input.watch( () => {
				node[ attrName ] = this.getTemplate();
			} );
		}
	}

	getTemplate() {
		const { applyFilters } = wp.hooks;

		let value = this.initial;

		for ( const input of this.inputs ) {
			let fieldValue = applyFilters(
				'jet.fb.macro.field.value',
				false,
				jQuery( input.nodes[ 0 ] ),
			);

			if ( false === fieldValue ) {
				fieldValue = this.getValueFromField( input );
			}

			value = this.replaceMacros( value, input.getName(), fieldValue );
		}

		return value;
	}

	setInputs() {
		const fieldNames = this.getFieldNames();

		for ( const fieldName of fieldNames ) {
			const input = this.root.getInput( fieldName );

			if ( !input ) {
				continue;
			}

			this.inputs.push( input );
		}
	}

	getFieldNames() {
		const matches = this.initial.match(
			/JFB_FIELD::([\w\-]+)>?/gi,
		);

		if ( !matches ) {
			return [];
		}

		return matches.map(
			item => item.replace( /-->|JFB_FIELD::/gi, '' ),
		);
	};

	replaceMacros( replaceFrom, fieldName, fieldValue ) {
		const regExp = new RegExp(
			`(<!--\\s*)?JFB_FIELD::${ fieldName }(\\s*-->)?`,
			'gi',
		);
		return replaceFrom.replace( regExp, fieldValue );
	};

	/**
	 * @param input {InputData}
	 * @returns {*}
	 */
	getValueFromField( input ) {
		return input.value.current;
	}

}

export default DynamicMacro;