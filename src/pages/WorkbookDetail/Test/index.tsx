import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store';
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
import { green } from '@mui/material/colors';
import '../style.css';

const TestDetail = observer(() => {
  const { workbookStore } = useStore();
  const { currentWorkbook } = workbookStore;
  const [chapterOpen, setChapterOpen] = useState<Map<string, boolean>>();
  const [open, setOpen] = useState(true);
  const [workbookId, setWorkbookId] = useState<string>('');
  const greenProgress = green[500]; // #f44336

  return (
    <>
      <div style={{ paddingBottom: '40px' }}>
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
              {currentWorkbook?.title}
            </Typography>
            {/* TODO: workbook track */}
            <LinearProgress
              className="detail-progress-bar"
              variant="determinate"
              value={40}
              color="success"
              sx={{ mb: 2 }}
            />
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
      </div>
    </>
  );
});

export default TestDetail;
