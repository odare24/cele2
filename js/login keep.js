/Login function


    document.addEventListener("deviceready", onDeviceReady, false);
   //$(document).ready(function()
    
    function onDeviceReady(){
      $("#login").click(function(){ $("#login").click(function(){
        var username = $("#username").val();
        var password = $("#password").val();
        var dataString = "username="+username+"&password="+password+"&insecure=cool";
        $.ajax({
            type: "POST",
            url:"http://celebvibe.com/api/user/generate_auth_cookie/?",
            data: dataString,
            crossDomain: true,
            cache: false,
            success: function(data){             
            (JSON.stringify(data));
            console.log(data);
            mystatus = data.status
            console.log(mystatus);

           if (mystatus == "ok"){
              console.log("you are logged in")
            window.location.href = "http://celebvibe.com/#login"
            toupload(mystatus);

          }
            else
           {console.log("Login failed")}

            }

        });
      });


   //}


var uploadPostsBtn = document.getElementById("uploadpost-btn");
  
if (uploadPostsBtn){
uploadPostsBtn.addEventListener("click", function () {

  if (mystatus=="ok")
    {window.location = "upload.html"
}

    else  {
        window.location = "login.html"

      }
    });
  }


        var username = $("#username").val();
        var password = $("#password").val();
        var dataString = "username="+username+"&password="+password+"&insecure=cool";
        $.ajax({
            type: "POST",
            url:"http://celebvibe.com/api/user/generate_auth_cookie/?",
            data: dataString,
            crossDomain: true,
            cache: false,
            success: function(data){             
            (JSON.stringify(data));
            console.log(data);
            mystatus = data.status
            console.log(mystatus);

           if (mystatus == "ok"){
              console.log("you are logged in")
            window.location.href = "http://celebvibe.com/#login"
            toupload(mystatus);

          }
            else
           {console.log("Login failed")}

            }

        });
      });


    };


var uploadPostsBtn = document.getElementById("uploadpost-btn");
  
if (uploadPostsBtn){
uploadPostsBtn.addEventListener("click", function () {

  if (mystatus=="ok")
    {window.location = "upload.html"
}

    else  {
        window.location = "login.html"

      }
    });
  }




login script


<script type="text/javascript">
    document.addEventListener("deviceready", onDeviceReady, false);
   //$(document).ready(function()
    
    function onDeviceReady(){
      $("#login").click(function(){
        var username = $("#username").val();
        var password = $("#password").val();
        var dataString = "username="+username+"&password="+password+"&insecure=cool";
        $.ajax({
            type: "POST",
            url:"http://celebvibe.com/api/user/generate_auth_cookie/?",
            data: dataString,
            crossDomain: true,
            cache: false,
            success: function(data){             
            (JSON.stringify(data));
            console.log(data);
            var mystatus = data.status
            console.log(mystatus);

           if (mystatus == "ok"){
              console.log("you are logged in")
            window.location.href = "http://celebvibe.com/#login"

          }
            else
           {console.log("Login failed")}

            }

        });
      });
    };
  </script>