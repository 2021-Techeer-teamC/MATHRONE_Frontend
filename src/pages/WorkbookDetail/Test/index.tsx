import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  LinearProgress,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { TestDetialDiv, Progressbar } from '../style';

const TestDetail = observer(() => {
  const { workbookStore } = useStore();
  const { currentWorkbook } = workbookStore;

  return (
    <TestDetialDiv>
      <div className="detail__img--test">
        <img
          src={currentWorkbook?.thumbnail}
          alt="test-workbook-thumbnail"
        ></img>
      </div>
      <div className="detail__description">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {`${currentWorkbook?.publisher} - ${currentWorkbook?.category}`}
        </Typography>
        <Typography variant="h5" component="div" color="text.secondary">
          {currentWorkbook?.title}
        </Typography>
        {/* TODO: workbook track */}
        <Progressbar variant="determinate" value={40}/>
        {/* TODO: workbook level 조회 */}
        <div className="detail__startBtn">
          <Button variant="contained" endIcon={<PlayArrowIcon />}>응시하기</Button>
        </div>
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
      </div>
    </TestDetialDiv>
  );
});

export default TestDetail;
