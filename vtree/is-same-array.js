function isSameArray(a, b) {
  if (!a || !b) {
    return false
  }

  const lenA = a.length
  const lenB = b.length

  if (lenA !== lenB || !lenA || !lenB) {
    return false
  }

  for (let i = 0; i < lenA; i++) {
    const aVal = a[i]
    const bVal = b[i]
    const aType = typeof aVal
    const bType = typeof bVal

    if (aType !== bType
     || (aType === 'object' && !isSameArr(aVal, bVal))
     || a[i] !== b[i]) {
      return false
    } 
  }
   
  return true
}

module.exports = isSameArray