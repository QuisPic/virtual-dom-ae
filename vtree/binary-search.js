module.exports = function(haystack, needle, comparator) {
  if (haystack === undefined) {
    return -1
  }

  var mid, cmp;
  var low = 0;
  var high = haystack.length - 1;

  while(low <= high) {
    mid = low + ((high - low) >>> 1);
    cmp = +comparator(haystack[mid], needle, mid, haystack);

    if(cmp < 0.0)
      low  = mid + 1;

    else if(cmp > 0.0)
      high = mid - 1;

    else
      return mid;
  }

  return ~low;
}