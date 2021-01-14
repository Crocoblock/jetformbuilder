const { __ } = wp.i18n;

const { withDispatch, useDispatch } = wp.data;

class Tools {

	static getHelpMessage( from, name ) {
		if ( typeof from.help_messages[ name ] !== 'undefined' ) {
			return from.help_messages[ name ];
		}

		if ( typeof from.help_messages[ attributes.generator_function ] === 'object' ) {
			return from.help_messages[ attributes.generator_function ][ name ];
		}
	}

	static getLabel( meta, attrs ) {
		const label = {};
		label.name = attrs.label;
		if ( attrs.required ) {
			label.mark = JSON.parse( meta._jf_args ).required_mark || '';
		}
		return label;
	}

	static getFormFieldsBlocks( exclude = [] ) {
		const formFields = [];

		let skipFields = ['submit', 'page_break', 'heading', 'group_break', ...exclude];

		Tools.blocksRecursiveIterator( block => {
			if ( block.name.includes( 'jet-forms/' )
				&& block.attributes.name
				&& ! skipFields.find( field => block.name.includes( field ) )
			) {
				formFields.push( {
					blockName: block.name,
					name: block.attributes.name,
					label: block.attributes.label || block.attributes.name,
					value: block.attributes.name,
				} );
			}
		} );

		return formFields;
	}

	static blocksRecursiveIterator( blockParserFunc ) {
		const blocksRecursiveIterator = ( blocks ) => {

			blocks = blocks || wp.data.select( 'core/block-editor' ).getBlocks();

			blocks.map( block =>  {
				blockParserFunc( block );

				if ( block.innerBlocks.length ) {
					blocksRecursiveIterator( block.innerBlocks );
				}
			} );
		};

		blocksRecursiveIterator();
	}

	static getFormFieldsBlocksInclude( include = [] ) {
		const formFields = [];

		Tools.blocksRecursiveIterator( block => {
			if ( block.name.includes( 'jet-forms/' )
				&& ( ! include.length || include.find( field => block.name.includes( field ) ) )
			) {
				formFields.push( {
					clientId: block.clientId,
					innerBlocks: block.innerBlocks,
					label: block.attributes.label || block.attributes.name,
					value: block.attributes.name,
				} );
			}
		} );

		return formFields;
	}

	static getInnerBlocks( clientId ) {
		return wp.data.select("core/editor").getBlock( clientId ).innerBlocks;
	}

	static getFormFieldsBlocksWithPlaceholder( placeholder = '--' ) {
		return [
			{ value: '', label: placeholder },
			...this.getFormFieldsBlocks()
		];
	}

	static getAvailableFields( exclude = [] ) {
		let fields = [];
		const blocks = this.getFormFieldsBlocks( exclude );

		if ( blocks ) {
			blocks.forEach( item => fields.push( item.name ) );
		}
		return fields;
	}

	static getAvailableFieldsString( blockName ) {
		const fields = this.getAvailableFields( [blockName] );

		let fieldsString = [];
		fields.forEach( function ( item ) {
			fieldsString.push( '%FIELD::' + item + '%' );
		} );

		return __( 'Available fields: ' ) + fieldsString.join( ', ' );
	}

	static isEmptyObject( object ) {
		return 'object' === typeof object && Object.keys( object ).length === 0;
	}

	static getFuncCondition = ( nameFunction ) => {
		return new Function( `return window.JetFormBuilderConditions[ '${ nameFunction }' ]` );
	}

	static addConditionForCondType = ( name, callable ) => {
		window.JetFormBuilderConditions = window.JetFormBuilderConditions || {};
		window.JetFormBuilderConditions[ name ] = callable;
	}

	static parseConditionsFunc = ( source ) => {
		const types = [];

		source.forEach( type => {
			if ( type.condition ) {
				if ( Tools.getFuncCondition( type.condition )()( type.value ) ) {
					types.push( type );
				}
			} else {
				types.push( type );
			}
		} );

		return types;

	}

}

export default Tools;