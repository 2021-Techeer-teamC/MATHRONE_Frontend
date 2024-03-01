import { useNavigate } from 'react-router-dom';
import { Button, Grid, Paper, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { PaymentContainer } from '../style.js';
import ResultHeader from '../components/ResultHeader';

const Success = () => {
  const navigate = useNavigate();

  return (
    <PaymentContainer>
      <Paper elevation={3} className="profile-paper">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={6} md={8}>
            <ResultHeader />
            <CheckCircleIcon className="success_icon" />
            <Typography variant="h5" gutterBottom>
              결제에 성공하였습니다
            </Typography>
            <Button variant="contained" className="success_button" onClick={() => navigate('/')}>
              Home으로 돌아가기
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </PaymentContainer>
  );
};

export default Success;
