import styled from 'styled-components';
import { Grid, Box } from '@mui/material';

export const ProblemDetailGrid = styled(Grid)(
  () => `
	padding: 20px 30px;

	.problem__box--left {
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