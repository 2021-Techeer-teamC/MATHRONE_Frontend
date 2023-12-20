import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';
import { useStore } from '../../../store';

type StarButtonProps = {
  workbookId: string;
  star: boolean;
};

const StarButton = ({ workbookId, star }: StarButtonProps) => {
  const { workbookStore } = useStore();
  const { starWorkbook, unStarWorkbook } = workbookStore;
  const [starClicked, setStarClicked] = useState<boolean>(star);

  useEffect(() => {
    setStarClicked(star);
  }, [star, workbookId]);

  const handleStarClick = (newValue: number | null) => {
    setStarClicked(newValue ? true : false);
    if (!starClicked) starWorkbook(workbookId);
    else unStarWorkbook(workbookId);
  };

  return <Rating className="workbook-star" max={1} size="large" value={starClicked ? 1 : 0} onChange={(_event, newValue) => handleStarClick(newValue)} />;
};

export default StarButton;
