import { min, max, median, average } from '../helperFunctions/calculations'

// //Testsiffror
// let array: number[] = [1, 5, 14, 4, 5]

interface Props {
  array?: any
}

const Summary = (props: Props) => {

  const { array } = props;

  const minVal = min(array)
  const maxVal = max(array)
  const medianVal = median(array)
  const averageVal = average(array)

  return (
    <table>
      <tbody>
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
      </tbody>
    </table>

  )
}

export default Summary
