
const { __ } = wp.i18n;

class Tools {

    static getHelpMessage( from, name ) {
        if( typeof from.help_messages[ name ] !== 'undefined' ) {
            return from.help_messages[ name ];
        }

        if ( typeof from.help_messages[ attributes.from_generator__function ] === 'object' ) {
            return from.help_messages[attributes.from_generator__function][ name ];
        }
    }

    static getFormFieldsBlocks() {
        const formFields = [];

        const blocksRecursiveIterator = ( blocks ) => {

            blocks = blocks || wp.data.select( 'core/block-editor' ).getBlocks();

            blocks.map( ( block ) => {

                if ( block.name.includes( 'jet-forms/' ) && block.attributes.name ) {
                    formFields.push( {
                        name: block.attributes.name,
                        label: block.attributes.label || block.attributes.name,
                    } );
                }

                if ( block.innerBlocks.length ) {
                    blocksRecursiveIterator( block.innerBlocks );
                }

            } );

        };

        blocksRecursiveIterator();
        return formFields;
    }

    static getAvailableFields() {

        let fields = [];
        let skipFields = [ 'submit', 'page_break', 'heading', 'group_break', 'repeater_end' ];

        const blocks = this.getFormFieldsBlocks();

        if ( blocks ) {
            blocks.forEach( function( item ) {
                if ( -1 === skipFields.indexOf( item.name ) ) {
                    fields.push( item.name );
                }
            });
        }
        return fields;
    }

    static getAvailableFieldsString() {
        const fields = this.getAvailableFields();

        let fieldsString = __( 'Available fields: ' );
        fields.forEach( function ( item ) {
            fieldsString += '%FIELD::' + item + '%, ';
        } );

        return  fieldsString;
    }
}

export default Tools;