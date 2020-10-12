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
     || (aType === 'object' && !isSameArray(aVal, bVal))
     || aVal !== bVal) {
      return false
    }
  }
   
  return true
}

module.exports = isSameArray