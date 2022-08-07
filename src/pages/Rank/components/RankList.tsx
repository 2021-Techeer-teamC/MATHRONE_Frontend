import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Gold from "../../../assets/image/gold-medal.png";
import Silver from "../../../assets/image/silver-medal.png";
import Bronze from "../../../assets/image/bronze-medal.png";

interface rankData {
  user_name: string;
  correct_count: number;
  try_count: number;
}

type dataList = {
  posts: rankData[];
};

let count: number;

interface data {
  rank: number;
}

const Medal = (rank: data) => {
  // 순위에 따라서 메달 이미지 변경
  if (rank.rank - 1 === 1)
    return (
      <CardMedia
        component="img"
        sx={{ width: 30 }}
        image={Gold}
        alt="gold medal"
      />
    );
  else if (rank.rank - 1 < 5) {
    return (
      <CardMedia
        component="img"
        sx={{ width: 30 }}
        image={Silver}
        alt="silver medal"
      />
    );
  } else if (rank.rank - 1 < 11) {
    return (
      <CardMedia
        component="img"
        sx={{ width: 30 }}
        image={Bronze}
        alt="bronze medal"
      />
    );
  } else {
    return <Typography />;
  }
};

const RankList = ({ posts }: dataList) => {
  count = 1;
  return (
    <Container>
      {posts.map((data: rankData) => (
        <Card
          key={data.user_name}
          elevation={1}
          sx={{
            display: "grid",
            gridTemplateColumns: "0.5fr 0.5fr 3fr 1fr 1fr",
            mb: 1,
            p: 2,
          }}
        >
          <Typography variant="body1" component="p">
            {count++}
          </Typography>
          <Medal rank={count} />
          {/* <Typography/> */}
          <Typography variant="body1" component="p">
            {data.user_name}
          </Typography>
          <Typography variant="body1" component="p">
            {data.try_count}
          </Typography>
          <Typography variant="body1" component="p">
            {data.correct_count}
          </Typography>
        </Card>
      ))}
    </Container>
  );
};

export default RankList;
