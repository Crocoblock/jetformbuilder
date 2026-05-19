import { __ } from '@wordpress/i18n';

import { ToggleControl } from '@wordpress/components';

const FLAGS_SOURCE = 'single_value_as_array';

function SingleValueAsArrayToggle({
    fieldName,
    getMapField,
    setMapField,
    showHelp = false,
}) {

    return (
        <ToggleControl
            label={__('Save single value as array', 'jet-form-builder')}
            help={
                showHelp
                    ? __('Other target field settings may affect whether the value is saved as an array.', 'jet-form-builder')
                    : undefined
            }
            checked={!!getMapField({
                source: FLAGS_SOURCE,
                name: fieldName,
            })}
            onChange={value => setMapField({
                source: FLAGS_SOURCE,
                nameField: fieldName,
                value: !!value,
            })}
        />
    );

}

export default SingleValueAsArrayToggle;