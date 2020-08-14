function testJackpot(input){
    let jackpot = new Set();

    let i = 0;

    for(i; i<input.length; i++){

      jackpot.add(input[i]);

    }

    if(jackpot.size==1){
      return true;
    }

    return false;
}

function numInStr(arr){
  let i = 0;
  let res = []
  for(i;i<arr.length;i++){
    for(let j=0; j<arr[i].length; j++){
      if('0123456789'.includes(arr[i][j])){
        res.push(arr[i]);
        break;
      }
    }
  }
  return res;
}