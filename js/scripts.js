var str = 'test';
console.log(str);
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = maleNames.concat(femaleNames);

console.log(allNames);

var newName = 'Maja';

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
    alert(allNames);
    console.log(allNames);
}

console.log(allNames[3]);
console.log(allNames.length);

var txt = 'Example';

console.log(txt.charAt(1));

var motto = 'Good friends are loyal people';
partOfMotto = motto.slice(-12,-5);

console.log(partOfMotto);

var motto = 'The rest is silence';
var mottoCharsAfter = motto.substr(12, 8);

console.log(mottoCharsAfter);

