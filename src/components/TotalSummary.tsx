import React from 'react';
import { totalTime, diffTotal } from '../helperFunctions/calculations';

interface Props {
    estimate: number[];
    realTime: number[];
}

const TotalSummary = (props: Props) => {
    const { estimate, realTime } = props;

    //Uträkningar på vardera värde
    let totalEstimate = totalTime(estimate);
    let totalReal = totalTime(realTime);
    let totalDiff = diffTotal(totalEstimate, totalReal);

    return (
        <>
            <section>
                <h3>Totalt</h3>
                <p>Estimerad tid: {totalEstimate} timmar. </p>
                <p>Faktisk tid: {totalReal} timmar. </p>
                <p>Diff: {totalDiff} timmar.</p>
            </section>
        </>
    );
};

export default TotalSummary;
