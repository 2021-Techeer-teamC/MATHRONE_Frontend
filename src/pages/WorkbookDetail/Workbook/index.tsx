import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store';
import { useParams } from 'react-router-dom';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import {
  Grid,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  ListItemButton,
  ListItemText,
  List,
  Collapse,
  LinearProgress,
} from '@mui/material';
import { WorkbookDetailDiv, Progressbar } from '../style'

const WorkbookDetail = observer(() => {
  const params = useParams();
  const { workbookStore } = useStore();
  const { getCurrentWorkbook, currentWorkbook } = workbookStore;
  const [chapterOpen, setChapterOpen] = useState<Map<string, boolean>>();
  const [open, setOpen] = useState(true);
  const [workbookId, setWorkbookId] = useState<string>('');

  useEffect(() => {
    setWorkbookId(params.id || '');
  }, [params.id]);

  useEffect(() => {
    getCurrentWorkbook(workbookId);
    // TODO: chapter open map 생성
    const chapterOpenMap = currentWorkbook?.chapterGroup.map((group) => {
      // console.log(group);
      let chapterOpenMap = {};
      // chapterOpenMap[group.group] = true;
    });
    // setChapterOpen(chapterOpenMap);
  }, [getCurrentWorkbook, workbookId]);

  useEffect(() => {
    console.log(currentWorkbook);
  }, [currentWorkbook]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChapterClick = (chapterId: string) => {
    window.location.href = `/problem/${workbookId}/${chapterId}`;
  };

  return (
    <>
      <WorkbookDetailDiv>
        <Card className="detail-card-div" sx={{ display: 'flex' }}>
          <CardMedia
            className="detail-img"
            component="img"
            sx={{ width: '250px', borderRadius: 2, boxShadow: 7 }}
            image={currentWorkbook?.thumbnail}
            alt="workbook thumbnail"
          />
          <CardContent className="detail-content" sx={{ width: '50%' }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {`${currentWorkbook?.publisher} - ${currentWorkbook?.category}`}
            </Typography>
            <Typography variant="h5" component="div" color="text.secondary">
              {/*name*/}
              {currentWorkbook?.title}
            </Typography>
            {/* TODO: workbook track */}
            <Progressbar
              variant="determinate"
              value={40}
              color="success"
            />
            <Typography variant="body1" sx={{ mb: 2 }}>
              {/* TODO: 유형에 맞는 content 넣기 */}
              {currentWorkbook?.publisher === 'EBS' && (
                <>
                  -유형·테마편+실전편 구성의 수능 대비 최종 연계교재!
                  <br />
                  <br />
                  ▶핵심 개념 정리와 출제 유형 완벽 공략
                  <br />
                  -주제별로 핵심 개념을 쉽게 정리하고, 유형별 해결
                  전략,자료분석,심화 학습이 가능한 유형별/테마별 특강을 배치
                  <br />
                  -수능 출제 경향 분석에 근거하여 개발한 다양한 유형의 문제를
                  통한 응용력과 탐구력 배양
                  <br />
                  <br />
                  ▶실전 모의고사를 통한 연계교재 학습의 완성
                  <br />
                  -학습 내용을 최종 점검하여 본인의 실력을 테스트하고,수능에
                  대한 실전 감각을 기를 수 있는 실전 모의고사 수록
                </>
              )}
            </Typography>
            {/* <Typography variant="body2"># 수학1 #수학2 #미적분</Typography> */}
            <Typography variant="body2">
              {currentWorkbook?.tags.map((tag) => (
                <span># {tag.name}</span>
              ))}
            </Typography>
            <hr></hr>

            {/* TODO: workbook level 조회 */}
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  <span className="detail-difficulty">난이도 : 보통(1283)</span>
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" color="success" size="small">
                  쉬움
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" color="success" size="small">
                  중간
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" color="success" size="small">
                  어려움
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <div className="detail-chapter-div">
          <Paper className="detail-chapter-paper" elevation={24}>
            {currentWorkbook?.chapterGroup.map((chapterObj) => (
              <div className="chapter-group">
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary={chapterObj.group} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {chapterObj.chapters.map((chapter) => (
                      <ListItemButton
                        sx={{ pl: 6 }}
                        onClick={() => handleChapterClick('02')}
                      >
                        <ListItemText primary={chapter.name} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </div>
            ))}
          </Paper>
        </div>
      </WorkbookDetailDiv>
    </>
  );
});

export default WorkbookDetail;
