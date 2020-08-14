function removeDups(input){
    let unique = new Set();

    let i = 0;

    for(i; i<input.length; i++){
      unique.add(input[i]);
    }

    return Array.from(unique);
}
