import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { workbookItem } from '../../../types/workbookItem';
import StarButton from '../../../components/Button/StarButton';

//props로 전달받은 값들
type BookListProps = {
  workbookList?: workbookItem[];
};

// {}로 감싸주지 않으면 posts: bookItem[]을 인식하지 못함
const WorkbookImgList = ({ workbookList }: BookListProps) => {
  return (
    <Grid container spacing={2} className="workbook-img-list-div">
      {workbookList?.map((item) => (
        <Grid item md={4} className="workbook-item">
          <div className="workbook-img-div">
            <Link to={`/workbook/${item.workbookId}`}>
              <img
                className="workbook-img"
                src={item.thumbnail}
                alt={item.title}
                loading="lazy"
              />
            </Link>
            <StarButton workbookId={item.workbookId} star={item.star} />
          </div>
          <div className="workbook-desc">
            <div className="workbook-title-div">
              <Link to={`/workbook/${item.workbookId}`}>
                <Typography
                  className="workbook-title"
                  variant="subtitle1"
                  gutterBottom
                >
                  {item.title}
                </Typography>
              </Link>
            </div>
            <Typography
              className="workbook-publisher"
              variant="caption"
              display="block"
              gutterBottom
            >
              [{item.publisher}]
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default WorkbookImgList;
