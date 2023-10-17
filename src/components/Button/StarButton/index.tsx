import Rating from '@mui/material/Rating';
import { useStore } from '../../../store';

type StarButtonProps = {
  workbookId: string;
  star: boolean;
};

const StarButton = ({ workbookId, star }: StarButtonProps) => {
  const { workbookStore } = useStore();
  const { starWorkbook, unStarWorkbook } = workbookStore;

  const handleStarClick = (workbookId: string, star: boolean) => {
    if (!star) starWorkbook(workbookId);
    else unStarWorkbook(workbookId);
  };

  return (
    <Rating
      className="workbook-star"
      max={1}
      size="large"
      defaultValue={star ? 1 : 0}
      onClick={() => handleStarClick(workbookId, star)}
    />
  );
};

export default StarButton;
