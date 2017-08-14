var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = maleNames.concat(femaleNames);

console.log(allNames);

var newName = 'Maja';

if (allNames.indexOf(newName) === -1) {
    var newName = allNames.push(newName);
    alert(allNames);
    console.log(allNames);
}

