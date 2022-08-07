import * as React from "react";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import bookItem from "../../../types/bookItem";

//props로 전달받은 값들
type BookListProps = {
  posts: bookItem[];
};

// {}로 감싸주지 않으면 posts: bookItem[]을 인식하지 못함
const BookImgList = ({ posts }: BookListProps) => {
  return (
    <ImageList sx={{ width: "100%", height: "100%" }} cols={3} gap={10}>
      {posts.map((item: bookItem) => (
        <Link to={`/books/${item.workbookId}`}>
          <ImageListItem key={item.workbookId}>
            <img
              src={`${item.profileImg}?w=248&fit=crop&auto=format`}
              srcSet={`${item.profileImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.publisher}</span>}
              position="below"
            />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
};

export default BookImgList;
