function specialReverse(sentence, special){
  let wordList = sentence.split(" ");

  let i = 0

  for(i; i<wordList.length; i++){
      if(wordList[i][0]===special){
        wordList[i] = wordList[i].split('').reverse().join('')
      }
  }
  
  return wordList.join(' ');
}