// Device Event Listener
document.addEventListener("deviceready", onDeviceReady, false);

var portfolioPostsBtn = document.getElementById("portfolio-posts-btn");
var portfolioPostsContainer = document.getElementById("portfolio-posts-container");


function onDeviceReady(){
    
   var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://celebvibe.com/wp-json/wp/v2/posts?_embed');
    ourRequest.onload = function() {
      if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var data = JSON.parse(ourRequest.responseText);
        createHTML(data);
        console.log(data);
       // portfolioPostsBtn.remove();
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest.onerror = function() {
      console.log("Connection error");
    };

    ourRequest.send();
  
}



function createHTML(postsData) {
  var ourHTMLString = '';
  
  for (i = 0; i < postsData.length; i++) {
  
    var posturl = postsData[i].link   
    ourHTMLString +='<tr>';
    ourHTMLString += '<td>' + '<a href="' + posturl + '" style="text-decoration:none">'  + postsData[i].title.rendered + '</a>'+'</td>';
    ourHTMLString += '<td>' + '<a href="' + posturl + '"><img width="100%" src ="' + postsData[i]._embedded['wp:featuredmedia']['0'].source_url + '"  />' + '</a>'+'</td>';
    ourHTMLString += '<td>' + postsData[i].excerpt.rendered + '</td>';
    //ourHTMLString += '<td>' + posturl + '</td>';
    
    ourHTMLString += '</tr>';

    }

     portfolioPostsContainer.innerHTML = ourHTMLString;
}

// Quick Add Post AJAX
var quickAddButton = document.querySelector("#quick-add-button");

if (quickAddButton) {
  quickAddButton.addEventListener("click", function() {
    var ourPostData = {
      "title": document.querySelector('.admin-quick-add [name="title"]').value,
      "content": document.querySelector('.admin-quick-add [name="content"]').value,
      "status": "publish"
    }

    var createPost = new XMLHttpRequest();
    createPost.open("POST", "http://www.celebvibe.com/wp-json/wp/v2/posts");
    createPost.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    createPost.send(JSON.stringify(ourPostData));
    createPost.onreadystatechange = function() {
      if (createPost.readyState == 4) {
        if (createPost.status == 201) {
          document.querySelector('.admin-quick-add [name="title"]').value = '';
          document.querySelector('.admin-quick-add [name="content"]').value = '';
        } else {
          alert("Error - try again.");
        }
      }
    }
  });
}



//Login function


 //document.addEventListener("deviceready", onDeviceReady, false);
// $(document).ready(function()  

     