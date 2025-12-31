import {
	Label,
	RowControl,
} from 'jet-form-builder-components';
import { css } from '@linaria/core';
import { __ } from '@wordpress/i18n';
import { useInstanceId } from '@wordpress/compose';
import { ToggleControl } from '@wordpress/components';

const helpStyle = css`
    .components-toggle-control__help {
        margin-inline-start: 0px;
    }
`;

function RedirectNewTabRow( { settings, onChangeSettingObj } ) {
	const id = useInstanceId( RowControl, 'jfb-control' );

	return <RowControl createId={ false }>
		<Label htmlFor={ id }>
			{ __( 'Open in New Tab', 'jet-form-builder' ) }
		</Label>
		<ToggleControl
			id={ id }
			className={ helpStyle }
			help="Works with AJAX submit type only."
			checked={ settings.open_in_new_tab || false }
			onChange={
				open_in_new_tab => onChangeSettingObj( { open_in_new_tab } )
			}
		/>
	</RowControl>;
}

export default RedirectNewTabRow;