function getArrayOfActuals(issues) {
let arrayOfActuals = [];

issues.forEach(issue => {
  if(issue.actualTime){
    arrayOfActuals.push(issue.actualTime)
  }
  return;
})

return arrayOfActuals;

}
export default getArrayOfActuals;
