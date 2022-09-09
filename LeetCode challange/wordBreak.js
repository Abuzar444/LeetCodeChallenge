var wordBreak = function (s, wordDict) {
    let set = new Set();
    let maxWordLength = 0;
    let dp = {};

    for (let word of wordDict) {
        set.add(word);
        maxWordLength = Math.max(word.length, maxWordLength);
    }

    for (let i = 0; i < s.length; i++) {
        let curWord = '';

        // We to start a segment from the end of the last word that can be created
        // apple - ...
        // applepen - ...
        if (i === 0 || dp[i - 1]) {
            for (let j = i; j < s.length; j++) {
                curWord += s[j];

                // No point going further if all the words are too small
                if (curWord.length > maxWordLength) break;
                if (set.has(curWord)) dp[j] = true;
            }
        }
    }

    return !!dp[s.length - 1];
}
console.log(wordBreak('leet', ["leet", "code"]));
//expected output true