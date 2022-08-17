function firstUniqChar(s: string): number {
    for (let x = 0; x < s.length; ++x) { if (s.indexOf(s[x]) === s.lastIndexOf(s[x])) { return x }  }
    return -1
  }