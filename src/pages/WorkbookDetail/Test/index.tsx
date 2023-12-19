import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store';
import { TextField, InputAdornment, Button, Typography, Tab, Box } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { TestDetialDiv, Progressbar } from '../style';
import LevelButton from '../components/LevelButton';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const TestDetail = observer(() => {
  const navigate = useNavigate();
  const { workbookStore } = useStore();
  const { currentWorkbook } = workbookStore;
  const [value, setValue] = useState<string>('test_mode');
  const [timer, setTimer] = useState<number>(100);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleNormalModeClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/problem/${currentWorkbook?.workbookId}`);
  };

  const handleTimerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimer(Number(event.target.value));
  };

  return (
    <TestDetialDiv>
      <div className="detail__img--test">
        <img src={currentWorkbook?.thumbnail} alt="test-workbook-thumbnail"></img>
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
        <LevelButton />
        <div className="detail__tab--test">
          <TabContext value={value}>
            <Box className="detail__tab__box">
              <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                <Tab label="테스트 모드" value="test_mode" />
                <Tab label="일반 풀이 모드" value="chapter_mode" />
              </TabList>
            </Box>
            <TabPanel className="detail__tab__panel" value="test_mode">
              <Typography variant="subtitle2" gutterBottom>
                테스트 모드는 실제 모의고사 시간에 맞춰 타이머를 세팅 후 시험을 시작할 수 있는 모드입니다.
              </Typography>
              <div className="detail__timer">
                <TextField
                  id="test-time"
                  label="제한시간"
                  variant="standard"
                  defaultValue={timer}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">분</InputAdornment>,
                  }}
                  onChange={handleTimerChange}
                />
                <div className="detail__timer__label">원하는 소요시간을 입력하세요(기본 100분으로 설정되어있음)</div>
              </div>
              <div className="detail__startBtn">
                <Button variant="contained" endIcon={<PlayArrowIcon />}>
                  응시하기
                </Button>
              </div>
            </TabPanel>
            <TabPanel className="detail__tab__panel" value="chapter_mode">
              <Typography variant="subtitle2" gutterBottom>
                테스트 모드와 달리 일반 모드는 시간 제한 없이 모든 문제를 자유롭게 풀어볼 수 있는 모드입니다.
              </Typography>
              <div className="detail__startBtn">
                <Button variant="contained" endIcon={<PlayArrowIcon />} onClick={handleNormalModeClick}>
                  일반 모드로 풀어보기
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
