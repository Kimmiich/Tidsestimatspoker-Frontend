import {min, max, median, average} from '../helperFunctions/calculations'

// import MyExampleFunction from "../helperFunctions/exampleFunction"
//Importera helperfunctions för:
// - Uppdatera siffrorna

// //Testsiffror
let array: number[] = [1, 5, 14, 4, 5]

interface Props {
  minVal: number 
  maxVal: number 
  medianVal: number 
  averageVal: number
}

const Summary = (props: Props) => {
  props.minVal = min(array)
  props.maxVal = max(array)
  props.medianVal = median(array)
  props.averageVal = average(array)

  return (
    <table style={{textAlign:"center"}}>
  <tr>
    <th>Min</th>
    <th>Max</th>
    <th>Median</th>
    <th>Medel</th>
  </tr>
  <tr>
    <td>{props.minVal}h</td>
    <td>{props.maxVal}h</td>
    <td>{props.medianVal}h</td>
    <td>{props.averageVal}h</td>
  </tr>
</table>
     
  )
}

export default Summary
