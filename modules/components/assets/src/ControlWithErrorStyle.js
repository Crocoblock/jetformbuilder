/* eslint-disable import/no-extraneous-dependencies */
import { css } from '@linaria/core';

const ClearBaseControlStyle = css`
    .components-input-control__backdrop.components-input-control__backdrop,
    .components-textarea-control__input,
    .components-text-control__input[type=text],
    .components-text-control__input[type=number],
    .components-combobox-control__suggestions-container {
        box-shadow: 0 0 0 0.5px #cc1818;
        border-color: #cc1818;
        border-style: solid;
        border-width: 1px;
    }
`;

export default ClearBaseControlStyle;
