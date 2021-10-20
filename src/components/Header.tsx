import TotalSummary from './TotalSummary';

interface Props {
  projectName: string;
}

const Header = (props: Props) => {
  const { projectName } = props;
  return (
    <div>
      <span>
        Projekt: {projectName} {' '}
      </span>
      {<TotalSummary estimate={[5, 6, 8]} realTime={[9, 3, 1]} />}
    </div>
  );
};

export default Header;
