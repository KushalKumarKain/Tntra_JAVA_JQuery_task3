
$(document).ready(function(){
  $("#form").validate({
    rules:{
      f_name :{
        required: true,
        lettersonly : true,
        min : 3
      },
      l_name : {
        required : true,
        lettersonly : true,
        min : 3
      },
      addressline1 : {
        required : true,
        min : 10
      },
      addressline2 : {
        required : true,
        min : 5
      },
      city : {
        required : true,
        lettersonly : true,
        min :3
      },
      state : {
        required : true,
        lettersonly : true,
        min : 3
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
        required : true,
        min : 15
      },
      suggestions : {
        required : true,
        min : 15
      },
      gender : {
        required : true
      }
    },
    messages : {
      f_name : {
        required : "This is required",
        lettersonly : "Enter only alphabets",
        min : "First name should be grater than 2 alphabets"
      },
      l_name : {
        required : "This is required",
        lettersonly : "Enter only alphabets",
        min : "Last name should be grater than 2 alphabets "
      },
      addressline1 : {
        required : "This is required",
        min : "Address can not be less than 10 characters"
      },
      addressline2 : {
        required : "This is required",
        min : "Address can not be less than 10 characters"
      },
      city : {
        required : "This is required",
        lettersonly : "Enter only alphabets",
        min: "City name cannot be less than 3 characters"
      },
      state : {
        required : "This is required",
        lettersonly : "Enter only alphabets",
        min : "State name can not be less than 3 characters"
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
        min : "Feedback cannot be less than 15 characters"
      },
      suggestions : {
        required : "This is required",
        min : "Suggestions cannot be less than 10 characters"
      },
      gender : {
        required : "This is required"
      }

      
    }
  });
});