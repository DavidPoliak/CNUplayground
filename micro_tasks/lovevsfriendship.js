const wordsToMarks = input => Array.from(input, char => char.charCodeAt(0)-96)
                              .reduce((a,c) => a+c)