import { Container, styled } from '@mui/material';

export const NavBarContainer = styled(Container)(
  () => `
  margin-bottom: 40px !important;

  .navbar {
    display: flex;
    padding-right: 40px;
    padding-left: 40px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px !important;

    border-radius: 20px;
    border: 4px solid #315c72;
    background: #ffffff;
    box-shadow: 0px 24px 48px rgba(21, 21, 21, 0.06),
      0px 12px 24px rgba(21, 21, 21, 0.04), 0px 0px 16px rgba(21, 21, 21, 0.02);
    backdrop-filter: blur(90px) !important;
    margin-bottom: 16px;
  }
  .navbar-link {
    text-decoration: none;
    color: #151515;
    padding: 10px;
  
  }
  .navbar-link:hover {
    border-bottom: 3px solid #bcdcc4;
  }
  `,
);
