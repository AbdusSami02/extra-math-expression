//task 1
document.write('<h1>Task1</h1>')
let a = 10
document.write( "value of a = ",a);
document.write('<br>');
document.write(" value of ++a= ",++a);
document.write('<br>');
document.write( " Now value of a =",a);
document.write('<br>');
document.write('<b>---------------------------</b>');
document.write('<br>');
document.write(" value of a++= ",a++);
document.write('<br>');
document.write( " Now value of a = ",a);
document.write('<br>');
document.write('<b>---------------------------</b>');
document.write('<br>');
document.write(" value of --a= ",--a);
document.write('<br>');
document.write( " Now value of a = ",a);
document.write('<br>');
document.write('<b>---------------------------</b>');
document.write('<br>');
document.write(" value of a--= ",a--);
document.write('<br>');
document.write( " Now value of a = ",a);
//task 2
document.write('<h1>Task2</h1>')
var input = prompt('Enter your name ')
document.write("Asslamualikum ",input)
//task3
// var userSubjectInput1 = prompt("Enter your 1 favorite subject");
// var userSubjectInput2 = prompt("Enter your 2 favorite subject");
// var userSubjectInput3 = prompt("Enter your 3 favorite subject");
// var obtainedMarks1 = +prompt(E`nter your ${userSubjectInput1} obtained marks`);
// var obtainedMarks2 = +prompt(`Enter your ${userSubjectInput2} obtained marks`);
// var obtainedMarks3 = +prompt(`Enter your ${userSubjectInput3} obtained marks`);
// var totalNumber = 100;

// document.write(`
// <table border="1">
// <tr>
// <th>Subject</th> <th>Total Marks</th> <th>Obatined Marks</th> <th>Percentage</th>
// </tr>
// <tr>
// <td>${userSubjectInput1} </td><td> ${totalNumber} </td><td> ${obtainedMarks1} </td><td> ${
//   (obtainedMarks1 / totalNumber) * 100
// }%</td>
// </tr>
// <tr>
// <td>${userSubjectInput2} </td><td> ${totalNumber} </td><td> ${obtainedMarks2} </td><td> ${
//   (obtainedMarks2 / totalNumber) * 100
// }%</td>
// </tr>
// <tr>
// <td>${userSubjectInput3} </td><td> ${totalNumber} </td><td> ${obtainedMarks3} </td><td> ${
//   (obtainedMarks3 / totalNumber) * 100
// }%</td>
// </tr>
// <tr>
// <td></td><th> ${totalNumber * 3} </th><th> ${
//   obtainedMarks3 + obtainedMarks1 + obtainedMarks2
// } </th><th> ${
//   (obtainedMarks1 + obtainedMarks2 + obtainedMarks3 / 300) * 100
// }%</th>
// </tr>
// </table>`);