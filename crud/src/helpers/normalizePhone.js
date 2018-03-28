const normalizePhone = value => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 4) {
    return onlyNums
  }
  if (onlyNums.length <= 8) {
    return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4)}`
  }
  if (onlyNums.length <= 9) {
    return `${onlyNums.slice(0, 1)} ${onlyNums.slice(1, 5)}-${onlyNums.slice(5, 9)}`
  }
  if (onlyNums.length <= 10) {
    return `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2, 6)}-${onlyNums.slice(6,10)}`
  }
  return `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2, 3)} ${onlyNums.slice(3, 7)}-${onlyNums.slice(7, 11)}`
}

export default normalizePhone