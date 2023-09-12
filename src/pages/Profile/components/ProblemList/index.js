import { Grid, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import List from '@mui/material/List';
// import Gold from '../../../../assets/image/gold-medal.png';
// import Silver from '../../../../assets/image/silver-medal.png';
// import Bronze from '../../../../assets/image/bronze-medal.png';
import Pencil from '../../../../assets/image/pencil.png';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from '@mui/material/Link';
import './style.css';

// only for Profile page
const ProblemList = ({ data, title }) => {
  // let icon = {
  //   1: Bronze,
  //   2: Silver,
  //   3: Gold,
  // };

  return (
    <>
      <div className="problemlist-title-div">
        <label className="problemlist-title">{title}</label>
        <Link className="problemlist-view-more" underline="hover">
          {'더보기'}
        </Link>
      </div>
      {data.length !== 0 ? (
        <List>
          {data.slice(0, 10).map((item) => (
            <ListItem>
              <ListItemText
                primary={item.title + ' ' + item.problemNum + '번'}
                secondary={`점수: ${item.levelOfDiff}`}
              />
              <ListItemIcon>
                <OpenInNewIcon />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      ) : (
        <div className="problemlist-no-data">
          <img src={Pencil} width="100px" alt="pencil" />
          <label className="problemlist-label-none">
            충분한 데이터가 수집되지 않았습니다.
          </label>
        </div>
      )}
    </>
  );
};

export default ProblemList;
