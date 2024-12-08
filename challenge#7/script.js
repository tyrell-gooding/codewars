// question 7

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
//a = "xyaabbbccccdefww"
///b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  // your code
  const combine = s1 + s2;
  const letters = new Set(combine);
  const longest = Array.from(letters).sort();
  return longest.join("");
}

// i liked this question cause i find sorting thing satisfying. it took a while to complete and was one of the harder questions i solved.
