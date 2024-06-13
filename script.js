function countCharacters(string) {

 
    const charCount = {};
    for (let char of string) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
  }
  
  
  const text = "hello world";
  const charCounts = countCharacters(text);
  console.log(charCounts);
  