let a = 8, b = 5, c = -4;
let D = b * b - 4 * a * c;

if (D < 0)
  console.log ("NO")
else:{
 let x1 = (-b + Math. sqrt(D)) / (2 * a)
 let x2 = (-b - Math.sqrt(D))/ (2 * a)
     alert('x1=' +x1);
     alert('x2=' +x2);
}


