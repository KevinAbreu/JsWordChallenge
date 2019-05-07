function swap(str){
  let rev = "";
  for (var i = str.length - 1; i >= 0; i--){
    rev += str[i];
  }
  return rev;
}

swap("Hello")
