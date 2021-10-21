//Saves actaul time in database
const saveActualTime = (actualTime, issue) => {
    fetch('https://timeestimator.herokuapp.com/setactualtime', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({time: actualTime, issueName: issue.issueName}),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log('data', data);
    })
    .catch((err) => console.log(err));
}


export default saveActualTime;