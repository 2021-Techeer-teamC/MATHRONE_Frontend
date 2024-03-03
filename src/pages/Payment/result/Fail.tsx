import { useNavigate } from 'react-router-dom';
import { Button, Grid, Paper, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { PaymentContainer } from '../style.js';
import ResultHeader from '../components/ResultHeader';

const Fail = () => {
  const navigate = useNavigate();
  return (
    <PaymentContainer>
      <Paper elevation={3} className="profile-paper">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={6} md={8}>
            <ResultHeader />
            <WarningIcon className="fail_icon" />
            <Typography variant="h5" gutterBottom>
              결제에 실패했습니다.
            </Typography>
            <Button
              variant="contained"
              className="fail_button"
              onClick={() => navigate('/')}
            >
              결제 페이지로 돌아가기
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </PaymentContainer>
  );
};

export default Fail;
