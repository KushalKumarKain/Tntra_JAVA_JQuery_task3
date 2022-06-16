
let f_name = localStorage.getItem('f_name');
let l_name = localStorage.getItem('l_name');
let adressline1 = localStorage.getItem('adressline1');
let adressline2 = localStorage.getItem('adressline2');
let city = localStorage.getItem('city');
let state = localStorage.getItem('state');
let code = localStorage.getItem('code');
let nume = localStorage.getItem('nume');
let email = localStorage.getItem('email');
let feedback = localStorage.getItem('feedback');
let suggestions = localStorage.getItem('suggestions');
let gender = localStorage.getItem('gender');

$('#myTable #displayarea').append('<tr class="child"><td>' 
  + '</td><td>' + f_name + '</td><td>' + l_name + '</td><td>' 
  + addressline1 + '</td><td>' + addressline2 + '</td><td>' + city + '</td><td>'
  + state + '</td><td>' + postal + '</td><td>' + nume + '</td><td>' 
  + email +'</td><td>' + dropdown + '</td><td>' + feedback + '</td><td>' 
  + suggestions + '</td><td>' + gender + '</td></tr>')

 