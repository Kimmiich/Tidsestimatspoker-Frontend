import getArrayOfMedians from '../helperFunctions/getArrayOfMedians';
import getArrayOfActuals from '../helperFunctions/getArrayOfActuals';
import TotalSummary from './TotalSummary';

interface Props {
    projectName: string;
    issues: any[];
}

const Header = (props: Props) => {
    const { projectName, issues } = props;

    let arrayOfMedians = getArrayOfMedians(issues);
    let arrayOfActuals = getArrayOfActuals(issues)
    
    return (
        <div>
            <span>Projekt: {projectName} </span>
            {<TotalSummary estimate={arrayOfMedians} realTime={arrayOfActuals} />}
        </div>
    );
};

export default Header;
