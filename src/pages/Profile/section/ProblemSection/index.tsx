import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../store';
import ProblemList from '../../../../components/ProblemList';

const ProblemSection = observer(() => {
  const { problemStore } = useStore();
  const { triedProblems } = problemStore;

  return (
	  <div>
      <ProblemList data={triedProblems} title="시도한 문제" />
    </div>
  );
});

export default ProblemSection;
