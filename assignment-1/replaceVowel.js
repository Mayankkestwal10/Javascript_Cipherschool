function replaceVowel(word){
  d = {
    'a':'1',
    'e':'2',
    'i':'3',
    'o':'4',
    'u':'5'
  }
  let i = 0
  for(i; i<word.length; i++){
    if('aeiou'.includes(word[i])){
      word = word.substring(0,i)+d[word[i]]+word.substring(i+1);
    }
  }

  return word;
}