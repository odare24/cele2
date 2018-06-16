//var portfolioPostsBtn = document.getElementById("portfolio-posts-btn");
    
document.addEventListener("deviceready", onDeviceReady, false);
  // $(document).ready(function()
    
    //


      //$("#login").click(function(){
      //  var username = $("#username").val();



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
            window.location.href = "index.html"

          }
            else
           {console.log("Login failed")}

            }

        }

        );
      }

      );
    }
