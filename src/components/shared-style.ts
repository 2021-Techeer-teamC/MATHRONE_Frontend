import styled from 'styled-components';

interface FlexDivProps {
  gap?: number;
}

export const FlexDiv = styled.div<FlexDivProps>`
  display: flex;
  gap: ${(props) => props.gap? props.gap : 50}px;

  & .flex__col--fixed {
    width: 170px;
  }
`;