import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store';
import { Grid, Button, Typography, Tab, Box } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { TestDetialDiv, Progressbar } from '../style';

const TestDetail = observer(() => {
  const { workbookStore } = useStore();
  const { currentWorkbook } = workbookStore;
  const [value, setValue] = useState('test_mode');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
        <Progressbar variant="determinate" value={40} />
        {/* TODO: workbook level 조회 */}
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
              <Button
                className="detail__level__button detail__level__button--selected"
                size="small"
              >
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
        <div className="detail__tab--test">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="테스트 모드" value="test_mode" />
                <Tab label="단원별 풀이 모드" value="chapter_mode" />
              </TabList>
            </Box>
            <TabPanel value="test_mode">
              <div className="detail__startBtn">
                <Button variant="contained" endIcon={<PlayArrowIcon />}>
                  응시하기
                </Button>
              </div>
            </TabPanel>
            <TabPanel value="chapter_mode">
              <div className="detail__startBtn">
                <Button variant="contained" endIcon={<PlayArrowIcon />}>
                  단원별로 풀어보기
                </Button>
              </div>
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </TestDetialDiv>
  );
});

export default TestDetail;
