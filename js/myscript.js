$(document).ready(function(){


    $("#myBtn-register").click(function(){
        $("#myModal-register").modal();
    });
    $("#myBtn-login").click(function(){
        $("#myModal-login").modal();
    });
    


    $("#opener-register").click(function(){
        
        var email = $("#register-email").val();
        var password = $("#register-password").val();
    
        var ref = new Firebase("https://resplendent-torch-6055.firebaseio.com/");

        ref.createUser({
            email: email,
            password: password
        }, function(error, userData){
            if(error){
                console.log("Error creating user:", error);
            } else {
                console.log("successful:", userData.uid);
                window.location.href="http://april-ma.com/practice/index.html";
            }
        });
        return false;
    }); 

$("#opener-login").click(function(){
      
        var email = $("#login-email").val();
        var password = $("#login-password").val();
    
        var ref = new Firebase("https://resplendent-torch-6055.firebaseio.com/");

        ref.authWithPassword({
          email    : email,
          password : password
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
            window.location.href="http://april-ma.com/practice/index.html";
          }
        });
        return false;
    });

    $("#opener-logout").click(function() {

        var ref = new Firebase("https://resplendent-torch-6055.firebaseio.com/");
        ref.unauth();

        window.location.href="http://april-ma.com/practice/index.html";
        alert("already logged out!");
    });


    

});
//search
$(function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });











