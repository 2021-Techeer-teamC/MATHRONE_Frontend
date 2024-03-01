import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../store';
import { createTheme } from '@mui/material/styles';
import WorkbookSlider from '../../../../components/WorkbookSlider/index';
import { Subtitle } from '../../../../components/Typography';

const WorkbookSection = observer(() => {
  const { workbookStore } = useStore();
  const { triedWorkbooks, starWorkbooks } = workbookStore;

  return (
    <>
	  <div>
		<Subtitle>시도 중인 문제집</Subtitle>
		<WorkbookSlider id="try-workbook" workbooks={triedWorkbooks} />
	  </div>
	  <div>
		<Subtitle>즐겨찾기 문제집</Subtitle>
		<WorkbookSlider id="star-workbook" workbooks={starWorkbooks} />
	  </div>
	</>
  );
});

export default WorkbookSection;
