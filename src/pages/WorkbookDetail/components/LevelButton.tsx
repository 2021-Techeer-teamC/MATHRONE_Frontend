import { Grid, Button, Typography } from '@mui/material';
import { LevelButtonGrid } from '../style';

const LevelButton = () => {
  return (
    <LevelButtonGrid container>
      <Grid item xs={12}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <span>난이도 : 보통(1283)</span>
        </Typography>
      </Grid>
      <Grid item container justifyContent="flex-start">
        <Grid item>
          <Button className="detail__level__button" size="small">
            쉬움
          </Button>
        </Grid>
        <Grid item>
          <Button className="detail__level__button detail__level__button--selected" size="small">
            중간
          </Button>
        </Grid>
        <Grid item>
          <Button className="detail__level__button" size="small">
            어려움
          </Button>
        </Grid>
      </Grid>
    </LevelButtonGrid>
  );
};

export default LevelButton;
