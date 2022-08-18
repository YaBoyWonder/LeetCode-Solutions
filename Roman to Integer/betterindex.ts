const m = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }

function romanToInt(s: string): number {
    let sum: number = 0;
    for (let i: number = 0; i < s.length; i += 1) {
        sum += (m[s[i+1]] > m[s[i]] ? -(m[s[i]]) : m[s[i]]);
    }
    return sum;
};