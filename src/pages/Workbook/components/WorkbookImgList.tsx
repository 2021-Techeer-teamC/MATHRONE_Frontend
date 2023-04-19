import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { workbookItem } from '../../../types/workbookItem';

//props로 전달받은 값들
type BookListProps = {
  posts?: workbookItem[];
};

// {}로 감싸주지 않으면 posts: bookItem[]을 인식하지 못함
const BookImgList = ({ posts }: BookListProps) => {
  return (
    <Grid container spacing={2} className="workbook-img-list-div">
      {posts!.map((item) => (
        <Grid item md={4} className="workbook-item">
          <Link to={`/workbook/${item.workbookId}`}>
            <img
              className="workbook-img"
              src={item.profileImg}
              alt={item.title}
              loading="lazy"
            />
            {/* <ImageListItemBar
                title={item.title}
                subtitle={<span>{item.publisher}</span>}
                position="below"
              /> */}
            <div className="workbook-desc">
              <Typography
                className="workbook-title"
                variant="subtitle1"
                gutterBottom
              >
                {item.title}
              </Typography>
              <Typography
                className="workbook-publisher"
                variant="caption"
                display="block"
                gutterBottom
              >
                {item.publisher}
              </Typography>
            </div>
          </Link>
        </Grid>
      ))}
    </Grid>
    // <ImageList sx={{ width: "100%", height: "100%" }} cols={3} gap={10}>
    //   {posts!.map((item) => (
    //     <Link to={`/workbook/${item.workbookId}`}>
    //       <ImageListItem key={item.workbookId}>
    //         <img
    //           src={`${item.profileImg}?w=248&fit=crop&auto=format`}
    //           srcSet={`${item.profileImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
    //           alt={item.title}
    //           loading="lazy"
    //         />
    //         <ImageListItemBar
    //           title={item.title}
    //           subtitle={<span>{item.publisher}</span>}
    //           position="below"
    //         />
    //       </ImageListItem>
    //     </Link>
    //   ))}
    // </ImageList>
  );
};

export default BookImgList;
