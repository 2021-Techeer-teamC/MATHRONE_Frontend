import styled from 'styled-components';
import { Grid } from '@mui/material';

export const ProblemDetailGrid = styled(Grid)(
  () => `
	padding: 20px 30px;

	.problem__box--loading {
		margin: auto;
		text-align: center;
	}
  `,
);

export const PaginationDiv = styled.div`
	margin-top: 40px;
`;
