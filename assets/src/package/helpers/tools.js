

const { __ } = wp.i18n;

class Tools {

	static getLabel( meta, attrs ) {
		const label = {};
		label.name = attrs.label;
		if ( attrs.required ) {
			label.mark = JSON.parse( meta._jf_args ).required_mark || '';
		}
		return label;
	}

	static withPlaceholder( source, label = '--', value = '' ) {
		return [
			{ label, value },
			...source
		];
	}

	static isEmptyObject( object ) {
		return 'object' === typeof object && Object.keys( object ).length === 0;
	}

	static getFuncCondition( nameFunction ) {
		return new Function( `return window.JetFormBuilderConditions[ '${ nameFunction }' ]` );
	}

	static addConditionForCondType( name, callable ) {
		window.JetFormBuilderConditions = window.JetFormBuilderConditions || {};
		window.JetFormBuilderConditions[ name ] = callable;
	}

	static parseConditionsFunc( source ) {
		const types = [];

		source.forEach( type => {
			if ( type.condition ) {
				if ( Tools.getFuncCondition( type.condition )()( type.value ) ) {
					types.push( type );
				}
			}
			else {
				types.push( type );
			}
		} );

		return types;

	}
}

export const event = name => {
	const initializeCallbacksEvent = new Event( name );
	return () => document.dispatchEvent( initializeCallbacksEvent );
};

export const listen = ( name, func ) => {
	document.addEventListener( name, func );
}

export default Tools;