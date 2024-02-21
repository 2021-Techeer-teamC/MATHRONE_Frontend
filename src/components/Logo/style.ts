import styled from 'styled-components';

interface LogoTextProps {
	size?: number;
}

export const LogoText = styled.div<LogoTextProps>`
  font-family: "ABeeZee";
  font-size: ${(props)=> props.size || '20'}px;
  font-style: italic;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  filter: drop-shadow(1px 1px 1px beige);
  margin-bottom: 10px;

  a {
	text-decoration: none;
    color: #151515;
  }

  .logo__text--dot {
	color: #315C72;
	font-size: 40px;
  }
`;