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
    $("#submitbtn").on('click', function() {
      localStorage.count = $('#myTable tr').length;
      localStorage.fname = $('#f_name').val();
      localStorage.lname = $('#l_name').val();
      localStorage.add1 = $('#addressline1').val();
      localStorage.add2 = $('#addressline2').val();
      localStorage.city1 = $('#city').val();
      localStorage.state1 = $('#state').val();
      localStorage.postal1 = $('#postal').val();
      localStorage.phone = $('#nume').val();
      localStorage.mail = $('#email').val();
      localStorage.choose = $('#dropdown').val();
      localStorage.feedback1 = $('#feedback').val();
      localStorage.suggestion1 = $('#suggestions').val();
      localStorage.recommend1 = $('#recommend').val();
      localStorage.gender1 = $('input[name="gender"]:checked').val();
    });
  

    $("#clearbtn").on('click',function formClear() {
      $("#f_name").val("");
      $("#l_name").val("");
      $("#addressline1").val("");
      $("#addressline2").val("");
      $("#city").val("");
      $("#state").val("");
      $("#postal").val("");
      $("#nume").val("");
      $("#email").val("");
      $("#feedback").val("");
      $("#suggestions").val("");
      $("input[name='recommended']").prop("checked",false);
      $("input[name='gender']").prop("checked",false);
    });