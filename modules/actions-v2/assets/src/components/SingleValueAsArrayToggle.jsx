import { __ } from '@wordpress/i18n';

import { ToggleControl } from '@wordpress/components';

const FLAGS_SOURCE = 'single_value_as_array';

function SingleValueAsArrayToggle({
    fieldName,
    getMapField,
    setMapField,
}) {

    return (
        <ToggleControl
            label={__('Save single value as array', 'jet-form-builder')}
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