import { ReactNode } from 'react';
import { StyledPaper } from './style';

type ElevationPaperProps = {
  children: ReactNode;
}

const ElevationPaper = ({ children }: ElevationPaperProps) => {
  return (
    <StyledPaper elevation={3}>
		  {children}
	  </StyledPaper>
  );
}

export default ElevationPaper;
