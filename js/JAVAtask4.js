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



$('#submitbtn').on('click', function() {
  var first_name = $('#f_name').val();
  var last_name = $('#l_name').val();
  var addline1 = $('#addressline1').val();
  var addline2 = $('#addressline2').val();
  var city_name = $('#city').val();
  var state_name = $('#state').val();
  var zip_add = $('#postal').val();
  var phone_1 = $('#nume').val();
  var email = $('#email').val();
  var choose = $('#dropdown').val();
  var feedback_1 = $('#feedback').val();
  var suggestions_1 = $('#suggestions').val();
  var gender_1 = $('input[name = gender]').val();
  var count = $('#myTable tr').length;
  
  if(first_name != "" && last_name != "" && addline1 != "" 
  && addline2 != "" && city_name != "" && state_name != "" 
  && zip_add != "" && phone_1!= "" && email != "" && email != "" 
  && choose != "" && feedback_1 != "" && suggestions_1 != "" 
  && gender_1 != "")
  // if($('#f_name').valid() === true )
  // if($('#_name').valid() === true )
  // if($('#addressline1').valid() === true )
  // if($('#addressline2').valid() === true )
  // if($('#city').valid() === true )
  // if($('#state').valid() === true )
  // if($('#postal').valid() === true )
  // if($('#nume').valid() === true )
  // if($('#email').valid() === true )
  // if($('#dropdown').valid() === true )
  // if($('#feedback').valid() === true )
  // if($('#suggestions').valid() === true )
  // if($('[name=gender]').valid() === true )


  {
  $('#myTable tbody').append('<tr class="child"><td>' + count 
  + '</td><td>' + first_name + '</td><td>' + last_name + '</td><td>' 
  + addline1 + '</td><td>' + addline2 + '</td><td>' + city_name + '</td><td>'
  + state_name + '</td><td>' + zip_add + '</td><td>' + phone_1 + '</td><td>' 
  + email +'</td><td>' + choose + '</td><td>' + feedback_1 + '</td><td>' 
  + suggestions_1 + '</td><td>' + gender_1 + '</td></tr>');
  }

  });

  $('#myTable tbody tr').each(function(i){           
   $($(this).find('td')[0]).html(i+1);          
  });

  $("#form").submit(function(event){
    event.preventDefault();
  })

