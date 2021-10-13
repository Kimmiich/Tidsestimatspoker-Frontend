// import MyExampleFunction from "../helperFunctions/exampleFunction"
//Importera helperfunctions för:
// - Uppdatera siffrorna

//Testsiffror
const array: number[] = [1, 5, 14, 4, 5]

// Det mittersta värdet av en sorterad lista
const median = (array:number[]) => {
  const mid = Math.floor(array.length / 2),
    nums = [...array].sort((a, b) => a - b);
  return array.length % 2 !== 0 ? nums[mid] : (nums[mid-1] + nums[mid])/2
}

// Medelvärdet
const average = (array: number[]) => {
  return array.reduce((a,b) => a+b,0) / array.length
}

//Maxvärdet
const max = (array:number[]) => {
 return Math.max(...array)
}

//Minvärdet
const min = (array:number[]) => {
 return Math.min(...array)
}

// console.log("median: ",median(array));
// console.log("average: ",average(array));
// console.log("max: ",max(array));
// console.log("min: ", min(array));

const minVal: number = min(array);
const maxVal: number = max(array);
const medianVal: number = median(array);
const averageVal: number = average(array);


const Summary = () => {
  return (
    <table style={{textAlign:"center"}}>
  <tr>
    <th>Min</th>
    <th>Max</th>
    <th>Median</th>
    <th>Medel</th>
  </tr>
  <tr>
    <td>{minVal}h</td>
    <td>{maxVal}h</td>
    <td>{medianVal}h</td>
    <td>{averageVal}h</td>
  </tr>
</table>
     
  )
}

export default Summary
