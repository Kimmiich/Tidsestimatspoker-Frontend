const API_URL = 'https://timeestimator.herokuapp.com/estimate';

//Accepts a object with inputvalue and userName/id?
const saveInput = (obj) => {
    console.log(obj);
    fetch(API_URL, {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(obj),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log('data', data);
        })
        .catch((err) => console.log(err));
};

export default saveInput;
