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