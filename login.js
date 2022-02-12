
$(document).ready(function (e) {
  $("#form").submit(function (e) {
    if (!validatedata(myDisplayer)) {
      e.preventDefault();
    }
  });

  myDisplayer = (msg, status) => {
    $('#submitresult').html(msg);
    if (status) {
      $('#submitresult').css("background-color", "green");
      $('#submitresult').css("color", "white");
      console.log($('#form'));
      $('#form').attr('action', 'home.html');
      // $('#form').submit(); 
      return true;
    }
    else {
      $('#submitresult').css("background-color", "red");
      $('#submitresult').css("color", "white");
      return false;
    }

  }

  validatedata = (myCallback) => {
    var username = $('#username').val();
    var password = $('#password').val();
    //console.log(username);
    if (username === "admin" && password === "12345") {
      return myCallback("Username and password valid!!!", true);

    }
    else {
      return myCallback("Username and password not valid!!!", false);
    }
  }
});