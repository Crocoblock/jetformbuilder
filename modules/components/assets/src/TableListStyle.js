import { css } from '@linaria/core';

const TableListStyle = {
	Container: css`
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding: 1em;
	`,
	Wrap: css`
		width: calc(100% - 2px);
		position: relative;
		left: 1px;
	`,
	Label: css`
		padding-bottom:10px;
		white-space:normal;
	`,
	WhiteSpaceNormal: css`
		white-space:normal;
	`,
	Card: css`
		padding:10px;
	`,
	Th: css`
		border-bottom:1px solid #ccc;
	`,
	ThItem: css`
		flex:1;
		padding:10px;
		font-weight:500;
	`,
	Td: css`
		padding-bottom:10px;
		border-bottom:1px solid #ccc;
		&:last-child {
			border-bottom:none;
			padding-bottom:0;
		}
	`,
	TdItem: css`
		flex-basis:50%;
	`,
};

export default TableListStyle;