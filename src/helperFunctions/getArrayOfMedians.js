import { median } from './calculations';

function getArrayOfMedians(issues) {
    let arrayOfHourObjs = issues.map((issue) => {
        return {
            emil: issue.emil || 0,
            bjorn: issue.bjorn || 0,
            stina: issue.stina || 0,
            love: issue.love || 0,
            kimmie: issue.kimmie || 0,
        };
    });

    let arrayOfMedians = [];
    for (const hourObj of arrayOfHourObjs) {
        let innerTotal = [];
        for (const number in hourObj) {
            innerTotal.push(hourObj[number]);
        }
        let medianOfIssue = median(innerTotal);
        arrayOfMedians.push(medianOfIssue);
    }
    return arrayOfMedians;
}

export default getArrayOfMedians;
