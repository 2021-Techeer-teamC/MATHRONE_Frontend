import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useEffect } from "react";
import "./style.css";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import RankList from "./components/RankList";
import Trophy from "../../assets/image/trophy.png";

interface rankData {
  user_name: string;
  correct_count: number;
  try_count: number;
}

// interface sections {
//   title: string;
//   url: string;
// }

export default function Rankpage(props: { sections: any }) {
  const [rankDatas, setRankDatas] = React.useState([...rankData]);
  const [res, setRes] = React.useState([...rankDatas]);

  useEffect(() => {
    // axios 요청보낼 주소 URI? 내 점수 조회를 위한 나의 user_name?
    // axios.get(url, { my_user_name }).then((rank) => {
    //  setItemDatas([...rank])
    //   setResult(rankDatas);
    // 랭크데이터 받아오기
    setRes(rankDatas);
  }, []);

  return (
    <div>
      <Header title="MATHrone" sections={props.sections} />
      <NavBar sections={props.sections} />
      <Container>
        <Box sx={{ display: "flex", paddingBottom: 0.1 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center", pt: 5 }}>
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
              display: "flex",
              flexDirection: "column",
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

          <RankList posts={res} />
        </Card>

        <Card
          variant="outlined"
          sx={{
            display: "grid",
            gridTemplateColumns: "0.5fr 0.5fr 3fr 1fr 1fr",
            mt: 2,
            pt: 3,
            pb: 3,
            pl: 5,
            pr: 6,
          }}
        >
          <Typography variant="body1" component="p">
            10000
          </Typography>
          <Typography />
          <Typography variant="body1" component="p">
            its meeee
          </Typography>
          <Typography variant="body1" component="p">
            100
          </Typography>
          <Typography variant="body1" component="p">
            124
          </Typography>
        </Card>
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </Container>
    </div>
  );
}

const rankData: rankData[] = [
  {
    user_name: "tester1",
    correct_count: 904,
    try_count: 1000,
  },
  {
    user_name: "tester2",
    correct_count: 860,
    try_count: 1200,
  },
  {
    user_name: "tester3",
    correct_count: 123,
    try_count: 506,
  },
  {
    user_name: "tester4",
    correct_count: 123,
    try_count: 506,
  },
  {
    user_name: "tester5",
    correct_count: 123,
    try_count: 506,
  },
  {
    user_name: "tester6",
    correct_count: 123,
    try_count: 506,
  },
  {
    user_name: "tester7",
    correct_count: 123,
    try_count: 506,
  },
  {
    user_name: "tester8",
    correct_count: 123,
    try_count: 506,
  },
  {
    user_name: "tester9",
    correct_count: 123,
    try_count: 506,
  },
  {
    user_name: "tester10",
    correct_count: 123,
    try_count: 506,
  },
];
