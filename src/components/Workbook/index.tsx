import Rating from '@mui/material/Rating';
import { useStore } from '../../store';
import { workbookItem } from '../../types/workbookItem';
import { WorkbookDiv } from './style.js';

type WorkbookProps = {
  workbook: workbookItem;
  type: string;
};

const Workbook = ({ workbook, type }: WorkbookProps) => {
  const { workbookStore } = useStore();
  const { starWorkbook, unStarWorkbook } = workbookStore;

  const handleStarClick = (workbookId: string, star: boolean) => {
    if (!star) starWorkbook(workbookId);
    else unStarWorkbook(workbookId);
  };

  return (
    <WorkbookDiv>
      <img
        className="workbook-thumbnail"
        alt="workbook-thumbnail"
        src={workbook.thumbnail}
      />
      <Rating
        className="workbook-star"
        max={1}
        size="large"
        defaultValue={workbook.star ? 1 : 0}
        onClick={() => handleStarClick(workbook.workbookId, workbook.star)}
      />
      <div className="workbook-thumbnail-overlay">
        <div className="workbook-title">{workbook.title}</div>
      </div>
    </WorkbookDiv>
  );
};

export default Workbook;
