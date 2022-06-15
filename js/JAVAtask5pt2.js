$(document).ready(function(){

  $("#form").validate({
    rules:{
      f_name :{
        required: true,
        lettersonly : true
      },
      l_name : {
        required : true,
        lettersonly : true
      },
      addressline1 : {
        required : true
      },
      addressline2 : {
        required : true
      },
      city : {
        required : true,
        lettersonly : true
      },
      state : {
        required : true,
        lettersonly : true
      },
      postal : {
        required : true,
        Number : true,
        min : 6
      },
      phone : {
        required : true,
        Number : true,
        min : 10
      },
      email : {
        required : true,
      },
      dropdown : {
        required : true
      },
      feedback : {
        required : true
      },
      suggestions : {
        required : true
      },
      gender : {
        required : true
      }
    },
    messages : {
      f_name : {
        required : "This is required",
        lettersonly : "Enter only alphabets",
      },
      l_name : {
        required : "This is required",
        lettersonly : "Enter only alphabets"
      },
      addressline1 : {
        required : "This is required"
      },
      addressline2 : {
        required : "This is required"
      },
      city : {
        required : "This is required",
        lettersonly : "Enter only alphabets"
      },
      state : {
        required : "This is required",
        lettersonly : "Enter only alphabets"
      },
      postal : {
        required : "This is required",
        Number : "Enter only number",
        min : "Enter only 6 digits"
      },
      phone : {
        required : "This is required",
        Number : "Enter only number",
        min : "Enter only 10 digits"
      },
      email : {
        required : "This is required"
      },
      dropdown : {
        required : "This is required"
      },
      feedback : {
        required : "This is required"
      },
      suggestions : {
        required : "This is required"
      },
      gender : {
        required : "This is required"
      }

      
    }
  });
});



$('#form').submit(function(event) {
  event.preventDefault();
  let first_name = $('#f_name').val();
  let last_name = $('#l_name').val();
  let addline1 = $('#addressline1').val();
  let addline2 = $('#addressline2').val();
  let city_name = $('#city').val();
  let state_name = $('#state').val();
  let zip_add = $('#postal').val();
  let phone_1 = $('#nume').val();
  let email = $('#email').val();
  let choose = $('#dropdown').val();
  let feedback_1 = $('#feedback').val();
  let suggestions_1 = $('#suggestions').val();
  let gender_1 = $('input[name = gender]').val();
  let count = $('#myTable tr').length;
  
  // if(first_name != "" && last_name != "" && addline1 != "" 
  // && addline2 != "" && city_name != "" && state_name != "" 
  // && zip_add != "" && phone_1!= "" && email != "" && email != "" 
  // && choose != "" && feedback_1 != "" && suggestions_1 != "" 
  // && gender_1 != "")
  if($('#f_name').valid() &&
  $('#_name').valid() &&
  $('#addressline1').valid() &&
  $('#addressline2').valid() &&
  $('#city').valid() &&
  $('#state').valid() &&
  $('#postal').valid() &&
  $('#nume').valid() &&
  $('#email').valid() &&
  $('#dropdown').valid() &&
  $('#feedback').valid() &&
  $('#suggestions').valid() &&
  $('input[name=gender]:checked') != undefined )

  {
  window.localStorage.setItem("f_name",$('$f_anme').val());
  window.localStorage.setItem("l_name",$('$l_anme').val());
  window.localStorage.setItem("adressline1",$('$adressline1').val());
  window.localStorage.setItem("adressline2",$('$adressline2').val());
  window.localStorage.setItem("city",$('$city').val());
  window.localStorage.setItem("state",$('$state').val());
  window.localStorage.setItem("postal",$('$postal').val());
  window.localStorage.setItem("nume",$('$nume').val());
  window.localStorage.setItem("email",$('$email').val());
  window.localStorage.setItem("dropdown",$('$dropdown').val());
  window.localStorage.setItem("feedback",$('$feedback').val());
  window.localStorage.setItem("suggestions",$('$suggestions').val());
  window.localStorage.setItem("gender",$('input[type=radio][name=gender]:checked').val());
    location.href="../html/JAVA_task5pt2.html"
  }

  });

  
