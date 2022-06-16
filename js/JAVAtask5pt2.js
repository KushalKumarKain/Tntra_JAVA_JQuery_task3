
// let f_name = localStorage.getItem('f_name');
// let l_name = localStorage.getItem('l_name');
// let adressline1 = localStorage.getItem('adressline1');
// let adressline2 = localStorage.getItem('adressline2');
// let city = localStorage.getItem('city');
// let state = localStorage.getItem('state');
// let code = localStorage.getItem('code');
// let nume = localStorage.getItem('nume');
// let email = localStorage.getItem('email');
// let feedback = localStorage.getItem('feedback');
// let suggestions = localStorage.getItem('suggestions');
// let gender = localStorage.getItem('gender');

// $('#myTable #displayarea').append('<tr class="child"><td>' 
//   + '</td><td>' + f_name + '</td><td>' + l_name + '</td><td>' 
//   + addressline1 + '</td><td>' + addressline2 + '</td><td>' + city + '</td><td>'
//   + state + '</td><td>' + postal + '</td><td>' + nume + '</td><td>' 
//   + email +'</td><td>' + dropdown + '</td><td>' + feedback + '</td><td>' 
//   + suggestions + '</td><td>' + gender + '</td></tr>')

$(document).ready(function() {
  loadData();
});

function loadData() {
  $('#myTable').append('<tr><td>' 
  + localStorage.count + '</td><td>'
  + localStorage.fname + '</td><td>'
  + localStorage.lname + '</td><td>'
  + localStorage.add1 + '</td><td>'
  + localStorage.add2 + '</td><td>'
  + localStorage.city1 + '</td><td>'
  + localStorage.state1 + '</td><td>'
  + localStorage.postal1 + '</td><td>'
  + localStorage.phone + '</td><td>'
  + localStorage.mail + '</td><td>'
  + localStorage.choose + '</td><td>'
  + localStorage.feedback1 + '</td><td>'
  + localStorage.suggestion1 + '</td><td>'
  + localStorage.recommend1 + '</td><td>'
  + localStorage.gender1 + 
  '</td><td><a href="javascript:void(0);" class="rem">Remove</a></td></tr>');

$(document).on('click','.rem',function(){
$(this).parent().parent().remove();
$('#myTable tbody tr').each(function(i){           
  $($(this).find('td')[0]).html(i+1);          
 });
});
}