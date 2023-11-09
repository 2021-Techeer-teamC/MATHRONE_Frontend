import { useEffect, useState } from 'react';
import {
  Card,
  Box,
  Typography,
  Container,
  CardContent,
  CardMedia,
} from '@mui/material';
import './style.css';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import RankList from './components/RankList';
import Trophy from '../../assets/image/trophy.png';
import rankingService from '../../services/rankingService';
import rankData from '../../types/rankData';
import myRankData from '../../types/myRankData';

export default function Rankpage() {
  const [allRank, setAllRank] = useState<rankData[] | any>();
  const [myRank, setMyRank] = useState<myRankData>();

  const getRank = async () => {
    const res = await rankingService.getMyRanking();
    setMyRank(res.data);
    const response = await rankingService.getAllRankings();
    setAllRank(response.data);
  };

  useEffect(() => {
    getRank();
  }, []);

  return (
    <div>
      <Header />
      <NavBar />
      <Container>
        <Box sx={{ display: 'flex', paddingBottom: 0.1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', pt: 5 }}>
              <CardMedia
                component="img"
                sx={{ width: 90, pr: 2 }}
                image={Trophy}
                alt="Live from space album cover"
              />
              <Typography variant="h4">Ranking</Typography>
            </Box>
            <CardContent>
              <Typography variant="h6" component="div" align="left">
                맞은 문제 별 전체 순위
              </Typography>
            </CardContent>
          </Box>
        </Box>

        <Card className="rank-div-card" sx={{ p: 1 }}>
          <Card
            elevation={5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              pb: 2,
              pt: 2,
              mb: 3,
              pr: 5,
              pl: 5,
            }}
          >
            <div className="rank-div-header">
              <Typography variant="body1" component="p">
                랭킹
              </Typography>
              <Typography variant="body1" component="p"></Typography>
              <Typography variant="body1" component="p">
                유저 닉네임
              </Typography>
              <Typography variant="body1" component="p">
                맞은 문제 수
              </Typography>
              <Typography variant="body1" component="p">
                시도한 문제 수
              </Typography>
            </div>
          </Card>

          <RankList posts={allRank} />
        </Card>

        <Card
          variant="outlined"
          sx={{
            display: 'grid',
            gridTemplateColumns: '0.5fr 0.5fr 3fr 1fr 1fr',
            mt: 2,
            pt: 3,
            pb: 3,
            pl: 5,
            pr: 6,
          }}
        >
          <Typography variant="body1" component="p">
            {myRank?.rank}
          </Typography>
          <Typography />
          <Typography variant="body1" component="p">
            {myRank?.user_name}
          </Typography>
          <Typography variant="body1" component="p">
            {myRank?.correct_count}
          </Typography>
          <Typography variant="body1" component="p">
            {myRank?.try_count}
          </Typography>
        </Card>
        <Footer />
      </Container>
    </div>
  );
}
