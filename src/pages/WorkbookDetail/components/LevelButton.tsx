import { Grid, Button, Typography } from '@mui/material';

const LevelButton = () => {
  return (
    <Grid container className="detail__level--test">
      <Grid item xs={12}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <span className="detail-difficulty">난이도 : 보통(1283)</span>
        </Typography>
      </Grid>
      <Grid item container xs={6}>
        <Grid item xs={2}>
          <Button className="detail__level__button" size="small">
            쉬움
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button className="detail__level__button detail__level__button--selected" size="small">
            중간
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button className="detail__level__button" size="small">
            어려움
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LevelButton;
