
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
      nume : {
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
        lettersonly : "Enter only alphabets",

      },
      postal : {
        required : "This is required",
        Number : "Enter only number",
        min : "Enter only 6 digits"
      },
      nume : {
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
        required : "This is required",
      },
      suggestions : {
        required : "This is required",
      },
      gender : {
        required : "This is required"
      }

      
    }
  });
});