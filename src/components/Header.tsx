import getArrayOfMedians from '../helperFunctions/getArrayOfMedians';
import TotalSummary from './TotalSummary';

interface Props {
    projectName: string;
    issues: any[];
}

const Header = (props: Props) => {
    const { projectName, issues } = props;

    let arrayOfMedians = getArrayOfMedians(issues);

    return (
        <div>
            <span>Projekt: {projectName} </span>
            {<TotalSummary estimate={arrayOfMedians} realTime={[9, 3, 1]} />}
        </div>
    );
};

export default Header;
