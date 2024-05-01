import { css } from '@linaria/core';

const baseClass = '.wp-block-jet-forms-select-field';

const JfbSelect = css`
    ${ baseClass }[style*="--jfb-input-padding"] & {
        padding-top: var(--jfb-input-padding-top);
        padding-right: var(--jfb-input-padding-right);
        padding-bottom: var(--jfb-input-padding-bottom);
        padding-left: var(--jfb-input-padding-left);
    }

    ${ baseClass }[style*="--jfb-input-background-color"] & {
	    background-color: var(--jfb-input-background-color);
    }

    .jet--ua-safari .jet-form-builder__field-wrap select& {
        -webkit-appearance: none; /* Remove default arrow in Safari */
        background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
        linear-gradient(135deg, currentColor 50%, transparent 50%);
        background-position: calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px);
        background-size: 5px 5px,
        5px 5px;
        background-repeat: no-repeat;
    }

    .rtl.jet--ua-safari .jet-form-builder__field-wrap select& {
        background-position: calc(10% - 20px) calc(1em + 2px), calc(10% - 15px) calc(1em + 2px);
    }

    .wp-core-ui & {
        width: 100%;
        max-width: unset;
    }
`;

export default JfbSelect;