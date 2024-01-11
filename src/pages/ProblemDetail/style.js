import styled from 'styled-components';
import { Grid, Box, TableContainer, TableCell } from '@mui/material';

export const ProblemDetailGrid = styled(Grid)(
  () => `
	padding: 20px 30px;
	justify-content: space-between;
	.problem__box--problems {
		position: relative;
	}

	.problem__box--loading {
		margin: auto;
		text-align: center;
	}

	.problem__box--answers {
		box-sizing: border-box;
	}
  `,
);

export const PaginationDiv = styled.div`
	margin-top: 40px;
	position: absolute;
	bottom: 0;
	right: 40%;
`;

export const ProblemCarouselBox = styled(Box)(
  () => `
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1px;
	margin: 1px;
	gap: 20px;
	height: 80%;
  `,
);

export const AnswerSheetBox = styled(Box)(
  () => `
	margin-left: 16px;
	margin-right: 20px;
	border: 5px;
	padding: 15px;
	border-radius: 10px;
	box-shadow:
		0px 2px 1px -1px rgba(0,0,0,0.2),
		0px 1px 1px 0px rgba(0,0,0,0.14),
		0px 1px 3px 0px rgba(0,0,0,0.12);
	
	.MuiTableContainer-root {
		max-height: 600px;
	}
  `,
);

export const TableContainerBox = styled(TableContainer)(
  () => `
	max-height: 600px;

	.MuiTableCell-head {
		border-bottom: 3px solid rgba(224, 224, 224, 1)
	}
  `,
);

export const TableCellCenter = styled(TableCell)(
  ({className}) => `
	text-align: center;
	padding: 0px;

	${className==='table__cell--number' && 
		`:hover {
			color: #BCDCC4;
			cursor: pointer;
		}`
	}

	.table__cell--textfield {
		padding-top: 0px;
		width: 90%;
	}

	.MuiRadio-root.Mui-checked {
		color: #315c72;
	}
  `,
);

export const SubmitButtonBox = styled(Box)(
  () => `
	display: flex;
	width: 80%;
	margin: 20px auto 0px auto;
	justify-content: space-between;

	.MuiButtonBase-root {
		width: 45%;
		border-radius: 10px;
		color: white;
		background: #315c72;
		:hover {
			background: #009688;
		}
	}
  `,
);
