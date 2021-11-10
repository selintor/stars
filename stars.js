
let a = 10; 
let string2 = "";
let string3 = "";

for (let i = 0; i < a-1; i++) {
 for(let b=a; b>i; b--){
    string2 += "* ";
  }
  for (let j = 0; j < i ; j++) {
    string2 += "    ";
  }
  for (let k = a; k>i; k--) {
    string2 += "* ";
  }
  
  string2 += "\n"; 
}
  for (let i = 2; i <= a; i++) {
    for(let c=1; c<=i; c++){
    string2 += "* "
    }
    for (let j = 0; j < a - i; j++) {
      string2 += "    ";
    }
    for (let k = 0; k < i; k++) {
      string2 += "* ";
    }
    i != a ? string2 += "\n" : string2 += '';
} 
console.log(string2);
console.log(string3);

  

