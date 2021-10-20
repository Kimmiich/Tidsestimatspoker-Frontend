const checkIfNumber = (estimates) => {

  return estimates.every(estimate => typeof estimate == "number")
}

export default checkIfNumber;