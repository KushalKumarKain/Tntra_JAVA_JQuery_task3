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
  
    $("#submitbtn").on('click', function() {
      localStorage.name = $('#f_name').val();
      localStorage.lname = $('#l_name').val();
      console.log("data saved");
    });
  
//   $('#form').submit(function(event){
//     event.preventDefault();
    
//   if
//     (
//       $('#f_name').valid() &&
//       $('#_name').valid() &&
//       $('#addressline1').valid() &&
//       $('#addressline2').valid() &&
//       $('#city').valid() &&
//       $('#state').valid() &&
//       $('#postal').valid() &&
//       $('#nume').valid() &&
//       $('#email').valid() &&
//       $('#dropdown').valid() &&
//       $('#feedback').valid() &&
//       $('#suggestions').valid() &&
//       $('input[name=gender]:checked') != undefined
//     )
  
//   {
//     window.localStorage.setItem("f_name",$('$f_name').val());
//     window.localStorage.setItem("l_name",$('$l_name').val());
//     window.localStorage.setItem("adressline1",$('$adressline1').val());
//     window.localStorage.setItem("adressline2",$('$adressline2').val());
//     window.localStorage.setItem("city",$('$city').val());
//     window.localStorage.setItem("state",$('$state').val());
//     window.localStorage.setItem("postal",$('$postal').val());
//     window.localStorage.setItem("nume",$('$nume').val());
//     window.localStorage.setItem("email",$('$email').val());
//     window.localStorage.setItem("dropdown",$('$dropdown').val());
//     window.localStorage.setItem("feedback",$('$feedback').val());
//     window.localStorage.setItem("suggestions",$('$suggestions').val());
//     window.localStorage.setItem("gender",$('input[type=radio][name=gender]:checked').val());
//       window.location.href="../html/JAVA_task5pt2.html"
//   }
  
// });
});