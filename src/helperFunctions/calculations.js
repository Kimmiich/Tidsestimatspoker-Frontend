// Det mittersta värdet av en sorterad lista
export const median = (array) => {
  const mid = Math.floor(array.length / 2),
    nums = [...array].sort((a, b) => a - b);
  return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

// Medelvärdet
export const average = (array) => {
  return array.reduce((a, b) => a + b, 0) / array.length
}

//Maxvärdet
export const max = (array) => {
  return Math.max(...array)
}

//Minvärdet
export const min = (array) => {
  return Math.min(...array)
}