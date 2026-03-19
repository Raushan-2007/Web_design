let n1 = Number(prompt("Enter the first Number"));
let n2 = Number(prompt("Enter the second Number"));
let msg;
if(isNaN(n1) || isNaN(n2)) msg="Enter a valid number";
else if(n1>n2) msg = `${n1} is greater than ${n2}`;
else if(n2>n1)  msg = `${n2} is greater than ${n1}`;
else msg = ` Both ${n1} and ${n2} are Equal`;
document.body.innerHTML=`<h1>${msg}</h1>`;