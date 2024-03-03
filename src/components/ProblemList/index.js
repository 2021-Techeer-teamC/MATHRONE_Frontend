import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Pencil from '../../assets/image/pencil.png';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { UnderlinedSubtitle, ViewMoreLink } from '../../components/Typography';
import './style.css';

const ProblemList = ({ data, title }) => {
  const navigate = useNavigate();

  const handleViewProblemClick = (workbookId, chapterId) => {
    navigate(`/problem/${workbookId}/${chapterId}`);
  };

  return (
    <>
      <div className="problemlist-title-div">
        <UnderlinedSubtitle>{title}</UnderlinedSubtitle>
        <ViewMoreLink underline="hover">더보기</ViewMoreLink>
      </div>
      {data.length !== 0 ? (
        <List>
          {data.slice(0, 10).map((item) => (
            <ListItem>
              <ListItemText
                primary={item.workbook.title + ' ' + item.problemNum + '번'}
                secondary={`점수: ${item.level}`}
              />
              <ListItemIcon
                onClick={() =>
                  handleViewProblemClick(item.workbook.id, item.chapter.id)
                }
              >
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
