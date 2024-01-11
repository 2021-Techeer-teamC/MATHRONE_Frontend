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
	min-height: 80%;
  `,
);

export const AnswerSheetBox = styled(Box)(
  () => `
	margin-left: 16px;
	margin-right: 20px;

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
  () => `
	text-align: center;
	padding: 0px;
  `,
);

export const SubmitButtonBox = styled(Box)(
  () => `
	display: flex;
	width: 80%;
	margin: 20px auto 0px auto;
	justify-content: space-between;
  `,
);
