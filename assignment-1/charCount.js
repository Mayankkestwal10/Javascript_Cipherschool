function charCount(ch, sentence){
  let count = 0
  let init = 0
  while(init<sentence.length){
    if(ch===sentence[init]){
      count++;
    }
      init++;
  }