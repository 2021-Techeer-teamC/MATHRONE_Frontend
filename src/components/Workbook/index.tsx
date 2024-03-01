import { useNavigate } from 'react-router-dom';
import { workbookItem } from '../../types/workbookItem';
import StarButton from '../Button/StarButton';
import { WorkbookDiv } from './style.js';

type WorkbookProps = {
  workbook: workbookItem;
  type: string;
};

const Workbook = ({ workbook, type }: WorkbookProps) => {
  const navigate = useNavigate();

  const handleWorkbookClick = () => {
    navigate(`/workbook/${workbook.workbookId}`);
  };

  return (
    <WorkbookDiv>
      <img className="workbook-thumbnail" alt="workbook-thumbnail" src={workbook.thumbnail} />
      <StarButton workbookId={workbook.workbookId} star={workbook.star} />
      <div className="workbook-thumbnail-overlay" onClick={handleWorkbookClick}>
        <div className="workbook-title">{workbook.title}</div>
      </div>
    </WorkbookDiv>
  );
};

export default Workbook;
