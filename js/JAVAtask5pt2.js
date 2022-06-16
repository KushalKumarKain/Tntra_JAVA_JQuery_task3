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
  '</td><td><a href="javascript:void(0);" class="rem">Remove</a></td>' + 
  '<td><a href="" class="edit">Edit</a></td></tr>');

$(document).on('click','.rem',function(){
$(this).parent().parent().remove();
$('#myTable tbody tr').each(function(i){           
  $($(this).find('td')[0]).html(i+1);          
 });
});
$(document).on('click','.edit',function(event){
  event.preventDefault();
  var url = window.history.go(-1);
  $(".edit").attr('href',url);
  $('#myTable tbody tr').each(function(i){           
    $($(this).find('td')[0]).html(i+1);          
   });
  });
}