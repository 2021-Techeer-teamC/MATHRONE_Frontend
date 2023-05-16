import * as React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const theme = createTheme();

export default function Error(props: { sections: any }) {
  //시도 중인 문제집

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <p>예상하지 못한 에러가 발생 했습니다.</p>
      </Container>
    </ThemeProvider>
  );
}

const recData: object[] = [];
